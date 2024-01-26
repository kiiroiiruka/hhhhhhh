include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
include_file("resource://com.presonus.musicdevices/sdk/musicprotocol.js");
include_file("../Shared/ATOMCommonComponent.js");
const kPadCount = 16;
const kBankCount = 8;
var PadSectionMode;
(function (PadSectionMode) {
    PadSectionMode[PadSectionMode["kPlayMode"] = 0] = "kPlayMode";
    PadSectionMode[PadSectionMode["kSetupMode"] = 1] = "kSetupMode";
    PadSectionMode[PadSectionMode["kLoopEditMode"] = 2] = "kLoopEditMode";
    PadSectionMode[PadSectionMode["kEventEditMode"] = 3] = "kEventEditMode";
    PadSectionMode[PadSectionMode["kInstrumentEditMode"] = 4] = "kInstrumentEditMode";
    PadSectionMode[PadSectionMode["kBankMenuMode"] = 5] = "kBankMenuMode";
    PadSectionMode[PadSectionMode["kRepeatMenuMode"] = 6] = "kRepeatMenuMode";
    PadSectionMode[PadSectionMode["kPitchMenuMode"] = 7] = "kPitchMenuMode";
    PadSectionMode[PadSectionMode["kRateTriggerMode"] = 8] = "kRateTriggerMode";
    PadSectionMode[PadSectionMode["kStepEditMode"] = 9] = "kStepEditMode";
    PadSectionMode[PadSectionMode["kRestorePlayMode"] = 10] = "kRestorePlayMode";
    PadSectionMode[PadSectionMode["kLastPadMode"] = 10] = "kLastPadMode";
})(PadSectionMode || (PadSectionMode = {}));
var KnobMode;
(function (KnobMode) {
    KnobMode[KnobMode["kDefault"] = 0] = "kDefault";
    KnobMode[KnobMode["kShiftOverlay"] = 1] = "kShiftOverlay";
    KnobMode[KnobMode["kSamplerOverlay"] = 2] = "kSamplerOverlay";
    KnobMode[KnobMode["kSamplerAltOverlay"] = 3] = "kSamplerAltOverlay";
    KnobMode[KnobMode["kSetup"] = 4] = "kSetup";
    KnobMode[KnobMode["kLoopEdit"] = 5] = "kLoopEdit";
    KnobMode[KnobMode["kNoteRepeater"] = 6] = "kNoteRepeater";
    KnobMode[KnobMode["kModeMin"] = 0] = "kModeMin";
    KnobMode[KnobMode["kModeMax"] = 6] = "kModeMax";
})(KnobMode || (KnobMode = {}));
var NavigationMode;
(function (NavigationMode) {
    NavigationMode[NavigationMode["kDefault"] = 0] = "kDefault";
    NavigationMode[NavigationMode["kExtend"] = 1] = "kExtend";
    NavigationMode[NavigationMode["kZoom"] = 2] = "kZoom";
    NavigationMode[NavigationMode["kPreset"] = 3] = "kPreset";
    NavigationMode[NavigationMode["kNudge"] = 4] = "kNudge";
    NavigationMode[NavigationMode["kNudgeAndPreset"] = 5] = "kNudgeAndPreset";
    NavigationMode[NavigationMode["kBrowser"] = 6] = "kBrowser";
    NavigationMode[NavigationMode["kCommandPaging"] = 7] = "kCommandPaging";
    NavigationMode[NavigationMode["kTransport"] = 8] = "kTransport";
    NavigationMode[NavigationMode["kControlLinkPaging"] = 9] = "kControlLinkPaging";
    NavigationMode[NavigationMode["kPadCopyPaste"] = 10] = "kPadCopyPaste";
    NavigationMode[NavigationMode["kModeMin"] = 0] = "kModeMin";
    NavigationMode[NavigationMode["kModeMax"] = 10] = "kModeMax";
})(NavigationMode || (NavigationMode = {}));
var PadIndex;
(function (PadIndex) {
    PadIndex[PadIndex["kDuplicate"] = 8] = "kDuplicate";
    PadIndex[PadIndex["kDelete"] = 9] = "kDelete";
    PadIndex[PadIndex["kVelocityDec"] = 10] = "kVelocityDec";
    PadIndex[PadIndex["kVelocityInc"] = 11] = "kVelocityInc";
    PadIndex[PadIndex["kBrowser"] = 12] = "kBrowser";
    PadIndex[PadIndex["kTempo"] = 13] = "kTempo";
    PadIndex[PadIndex["kLoopBackwards"] = 14] = "kLoopBackwards";
    PadIndex[PadIndex["kLoopForward"] = 15] = "kLoopForward";
})(PadIndex || (PadIndex = {}));
let padRepeatRates = [
    PreSonus.NoteRepeat.k4thPpq,
    PreSonus.NoteRepeat.k8thPpq,
    PreSonus.NoteRepeat.k16thPpq,
    PreSonus.NoteRepeat.k32thPpq,
    PreSonus.NoteRepeat.k4thTPpq,
    PreSonus.NoteRepeat.k8thTPpq,
    PreSonus.NoteRepeat.k16thTPpq,
    PreSonus.NoteRepeat.k32thTPpq
];
const kDefaultBankColor = "#002CFF";
const kPadCommandColor = "yellow";
const kRateTriggerColor = "orange";
const kRepeatMenuColor = "blue";
const kPadFocusOnColor = "orange";
const kPadFocusOffColor = "blue";
const kSelectButtonColor = "blue";
const kPlayButtonColor = "green";
const kLoopButtonColor = "aqua";
let bankColors = [
    "#0020FF",
    "lime",
    "yellow",
    "purple",
    "orangered",
    "cyan",
    "crimson",
    "#FF7210"
];
let padSnapColors = [
    "red",
    "orangered",
    "yellow",
    "greenyellow",
    "green",
    "blue",
    "aqua",
    "magenta",
    "darkviolet",
    "gray"
];
let keyboardModeColors = [
    "orange",
    "aqua",
    "#FF3200",
    "#DD640C",
    "purple",
    "red"
];
const kDefaultBank = 0;
const kDefaultOctave = 3;
class ATOMComponent extends ATOMTrackSamplerComponent {
    onInit(hostComponent) {
        super.onInit(hostComponent);
        this.debugLog = false;
        this.model = hostComponent.model;
        let root = this.model.root;
        this.pagingComponent = hostComponent.find(PreSonus.ComponentID.kPaging);
        this.padSection = root.find("PadSectionElement");
        this.noteRepeatElement = root.find("NoteRepeatElement");
        let paramList = hostComponent.paramList;
        this.shiftModifier = paramList.addParam("shiftModifier");
        this.nudgeModifier = paramList.addParam("nudgeModifier");
        this.presetModifier = paramList.addParam("presetModifier");
        this.zoomModifier = paramList.addParam("zoomModifier");
        this.padMode = paramList.addInteger(0, PadSectionMode.kLastPadMode, "padMode");
        this.padFocusMode = paramList.addParam("padFocusMode");
        this.fullVelocityMode = paramList.addParam("fullVelocityMode");
        this.bankMenu = paramList.addInteger(0, kBankCount - 1, "bankMenu");
        this.pitchMenu = paramList.addInteger(0, kPadCount - 1, "pitchMenu");
        this.repeatRateAlias = paramList.addAlias("repeatRate");
        this.editorModeActive = paramList.addParam("editorModeActive");
        this.onLEDParam = paramList.addParam("onLED");
        this.onLEDParam.setValue(1, true);
        this.samplerControlsActive = paramList.addParam("samplerControlsActive");
        this.samplerControlsActive.setValue(0);
        this.knobMode = paramList.addInteger(KnobMode.kModeMin, KnobMode.kModeMax, "knobMode");
        this.knobMode.setValue(KnobMode.kDefault);
        this.navigationMode = paramList.addInteger(NavigationMode.kModeMin, NavigationMode.kModeMax, "navMode");
        this.navigationMode.setValue(NavigationMode.kDefault);
        this.musicTrackDevice = this.model.root.find("MusicTrackMapping");
        this.musicTrackDeviceFocusChannelBank = this.musicTrackDevice.find("FocusChannelMapping");
        this.mixerConsole = this.model.root.find("MixerMapping");
        this.mixerConsoleFocusChannelBank = this.mixerConsole.find("FocusBankElement");
        this.focusTrackColorParam = paramList.addAlias("focusTrackColor");
        this.focusTrackColorParam.setFeedbackNeeded(true);
        this.scaleParam = paramList.addList("scale");
        let scales = [
            "Chromatic", "Major", "Melodic Minor", "Harmonic Minor", "Natural Minor", "Major Pentatonic",
            "Minor Pentatonic", "Blues", "Dorian", "Mixolydian", "Phrygian", "Major Triad", "Minor Triad"
        ];
        for (let scaleIndex = 0; scaleIndex < scales.length; scaleIndex++)
            this.scaleParam.appendString(scales[scaleIndex]);
        this.updatePadScale(this.scaleParam.value);
        this.rootOffsetParam = paramList.addList("rootOffset");
        let keys = [
            "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
        ];
        for (let keyIndex = 0; keyIndex < keys.length; keyIndex++)
            this.rootOffsetParam.appendString(keys[keyIndex]);
        this.isKeyboardModeParam = paramList.addParam("keyboardModeEngaged");
        this.bankMenuColor = paramList.addColor("bankButtonColor");
        this.updateBankMenuColor();
        paramList.addColor("padFocusOnColor").fromString(kPadFocusOnColor);
        paramList.addColor("padFocusOffColor").fromString(kPadFocusOffColor);
        paramList.addColor("selectButtonColor").fromString(kSelectButtonColor);
        paramList.addColor("playButtonColor").fromString(kPlayButtonColor);
        paramList.addColor("loopButtonColor").fromString(kLoopButtonColor);
        paramList.addColor("whiteColor").fromString("white");
        paramList.addColor("buttonOffColor").fromString("#262626");
        let c = this.padSection.component;
        c.setPadColoringSupported(true);
        for (let i = 0; i < padSnapColors.length; i++)
            c.addPadPaletteColor(padSnapColors[i]);
        let keyboardModeSettings = c.keyboardModeSettings;
        keyboardModeSettings.whiteKeyColor = keyboardModeColors[0];
        keyboardModeSettings.blackKeyColor = keyboardModeColors[1];
        keyboardModeSettings.octave0Color = keyboardModeColors[2];
        keyboardModeSettings.octave1Color = keyboardModeColors[3];
        keyboardModeSettings.octave2Color = keyboardModeColors[4];
        keyboardModeSettings.octave3Color = keyboardModeColors[5];
        this.setupPadSectionHandlers(c);
        c.setActiveHandler(PadSectionMode.kPlayMode);
        this.padFocusMode.setValue(1, true);
        this.lastTrackEditorType = PreSonus.HostUtils.kEditorTypeNone;
        PreSonus.HostUtils.enableEngineEditNotifications(this, true);
        Host.Signals.advise(c, this);
        this.bankMenu.setValue(kDefaultBank, true);
        this.padSection.component.setCurrentOctave(kDefaultOctave);
    }
    onExit() {
        let c = this.padSection.component;
        Host.Signals.unadvise(c, this);
        PreSonus.HostUtils.enableEngineEditNotifications(this, false);
        super.onExit();
    }
    setupPadSectionHandlers(c) {
        for (let mode = 0; mode <= PadSectionMode.kLastPadMode; mode++) {
            switch (mode) {
                case PadSectionMode.kPlayMode:
                    {
                        c.addHandlerForRole(PreSonus.PadSectionRole.kMusicInput);
                        let musicInputHandler = c.getHandler(mode);
                        musicInputHandler.setDisplayMode(PreSonus.MusicPadDisplayMode.kBrightColors);
                        musicInputHandler.setPadColor(kDefaultBankColor);
                        for (let i = 0; i < kBankCount; i++)
                            musicInputHandler.setBankColor(i, bankColors[i]);
                    }
                    break;
                case PadSectionMode.kSetupMode:
                    {
                        let commands = [];
                        for (let padIndex = 0; padIndex < 8; padIndex++)
                            PreSonus.PadSection.addCommand(commands, padIndex, "", "", "", PreSonus.PadSection.kCommandItemUserAssignable);
                        PreSonus.PadSection.addCommand(commands, PadIndex.kBrowser, "Browser", "Show Instruments", "", "0", PreSonus.HostUtils.kBrowserZone);
                        PreSonus.PadSection.addCommand(commands, PadIndex.kTempo, "Transport", "Tap Tempo", "", PreSonus.PadSection.kCommandItemDirect);
                        PreSonus.PadSection.addCommand(commands, PadIndex.kDuplicate, "Edit", "Duplicate");
                        PreSonus.PadSection.addCommand(commands, PadIndex.kDelete, "Edit", "Delete");
                        c.addCommandInputHandler(commands);
                        c.getHandler(mode).setPadColor(kPadCommandColor);
                    }
                    break;
                case PadSectionMode.kLoopEditMode:
                    {
                        let commands = [];
                        PreSonus.PadSection.addCommand(commands, PadIndex.kLoopBackwards, "Transport", "Shift Loop Backwards");
                        PreSonus.PadSection.addCommand(commands, PadIndex.kLoopForward, "Transport", "Shift Loop");
                        c.addCommandInputHandler(commands);
                        c.getHandler(mode).setPadColor(kPadCommandColor);
                    }
                    break;
                case PadSectionMode.kEventEditMode:
                    {
                        let commands = [];
                        PreSonus.PadSection.addCommand(commands, PadIndex.kDuplicate, "Edit", "Duplicate");
                        PreSonus.PadSection.addCommand(commands, PadIndex.kDelete, "Edit", "Delete");
                        PreSonus.PadSection.addCommand(commands, PadIndex.kVelocityDec, "Musical Functions", "Velocity", "Mode=0;AddValue=-0.1");
                        PreSonus.PadSection.addCommand(commands, PadIndex.kVelocityInc, "Musical Functions", "Velocity", "Mode=0;AddValue=0.1");
                        c.addCommandInputHandler(commands);
                        c.getHandler(mode).setPadColor(kPadCommandColor);
                    }
                    break;
                case PadSectionMode.kBankMenuMode:
                    {
                        let items = [];
                        for (let i = 0; i < kBankCount; i++)
                            items.push({ "padIndex": i, "value": i, "color": bankColors[i] });
                        c.addMenuHandler(items, this.bankMenu, 0);
                        c.getHandler(mode).setPadColor(kDefaultBankColor);
                    }
                    break;
                case PadSectionMode.kRepeatMenuMode:
                    c.addMenuHandler(padRepeatRates, this.repeatRateAlias, PreSonus.PadSection.kMenuUseListAccess);
                    c.getHandler(mode).setPadColor(kRepeatMenuColor);
                    break;
                case PadSectionMode.kPitchMenuMode:
                    {
                        let items = [];
                        for (let i = 0; i < kPadCount; i++)
                            items.push(i);
                        c.addMenuHandler(items, this.pitchMenu, PreSonus.PadSection.kMenuUseMusicInput);
                        c.getHandler(mode).setPadColor(kDefaultBankColor);
                    }
                    break;
                case PadSectionMode.kRateTriggerMode:
                    c.addHandlerForRole(PreSonus.PadSectionRole.kRateTrigger);
                    c.getHandler(mode).setPadColor(kRateTriggerColor);
                    for (let padIndex = 0; padIndex < padRepeatRates.length; padIndex++)
                        c.setPadRate(padIndex, padRepeatRates[padIndex]);
                    break;
                case PadSectionMode.kStepEditMode:
                    c.addHandlerForRole(PreSonus.PadSectionRole.kStepEdit);
                    break;
                default:
                    c.addNullHandler();
                    break;
            }
        }
    }
    getPadMode() {
        return this.padMode.value;
    }
    setPadMode(mode) {
        if (this.getPadMode() == PadSectionMode.kStepEditMode)
            this.padSection.component.setModifierActive(false, PreSonus.PadModifier.kStepBinding);
        this.padMode.setValue(mode, true);
    }
    onEditorButtonPressed(state) {
        if (!state)
            return;
        let mode = this.getPadMode();
        if (mode == PadSectionMode.kStepEditMode || mode == PadSectionMode.kEventEditMode) {
            this.restorePlayMode();
        }
        else {
            mode = this.lastTrackEditorType == PreSonus.HostUtils.kEditorTypePattern ? PadSectionMode.kStepEditMode : PadSectionMode.kEventEditMode;
            this.setPadMode(mode);
            Host.GUI.Commands.deferCommand("View", "Editor", false, Host.Attributes(["State", true]));
        }
    }
    onTrackEditorChanged(editor) {
        let mode = this.getPadMode();
        let editorType = PreSonus.HostUtils.getEditorType(editor);
        this.lastTrackEditorType = editorType;
        if (mode == PadSectionMode.kStepEditMode || mode == PadSectionMode.kEventEditMode) {
            if (editorType == PreSonus.HostUtils.kEditorTypePattern)
                this.setPadMode(PadSectionMode.kStepEditMode);
            else if (editorType == PreSonus.HostUtils.kEditorTypeMusic)
                this.setPadMode(PadSectionMode.kEventEditMode);
            else
                this.restorePlayMode();
        }
    }
    notify(subject, msg) {
        if (msg.id == PreSonus.HostUtils.kTrackEditorChanged)
            this.onTrackEditorChanged(msg.getArg(0));
        else if (msg.id == PreSonus.PadSection.kCurrentBankChanged)
            this.updateBankMenuColor();
        else if (msg.id == "changed") {
            if (subject == this.focusTrackColorParam)
                this.onTrackColorChange(this.focusTrackColorParam.value);
        }
        else if (msg.id == PreSonus.PadSection.kKeyboardModeChanged) {
            let padSectionComponent = subject;
            this.isKeyboardModeParam.setValue(padSectionComponent.isKeyboardMode(), true);
            this.updateBankMenuColor();
        }
    }
    onShowHideButtonPressed(state) {
        if (!state)
            return;
        if (this.shiftModifier.value) {
            let focusElement = this.musicTrackDeviceFocusChannelBank.getElement(0);
            PreSonus.HostUtils.openEditorAndFocus(this, focusElement, PreSonus.HostUtils.kNoteFXEditor, true);
        }
        else {
            let focusElement = this.mixerConsoleFocusChannelBank.getElement(0);
            PreSonus.HostUtils.openEditorAndFocus(this, focusElement, PreSonus.HostUtils.kInstrumentEditor, true);
        }
    }
    onNoteRepeatButtonPressed(state) {
        if (state) {
            let shiftPressed = this.shiftModifier.value;
            let repeatActive = this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive);
            let spreadActive = this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kSpread);
            if (shiftPressed) {
                if (spreadActive)
                    this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kSpread, false);
                else
                    this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kActive, !repeatActive);
            }
            else {
                if (repeatActive) {
                    this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kActive, false);
                    this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kSpread, false);
                }
                else {
                    this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kActive, true);
                    this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kSpread, true);
                }
            }
        }
    }
    onConnectNoteRepeat() {
        this.noteRepeatElement.connectAliasParam(this.repeatRateAlias, PreSonus.NoteRepeat.kRate);
        let repeatActive = this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive);
        this.onActivateNoteRepeat(repeatActive);
    }
    onActivateNoteRepeat(value) {
        if (value) {
            if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kSpread))
                this.setPadMode(PadSectionMode.kRateTriggerMode);
        }
        else {
            if (this.getPadMode() == PadSectionMode.kRateTriggerMode)
                this.setPadMode(PadSectionMode.kPlayMode);
        }
        this.updateKnobMode();
    }
    onSpreadModeChanged(value) {
        if (value) {
            if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive))
                this.setPadMode(PadSectionMode.kRateTriggerMode);
        }
        else {
            if (this.getPadMode() == PadSectionMode.kRateTriggerMode)
                this.setPadMode(PadSectionMode.kPlayMode);
        }
    }
    onSelectButtonPressed(state) {
        if (state) {
            if (this.samplerControlsActive.value) {
                this.samplerControlsActive.setValue(0, true);
            }
            else if (this.shiftModifier.value && this.getPadMode() == PadSectionMode.kPlayMode) {
                this.samplerControlsActive.setValue(1, true);
            }
            else if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive)) {
                if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kSpread))
                    this.setPadMode(PadSectionMode.kPitchMenuMode);
                else
                    this.setPadMode(PadSectionMode.kRepeatMenuMode);
            }
            else if (this.getPadMode() == PadSectionMode.kSetupMode) {
                PreSonus.HostUtils.focusWorkspaceFrame(PreSonus.HostUtils.kBrowserZone, false);
                let shouldReplace = this.shiftModifier.value;
                let args = Host.Attributes(["Replace", shouldReplace]);
                Host.GUI.Commands.interpretCommand("Browser", "Insert Selected Item", false, args);
                args = Host.Attributes(["State", false]);
                Host.GUI.Commands.interpretCommand("View", "Browser", false, args);
                this.restorePlayMode();
            }
            else if (this.getPadMode() == PadSectionMode.kEventEditMode) {
                this.shiftModifier.value = state;
            }
            else if (this.getPadMode() == PadSectionMode.kStepEditMode) {
                this.padSection.component.setModifierActive(state, PreSonus.PadModifier.kStepBinding);
            }
            else {
                let commandName = this.shiftModifier.value ? "Cancel" : "Enter";
                Host.GUI.Commands.deferCommand("Navigation", commandName);
            }
        }
        else {
            switch (this.getPadMode()) {
                case PadSectionMode.kRepeatMenuMode:
                    this.setPadMode(PadSectionMode.kPlayMode);
                    break;
                case PadSectionMode.kPitchMenuMode:
                    this.setPadMode(PadSectionMode.kRateTriggerMode);
                    break;
                case PadSectionMode.kEventEditMode:
                    this.shiftModifier.value = state;
                    break;
                case PadSectionMode.kStepEditMode:
                    this.padSection.component.setModifierActive(state, PreSonus.PadModifier.kStepBinding);
                    break;
            }
        }
    }
    updateSamplerControlsActiveState(update) {
        if (this.padMode.value != PadSectionMode.kPlayMode && this.padMode.value != PadSectionMode.kBankMenuMode)
            this.samplerControlsActive.setValue(0, update);
        else if (this.samplerControlsActive.value && !this.hasSamplerInFocus())
            this.samplerControlsActive.setValue(0, update);
    }
    updateKnobMode() {
        let mode = KnobMode.kDefault;
        switch (this.padMode.value) {
            case PadSectionMode.kPlayMode:
                {
                    if (this.shiftModifier.value && this.samplerControlsActive.value && this.samplerControlMode.value != SamplerControlMode.kNone)
                        mode = KnobMode.kSamplerAltOverlay;
                    else if (this.shiftModifier.value)
                        mode = KnobMode.kShiftOverlay;
                    else if (this.samplerControlsActive.value)
                        mode = KnobMode.kSamplerOverlay;
                    else if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive))
                        mode = KnobMode.kNoteRepeater;
                    break;
                }
            case PadSectionMode.kRateTriggerMode:
            case PadSectionMode.kRepeatMenuMode:
                {
                    if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive))
                        mode = KnobMode.kNoteRepeater;
                    break;
                }
            case PadSectionMode.kSetupMode:
                {
                    mode = KnobMode.kSetup;
                    break;
                }
            case PadSectionMode.kLoopEditMode:
                {
                    mode = KnobMode.kLoopEdit;
                    break;
                }
            default:
                break;
        }
        this.knobMode.setValue(mode);
    }
    updateNavigationMode() {
        let mode = NavigationMode.kDefault;
        switch (this.padMode.value) {
            case PadSectionMode.kPlayMode:
                mode = this.samplerControlsActive.value ? NavigationMode.kPadCopyPaste : this.getModifierNavigationMode();
                break;
            case PadSectionMode.kSetupMode:
                mode = this.shiftModifier.value ? NavigationMode.kCommandPaging : NavigationMode.kBrowser;
                break;
            case PadSectionMode.kLoopEditMode:
                mode = NavigationMode.kTransport;
                break;
            case PadSectionMode.kBankMenuMode:
                mode = NavigationMode.kControlLinkPaging;
                break;
            default:
                mode = this.getModifierNavigationMode();
        }
        this.navigationMode.setValue(mode);
    }
    getModifierNavigationMode() {
        if (this.zoomModifier.value)
            return NavigationMode.kZoom;
        if (this.shiftModifier.value)
            return NavigationMode.kExtend;
        let preset = this.presetModifier.value;
        let nudge = this.nudgeModifier.value;
        if (preset && !nudge)
            return NavigationMode.kPreset;
        else if (!preset && nudge)
            return NavigationMode.kNudge;
        else if (preset && nudge)
            return NavigationMode.kNudgeAndPreset;
        return NavigationMode.kDefault;
    }
    paramChanged(param) {
        if (param == this.shiftModifier) {
            this.padSection.component.setModifierActive(param.value, PreSonus.PadModifier.kAccentedStep);
            this.updateKnobMode();
            this.updateNavigationMode();
        }
        else if (param == this.presetModifier) {
            this.updateNavigationMode();
        }
        else if (param == this.zoomModifier) {
            this.updateNavigationMode();
        }
        else if (param == this.nudgeModifier) {
            this.updateNavigationMode();
        }
        else if (param == this.padFocusMode) {
            let musicInputHandler = this.padSection.component.getHandler(PadSectionMode.kPlayMode);
            musicInputHandler.setFocusPadWhenPressed(param.value);
        }
        else if (param == this.padMode) {
            if (param.value == PadSectionMode.kRestorePlayMode)
                this.restorePlayMode();
            else
                this.updatePadMode();
            this.updateSamplerControlsActiveState(false);
            this.updateKnobMode();
            this.updateNavigationMode();
        }
        else if (param == this.samplerControlsActive) {
            this.updateKnobMode();
            this.updateNavigationMode();
        }
        else if (param == this.fullVelocityMode) {
            this.padSection.component.setFullVelocityMode(param.value);
        }
        else if (param == this.bankMenu) {
            if (this.isKeyboardModeParam.value) {
                this.padSection.component.setCurrentOctave(param.value);
                this.updateBankMenuColor();
            }
            else
                this.padSection.component.setCurrentBank(param.value);
        }
        else if (param == this.pitchMenu) {
            let c = this.padSection.component;
            let keyboardMode = c.isKeyboardMode();
            let bank = keyboardMode ? c.getCurrentOctave() : c.getCurrentBank();
            let padIndex = this.pitchMenu.value;
            let pitch = 0;
            if (keyboardMode)
                pitch = PreSonus.Music.kPitchC0 + (bank * 12) + padIndex;
            else {
                let musicInputHandler = c.getHandler(PadSectionMode.kPlayMode);
                musicInputHandler.setFocusPad(padIndex);
                pitch = PreSonus.Music.padIndexToSymbolicPitch(bank * kPadCount + padIndex);
            }
            this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kSpreadNote, pitch);
            this.noteRepeatElement.setParamValue(PreSonus.NoteRepeat.kSpreadNoteSymbolic, keyboardMode == false);
        }
        else if (param == this.scaleParam) {
            this.updatePadScale(param.value);
        }
        else if (param == this.rootOffsetParam) {
            this.updateRootOffset(param.value);
        }
    }
    restorePlayMode() {
        if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kSpread))
            this.setPadMode(PadSectionMode.kRateTriggerMode);
        else
            this.setPadMode(PadSectionMode.kPlayMode);
    }
    updatePadMode() {
        let mode = this.getPadMode();
        let c = this.padSection.component;
        switch (mode) {
            case PadSectionMode.kSetupMode:
                this.zoomModifier.value = false;
                break;
            case PadSectionMode.kBankMenuMode:
                this.bankMenu.value = c.isKeyboardMode() ? c.getCurrentOctave() : c.getCurrentBank();
                break;
            case PadSectionMode.kPitchMenuMode:
                {
                    let pitch = this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kSpreadNote);
                    let keyboardMode = c.isKeyboardMode();
                    let padIndex = 0;
                    if (keyboardMode)
                        padIndex = pitch % 12;
                    else
                        padIndex = PreSonus.Music.symbolicPitchToPadIndex(pitch) % kPadCount;
                    this.pitchMenu.value = padIndex;
                }
                break;
        }
        c.setActiveHandler(mode);
        this.editorModeActive.value = mode == PadSectionMode.kEventEditMode || mode == PadSectionMode.kStepEditMode;
    }
    updateBankMenuColor() {
        let c = this.padSection.component;
        let bank = c.isKeyboardMode() ? c.getCurrentOctave() : c.getCurrentBank();
        let bankColor = bankColors[bank];
        this.bankMenuColor.fromString(bankColor);
    }
    useUnicolorPads() {
        return this.scaleParam.value != PreSonus.MusicalScale.kChromatic;
    }
    updatePadScale(scale) {
        this.padSection.component.setScale(scale);
        this.padSection.component.setAccentColor(this.focusTrackColorParam.value, this.useUnicolorPads());
    }
    updateRootOffset(offset) {
        this.padSection.component.setRootOffset(offset);
    }
    onMixerConsoleFollowBankChanged() {
        this.syncChannelColor(this.mixerConsole, this.mixerConsoleFocusChannelBank);
    }
    onMusicTrackFocusChannelChanged() {
        this.syncChannelColor(this.musicTrackDevice, this.musicTrackDeviceFocusChannelBank);
    }
    syncChannelColor(deviceMapping, bank) {
        if (!deviceMapping.isConnected())
            return;
        let channel = bank.getElement(0);
        if (!channel || !channel.isConnected())
            return;
        let previousColor = this.focusTrackColorParam.value;
        channel.connectAliasParam(this.focusTrackColorParam, PreSonus.ParamID.kColor);
        let color = channel.getParamValue(PreSonus.ParamID.kColor);
        if (color == previousColor)
            return;
        this.onTrackColorChange(color);
    }
    onTrackColorChange(value) {
        this.padSection.component.setAccentColor(value, this.useUnicolorPads());
    }
}
function createATOMComponentInstance() {
    return new ATOMComponent;
}
