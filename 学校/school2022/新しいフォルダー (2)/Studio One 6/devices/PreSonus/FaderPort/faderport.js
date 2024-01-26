// FaderPort Script
// Copyright (c)2013 PreSonus Software Ltd.

//////////////////////////////////////////////////////////////////////////////////////////////////
// FaderPortHandler
//////////////////////////////////////////////////////////////////////////////////////////////////

function FaderPortHandler ()
{
	this.interfaces = [Host.Interfaces.IParamObserver]

	this.onInit = function (surface)
	{
		// add parameter for bank selection
		this.bankList = surface.paramList.addList ("bankList");
		this.bankList.appendString ("FollowBank");
		this.bankList.appendString ("RemoteBank");
		this.bankList.appendString ("MasterBank");
		
		// find bank element for channel strip
		var root = surface.model.root;
		this.channelBankElement = root.find ("MixerMapping/ChannelBankElement");
	}
	
	this.onExit = function ()
	{
	}
	
	// IParamObserver
	this.paramChanged = function (param)
	{
		if(param == this.bankList)
		{
			// switch bank target
			this.channelBankElement.selectBank (this.bankList.string);
		}
	}
}

function createInstance ()
{
	return new FaderPortHandler;
}