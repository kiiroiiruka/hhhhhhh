// NI Komplete Kontrol MIDI Device Script
// Copyright (c) 2019 PreSonus Software Ltd.

// include SDK files from host
include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js")
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js")
include_file("KompleteKontrolProtocol.js")


//************************************************************************************************
// KompleteKontrolConfig class
//************************************************************************************************

function KompleteKontrolConfig()
{ }

KompleteKontrolConfig.kChannelCount = 8; // channels per bank

KompleteKontrolConfig.kVolumeParamMax = 1.0;
KompleteKontrolConfig.kVolumeParamMin = 0.0;

// check for little endianess
KompleteKontrolConfig.isLittleEndian = function ()
{
	return new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;
}


//************************************************************************************************
// SelectedTrackAvailableControlHandler
//************************************************************************************************

SelectedTrackAvailableControlHandler.prototype = new PreSonus.ControlHandler ()
function SelectedTrackAvailableControlHandler(name)
{
	this.name = name;
}

// value: type of available track (0..6), 0: unavailable
SelectedTrackAvailableControlHandler.prototype.sendValue = function (value, flags)
{
	// 1: available but unspecified (other types not yet supported)
	value = (value && value > 0) ? 1 : 0;
	this.device.sendMidi(0xBF, NI.kSelectedTrackAvailable, value);
}


//************************************************************************************************
// ChannelMessageControlHandler
//************************************************************************************************

ChannelMessageControlHandler.prototype = new PreSonus.ControlHandler ()
function ChannelMessageControlHandler(name, index, stateId)
{
	this.name = name + "[" + index + "]"; // must match control name from XML
	this.channelIndex = index; // track index: 0..7
	this.stateId = stateId; // sysex or cc message state ID according to NI spec
}


//************************************************************************************************
// TrackVolumeHandler
//************************************************************************************************

TrackVolumeControlHandler.prototype = new ChannelMessageControlHandler()
function TrackVolumeControlHandler(name, channelIndex, statusId)
{
	ChannelMessageControlHandler.call(this, name, channelIndex, statusId);
}


TrackVolumeControlHandler.prototype.sendValue = function (value, flags)
{
	let alignedValue = NI.scaleMeter(value, KompleteKontrolConfig.kVolumeParamMax, KompleteKontrolConfig.kVolumeParamMin);
	this.device.sendMidi(0xBF, this.stateId, alignedValue);
}


//************************************************************************************************
// TextChannelMessageControlHandler
//************************************************************************************************

TextChannelMessageControlHandler.prototype = new ChannelMessageControlHandler()
function TextChannelMessageControlHandler(name, channelIndex, statusId)
{
	ChannelMessageControlHandler.call(this, name, channelIndex, statusId);
}


TextChannelMessageControlHandler.strEndsWith = function (str, suffix)
{
	return str.match(suffix + "$") == suffix;
}


// unify display of volume with unit
TextChannelMessageControlHandler.formatVolumeText = function (value)
{
	// as received by host
	if(value == "0dB")
		return "0 dB";

	if(value != "-oo" && !TextChannelMessageControlHandler.strEndsWith(value, "dB"))
		return value + " dB";

	return value;
}


// send sysex with text value on change of controlled parameter
TextChannelMessageControlHandler.prototype.sendValue = function (value, flags)
{
	if(value == null)
		return;

	if(this.stateId == NI.kTrackVolumeText)
		value = TextChannelMessageControlHandler.formatVolumeText(value);

	this.device.sendSysexForValue(this.stateId, 0, this.channelIndex, value);
}


//************************************************************************************************
// TrackParameterControlHandler
//************************************************************************************************

TrackParameterControlHandler.prototype = new PreSonus.ControlHandler ()
function TrackParameterControlHandler()
{
	this.name = "TrackParameterControl";
}


TrackParameterControlHandler.prototype.sendValue = function (value, flags)
{
	if(value == null)
		return;

	// enables 'plugin' mode on device if value is 'NIBK[xx]', triggers 'MIDI' mode otherwise
	this.device.sendSysexForValue(NI.kSelectedTrackParametersChanged, 0, 0, value);
}


//************************************************************************************************
// NumberChannelMessageControlHandler
//************************************************************************************************

NumberChannelMessageControlHandler.prototype = new ChannelMessageControlHandler()
function NumberChannelMessageControlHandler(name, channelIndex, statusId)
{
	ChannelMessageControlHandler.call(this, name, channelIndex, statusId);
}


// send sysex with numeric value on change of controlled parameter
NumberChannelMessageControlHandler.prototype.sendValue = function (value, flags)
{
	if(value == null)
		if(this.stateId != NI.kTrackAvailable)
			return;
		else
			// required for track available parameter on song close
			value = 0;

	this.device.sendSysexForValue(this.stateId, value, this.channelIndex, null);
}


//************************************************************************************************
// MeterHandler
//************************************************************************************************

MeterHandler.prototype = new PreSonus.ControlHandler ();
function MeterHandler(name, channelIndex, meterBuffer)
{
	this.name = name; // example: 'TrackMeter[channel][L=0/R=1], must match control name from XML
	this.channelIndex = channelIndex;
	this.meterBuffer = meterBuffer; // buffer shared by all track meters
}


// send level meters on change of controlled level parameter
MeterHandler.prototype.sendValue = function (value, flags)
{
	var meterValue = NI.scaleMeter(value, KompleteKontrolConfig.kVolumeParamMax, KompleteKontrolConfig.kVolumeParamMin);
	if(meterValue == this.meterBuffer[this.channelIndex])
		return;

	// ensure that on retract to zero, the respective update is always processed
	// the device otherwise displays a hanging peak meter if the last updated is before
	// the next processing itnerval
	let declineToZero = (meterValue == 0) && (this.meterBuffer[this.channelIndex] > 0);

	this.meterBuffer[this.channelIndex] = meterValue;
	this.device.sendLevelMeters(this.meterBuffer, declineToZero);
}


//************************************************************************************************
// ValueSwitchReceiveHandler
// Manage controls that share the same address but send for different channels via different msg value
//************************************************************************************************

ValueSwitchReceiveHandler.prototype = new ChannelMessageControlHandler()
function ValueSwitchReceiveHandler(name, channelIndex, statusId)
{
	ChannelMessageControlHandler.call(this, name, channelIndex, statusId);
}


ValueSwitchReceiveHandler.prototype.receiveMidi = function (status, data1, data2)
{
	// wrong type of message
	if(data1 != this.stateId)
		return false;

	// value implies a different channel
	if(data2 != this.channelIndex)
		return false;

	// from testing: do not use value 0, will not trigger a param value toggle
	this.updateValue(1);
	return true;
}


//************************************************************************************************
// KompleteKontrolMidiDevice
//************************************************************************************************

KompleteKontrolMidiDevice.prototype = new PreSonus.ControlSurfaceDevice();
function KompleteKontrolMidiDevice()
{
	// wait for device to reply with 'hello' before sending any data
	this.handshakeCompleted = false;

	this.kLeftChannel = 0;
	this.kRightChannel = 1

	// meter update synchronisation
	this.lastMeterUpdateSentMs = 0; // keep track of last update
	this.meterUpdateIntervalMs = 40; // sync to ~30fps
	this.meterBuffer = new Uint8Array(KompleteKontrolConfig.kChannelCount * 2); // doubles due to L/R separation


	// send sysex for this device, overload to not access sendbuffer from outside
	this.sendSysexForValue = function (statusId, value, channelIndex, text)
	{
		this.sendSysex(NI.buildSysex(this.sysexSendBuffer, statusId, value, channelIndex, text));
	}


	/**
	 * send 'level meters' sysex
	 * number of messages are reduced by a framerate to not cause stress on the device
	 *
	 * from manual testing: without synchro and 8 active tracks, there are ~800 meter update
	 * messages per second otherwise.
	 *
	 * @param {levels} info: 1 byte (0..127) per channel for up to 8 tracks of the current bank,
	 *						 always starting from track 0, _not_ skipping empty tracky
	 */
	this.sendLevelMeters = function (levels, isDeclineToZero)
	{
		if(isDeclineToZero)
		{
			this.sendSysex(NI.buildSysexWithArray(this.sysexSendBuffer, NI.kLevelMeters, 2, 0, levels));
			return;
		}

		let now = Date.now ();
		if(now - this.lastMeterUpdateSentMs < this.meterUpdateIntervalMs)
			return;

		this.sendSysex(NI.buildSysexWithArray(this.sysexSendBuffer, NI.kLevelMeters, NI.kModeStereo, 0, levels));
		this.lastMeterUpdateSentMs = now;
	}


	// create new meter handler for channel and L=0/R=0
	this.createMeterHandler = function (channelIndex, sideIndex, meterBuffer)
	{
		let controlName = "meter[" + channelIndex + "][" + sideIndex + "]";
		return new MeterHandler(controlName, 2 * channelIndex + sideIndex, meterBuffer);
	}


	// create handlers for a specific channel
	this.createHandlersForChannel = function (channelIndex)
	{
		this.addHandler(this.createMeterHandler(channelIndex, this.kLeftChannel, this.meterBuffer));
		this.addHandler(this.createMeterHandler(channelIndex, this.kRightChannel, this.meterBuffer));

		var textControlHandlers = {
			"TrackVolumeText": NI.kTrackVolumeText,
			"TrackName": NI.kTrackName,
			"TrackPanText": NI.kTrackPanText
		};

		for(var controlName in textControlHandlers)
			this.addHandler(new TextChannelMessageControlHandler(controlName, channelIndex, textControlHandlers[controlName]));

		var numberControlHandlers = {
			"TrackMute": NI.kTrackMuted,
			"TrackSolo": NI.kTrackSoloed,
			"TrackArm": NI.kTrackArmed,
			"TrackSelect": NI.kTrackSelected,
			"TrackAvailable": NI.kTrackAvailable
		}

		for(var controlName in numberControlHandlers)
			this.addHandler(new NumberChannelMessageControlHandler(controlName, channelIndex, numberControlHandlers[controlName]));

		var valueSwitchControlHandlers = {
			"TrackMuteSelect": NI.kTrackSelectMute,
			"TrackSoloSelect": NI.kTrackSelectSolo,
			"TrackSelectButton": NI.kTrackSelected
		}

		for(var controlName in valueSwitchControlHandlers)
			this.addReceiveHandler(new ValueSwitchReceiveHandler(controlName, channelIndex, valueSwitchControlHandlers[controlName]));

		this.addHandler(new TrackVolumeControlHandler("TrackVolume", channelIndex, 0x50 + channelIndex));
		this.addHandler(new SelectedTrackAvailableControlHandler("SelectedTrackAvailable"));
	}


	//////////////////////////////////////////////////////////////////////////////////////////////////
	// ControlSurfaceDevice overrides
	//////////////////////////////////////////////////////////////////////////////////////////////////

	this.onInit = function (hostDevice)
	{
		PreSonus.ControlSurfaceDevice.prototype.onInit.call(this, hostDevice);
		this.debugLog = false;
		this.sendTrackNavigationConfigMessage = false;

		if(!KompleteKontrolConfig.isLittleEndian())
		{
			this.log("Komplete Kontrol exited: must be little endian");
			onExit();
		}

		for(let channelIndex = 0; channelIndex < KompleteKontrolConfig.kChannelCount; channelIndex++)
		{
			this.createHandlersForChannel(channelIndex);
		}

		this.addHandler(new TrackParameterControlHandler());
	}


	// send goodbye to device, as requested by protocol
	this.onExit = function ()
	{
		this.sendMidi(NI.kStatusByte, NI.kGoodBye, 0x00);
		this.handshakeCompleted = false;

		PreSonus.ControlSurfaceDevice.prototype.onExit.call(this);
	}


	this.createHandler = function (name, attributes)
	{
		// additional handlers created on the fly via <Handler> in XML
		let className = attributes.getAttribute("class");
		let address = attributes.getAttribute("address");

		return true;
	}


	// override: send initial handshake message
	this.onMidiOutConnected = function (state)
	{
		PreSonus.ControlSurfaceDevice.prototype.onMidiOutConnected.call(this, state);
		if(!state)
			return;

		this.sendMidi(NI.kStatusByte, NI.kHello, 0x03);

		// "all" -> all controls
		this.hostDevice.invalidateAll();
	}


	// host call: received sysex, overridden for handshake handling
	this.onSysexEvent = function (data, length)
	{
		if(!this.handshakeCompleted)
			return;

		PreSonus.ControlSurfaceDevice.prototype.onSysexEvent.call(this, data, length);
	}


	// host call: midi event received
	this.onMidiEvent = function (status, data1, data2)
	{
		// complete handshake on "hello" reply from the device
		if(data1 == NI.kHello && !this.handshakeCompleted)
		{
			this.log("Komplete Kontrol protocol version is '" + data2 + "'");
			this.handshakeCompleted = true;

			if(this.sendTrackNavigationConfigMessage)
				// fix S series swapped track/clip navigation in mode != mixer
				this.sendConfigurationMessage(NI.kTrackOrientation, NI.kTrackOrientationVertical);
		}

		PreSonus.ControlSurfaceDevice.prototype.onMidiEvent.call(this, status, data1, data2);
	}


	/**
	 * Send additional device configuration message, see NIHIA spec for supported options and values.
	 
	 * @param {int} property  device property to configure
	 * @param {int} value  property value to set
	 */
	this.sendConfigurationMessage = function (property, value)
	{
		this.sendSysex(NI.buildSysex(this.sysexSendBuffer, NI.kControlSurfaceConfigure, value, NI.kUnused, property))
	}


	// override: handshake behaviour, prevent any outgoing MIDI until handshake completed
	this.sendMidi = function (status, data1, data2)
	{
		// allow the initial hello message to pass through
		if(data1 != NI.kHello && !this.handshakeCompleted)
			return;

		// do not send redundant 'hello' requests
		if(data1 == NI.kHello && this.handshakeCompleted)
			return;

		PreSonus.ControlSurfaceDevice.prototype.sendMidi.call(this, status, data1, data2);
	}


	// override: wait for handshake
	this.sendSysex = function (sysexBuffer)
	{
		if(!this.midiOutConnected || !this.handshakeCompleted)
			return;

		PreSonus.ControlSurfaceDevice.prototype.sendSysex.call(this, sysexBuffer);
	}

}


// factory entry called by host
function createKompleteKontrolDeviceInstance()
{
	return new KompleteKontrolMidiDevice;
}
