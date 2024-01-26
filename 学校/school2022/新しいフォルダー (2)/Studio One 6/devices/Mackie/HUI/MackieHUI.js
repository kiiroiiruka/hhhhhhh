// HUI Script
// Copyright (c)2013 PreSonus Software Ltd.

//////////////////////////////////////////////////////////////////////////////////////////////////
// Definitions
//////////////////////////////////////////////////////////////////////////////////////////////////

const kNumChannels = 8;

const kPanMode = 0;
const kSendModeA = 1;
const kSendModeB = 2;
const kSendModeC = 3;
const kSendModeD = 4;
const kSendModeE = 5;
const kInputMode = 6;
const kOutputMode = 7;

const theModeNames = ["Pan", "SndA", "SndB", "SndC", "SndD", "SndE", "Inpt", "Outp"];

//////////////////////////////////////////////////////////////////////////////////////////////////
// ChannelInfo
//////////////////////////////////////////////////////////////////////////////////////////////////

function ChannelInfo ()
{
	this.setPot = function (element, paramName)
	{
		element.connectAliasParam (this.potValue, paramName);
	}

	this.setLabel = function (element, paramName)
	{
		element.connectAliasParam (this.labelString, paramName);
	}
	
	this.setEditorString = function (element, paramName)
	{
		element.connectAliasParam (this.editorString, paramName);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// MackieHUIHandler
//////////////////////////////////////////////////////////////////////////////////////////////////

function MackieHUIHandler ()
{	
	this.interfaces = [Host.Interfaces.IParamObserver];
	
	this.onInit = function (surface)
	{		
		let paramList = surface.paramList;
		
		this.assignMode = paramList.addList ("assignMode");
		for(let i in theModeNames)
			this.assignMode.appendString (theModeNames[i]);
			
		this.bypassMode = paramList.addParam ("bypassMode");
		this.bypassMode.value = 1; // always on
		
		let root = surface.model.root;		
		let channelBankElement = root.find ("MixerMapping/ChannelBankElement");
		
		this.channels = [];
		for(let i = 0; i < kNumChannels; i++)
		{
			let channelInfo = new ChannelInfo;
			
			channelInfo.potValue = paramList.addAlias ("potValue" + i);
			channelInfo.labelString = paramList.addAlias ("labelString" + i);
			channelInfo.editorString = paramList.addAlias ("editorString" + i);
			
			channelInfo.channelElement = channelBankElement.getElement (i);
			channelInfo.sendsBankElement = channelInfo.channelElement.find ("SendsBankElement");		
		
			this.channels.push (channelInfo);
		}
	}
	
	this.onExit = function ()
	{
	}
	
	this.onConnectChannel = function (index)
	{
		this.updateChannel (index);
	}
	
	this.onConnectChannelSend = function (channelIndex, sendIndex)
	{
		let mode = this.assignMode.value;
		
		if(mode >= kSendModeA && mode <= kSendModeE)
			if(mode - kSendModeA == sendIndex)
				this.updateChannel (channelIndex);
	}
	
	this.updateAll = function ()
	{
		for(let i = 0; i < kNumChannels; i++)
			this.updateChannel (i);	
	}
	
	this.updateChannel = function (index)
	{
		let mode = this.assignMode.value;
		let channelInfo = this.channels[index];
		let channelElement = channelInfo.channelElement;
		
		if(mode >= kSendModeA && mode <= kSendModeE)
		{
			let sendIndex = mode - kSendModeA;
			let sendElement = channelInfo.sendsBankElement.getElement (sendIndex);
		
			channelInfo.setPot (sendElement, "sendlevel");
			channelInfo.setEditorString (sendElement, "sendlevel");
			
			channelInfo.setLabel (channelElement, "label");
		}
		else if(mode == kInputMode || mode == kOutputMode)
		{
			let paramName = mode == kInputMode ? "recordPort" : "outputPort";
			
			channelInfo.setPot (channelElement, paramName);
			channelInfo.setLabel (channelElement, paramName);		
			channelInfo.setEditorString (channelElement, "label");					
		}
		else // kPanMode
		{		
			channelInfo.setPot (channelElement, "pan");
			channelInfo.setLabel (channelElement, "label");		
			channelInfo.setEditorString (channelElement, "volume");		
		}
	}
		
	this.paramChanged = function (param)
	{
		if(param == this.assignMode)
		{
			this.updateAll ();
		}
	}
}

function createInstance ()
{
	return new MackieHUIHandler;
}