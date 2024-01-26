// KompleteKontrol Component Script
// Copyright (c)2019 PreSonus Software Ltd.

// include SDK files from host
include_file ("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js")
include_file ("resource://com.presonus.musicdevices/sdk/musicprotocol.js")



//************************************************************************************************
// KompleteKontrolComponent
//************************************************************************************************

KompleteKontrolComponent.prototype = new PreSonus.ControlSurfaceComponent ();
function KompleteKontrolComponent ()
{		

	this.kChannelCount = 8;

	// Komplete Kontrol plugin detection, as specified by NI
	this.kNiPluginName = "Komplete Kontrol";
	this.kNiControlParameterIndexAU = 0;
	this.kNiControlParameterIndexVst2 = 1;
	this.kNiControlParameterPrefix = "NIKB";

	this.onInit = function (hostComponent)
	{
		PreSonus.ControlSurfaceComponent.prototype.onInit.call (this, hostComponent);
		this.debugLog = false;

		this.mixerMapping = this.hostComponent.model.root.find("MixerMapping");
		this.channelBankElement = this.mixerMapping.find("MixerBank");
		this.followBankElement = this.mixerMapping.find("MixerFollowBank");

		// register 'track available' parameters
		this.trackAvailableParams = [];
		let paramList = hostComponent.paramList;
		for(let channelIndex = 0; channelIndex < this.kChannelCount; channelIndex++)
		{
			this.trackAvailableParams.push(paramList.addParam("trackAvailable" + channelIndex));
		}

		this.focusTrackInstrumentParameter = paramList.addString("focusTrackInstrumentParameter");

		// provide a parameter to turn LEDS always on, use it as a workaround
		// until 'command is available' states are provided by Studio One
		this.alwaysOnLEDparam = paramList.addParam("alwaysOnLED");
		this.alwaysOnLEDparam.setValue(1);

		// remember focus instrument mapping element
		let musicTrackMapping = hostComponent.model.root.find ("MusicTrackMapping");
		this.focusInstrumentMapping = musicTrackMapping.find ("FocusInstrumentMapping").getElement (0);		
	}

	// check if paramTitle starts with "NIBK"
	this.isNibkParameter = function (paramTitle)
	{
		return paramTitle.substring(0, this.kNiControlParameterPrefix.length) == this.kNiControlParameterPrefix;
	}

	// toggle 'track available'
	this.onConnectChannel = function (channelIndex)
	{
		if(channelIndex >= this.kChannelCount)
			return;

		let param = this.trackAvailableParams[channelIndex];
		param.value = !param.value;
	}

	// update control parameter if the focused track instrument is a 'Komplete Kontrol' 
	// plugin, indicated by its first parameter title being NIBK[xx]
	this.onFocusInstrumentChanged = function ()
	{
		let paramTitle = "";
		if(this.focusInstrumentMapping.isConnected() && this.focusInstrumentMapping.matchesPlugInClass(this.kNiPluginName))
		{
			// check for AU plugin
			paramTitle = this.focusInstrumentMapping.getParamTitle(this.kNiControlParameterIndexAU);
			if(this.isNibkParameter(paramTitle))
			{
				this.focusTrackInstrumentParameter.value = paramTitle;
				return;
			}

			// if AU check fails, check for VST2 (skips bypass parameter)
			paramTitle = this.focusInstrumentMapping.getParamTitle(this.kNiControlParameterIndexVst2);
			if(this.isNibkParameter(paramTitle))
			{
				this.focusTrackInstrumentParameter.value = paramTitle;
				return;
			}

			// parameter not found, maybe changed by NI
			this.log("could not find Komplete Kontrol ID parameter, expected " + this.kNiControlParameterPrefix + "[xx], found " + paramTitle);
		}

		this.focusTrackInstrumentParameter.value = paramTitle;
	}

	// scroll 'all bank' to follow selected channel of 'follow bank'
	this.onFocusChannelChanged = function ()
	{
		if(!this.followBankElement || !this.channelBankElement)
			return;

		let focusChannelElement = this.followBankElement.getElement(0);
		if(!focusChannelElement)
			return;

		let index = this.channelBankElement.getBankChildIndex(focusChannelElement);
		if(index == -1)
			return;

		// scroll in blocks of size kChannelCount
		let position = Math.floor(index / this.kChannelCount) * this.kChannelCount;
		this.channelBankElement.scrollTo(position);
	}
}


// factory entry called by host
function createKompleteKontrolComponentInstance ()
{
	return new KompleteKontrolComponent;
}
