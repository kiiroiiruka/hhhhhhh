// Komplete Kontrol MIDI Protocol Definitions
// Copyright (c) 2019 PreSonus Software Ltd.

// requires midiprotocol.js from SDK


// NIHIA SysEx format
function NI()
{ }

NI.kMaxMeter = 0x7F; // display volume max
NI.kMinMeter = 0x00; // display volume min
NI.kVolumeAdjustFactor = 1.12; // correction factor to improve meter sync between studio one and S series mixer display

// handshake and CC
NI.kStatusByte = 0xBF;
NI.kHello = 0x01;
NI.kGoodBye = 0x02;
NI.kModeStereo = 2;
NI.kSelectedTrackAvailable = 0x68;

// sysex header
NI.kEnd = 0xF7; // end of sysex header

// sysex: sent from DAW to komplete kontrol device
NI.kControlSurfaceConfigure = 0x03; // use in conjunction with track configuration parameters as defined below
NI.kTrackAvailable = 0x40;
NI.kSelectedTrackParametersChanged = 0x41;
NI.kTrackSelected = 0x42;
NI.kTrackMuted = 0x43;
NI.kTrackSoloed = 0x44;
NI.kTrackArmed = 0x45;
NI.kTrackVolumeText = 0x46;
NI.kTrackPanText = 0x47;
NI.kTrackName = 0x48;
NI.kLevelMeters = 0x49;
NI.kTrackMutedBySolo = 0x4A;

// configuration values for kControlSurfaceConfigure sysex
NI.kUnused = 0x00;

// configuration message "track orientation": specify which wheel encoder axis is used for track selection
// does not affect S MK2 mixer mode (always uses left/right), clip selection will use complementary axis
// fallback to device default behaviour: do not send message at all
NI.kTrackOrientation = "track_orientation"
NI.kTrackOrientationHorizontal = 0x00; // track selection: wheel encoder left/right
NI.kTrackOrientationVertical = 0x01; // track selection: wheel encoder up/down

// sent by Komplete Kontrol
NI.kTrackSelectMute = 0x43;
NI.kTrackSelectSolo = 0x44;


NI.kSysexHeader = [
	// excludes start 0xFA as this is already added by SysexBuffer.begin()
	0x00, // Manufacturer ID 1
	0x21, // Manufacturer ID 2
	0x09, // Manufacturer ID 3
	0x00, // Device ID 1
	0x00, // Device ID 2
	0x44, // Protocol ID 1
	0x43, // Protocol ID 2
	0x01, // Protocol Version 1
	0x00  // Protocol Version 2
];


// transform meter parameter value to device fader value 
NI.scaleMeter = function (value, inMax, inMin)
{
	// map parameter value [0..1.0] to display scale [0..127]
	let result = NI.kMinMeter + ((NI.kMaxMeter - NI.kMinMeter) / (inMax - inMin)) * (value - inMin);

	// slightly adjust the volume indicator and level meters
	// aligns well around 0db, -12dB and -48db, is off around -24dB
	result = result * NI.kVolumeAdjustFactor;
	return result > 127 ? 127 : result;
}


// start sysex buffer with sysex state id, target value and track index
NI.startSysexBuffer = function (sysexBuffer, stateId, value, track)
{
	sysexBuffer.begin(NI.kSysexHeader);
	sysexBuffer.push(stateId);
	sysexBuffer.push(value);
	sysexBuffer.push(track);
}


// build sysex buffer for either number (info == null) or ascii text (info = some text)
NI.buildSysex = function (sysexBuffer, stateId, value, track, info)
{
	NI.startSysexBuffer(sysexBuffer, stateId, value, track);
	if (info)
		sysexBuffer.appendAscii(info);
	sysexBuffer.end(NI.kEnd);
	return sysexBuffer;
}


// build sysex buffer with 'info' being an uint array
NI.buildSysexWithArray = function (sysexBuffer, stateId, value, track, info)
{
	NI.startSysexBuffer(sysexBuffer, stateId, value, track);
	for(var i = 0; i < info.length; ++i)
	{
		sysexBuffer.push(info[i]);
	}
	sysexBuffer.end(NI.kEnd);

	return sysexBuffer;
}
