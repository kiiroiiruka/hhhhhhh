include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
var FP2Banks;
(function (FP2Banks) {
    FP2Banks["kCustomPrefix"] = "Custom:";
    FP2Banks["kFollow"] = "FollowBank";
})(FP2Banks || (FP2Banks = {}));
const kNavigationMode = 0;
const kLinkMode = 1;
const kPanMode = 2;
const kChannelMode = 3;
const kScrollMode = 4;
const kZoomMode = 5;
const kMasterMode = 6;
const kSectionMode = 7;
const kMarkerMode = 8;
const kLastEncoderMode = kMarkerMode;
const kLinkColorOff = "white";
const kLinkColorOn = "blue";
const kLinkColorLocked = "red";
const kNormalModeColor = "blue";
const kAltModeColor = "white";
const kAutoLatchColor = "red";
const kAutoTrimColor = "red";
const kAutoOffColor = "white";
const kAutoTouchColor = "orange";
const kAutoWriteColor = "red";
const kAutoReadColor = "green";
class FP2Component extends PreSonus.ControlSurfaceComponent {
    constructor() {
        super();
    }
    onInit(hostComponent) {
        super.onInit(hostComponent);
        this.model = hostComponent.model;
        let root = this.model.root;
        this.recentParamElement = root.getRecentParamMapping();
        this.mixerMapping = root.find("MixerMapping");
        this.channelBankElement = this.mixerMapping.find("ChannelBankElement");
        this.channelLockSupported = this.channelBankElement.addToBank != null;
        this.channelLockBankName = FP2Banks.kCustomPrefix + "FP2LockedChannel";
        let paramList = hostComponent.paramList;
        this.shiftModifer = paramList.addParam("shiftModifier");
        this.encoderMode = paramList.addInteger(0, kLastEncoderMode, "encoderMode");
        this.lockEncoder = paramList.addParam("lockEncoder");
        this.flipEncoder = paramList.addParam("flipEncoder");
        this.scrollZoomMode = paramList.addParam("scrollZoomMode");
        this.lockChannel = paramList.addParam("lockChannel");
        this.channelModeOrLock = paramList.addParam("channelModeOrLock");
        this.linkColor = paramList.addColor("linkColor");
        this.linkColor.fromString(kLinkColorOff);
        this.scrollZoomColor = paramList.addColor("scrollZoomColor");
        this.scrollZoomColor.fromString(kNormalModeColor);
        this.panFlipColor = paramList.addColor("panFlipColor");
        this.panFlipColor.fromString(kNormalModeColor);
        this.channelLinkColor = paramList.addColor("channelLinkColor");
        this.channelLinkColor.fromString(kLinkColorOn);
        this.linkButtonHandler = paramList.addParam("linkButtonHandler");
        this.panButtonHandler = paramList.addParam("panButtonHandler");
        this.channelButtonHandler = paramList.addParam("channelButtonHandler");
        paramList.addColor("autoLatchColor").fromString(kAutoLatchColor);
        paramList.addColor("autoTrimColor").fromString(kAutoTrimColor);
        paramList.addColor("autoOffColor").fromString(kAutoOffColor);
        paramList.addColor("autoTouchColor").fromString(kAutoTouchColor);
        paramList.addColor("autoWriteColor").fromString(kAutoWriteColor);
        paramList.addColor("autoReadColor").fromString(kAutoReadColor);
    }
    isShiftActive() {
        return this.shiftModifer.value != 0;
    }
    isEncoderMode(mode) {
        return this.encoderMode.value == mode;
    }
    setEncoderMode(mode) {
        this.encoderMode.setValue(mode, true);
    }
    toggleEncoderMode(onMode, offMode) {
        if (this.isEncoderMode(onMode))
            this.setEncoderMode(offMode);
        else
            this.setEncoderMode(onMode);
    }
    isFlipEncoderActive() {
        return this.flipEncoder.value != 0;
    }
    setFlipEncoder(state) {
        this.flipEncoder.setValue(state, true);
    }
    setLockEncoder(state) {
        this.lockEncoder.setValue(state, true);
    }
    setLockChannel(state) {
        this.lockChannel.setValue(state, true);
    }
    paramChanged(param) {
        if (param == this.encoderMode) {
            this.updateLinkState();
            this.updateModeParams();
        }
        else if (param == this.flipEncoder) {
            this.setEncoderMode(kPanMode);
            this.updateModeParams();
        }
        else if (param == this.lockEncoder) {
            this.setEncoderMode(kLinkMode);
            this.model.lockRecentParameter(param.value);
        }
        else if (param == this.lockChannel) {
            this.setEncoderMode(kChannelMode);
            this.enterChannelLockMode(this.lockChannel.value);
        }
        else if (param == this.linkButtonHandler) {
            if (this.isEncoderLockActive())
                this.setLockEncoder(false);
            else {
                if (this.isShiftActive())
                    this.setLockEncoder(true);
                else
                    this.toggleEncoderMode(kLinkMode, kNavigationMode);
            }
        }
        else if (param == this.panButtonHandler) {
            if (this.isFlipEncoderActive())
                this.setFlipEncoder(false);
            else {
                if (this.isShiftActive())
                    this.setFlipEncoder(true);
                else
                    this.toggleEncoderMode(kPanMode, kNavigationMode);
            }
        }
        else if (param == this.channelButtonHandler) {
            if (this.isChannelLockActive()) {
                if (this.isEncoderMode(kChannelMode) == false)
                    this.setEncoderMode(kChannelMode);
                else
                    this.setLockChannel(false);
            }
            else {
                if (this.isShiftActive())
                    this.setLockChannel(true);
                else
                    this.toggleEncoderMode(kChannelMode, kNavigationMode);
            }
        }
    }
    enterChannelLockMode(state) {
        if (this.channelLockSupported) {
            if (state) {
                if (this.channelBankElement.target == FP2Banks.kFollow && this.channelBankElement.getBankChildCount() > 0) {
                    let channelStripElement = this.channelBankElement.getElement(0);
                    this.channelBankElement.addToBank(this.channelLockBankName, channelStripElement);
                    this.channelBankElement.selectBank(this.channelLockBankName);
                }
            }
            else {
                if (this.channelBankElement.target != FP2Banks.kFollow) {
                    this.channelBankElement.selectBank(FP2Banks.kFollow);
                    this.channelBankElement.emptyBank(this.channelLockBankName);
                }
            }
            this.updateChannelLockState();
        }
        else
            this.lockChannel.value = false;
    }
    updateChannelLockState() {
        if (this.channelLockSupported) {
            let locked = false;
            if (this.channelBankElement.target == this.channelLockBankName) {
                if (this.channelBankElement.getBankChildCount() > 0)
                    locked = true;
                else {
                    this.channelBankElement.selectBankDeferred(FP2Banks.kFollow);
                }
            }
            this.lockChannel.value = locked;
            this.channelLinkColor.fromString(locked ? kLinkColorLocked : kLinkColorOn);
            this.updateModeParams();
        }
    }
    isChannelLockActive() {
        return this.channelLockSupported && this.channelBankElement.target == this.channelLockBankName;
    }
    updateLockedChannel() {
        if (this.isChannelLockActive()) {
            this.enterChannelLockMode(false);
            this.enterChannelLockMode(true);
        }
    }
    isEncoderLockActive() {
        return this.isEncoderMode(kLinkMode) && this.recentParamElement.locked;
    }
    updateLinkState() {
        let mode = this.encoderMode.value;
        if (mode == kLinkMode) {
            let locked = this.recentParamElement.locked;
            this.linkColor.fromString(locked ? kLinkColorLocked : kLinkColorOn);
            PreSonus.HostUtils.setParamMouseOverEnabled(true);
        }
        else {
            this.linkColor.fromString(kLinkColorOff);
            PreSonus.HostUtils.setParamMouseOverEnabled(false);
        }
    }
    updateModeParams() {
        let mode = this.encoderMode.value;
        let flipped = this.flipEncoder.value;
        this.scrollZoomColor.fromString(mode == kZoomMode ? kAltModeColor : kNormalModeColor);
        this.panFlipColor.fromString(mode == kPanMode && flipped ? kAltModeColor : kNormalModeColor);
        this.scrollZoomMode.value = mode == kZoomMode || mode == kScrollMode;
        this.channelModeOrLock.value = mode == kChannelMode || this.isChannelLockActive();
    }
}
function createFP2ComponentInstance() {
    return new FP2Component;
}
