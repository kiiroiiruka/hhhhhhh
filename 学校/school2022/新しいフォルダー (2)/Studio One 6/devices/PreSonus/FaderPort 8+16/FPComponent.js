include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
include_file("FPProtocol.js");
var ChannelAssignmentMode;
(function (ChannelAssignmentMode) {
    ChannelAssignmentMode[ChannelAssignmentMode["kTrackMode"] = 0] = "kTrackMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kPlugMode"] = 1] = "kPlugMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kSendMode"] = 2] = "kSendMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kPanMode"] = 3] = "kPanMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kTimeMode"] = 4] = "kTimeMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kCueMode"] = 5] = "kCueMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kInputGainMode"] = 6] = "kInputGainMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kMacroMode"] = 7] = "kMacroMode";
    ChannelAssignmentMode[ChannelAssignmentMode["kAssignModeMax"] = 7] = "kAssignModeMax";
    ChannelAssignmentMode[ChannelAssignmentMode["kInvalidMode"] = -1] = "kInvalidMode";
})(ChannelAssignmentMode || (ChannelAssignmentMode = {}));
var PanEncoderMode;
(function (PanEncoderMode) {
    PanEncoderMode[PanEncoderMode["kChannelEncoderMode"] = 0] = "kChannelEncoderMode";
    PanEncoderMode[PanEncoderMode["kLinkEncoderMode"] = 1] = "kLinkEncoderMode";
    PanEncoderMode[PanEncoderMode["kPlugEncoderMode"] = 2] = "kPlugEncoderMode";
})(PanEncoderMode || (PanEncoderMode = {}));
var BigEncoderMode;
(function (BigEncoderMode) {
    BigEncoderMode[BigEncoderMode["kNavigationMode"] = 0] = "kNavigationMode";
    BigEncoderMode[BigEncoderMode["kChannelMode"] = 1] = "kChannelMode";
    BigEncoderMode[BigEncoderMode["kZoomMode"] = 2] = "kZoomMode";
    BigEncoderMode[BigEncoderMode["kScrollMode"] = 3] = "kScrollMode";
    BigEncoderMode[BigEncoderMode["kBankMode"] = 4] = "kBankMode";
    BigEncoderMode[BigEncoderMode["kMasterMode"] = 5] = "kMasterMode";
    BigEncoderMode[BigEncoderMode["kSectionMode"] = 7] = "kSectionMode";
    BigEncoderMode[BigEncoderMode["kMarkerMode"] = 8] = "kMarkerMode";
    BigEncoderMode[BigEncoderMode["kPageSelectMode"] = 9] = "kPageSelectMode";
    BigEncoderMode[BigEncoderMode["kBigEncoderModeMax"] = 9] = "kBigEncoderModeMax";
    BigEncoderMode[BigEncoderMode["kInvalidBigEncoderMode"] = -1] = "kInvalidBigEncoderMode";
})(BigEncoderMode || (BigEncoderMode = {}));
var FolderSlotIndex;
(function (FolderSlotIndex) {
    FolderSlotIndex[FolderSlotIndex["kSlotAll"] = 0] = "kSlotAll";
    FolderSlotIndex[FolderSlotIndex["kSlotFirst"] = 1] = "kSlotFirst";
})(FolderSlotIndex || (FolderSlotIndex = {}));
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection[ScrollDirection["kLeft"] = -1] = "kLeft";
    ScrollDirection[ScrollDirection["kRight"] = 1] = "kRight";
})(ScrollDirection || (ScrollDirection = {}));
const kFPSignal = "FaderPort";
const kAssignmentChanged = "AssignmentChanged";
const kMacroBankKnobCount = 8;
const kUndefinedChannelType = "";
class Assignment {
    constructor() {
        this.mode = ChannelAssignmentMode.kTrackMode;
        this.controlLinkFocus = false;
        this.encoderMode = PanEncoderMode.kChannelEncoderMode;
        this.meterMode = false;
        this.bigEncoderMode = BigEncoderMode.kBankMode;
        this.previousBigEncoderMode = BigEncoderMode.kInvalidBigEncoderMode;
        this.sendIndex = FolderSlotIndex.kSlotAll;
        this.cueIndex = FolderSlotIndex.kSlotAll;
        this.selectedBank = 0;
        this.armMode = false;
    }
    isPlugOverview() {
        return this.mode == ChannelAssignmentMode.kPlugMode && !this.controlLinkFocus;
    }
    isPlugEditModeWithFocus() {
        return this.mode == ChannelAssignmentMode.kPlugMode && this.controlLinkFocus;
    }
    isSendVisible(sendIndex) {
        return this.mode == ChannelAssignmentMode.kSendMode && this.sendIndex == sendIndex;
    }
    isCueVisible(cueIndex) {
        return this.mode == ChannelAssignmentMode.kCueMode && this.cueIndex == cueIndex;
    }
    sync(other) {
        if (this.mode != ChannelAssignmentMode.kPlugMode
            && other.mode != ChannelAssignmentMode.kPlugMode) {
            this.mode = other.mode;
        }
        this.meterMode = other.meterMode;
        this.selectedBank = other.selectedBank;
        this.armMode = other.armMode;
        this.sendIndex = other.sendIndex;
        this.cueIndex = other.cueIndex;
    }
}
const kLinkColorOff = "white";
const kLinkColorOn = "blue";
const kLinkColorLocked = "red";
const kRecordArmColor = "red";
const kPlugEditColor = "yellow";
const kPlugSelectColor = "white";
const kNormalBankColor = "blue";
const kShiftBankColor = "darkorange";
const kMacroColor = "green";
const kAutoLatchColor = "red";
const kAutoTrimColor = "red";
const kAutoOffColor = "white";
const kAutoTouchColor = "orange";
const kAutoWriteColor = "red";
const kAutoReadColor = "green";
const kBypassColor = "blue";
const theBankNames = [
    PreSonus.Banks.kAudioTrack,
    PreSonus.Banks.kAudioSynth,
    PreSonus.Banks.kAudioBus,
    PreSonus.Banks.kAudioVCA,
    PreSonus.Banks.kRemoteAll,
    PreSonus.Banks.AudioInput,
    PreSonus.Banks.kAudioAux,
    PreSonus.Banks.AudioOutput,
    PreSonus.Banks.AudioFX,
    PreSonus.Banks.kUser
];
const kBankButtonCount = 5;
class ChannelStrip {
    constructor() {
    }
    setFaderValue(element, paramName) {
        element.connectAliasParam(this.faderValue, paramName);
    }
    clearFaderValue() {
        this.faderValue.setOriginal(null);
    }
    setDisplayValue(element, paramName) {
        element.connectAliasParam(this.displayValue, paramName);
    }
    clearDisplayValue() {
        this.displayValue.setOriginal(null);
    }
    setDisplayLineDirect(line, param) {
        this.lines[line].setOriginal(param);
    }
    setDisplayLine(line, element, paramName) {
        return element.connectAliasParam(this.lines[line], paramName);
    }
    clearDisplayLine(line) {
        this.lines[line].setOriginal(null);
    }
    setSelectValue(element, paramName) {
        element.connectAliasParam(this.selectValue, paramName);
    }
    clearSelectValue() {
        this.selectValue.setOriginal(null);
    }
    setSelectColor(element, paramName) {
        element.connectAliasParam(this.selectColor, paramName);
    }
    clearSelectColor() {
        this.selectColor.setOriginal(null);
    }
    setVolumeOnTouch(value) {
        this.volumeOnTouch = value;
    }
}
ChannelStrip.kInvalidChannelIndex = -1;
class FPComponent extends PreSonus.ControlSurfaceComponent {
    constructor(faderCount) {
        super();
        this.faderCount = faderCount;
        this.pagingStatusIndex = faderCount - 1;
        this.channels = [];
    }
    onInit(hostComponent) {
        PreSonus.ControlSurfaceComponent.prototype.onInit.call(this, hostComponent);
        this.debugLog = false;
        this.assignment = new Assignment;
        this.model = hostComponent.model;
        this.root = this.model.root;
        this.mixerMapping = this.root.find("MixerMapping");
        this.channelBankElement = this.mixerMapping.find("ChannelBankElement");
        let focusBankElement = this.mixerMapping.find("FocusBankElement");
        this.focusChannelElement = focusBankElement.getElement(0);
        let macroBankElement = this.focusChannelElement.find("MacroBankElement");
        this.focusSendsBankElement = this.focusChannelElement.find("SendsBankElement");
        this.focusCuesBankElement = this.focusChannelElement.find("CuesBankElement");
        this.focusInsertsBankElement = this.focusChannelElement.find("InsertsBankElement");
        this.plugBankElement = this.root.getGenericMapping().getElement(0);
        let paramList = hostComponent.paramList;
        this.assignModeParam = paramList.addInteger(0, ChannelAssignmentMode.kAssignModeMax, "assignMode");
        this.bigEncoderModeParam = paramList.addInteger(0, BigEncoderMode.kBigEncoderModeMax, "bigEncoderMode");
        this.bigEncoderModeParam.value = BigEncoderMode.kBankMode;
        this.linkModeParam = paramList.addParam("linkMode");
        this.lockEncoderParam = paramList.addParam("lockEncoder");
        this.armModeParam = paramList.addParam("armMode");
        let pagingComponent = hostComponent.find(PreSonus.ComponentID.kPaging);
        this.pagingStatusParam = pagingComponent.findParameter(PreSonus.ParamID.kPagingStatus);
        this.bankList = paramList.addList("bankList");
        for (let i in theBankNames)
            this.bankList.appendString(theBankNames[i]);
        this.bankList.value = theBankNames.indexOf(PreSonus.Banks.kRemoteAll);
        this.assignment.selectedBank = this.bankList.value;
        this.bankIndicator = paramList.addInteger(0, kBankButtonCount - 1, "bankIndicator");
        this.bankIndicator.value = this.bankList.value;
        this.bankColor = paramList.addColor("bankColor");
        this.bankColor.fromString(kNormalBankColor);
        this.encoderValue = paramList.addAlias("encoderValue");
        this.pushEncoderValue = paramList.addAlias("pushEncoderValue");
        this.recentParamElement = this.root.getRecentParamMapping();
        for (let i = 0; i < this.faderCount; i++) {
            let channel = new ChannelStrip;
            channel.lineStyles = [];
            for (let line = 0; line < FP.Support.kMaxLineCount; line++)
                channel.lineStyles.push(FP.TextStyle.kCenter);
            channel.channelElement = this.channelBankElement.getElement(i);
            if (i < kMacroBankKnobCount) {
                channel.macroFloatElement = macroBankElement.getElement(i);
                channel.macroBoolElement = macroBankElement.getElement(i + kMacroBankKnobCount);
            }
            channel.plugFaderElement = this.plugBankElement.find("fader[" + i + "]");
            channel.plugButtonElement = this.plugBankElement.find("selectButton[" + i + "]");
            channel.insertSlotElement = this.focusInsertsBankElement.getElement(i);
            channel.sendsBankElement = channel.channelElement.find("SendsBankElement");
            channel.cuesBankElement = channel.channelElement.find("CuesBankElement");
            channel.displayMode = paramList.addInteger(0, FP.DisplayMode.kNumModes - 1, "displayMode" + i);
            channel.lines = [];
            for (let line = 0; line < FP.Support.kMaxLineCount; line++)
                channel.lines.push(paramList.addAlias("display" + i + "Line" + line));
            channel.displayValue = paramList.addAlias("displayValue" + i);
            channel.selectValue = paramList.addAlias("selectValue" + i);
            channel.lastSelectMode = ChannelAssignmentMode.kInvalidMode;
            channel.selectColor = paramList.addAlias("selectColor" + i);
            channel.faderValue = paramList.addAlias("faderValue" + i);
            channel.armValue = paramList.addAlias("armValue" + i);
            channel.channelType = kUndefinedChannelType;
            this.channels.push(channel);
        }
        this.faderTouchTitle = paramList.addString("faderTouchTitle");
        this.timeCodeMode = paramList.addParam("timeCodeMode");
        this.linkColor = paramList.addColor("linkColor");
        this.linkColor.fromString(kLinkColorOff);
        this.shiftModifer = paramList.addParam("shiftModifier");
        this.shiftPressedModifier = paramList.addParam("shiftHoldModifier");
        this.bypassAlias = paramList.addAlias("bypassAlias");
        this.autoModeAlias = paramList.addAlias("autoModeAlias");
        this.recordArmColor = paramList.addColor("recordArmColor");
        this.recordArmColor.fromString(kRecordArmColor);
        this.plugEditColor = paramList.addColor("plugEditColor");
        this.plugEditColor.fromString(kPlugEditColor);
        this.plugSelectColor = paramList.addColor("plugSelectColor");
        this.plugSelectColor.fromString(kPlugSelectColor);
        paramList.addColor("macroColor").fromString(kMacroColor);
        paramList.addColor("shiftColor").fromString(kShiftBankColor);
        paramList.addColor("autoLatchColor").fromString(kAutoLatchColor);
        paramList.addColor("autoTrimColor").fromString(kAutoTrimColor);
        paramList.addColor("autoOffColor").fromString(kAutoOffColor);
        paramList.addColor("autoTouchColor").fromString(kAutoTouchColor);
        paramList.addColor("autoWriteColor").fromString(kAutoWriteColor);
        paramList.addColor("autoReadColor").fromString(kAutoReadColor);
        paramList.addColor("bypassColor").fromString(kBypassColor);
        this.slotInfo = paramList.addString("slotInfo");
        Host.Signals.advise(kFPSignal, this);
    }
    onExit() {
        Host.Signals.unadvise(kFPSignal, this);
        super.onExit();
    }
    notify(subject, msg) {
        if (!subject || !msg)
            return;
        if (msg.id != kAssignmentChanged)
            return;
        let otherGroupId = msg.getArg(0);
        let thisGroupId = this.root.getPlacementGroup();
        if (thisGroupId != 0 && thisGroupId == otherGroupId) {
            let otherAssignment = msg.getArg(1);
            if (this.assignment != otherAssignment)
                this.onSyncDevice(otherAssignment);
        }
    }
    syncDevice() {
        let groupId = this.root.getPlacementGroup();
        if (groupId == 0)
            return;
        Host.Signals.signal(kFPSignal, kAssignmentChanged, groupId, this.assignment);
    }
    onSyncDevice(other) {
        this.assignment.sync(other);
        let updatedMode = this.assignment.mode;
        if (updatedMode != this.assignModeParam.value) {
            this.assignModeParam.setValue(updatedMode, false);
            this.assignment.sendIndex = FolderSlotIndex.kSlotAll;
            this.assignment.cueIndex = FolderSlotIndex.kSlotAll;
        }
        let updatedBank = this.assignment.selectedBank;
        if (updatedBank != this.bankList.value) {
            this.bankList.setValue(updatedBank, false);
            this.updateBank(updatedBank);
        }
        let updatedArmMode = this.assignment.armMode;
        if (updatedArmMode != this.armModeParam.value)
            this.armModeParam.setValue(updatedArmMode, false);
        this.updateDisplayMode();
        this.updateBypassAlias();
        this.updateAllChannels();
    }
    updateBank(selectedBank) {
        let bankName = this.bankList.string;
        this.channelBankElement.selectBank(bankName);
        if (selectedBank >= kBankButtonCount) {
            this.bankIndicator.value = selectedBank - kBankButtonCount;
            this.bankColor.fromString(kShiftBankColor);
        }
        else {
            this.bankIndicator.value = selectedBank;
            this.bankColor.fromString(kNormalBankColor);
        }
    }
    paramChanged(param) {
        if (param == this.bankList) {
            this.assignment.selectedBank = this.bankList.value;
            this.updateBank(this.bankList.value);
            this.syncDevice();
        }
        else if (param == this.assignModeParam) {
            this.assignment.mode = this.assignModeParam.value;
            this.updateAssignment();
            this.syncDevice();
        }
        else if (param == this.linkModeParam) {
            this.assignment.encoderMode = this.linkModeParam.value;
            this.stealEncoderMode();
            PreSonus.HostUtils.setParamMouseOverEnabled(this.assignment.encoderMode == PanEncoderMode.kLinkEncoderMode);
            this.updateEncoder();
        }
        else if (param == this.lockEncoderParam) {
            this.model.lockRecentParameter(param.value);
        }
        else if (param == this.bigEncoderModeParam) {
            this.assignment.bigEncoderMode = param.value;
        }
        else if (param == this.armModeParam) {
            this.assignment.armMode = param.value;
            this.syncDevice();
        }
    }
    onConnectFocusChannel() {
        if (this.assignment.isPlugEditModeWithFocus() == false) {
            this.updateBypassAlias();
        }
        if (this.assignment.encoderMode == PanEncoderMode.kChannelEncoderMode)
            this.updateEncoder();
        if (this.assignment.isSendVisible(FolderSlotIndex.kSlotAll) || this.assignment.isPlugOverview())
            this.updateChannel(0);
    }
    onConnectChannel(channelIndex) {
        let channel = this.channels[channelIndex];
        channel.channelElement.connectAliasParam(channel.armValue, PreSonus.ParamID.kRecord);
        if (channel.channelElement.isConnected())
            channel.channelType = channel.channelElement.getProperty(PreSonus.PropertyID.kChannelType);
        else
            channel.channelType = kUndefinedChannelType;
        if (!(this.assignment.isPlugEditModeWithFocus() || this.assignment.mode == ChannelAssignmentMode.kMacroMode))
            this.updateChannel(channelIndex);
    }
    onConnectChannelSend(channelIndex, sendIndex) {
        if (this.assignment.isSendVisible(sendIndex + 1))
            this.updateChannel(channelIndex);
    }
    onConnectChannelCue(channelIndex, cueIndex) {
        if (this.assignment.isCueVisible(cueIndex + 1))
            this.updateChannel(channelIndex);
    }
    onConnectPlugMapping() {
        if (this.assignment.mode == ChannelAssignmentMode.kPlugMode) {
            let hasFocus = this.hasControlLinkFocus();
            if (this.assignment.controlLinkFocus != hasFocus) {
                this.assignment.controlLinkFocus = hasFocus;
                this.updateAssignment();
            }
        }
    }
    onConnectPlugControl(channelIndex) {
        if (this.assignment.isPlugEditModeWithFocus())
            this.updateChannel(channelIndex);
    }
    onConnectRecentParam() {
        if (this.assignment.encoderMode == PanEncoderMode.kLinkEncoderMode)
            this.updateEncoder();
    }
    hasControlLinkFocus() {
        return this.plugBankElement.remapHint == PreSonus.RemapHint.kFocus;
    }
    getFocusChannelIndex() {
        if (!this.focusChannelElement.isConnected())
            return ChannelStrip.kInvalidChannelIndex;
        return this.channelBankElement.getBankChildIndex(this.focusChannelElement);
    }
    updateBypassAlias() {
        if (this.assignment.isPlugEditModeWithFocus()) {
            this.plugBankElement.connectAliasParam(this.bypassAlias, PreSonus.ParamID.kFocusBypass);
            this.plugBankElement.connectAliasParam(this.autoModeAlias, PreSonus.ParamID.kFocusAutoMode);
        }
        else if (this.assignment.mode == ChannelAssignmentMode.kSendMode) {
            if (this.assignment.sendIndex == FolderSlotIndex.kSlotAll)
                this.focusChannelElement.connectAliasParam(this.bypassAlias, PreSonus.ParamID.kSendBypass);
            else {
                let sendIndex = this.assignment.sendIndex - 1;
                let sendSlotElement = this.focusSendsBankElement.getElement(sendIndex);
                sendSlotElement.connectAliasParam(this.bypassAlias, PreSonus.ParamID.kSendMute);
            }
            this.focusChannelElement.connectAliasParam(this.autoModeAlias, PreSonus.ParamID.kAutoMode);
        }
        else {
            this.focusChannelElement.connectAliasParam(this.bypassAlias, PreSonus.ParamID.kInsertBypass);
            this.focusChannelElement.connectAliasParam(this.autoModeAlias, PreSonus.ParamID.kAutoMode);
        }
    }
    stealEncoderMode() {
        if (this.assignment.isPlugEditModeWithFocus()) {
            if (this.assignment.encoderMode != PanEncoderMode.kLinkEncoderMode) {
                this.assignment.encoderMode = PanEncoderMode.kPlugEncoderMode;
                return true;
            }
        }
        else if (this.assignment.encoderMode == PanEncoderMode.kPlugEncoderMode) {
            this.assignment.encoderMode = this.linkModeParam.value;
            return true;
        }
        return false;
    }
    updateAssignment() {
        this.timeCodeMode.value = (this.assignment.mode == ChannelAssignmentMode.kTimeMode);
        this.assignment.sendIndex = FolderSlotIndex.kSlotAll;
        this.assignment.cueIndex = FolderSlotIndex.kSlotAll;
        this.updateDisplayMode();
        this.updateBypassAlias();
        this.updateAllChannels();
        if (this.stealEncoderMode())
            this.updateEncoder();
    }
    updateEncoder() {
        if (this.assignment.encoderMode == PanEncoderMode.kChannelEncoderMode) {
            if (this.focusChannelElement.component) {
                let channelType = this.focusChannelElement.getProperty(PreSonus.PropertyID.kChannelType);
                this.focusChannelElement.connectAliasParam(this.encoderValue, this.getEncoderValueParamID(channelType));
                this.focusChannelElement.connectAliasParam(this.pushEncoderValue, this.getPushEncoderValueParamID(channelType));
            }
            this.linkColor.fromString(kLinkColorOff);
        }
        else if (this.assignment.encoderMode == PanEncoderMode.kLinkEncoderMode) {
            this.recentParamElement.connectAliasParam(this.encoderValue, PreSonus.ParamID.kValue);
            this.recentParamElement.connectAliasParam(this.pushEncoderValue, PreSonus.ParamID.kValue);
            let locked = this.recentParamElement.locked;
            this.linkColor.fromString(locked ? kLinkColorLocked : kLinkColorOn);
        }
        else {
            this.encoderValue.setOriginal(null);
            this.pushEncoderValue.setOriginal(null);
            this.linkColor.fromString(kLinkColorOff);
        }
    }
    onEncoderInput(value) {
        if (this.assignment.encoderMode == PanEncoderMode.kPlugEncoderMode)
            PreSonus.HostUtils.selectNextDevice(this, this.focusInsertsBankElement, value >= 0.5 ? +1 : -1);
    }
    onConnectChannelMacroControl(controlIndex) {
        if (this.assignment.mode == ChannelAssignmentMode.kMacroMode)
            this.updateChannel(controlIndex);
    }
    onConnectFocusChannelInsert(insertIndex) {
        if (this.assignment.isPlugOverview())
            this.updateChannel(insertIndex);
    }
    onConnectFocusChannelSend(sendIndex) {
        if (this.assignment.isSendVisible(FolderSlotIndex.kSlotAll))
            this.updateChannel(sendIndex);
        else if (this.assignment.isSendVisible(sendIndex + 1))
            this.updateBypassAlias();
    }
    onConnectFocusChannelCue(cueIndex) {
        if (this.assignment.isCueVisible(FolderSlotIndex.kSlotAll))
            this.updateChannel(cueIndex);
    }
    onFaderTouched(channelIndex, value) {
        let supportsTouchParam = function (mode) {
            return mode == ChannelAssignmentMode.kTrackMode || mode == ChannelAssignmentMode.kInputGainMode;
        };
        let getTouchParamID = function (mode) {
            if (mode == ChannelAssignmentMode.kTrackMode)
                return PreSonus.ParamID.kVolume;
            else
                return PreSonus.ParamID.kInputFxGain;
        };
        let currentMode = this.assignment.mode;
        if (!supportsTouchParam(currentMode))
            return;
        let channel = this.channels[channelIndex];
        if (currentMode == ChannelAssignmentMode.kInputGainMode &&
            !this.isInputGainSupportingChannel(channel.channelType)) {
            return;
        }
        let isPressed = value != 0;
        if (isPressed) {
            if (channel.channelElement.isConnected()) {
                let paramID = getTouchParamID(currentMode);
                this.faderTouchTitle.setValue(paramID == PreSonus.ParamID.kInputFxGain ? "Gain" : "Volume");
                channel.setDisplayLineDirect(1, this.faderTouchTitle);
                channel.setDisplayLine(2, channel.channelElement, paramID);
                if (this.shiftPressedModifier.value)
                    channel.setVolumeOnTouch(channel.faderValue.value);
            }
        }
        else {
            let paramId = this.getEncoderValueParamID(channel.channelType);
            channel.setDisplayLine(1, channel.channelElement, PreSonus.ParamID.kNumber);
            channel.setDisplayLine(2, channel.channelElement, paramId);
            if (this.shiftPressedModifier.value)
                if (channel.channelElement.isConnected() && !this.faderMoved(channel))
                    channel.faderValue.setValue(channel.faderValue.default, true);
        }
    }
    faderMoved(channel) {
        let movedRatio = 1;
        if (channel.volumeOnTouch > channel.faderValue.value) {
            if (channel.faderValue.value > 0)
                movedRatio = channel.volumeOnTouch / channel.faderValue.value;
        }
        else {
            if (channel.volumeOnTouch > 0)
                movedRatio = channel.faderValue.value / channel.volumeOnTouch;
        }
        return movedRatio > 1.35;
    }
    restoreBigEncoderModeBeforePluginMode() {
        if (this.assignment.previousBigEncoderMode == BigEncoderMode.kInvalidBigEncoderMode)
            return;
        this.bigEncoderModeParam.value = this.assignment.previousBigEncoderMode;
        this.assignment.bigEncoderMode = this.bigEncoderModeParam.value;
        this.assignment.previousBigEncoderMode = BigEncoderMode.kInvalidBigEncoderMode;
    }
    onFunctionButtonPressed(value) {
        if (!value)
            return;
        if (this.shiftModifer.value)
            return;
        if (this.assignment.mode != ChannelAssignmentMode.kPlugMode)
            return;
        this.assignModeParam.value = ChannelAssignmentMode.kTrackMode;
        this.assignment.mode = ChannelAssignmentMode.kTrackMode;
        this.updateAssignment();
        this.assignment.previousBigEncoderMode = BigEncoderMode.kInvalidBigEncoderMode;
    }
    onTrackButtonPressed(value) {
        if (!value)
            return;
        this.restoreBigEncoderModeBeforePluginMode();
        if (this.assignment.mode != ChannelAssignmentMode.kTrackMode)
            return;
        this.assignment.meterMode = !this.assignment.meterMode;
        this.updateDisplayMode();
        this.syncDevice();
    }
    onPanButtonPressed(value) {
        if (!value)
            return;
        this.restoreBigEncoderModeBeforePluginMode();
        if (this.assignment.mode != ChannelAssignmentMode.kPanMode)
            return;
        this.assignment.meterMode = !this.assignment.meterMode;
        this.updateDisplayMode();
        this.syncDevice();
    }
    onPlugButtonPressed(value) {
        if (!value)
            return;
        if (this.shiftModifer.value)
            return;
        if (this.assignment.previousBigEncoderMode == BigEncoderMode.kInvalidBigEncoderMode)
            this.assignment.previousBigEncoderMode = this.bigEncoderModeParam.value;
        this.bigEncoderModeParam.value = BigEncoderMode.kPageSelectMode;
        if (this.assignment.isPlugEditModeWithFocus()) {
            this.assignment.controlLinkFocus = false;
            this.updateAssignment();
        }
        else if (this.assignment.isPlugOverview()) {
            if (this.hasControlLinkFocus()) {
                this.assignment.controlLinkFocus = true;
                this.updateAssignment();
            }
        }
    }
    onSendButtonPressed(value) {
        if (!value)
            return;
        this.restoreBigEncoderModeBeforePluginMode();
        if (this.assignment.mode == ChannelAssignmentMode.kSendMode)
            this.processSendsMode();
        else if (this.assignment.mode == ChannelAssignmentMode.kCueMode)
            this.processCuesMode();
        this.syncDevice();
    }
    setChannelSelectMode(index, mode) {
        let channel = this.channels[index];
        if (mode != channel.lastSelectMode) {
            channel.lastSelectMode = mode;
            let channelElement = channel.channelElement;
            if (channelElement.isAliasConnected(channel.selectValue, PreSonus.ParamID.kSelect))
                channelElement.setParamMode(PreSonus.ParamID.kSelect, mode);
        }
    }
    onSelectButtonBeginMode(index, value) {
        if (value) {
            if (this.shiftModifer.value)
                this.setChannelSelectMode(index, PreSonus.ParamID.kMultiSelectMode);
        }
    }
    onSelectButtonPressed(index, value) {
        if (value) {
            if (this.assignment.isPlugOverview()) {
                let element = this.channels[index].insertSlotElement;
                if (!element.isConnected())
                    return;
                PreSonus.HostUtils.openEditorAndFocus(this, element);
                if (this.hasControlLinkFocus() && !this.assignment.controlLinkFocus) {
                    this.assignment.controlLinkFocus = true;
                    this.updateAssignment();
                }
            }
            else {
                let channel = this.channels[index];
                let channelElement = channel.channelElement;
                if (channelElement.isAliasConnected(channel.selectValue, PreSonus.ParamID.kSelect)) {
                    if (channelElement.getParamValue(PreSonus.ParamID.kSelect))
                        PreSonus.HostUtils.makeChannelVisible(channelElement);
                }
            }
        }
        else {
            this.setChannelSelectMode(index, "");
        }
    }
    scrollChannelBank(direction) {
        let mode = this.assignment.bigEncoderMode;
        if (mode == BigEncoderMode.kChannelMode) {
            let stepSize = 1;
            this.channelBankElement.scroll(stepSize * direction);
        }
        else if (mode == BigEncoderMode.kBankMode || mode == BigEncoderMode.kMasterMode) {
            let placementBankPageSize = this.root.getPlacementGroupSize();
            let stepSize = (placementBankPageSize == 0) ?
                this.channelBankElement.pageSize : placementBankPageSize;
            this.channelBankElement.scroll(stepSize * direction);
        }
    }
    onPrevButtonPressed(value) {
        if (value)
            this.scrollChannelBank(ScrollDirection.kLeft);
    }
    onNextButtonPressed(value) {
        if (value)
            this.scrollChannelBank(ScrollDirection.kRight);
    }
    onBigEncoderPushed(value) {
        if (value) {
            let mode = this.assignment.bigEncoderMode;
            if (mode == BigEncoderMode.kChannelMode || mode == BigEncoderMode.kBankMode) {
                let channelIndex = this.getFocusChannelIndex();
                if (channelIndex != ChannelStrip.kInvalidChannelIndex) {
                    let stripCount = this.root.getPlacementGroupSize();
                    if (stripCount == 0)
                        stripCount = this.faderCount;
                    let position = Math.floor(channelIndex / stripCount) * stripCount;
                    this.channelBankElement.scrollTo(position);
                }
            }
        }
    }
    determineSlotIndex(folder, currentSlotIndex) {
        let maxSlots = this.faderCount;
        if (this.mixerMapping.component)
            maxSlots = this.mixerMapping.invokeChildMethod("audioMixer", "getMaxSlotCount", folder);
        let nextSlotIndex = currentSlotIndex + 1;
        if (nextSlotIndex >= FolderSlotIndex.kSlotFirst + this.faderCount ||
            nextSlotIndex >= FolderSlotIndex.kSlotFirst + maxSlots) {
            nextSlotIndex = FolderSlotIndex.kSlotAll;
        }
        return nextSlotIndex;
    }
    processSendsMode() {
        let sendIndex = this.determineSlotIndex(PreSonus.FolderID.kSendsFolder, this.assignment.sendIndex);
        if (sendIndex == this.assignment.sendIndex)
            return;
        this.assignment.sendIndex = sendIndex;
        this.updateDisplayMode();
        this.updateAllChannels();
        this.updateBypassAlias();
    }
    processCuesMode() {
        let cueIndex = this.determineSlotIndex(PreSonus.FolderID.kCueMixFolder, this.assignment.cueIndex);
        if (cueIndex == this.assignment.cueIndex)
            return;
        this.assignment.cueIndex = cueIndex;
        this.updateDisplayMode();
        this.updateAllChannels();
    }
    updateDisplayMode() {
        for (let i = 0; i < this.faderCount; i++)
            for (let line = 0; line < FP.Support.kMaxLineCount; line++)
                this.channels[i].lineStyles[line] = FP.TextStyle.kCenter;
        let centerInverted = FP.TextStyle.kCenter | FP.TextStyle.kInvert;
        let value = FP.DisplayMode.kDefault;
        switch (this.assignment.mode) {
            case ChannelAssignmentMode.kTrackMode:
                if (this.assignment.meterMode)
                    value = FP.DisplayMode.kMeterMode2;
                break;
            case ChannelAssignmentMode.kInputGainMode:
                for (let i = 0; i < this.faderCount; i++)
                    this.channels[i].lineStyles[1] = centerInverted;
                break;
            case ChannelAssignmentMode.kPanMode:
                if (this.assignment.meterMode)
                    value = FP.DisplayMode.kMeterMode2;
                break;
            case ChannelAssignmentMode.kPlugMode:
                value = FP.DisplayMode.kAltSmallMode;
                if (this.assignment.isPlugOverview()) {
                    this.channels[0].lineStyles[0] = centerInverted;
                }
                else if (this.assignment.isPlugEditModeWithFocus()) {
                    for (let i = 0; i < this.faderCount; i++) {
                        this.channels[i].lineStyles[0] = centerInverted;
                        this.channels[i].lineStyles[3] = centerInverted;
                    }
                }
                break;
            case ChannelAssignmentMode.kSendMode:
                value = FP.DisplayMode.kAltSmallMode;
                if (this.assignment.isSendVisible(FolderSlotIndex.kSlotAll))
                    this.channels[0].lineStyles[0] = centerInverted;
                else
                    for (let i = 0; i < this.faderCount; i++)
                        this.channels[i].lineStyles[0] = centerInverted;
                break;
            case ChannelAssignmentMode.kCueMode:
                value = FP.DisplayMode.kAltSmallMode;
                if (this.assignment.isCueVisible(FolderSlotIndex.kSlotAll))
                    this.channels[0].lineStyles[0] = centerInverted;
                else
                    for (let i = 0; i < this.faderCount; i++)
                        this.channels[i].lineStyles[0] = centerInverted;
                break;
            case ChannelAssignmentMode.kMacroMode:
                value = FP.DisplayMode.kAltSmallMode;
                for (let i = 0; i < this.faderCount; i++)
                    this.channels[i].lineStyles[3] = centerInverted;
                break;
            case ChannelAssignmentMode.kTimeMode:
                value = FP.DisplayMode.kAltMode;
                break;
        }
        for (let i = 0; i < this.faderCount; i++) {
            for (let line = 0; line < FP.Support.kMaxLineCount; line++)
                this.model.setControlOption("textCell[" + i + "][" + line + "]", FP.Support.kTextStyle, this.channels[i].lineStyles[line]);
            this.channels[i].displayMode.setValue(value, true);
        }
    }
    updateAllChannels() {
        for (let i = 0; i < this.faderCount; i++)
            this.updateChannel(i);
    }
    updateChannel(channelIndex) {
        let channel = this.channels[channelIndex];
        let mode = this.assignment.mode;
        if (mode == ChannelAssignmentMode.kMacroMode) {
            channel.clearDisplayLine(1);
            if (channel.macroFloatElement) {
                channel.setDisplayLine(2, channel.macroFloatElement, PreSonus.ParamID.kMacroTitle);
                channel.setDisplayLine(3, channel.macroFloatElement, PreSonus.ParamID.kMacroValue);
                channel.setDisplayValue(channel.macroFloatElement, PreSonus.ParamID.kMacroValue);
                channel.setFaderValue(channel.macroFloatElement, PreSonus.ParamID.kMacroValue);
            }
            else {
                channel.clearDisplayLine(2);
                channel.clearDisplayLine(3);
                channel.clearDisplayValue();
                channel.clearFaderValue();
            }
            if (channel.macroBoolElement) {
                channel.setDisplayLine(0, channel.macroBoolElement, PreSonus.ParamID.kMacroTitle);
                channel.setSelectValue(channel.macroBoolElement, PreSonus.ParamID.kMacroValue);
                channel.selectColor.setOriginal(this.plugEditColor);
            }
            else {
                channel.clearDisplayLine(0);
                channel.clearSelectValue();
                channel.clearSelectColor();
            }
        }
        else if (this.assignment.isPlugOverview()) {
            if (channelIndex == 0)
                channel.setDisplayLine(0, this.focusChannelElement, PreSonus.ParamID.kLabel);
            else
                channel.clearDisplayLine(0);
            channel.setDisplayLine(1, channel.insertSlotElement, PreSonus.ParamID.kInsertName);
            channel.clearDisplayLine(2);
            channel.clearDisplayLine(3);
            channel.clearDisplayValue();
            channel.selectValue.setOriginal(null);
            channel.selectColor.setOriginal(this.plugSelectColor);
            channel.setFaderValue(channel.channelElement, PreSonus.ParamID.kVolume);
        }
        else if (this.assignment.isPlugEditModeWithFocus()) {
            channel.clearDisplayLine(0);
            channel.setDisplayLine(1, channel.plugButtonElement, PreSonus.ParamID.kTitle);
            channel.setDisplayLine(2, channel.plugFaderElement, PreSonus.ParamID.kTitle);
            channel.setDisplayLine(3, channel.plugFaderElement, PreSonus.ParamID.kValue);
            channel.setDisplayValue(channel.plugFaderElement, PreSonus.ParamID.kValue);
            channel.setSelectValue(channel.plugButtonElement, PreSonus.ParamID.kValue);
            channel.selectColor.setOriginal(this.plugEditColor);
            channel.setFaderValue(channel.plugFaderElement, PreSonus.ParamID.kValue);
            if (channelIndex == this.pagingStatusIndex)
                channel.lines[0].setOriginal(this.pagingStatusParam);
        }
        else if (mode == ChannelAssignmentMode.kSendMode) {
            let sendSlotElement = null;
            let slotInfoLine = 3;
            if (this.assignment.sendIndex == FolderSlotIndex.kSlotAll) {
                sendSlotElement = this.focusSendsBankElement.getElement(channelIndex);
                if (channelIndex == 0)
                    channel.setDisplayLine(0, this.focusChannelElement, PreSonus.ParamID.kLabel);
                else
                    channel.clearDisplayLine(0);
                channel.clearDisplayLine(slotInfoLine);
            }
            else {
                sendSlotElement = channel.sendsBankElement.getElement(this.assignment.sendIndex - 1);
                channel.setDisplayLine(0, channel.channelElement, PreSonus.ParamID.kLabel);
                let showSlotInfo = sendSlotElement.isConnected() && channel.channelElement.isConnected() && this.isSendsSupportingChannel(channel.channelType);
                if (showSlotInfo) {
                    this.slotInfo.setValue(FPComponent.buildSlotInfo("Send", this.assignment.sendIndex));
                    channel.setDisplayLineDirect(slotInfoLine, this.slotInfo);
                }
                else
                    channel.clearDisplayLine(slotInfoLine);
            }
            channel.setDisplayLine(1, sendSlotElement, PreSonus.ParamID.kSendPort);
            channel.setDisplayLine(2, sendSlotElement, PreSonus.ParamID.kSendLevel);
            channel.setDisplayValue(sendSlotElement, PreSonus.ParamID.kSendLevel);
            channel.setSelectValue(channel.channelElement, PreSonus.ParamID.kSelect);
            channel.setSelectColor(channel.channelElement, PreSonus.ParamID.kColor);
            channel.setFaderValue(sendSlotElement, PreSonus.ParamID.kSendLevel);
        }
        else if (mode == ChannelAssignmentMode.kCueMode) {
            let cueSlotElement = null;
            let slotInfoLine = 3;
            if (this.assignment.cueIndex == FolderSlotIndex.kSlotAll) {
                cueSlotElement = this.focusCuesBankElement.getElement(channelIndex);
                if (channelIndex == 0)
                    channel.setDisplayLine(0, this.focusChannelElement, PreSonus.ParamID.kLabel);
                else
                    channel.clearDisplayLine(0);
                channel.clearDisplayLine(slotInfoLine);
            }
            else {
                cueSlotElement = channel.cuesBankElement.getElement(this.assignment.cueIndex - 1);
                channel.setDisplayLine(0, channel.channelElement, PreSonus.ParamID.kLabel);
                let showSlotInfo = cueSlotElement.isConnected() && channel.channelElement.isConnected() && this.isCuesSupportingChannel(channel.channelType);
                if (showSlotInfo) {
                    this.slotInfo.setValue(FPComponent.buildSlotInfo("Cue", this.assignment.cueIndex));
                    channel.setDisplayLineDirect(slotInfoLine, this.slotInfo);
                }
                else
                    channel.clearDisplayLine(slotInfoLine);
            }
            channel.setDisplayLine(1, cueSlotElement, PreSonus.ParamID.kCueMixDestination);
            channel.setDisplayLine(2, cueSlotElement, PreSonus.ParamID.kCueMixLevel);
            channel.setDisplayValue(cueSlotElement, PreSonus.ParamID.kCueMixLevel);
            channel.setSelectValue(channel.channelElement, PreSonus.ParamID.kSelect);
            channel.setSelectColor(channel.channelElement, PreSonus.ParamID.kColor);
            channel.setFaderValue(cueSlotElement, PreSonus.ParamID.kCueMixLevel);
        }
        else if (mode == ChannelAssignmentMode.kTimeMode) {
            channel.clearDisplayLine(0);
            channel.clearDisplayLine(1);
            channel.setDisplayLine(2, channel.channelElement, PreSonus.ParamID.kLabel);
            channel.setDisplayValue(channel.channelElement, this.getEncoderValueParamID(channel.channelType));
            channel.setSelectValue(channel.channelElement, PreSonus.ParamID.kSelect);
            channel.setSelectColor(channel.channelElement, PreSonus.ParamID.kColor);
            channel.setFaderValue(channel.channelElement, PreSonus.ParamID.kVolume);
        }
        else {
            channel.setDisplayLine(0, channel.channelElement, PreSonus.ParamID.kLabel);
            channel.setDisplayLine(1, channel.channelElement, PreSonus.ParamID.kNumber);
            channel.setDisplayLine(2, channel.channelElement, this.getEncoderValueParamID(channel.channelType));
            channel.clearDisplayLine(3);
            channel.setDisplayValue(channel.channelElement, this.getEncoderValueParamID(channel.channelType));
            channel.setSelectValue(channel.channelElement, PreSonus.ParamID.kSelect);
            channel.setSelectColor(channel.channelElement, PreSonus.ParamID.kColor);
            let faderParameter;
            switch (mode) {
                case ChannelAssignmentMode.kPanMode:
                    faderParameter = this.getEncoderValueParamID(channel.channelType);
                    break;
                case ChannelAssignmentMode.kInputGainMode:
                    faderParameter = PreSonus.ParamID.kInputFxGain;
                    break;
                case ChannelAssignmentMode.kTrackMode:
                default:
                    faderParameter = PreSonus.ParamID.kVolume;
            }
            channel.setFaderValue(channel.channelElement, faderParameter);
        }
    }
    static buildSlotInfo(name, slotNumber) {
        return "[" + name + " " + slotNumber + "]";
    }
    onShiftButtonPressed(state) {
        this.shiftPressedModifier.setValue(state);
    }
    isPanSupportingChannel(channelType) {
        return channelType != PreSonus.ChannelType.kAudioOutput
            && channelType != PreSonus.ChannelType.kAudioListenBus;
    }
    isSendsSupportingChannel(channelType) {
        return channelType != PreSonus.ChannelType.kAudioOutput
            && channelType != PreSonus.ChannelType.kAudioListenBus
            && channelType != PreSonus.ChannelType.kAudioEffect;
    }
    isCuesSupportingChannel(channelType) {
        return channelType == PreSonus.ChannelType.kAudioTrack
            || channelType == PreSonus.ChannelType.kAudioSynth
            || channelType == PreSonus.ChannelType.kAudioAux;
    }
    isInputGainSupportingChannel(channelType) {
        return channelType != PreSonus.ChannelType.kAudioOutput &&
            channelType != PreSonus.ChannelType.kAudioListenBus;
    }
    getEncoderValueParamID(channelType) {
        if (this.isPanSupportingChannel(channelType))
            return PreSonus.ParamID.kPan;
        else
            return PreSonus.ParamID.kAudioClickGain;
    }
    getPushEncoderValueParamID(channelType) {
        if (this.isPanSupportingChannel(channelType))
            return PreSonus.ParamID.kPan;
        else
            return PreSonus.ParamID.kAudioClickOn;
    }
}
function createFP8ComponentInstance() {
    return new FPComponent(8);
}
function createFP16ComponentInstance() {
    return new FPComponent(16);
}
