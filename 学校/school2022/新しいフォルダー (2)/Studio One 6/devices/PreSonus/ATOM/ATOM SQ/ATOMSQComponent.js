include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
include_file("resource://com.presonus.musicdevices/sdk/musicprotocol.js");
include_file("../Shared/ATOMCommonUtil.js");
include_file("../Shared/ATOMCommonComponent.js");
include_file("ATOMSQProtocol.js");
class BrowserNodeSyncronizer {
    constructor(paramList) {
        this.focusNodeParam = paramList.addString("browserFocusNode");
        let kPlaceholderText = Icon.kArrowRight + " Open Browser " + Icon.kArrowLeft;
        this.pendingParam = paramList.addString("browserPending");
        this.pendingParam.setValue(kPlaceholderText);
        this.node = "";
        this.parentNode = "";
        this.expandable = false;
    }
    updateFocusNodeParam() {
        let child = this.node;
        let parent = this.parentNode;
        if (parent.length + child.length > BrowserNodeSyncronizer.maxTextLength)
            parent = parent.substring(0, BrowserNodeSyncronizer.truncParentLength);
        if (parent.length + child.length > BrowserNodeSyncronizer.maxTextLength)
            child = child.substring(0, BrowserNodeSyncronizer.truncNodeLength);
        let text = Icon.kFolder + " " + parent + " " + Icon.kArrowRight + " " + child;
        if (this.expandable == true)
            text += " " + Icon.kArrowDoubleRight;
        this.focusNodeParam.setValue(text);
    }
    update(paramName, paramValue) {
        if (paramName == PreSonus.ParamID.kBrowserFocusNode)
            this.node = paramValue;
        else if (paramName == PreSonus.ParamID.kBrowserFocusNodeParent)
            this.parentNode = paramValue;
        else if (paramName == PreSonus.ParamID.kBrowserFocusNodeExpandable)
            this.expandable = paramValue;
        this.updateFocusNodeParam();
    }
}
BrowserNodeSyncronizer.maxTextLength = 20;
BrowserNodeSyncronizer.truncParentLength = 5;
BrowserNodeSyncronizer.truncNodeLength = 18;
var PageConfigPadMode;
(function (PageConfigPadMode) {
    PageConfigPadMode[PageConfigPadMode["kPadsPlay"] = 0] = "kPadsPlay";
    PageConfigPadMode[PageConfigPadMode["kPadsSequencer"] = 1] = "kPadsSequencer";
    PageConfigPadMode[PageConfigPadMode["kPadsStepControl"] = 2] = "kPadsStepControl";
    PageConfigPadMode[PageConfigPadMode["kKeepMode"] = 3] = "kKeepMode";
})(PageConfigPadMode || (PageConfigPadMode = {}));
var PageConfigEditorMode;
(function (PageConfigEditorMode) {
    PageConfigEditorMode[PageConfigEditorMode["kEditorHide"] = 0] = "kEditorHide";
    PageConfigEditorMode[PageConfigEditorMode["kEditorShow"] = 1] = "kEditorShow";
    PageConfigEditorMode[PageConfigEditorMode["kEditorIgnore"] = 2] = "kEditorIgnore";
})(PageConfigEditorMode || (PageConfigEditorMode = {}));
class PageConfig {
    constructor(focusFrame, showEditor, padMode) {
        this.focusFrame = focusFrame;
        this.showEditor = showEditor;
        this.padMode = padMode;
    }
}
PageConfig.kFrameIgnore = "";
PageConfig.kDefaultConfig = new PageConfig(PageConfig.kFrameIgnore, PageConfigEditorMode.kEditorIgnore, PageConfigPadMode.kKeepMode);
PageConfig.kSongModeDefault = new PageConfig(PreSonus.HostUtils.kArrangementZone, PageConfigEditorMode.kEditorHide, PageConfigPadMode.kPadsPlay);
PageConfig.kInstrumentModeDefault = new PageConfig(PreSonus.HostUtils.kArrangementZone, PageConfigEditorMode.kEditorHide, PageConfigPadMode.kPadsPlay);
PageConfig.kEditorPlayDefault = new PageConfig(PreSonus.HostUtils.kArrangementZone, PageConfigEditorMode.kEditorShow, PageConfigPadMode.kPadsPlay);
PageConfig.kEditorSequencingDefault = new PageConfig(PreSonus.HostUtils.kArrangementZone, PageConfigEditorMode.kEditorShow, PageConfigPadMode.kPadsSequencer);
class PageConfigList {
    constructor() {
        this.configs = [];
    }
    add(config) {
        this.configs.push(config);
    }
    get(index) {
        if (index >= this.configs.length)
            return PageConfig.kDefaultConfig;
        return this.configs[index];
    }
}
class PageConfigProvider {
    constructor() {
        this.configs = [];
        let defaultModePages = new PageConfigList();
        let songModePages = new PageConfigList();
        songModePages.add(PageConfig.kSongModeDefault);
        songModePages.add(PageConfig.kSongModeDefault);
        songModePages.add(PageConfig.kSongModeDefault);
        songModePages.add(new PageConfig(PreSonus.HostUtils.kBrowserZone, PageConfigEditorMode.kEditorHide, PageConfigPadMode.kPadsPlay));
        let instrumentModePages = new PageConfigList();
        instrumentModePages.add(new PageConfig(PreSonus.HostUtils.kBrowserZone, PageConfigEditorMode.kEditorHide, PageConfigPadMode.kPadsPlay));
        instrumentModePages.add(PageConfig.kInstrumentModeDefault);
        instrumentModePages.add(PageConfig.kInstrumentModeDefault);
        instrumentModePages.add(PageConfig.kInstrumentModeDefault);
        let editorModeNonePages = new PageConfigList();
        editorModeNonePages.add(new PageConfig(PageConfig.kFrameIgnore, PageConfigEditorMode.kEditorShow, PageConfigPadMode.kKeepMode));
        let editorModeAudioPages = new PageConfigList();
        editorModeAudioPages.add(PageConfig.kEditorPlayDefault);
        editorModeAudioPages.add(PageConfig.kEditorPlayDefault);
        let editorModePartPages = new PageConfigList();
        editorModePartPages.add(PageConfig.kEditorPlayDefault);
        editorModePartPages.add(PageConfig.kEditorPlayDefault);
        let editorModePatternPages = new PageConfigList();
        editorModePatternPages.add(PageConfig.kEditorSequencingDefault);
        editorModePatternPages.add(PageConfig.kEditorSequencingDefault);
        editorModePatternPages.add(new PageConfig(PageConfig.kFrameIgnore, PageConfigEditorMode.kEditorShow, PageConfigPadMode.kPadsStepControl));
        this.configs.push(defaultModePages);
        this.configs.push(songModePages);
        this.configs.push(instrumentModePages);
        this.configs.push(editorModeNonePages);
        this.configs.push(editorModeAudioPages);
        this.configs.push(editorModePartPages);
        this.configs.push(editorModePatternPages);
    }
    get(mode, page) {
        if (mode >= this.configs.length)
            return PageConfig.kDefaultConfig;
        let pages = this.configs[mode];
        return pages.get(page);
    }
}
var DisplayMode;
(function (DisplayMode) {
    DisplayMode[DisplayMode["kDefaultMode"] = 0] = "kDefaultMode";
    DisplayMode[DisplayMode["kSongMode"] = 1] = "kSongMode";
    DisplayMode[DisplayMode["kInstrumentMode"] = 2] = "kInstrumentMode";
    DisplayMode[DisplayMode["kEditorModeNone"] = 3] = "kEditorModeNone";
    DisplayMode[DisplayMode["kEditorModeAudio"] = 4] = "kEditorModeAudio";
    DisplayMode[DisplayMode["kEditorModePart"] = 5] = "kEditorModePart";
    DisplayMode[DisplayMode["kEditorModePattern"] = 6] = "kEditorModePattern";
    DisplayMode[DisplayMode["kUserMode"] = 7] = "kUserMode";
    DisplayMode[DisplayMode["kModeMin"] = 1] = "kModeMin";
    DisplayMode[DisplayMode["kModeMax"] = 7] = "kModeMax";
})(DisplayMode || (DisplayMode = {}));
class Display {
}
Display.kDefaultModePageCount = 1;
Display.kSongModePageCount = 4;
Display.kInstrumentModePageCount = 5;
Display.kEditorModeNonePageCount = 1;
Display.kEditorModeAudioPageCount = 2;
Display.kEditorModePartPageCount = 2;
Display.kEditorModePatternPageCount = 3;
Display.kUserModePageCount = 1;
Display.kSetupPageIndex = 0;
Display.kConsolePageIndex = 1;
Display.kArrangerPageIndex = 2;
Display.kEffectsPageIndex = 3;
Display.kInstrumentDefaultPage = 0;
Display.kEventCommandsPage = 1;
Display.kPerformanceConfigPage = 2;
Display.kInstrumentPadConfigPage = 3;
Display.kSamplerControlPage = 4;
Display.kUserDefaultPage = 0;
Display.kTextColorDefault = "#ffffff";
Display.kTextColorParamValue = "#66ffff";
Display.kTextColorDisabled = "#7f8585";
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
const kRateTriggerColor = "orange";
class ScreenUtil {
    static getAbbreviation(text) {
        if (ScreenUtil.kDict.hasOwnProperty(text))
            return ScreenUtil.kDict[text];
        else
            return text;
    }
    static buildTitle(title, pageIndex, pageCount) {
        return `${title} ${pageIndex + 1}/${pageCount}`;
    }
    static buildFromTokens(tokens, max) {
        if (tokens.length == 0)
            return "";
        let linebreakAvailable = true;
        let result = "";
        for (let tokenIndex = 0; tokenIndex < tokens.length; tokenIndex++) {
            let token = ScreenUtil.getAbbreviation(tokens[tokenIndex]);
            let firstToken = result == "";
            let anticipatedLength = result.length + token.length + 1;
            if (!firstToken && anticipatedLength > max && linebreakAvailable) {
                result += "\n";
                linebreakAvailable = false;
            }
            result += token + " ";
        }
        return result;
    }
    static wrapText(text, max) {
        let tokens = text.split(" ");
        if (tokens.length == 1)
            return text;
        if (tokens.length == 2 && tokens[0].length <= max && tokens[1].length <= max)
            return tokens[0] + "\n" + tokens[1];
        return ScreenUtil.buildFromTokens(tokens, max);
    }
    ;
    static scaleToDisplayTitle(scale) {
        switch (scale) {
            case PreSonus.MusicalScale.kChromatic:
                return "Chromatic";
            case PreSonus.MusicalScale.kMajor:
                return "Major";
            case PreSonus.MusicalScale.kMelodicMinor:
                return "Melo. Min.";
            case PreSonus.MusicalScale.kHarmonicMinor:
                return "Harm. Min.";
            case PreSonus.MusicalScale.kNaturalMinor:
                return "Nat. Min.";
            case PreSonus.MusicalScale.kMajorPentatonic:
                return "Maj. Pent.";
            case PreSonus.MusicalScale.kMinorPentatonic:
                return "Min. Pent.";
            case PreSonus.MusicalScale.kBlues:
                return "Blues";
            case PreSonus.MusicalScale.kDorian:
                return "Dorian";
            case PreSonus.MusicalScale.kMixolydian:
                return "Mixolydian";
            case PreSonus.MusicalScale.kPhrygian:
                return "Phrygian";
            case PreSonus.MusicalScale.kMajorTriad:
                return "Maj. Triad";
            case PreSonus.MusicalScale.kMinorTriad:
                return "Min. Triad";
            default:
                break;
        }
        return "Unknown";
    }
    static octaveToIndicator(octave) {
        return octave.toString();
    }
    static semitonesToKeySymbol(offset) {
        if (offset >= 0 && offset <= 11)
            return PreSonus.Music.kKeySymbols[offset];
        return "";
    }
    static padLayoutToTitle(id) {
        switch (id) {
            case PadLayoutID.kPadScaleOnly: return "Scale Only";
            case PadLayoutID.kPadContinuous: return "Continuous";
            case PadLayoutID.kKeyboard: return "Keyboard";
            default: break;
        }
        return "Unknown";
    }
    static formatAsPresetName(presetName) {
        return Icon.kFolder + " Preset: " + presetName;
    }
}
ScreenUtil.kMaxChars = 10;
ScreenUtil.kDict = {
    "and": "&",
    "Randomize": "Rnd.",
    "Original": "Org.",
    "Suspend": "Susp.",
    "Increase": "Incr.",
    "Decrease": "Decr.",
    "Previous": "Prev."
};
var PadWorkflow;
(function (PadWorkflow) {
    PadWorkflow[PadWorkflow["kKeyboardPlay"] = 0] = "kKeyboardPlay";
    PadWorkflow[PadWorkflow["kSequencing"] = 1] = "kSequencing";
    PadWorkflow[PadWorkflow["kStepControl"] = 2] = "kStepControl";
    PadWorkflow[PadWorkflow["kMin"] = 0] = "kMin";
    PadWorkflow[PadWorkflow["kMax"] = 2] = "kMax";
})(PadWorkflow || (PadWorkflow = {}));
var PadLayoutID;
(function (PadLayoutID) {
    PadLayoutID[PadLayoutID["kKeyboard"] = 0] = "kKeyboard";
    PadLayoutID[PadLayoutID["kPadContinuous"] = 1] = "kPadContinuous";
    PadLayoutID[PadLayoutID["kPadScaleOnly"] = 2] = "kPadScaleOnly";
    PadLayoutID[PadLayoutID["kLayoutCount"] = 3] = "kLayoutCount";
})(PadLayoutID || (PadLayoutID = {}));
var PadSectionID;
(function (PadSectionID) {
    PadSectionID["kMain"] = "PadSectionMainElement";
    PadSectionID["kDualMusic"] = "PadSectionDualMusic";
    PadSectionID["kDualStep"] = "PadSectionDualStep";
    PadSectionID["kNone"] = "";
})(PadSectionID || (PadSectionID = {}));
class PadSectionConfig {
}
PadSectionConfig.kPadCount = 32;
PadSectionConfig.kBankCount = 8;
PadSectionConfig.kOctaveCount = 7;
PadSectionConfig.kDefaultOctave = 2;
PadSectionConfig.kRootOffsetLimit = 11;
PadSectionConfig.kPadOffsetLimit = PadSectionConfig.kRootOffsetLimit;
PadSectionConfig.kDefaultBankColor = "#002CFF";
PadSectionConfig.kPadFocusOnColor = "orange";
PadSectionConfig.kPadFocusOffColor = "blue";
PadSectionConfig.kSelectButtonColor = "blue";
PadSectionConfig.kPlayButtonColor = "green";
PadSectionConfig.kLoopButtonColor = "aqua";
PadSectionConfig.kBankColors = [
    "#0020FF",
    "lime",
    "yellow",
    "purple",
    "orangered",
    "cyan",
    "crimson",
    "#FF7210"
];
PadSectionConfig.kPadSnapColors = [
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
PadSectionConfig.kKeyboardModeColors = [
    "orange",
    "aqua",
    "#FF3200",
    "#DD640C",
    "purple",
    "red"
];
class Controls {
}
Controls.kPitchBendDefault = 0.5;
Controls.kModulationDefault = 0.0;
Controls.kExpressionDefault = 0.0;
Controls.kBreathControlDefault = 0.0;
Controls.kControlLinkTouchStrip = "controlLinkTouchStrip";
Controls.kEditButtonOff = "#1c0b04";
Controls.kEditButtonOn = "#EF3F00";
Controls.kButtonOffColor = "black";
class CommandNameMapper {
    constructor() {
        this.map =
            {
                "Add Arranger Section from Selection": "Add From\nSelection",
                "Add Audio Track (stereo)": "Add Audio\nTrack",
                "Apply Chords from Chord Track": "Apply\nChords",
                "Convert Part to Pattern": "Convert\nTo Pattern",
                "Convert Pattern to Part": "Convert\nTo Part",
                "Edit with Melodyne": "Edit in\nMelodyne",
                "Explode Pitches to Tracks": "Explode\nto Tracks",
                "Goto Loop End": "To Loop\nEnd",
                "Goto Loop Start": "To Loop\nStart",
                "Goto Next Section": "Next\nSection",
                "Goto Previous Section": "Previous\nSection",
                "Insert Instrument Part": "Add\nPart",
                "Insert Pattern": "Add\nPattern",
                "Left": "Left\n" + Icon.kArrowDoubleLeft,
                "Marker/Insert": "Add\nMarker",
                "Navigation/Back": "Close\nFolder",
                "Navigation/Enter": "Open\nFolder",
                "Navigation/Next": "Next\n" + Icon.kArrowDoubleRight,
                "Navigation/Previous": "Previous\n" + Icon.kArrowDoubleLeft,
                "Navigation/Right": "Right\n" + Icon.kArrowDoubleRight,
                "Normalize Audio": "Normalize",
                "Open Arranger Track": "Toggle\nArranger",
                "Open Chord Track": "Open Chord\nTrack",
                "Performance Monitor": "Perform.\nMonitor",
                "Play from Loop Start": "Play\nFrom Start",
                "Presets/Next": "Next\nPreset",
                "Presets/Previous": "Previous\nPreset",
                "Repeat Notes to Part End": "Repeat to\nPart End",
                "Reverse Audio": "Reverse",
                "Scratch Pad": "Scratch\nPad",
                "Send To new Impact": "Send To\nImpact",
                "Send To new SampleOne": "Send To\nSampleOne",
                "Set Every 4th Step": "Set Every\n4th",
                "Set Loop End": "Set End To\nPlayhead",
                "Shift Loop": "Shift\nRight",
                "Show Channel Editor": "Channel\nEditor",
                "Show Effects": "Effects\nBrowser",
                "Show Instruments": "Instruments\nBrowser",
                "Show Loops": "Loops",
                "Show Note FX Editor": "Note FX\nEditor",
                "Track List": "Track\nList",
                "Zoom to Loop": "Zoom\nLoop",
                "Zoom to Selection Horizontally": "Zoom to\nSelection",
                "Toggle Detached Editor": "Detach\nEditor"
            };
    }
    get(category, command) {
        if (this.map.hasOwnProperty(command))
            return this.map[command];
        let combinedCmd = category + "/" + command;
        if (this.map.hasOwnProperty(combinedCmd))
            return this.map[combinedCmd];
        return ScreenUtil.wrapText(command, ScreenUtil.kMaxChars);
    }
}
class ScreenCell {
    constructor(textParam, colorParam, alignParam) {
        this.text = textParam;
        this.color = colorParam;
        this.align = alignParam;
    }
}
class ATOMSQScreen {
    constructor(paramList) {
        this.cells = [];
        for (let index = 0; index < ScreenConfig.kCellCount; ++index) {
            let textParam = paramList.addString("textCellText[" + index + "]");
            let colorParam = paramList.addColor("textCellColor[" + index + "]");
            colorParam.fromString(Display.kTextColorDefault);
            let alignParam = paramList.addInteger(ScreenTextAlignment.kCenter, ScreenTextAlignment.kRight, "textCellAlign[" + index + "]");
            alignParam.setValue(ScreenTextAlignment.kCenter, false);
            this.cells.push(new ScreenCell(textParam, colorParam, alignParam));
        }
        this.showNoteRepeatIndicator = false;
        this.lastTitle = "";
        this.cmdNameMap = new CommandNameMapper();
    }
    setCellTextAndColor(command, column, color1, color2, titleCellOffset, valueCellOffset) {
        if (!command)
            return;
        let row1 = this.getCellInternal(column, titleCellOffset);
        let row2 = this.getCellInternal(column, valueCellOffset);
        if (!row1 || !row2)
            return;
        let split = command.split("\n");
        if (split.length >= 1)
            row1["text"].setValue(split[0]);
        if (split.length == 2)
            row2["text"].setValue(split[1]);
        row1["color"].fromString(color1);
        row2["color"].fromString(color2);
    }
    setTopRow(command, column, asValue) {
        let color = asValue ? Display.kTextColorParamValue : Display.kTextColorDefault;
        this.setCellTextAndColor(command, column, Display.kTextColorDefault, color, 0, 3);
    }
    setTopRowWithColor(command, column, color) {
        this.setCellTextAndColor(command, column, color, color, 0, 3);
    }
    setBottomRow(command, column, asValue) {
        let color = asValue ? Display.kTextColorParamValue : Display.kTextColorDefault;
        this.setCellTextAndColor(command, column, Display.kTextColorDefault, color, 8, 11);
    }
    setBottomRowWithColor(command, column, color) {
        this.setCellTextAndColor(command, column, color, color, 8, 11);
    }
    setButtonCell(text, index, asValue) {
        if (!text)
            return;
        if (index >= 0 && index < 3)
            this.setTopRow(text, index, asValue);
        else if (index >= 3 && index < 6)
            this.setBottomRow(text, index % 3, asValue);
    }
    clearButtonCell(index) {
        let row1 = [0, 1, 2, 8, 9, 10];
        let row2 = [3, 4, 5, 11, 12, 13];
        this.cells[row1[index]]["text"].setValue("");
        this.cells[row2[index]]["text"].setValue("");
    }
    getCenterCell(row) {
        let centerRowCount = 2;
        if (row >= 0 && row < centerRowCount) {
            let offset = 6;
            return this.cells[row + offset];
        }
        return null;
    }
    getCellInternal(column, offset) {
        let columnCount = 3;
        if (column >= 0 && column < columnCount)
            return this.cells[column + offset];
        return null;
    }
    clear() {
        for (let index = 0; index < ScreenConfig.kCellCount; ++index) {
            this.cells[index]["text"].setValue("");
            this.cells[index]["color"].fromString(Display.kTextColorDefault);
        }
    }
    refreshTitle(caption) {
        let str = this.showNoteRepeatIndicator ? Icon.kNote + " " + caption : caption;
        this.getCenterCell(0)["text"].setValue(str);
    }
    setTitle(caption) {
        this.lastTitle = caption;
        this.refreshTitle(caption);
    }
    asWheelControl(text) {
        return text + "\n" +
            Icon.kArrowDoubleLeft + " " + Icon.kCircle + " " + Icon.kArrowDoubleRight;
    }
    asOnOffControl(text) {
        return text + "\n" + Icon.kPower;
    }
    updateForPage(mode, page, samplerMode) {
        this.clear();
        switch (mode) {
            case DisplayMode.kDefaultMode:
                return;
            case DisplayMode.kSongMode:
                {
                    switch (page) {
                        case Display.kSetupPageIndex:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Transport", page, Display.kSongModePageCount));
                                this.setButtonCell("Tempo", 0, true);
                                this.setButtonCell(this.asWheelControl("Marker"), 3, false);
                                this.setButtonCell(this.asOnOffControl("IQ"), 5, false);
                                return;
                            }
                        case Display.kConsolePageIndex:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Console", page, Display.kSongModePageCount));
                                this.setButtonCell(this.asOnOffControl("Console"), 0, false);
                                this.setButtonCell(this.asOnOffControl("Inspector"), 1, false);
                                this.setButtonCell("Volume", 2, true);
                                this.setButtonCell(this.asOnOffControl("Solo"), 3, false);
                                this.setButtonCell(this.asOnOffControl("Mute"), 4, false);
                                this.setButtonCell(this.asOnOffControl("Rec"), 5, false);
                                return;
                            }
                        case Display.kArrangerPageIndex:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Arranger", page, Display.kSongModePageCount));
                                this.setButtonCell("Toggle\nArranger", 0, false);
                                this.setButtonCell(this.asWheelControl("Zoom"), 4, false);
                                this.setButtonCell(this.asWheelControl("Sections"), 5, false);
                                return;
                            }
                        case Display.kEffectsPageIndex:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Effects", page, Display.kSongModePageCount));
                                this.setButtonCell("Channel\nEditor", 1, false);
                                this.setButtonCell(this.asWheelControl("Devices"), 2, false);
                                this.setButtonCell("Load\nSelected", 3, false);
                                return;
                            }
                        default:
                            return;
                    }
                }
            case DisplayMode.kInstrumentMode:
                {
                    switch (page) {
                        case Display.kInstrumentDefaultPage:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Browse", page, Display.kInstrumentModePageCount));
                                this.setButtonCell("Instrument\nEditor", 1, false);
                                this.setButtonCell("Load\nSelected", 3, false);
                                return;
                            }
                        case Display.kEventCommandsPage:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Track", page, Display.kInstrumentModePageCount));
                                this.setButtonCell("Add\nChorder FX", 0, false);
                                this.setButtonCell("Add\nArp FX ", 1, false);
                                this.setButtonCell(this.asWheelControl("Length"), 5, false);
                                return;
                            }
                        case Display.kPerformanceConfigPage:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Performance", page, Display.kInstrumentModePageCount));
                                this.setButtonCell("Strip", 0, true);
                                this.setButtonCell("+/-", 1, true);
                                this.setButtonCell("Note\nRepeat " + Icon.kPower, 2, false);
                                this.setButtonCell("Rate", 3, true);
                                this.setButtonCell("Gate", 4, true);
                                this.setButtonCell(this.asOnOffControl("Pressure"), 5, false);
                                return;
                            }
                        case Display.kInstrumentPadConfigPage:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Pads", page, Display.kInstrumentModePageCount));
                                this.setButtonCell("Layout", 0, true);
                                this.setButtonCell("Scale", 1, true);
                                this.setButtonCell("Root", 2, true);
                                this.setButtonCell("Octave", 3, true);
                                this.setButtonCell("Range", 4, true);
                                this.setButtonCell(this.asOnOffControl("Full Vel."), 5, false);
                                return;
                            }
                        case Display.kSamplerControlPage:
                            {
                                switch (samplerMode) {
                                    case SamplerControlMode.kImpact:
                                        {
                                            this.setTitle(ScreenUtil.buildTitle("Impact Wave Editor", page, Display.kInstrumentModePageCount));
                                            this.setButtonCell(this.asWheelControl("Zoom"), 0, true);
                                            this.setButtonCell(this.asWheelControl("Scroll"), 1, true);
                                            this.setButtonCell("Copy\nPad", 2, false);
                                            this.setButtonCell(this.asWheelControl("Loop Start"), 3, true);
                                            this.setButtonCell(this.asWheelControl("Loop End"), 4, true);
                                            this.setButtonCell("Paste\nto Pad", 5, false);
                                            return;
                                        }
                                    case SamplerControlMode.kSampleOne:
                                        {
                                            this.setTitle(ScreenUtil.buildTitle("SampleOne Wave Editor", page, Display.kInstrumentModePageCount));
                                            this.setButtonCell(this.asWheelControl("Zoom"), 0, true);
                                            this.setButtonCell(this.asWheelControl("Scroll"), 1, true);
                                            this.setButtonCell(this.asWheelControl("Start"), 2, true);
                                            this.setButtonCell(this.asWheelControl("Loop Start"), 3, true);
                                            this.setButtonCell(this.asWheelControl("Loop End"), 4, true);
                                            this.setButtonCell(this.asWheelControl("End"), 5, true);
                                            return;
                                        }
                                    default:
                                        {
                                            this.setTitle(ScreenUtil.buildTitle("Sampler Wave Editor", page, Display.kInstrumentModePageCount));
                                            return;
                                        }
                                }
                            }
                        default:
                            return;
                    }
                }
            case DisplayMode.kEditorModeNone:
                {
                    if (page == 0)
                        this.setTitle("Select Event ...");
                    return;
                }
            case DisplayMode.kEditorModeAudio:
                {
                    if (page == 0) {
                        this.setTitle(ScreenUtil.buildTitle("Audio", page, Display.kEditorModeAudioPageCount));
                        this.setButtonCell("Play from\nSelected", 1, false);
                        this.setButtonCell(this.asWheelControl("Goto Event"), 2, false);
                        this.setButtonCell(this.asWheelControl("Transients"), 4, false);
                    }
                    else if (page == 1) {
                        this.setTitle(ScreenUtil.buildTitle("Audio", page, Display.kEditorModeAudioPageCount));
                        this.setButtonCell(this.asWheelControl("Volume"), 2, false);
                    }
                    return;
                }
            case DisplayMode.kEditorModePart:
                {
                    if (page == 0) {
                        this.setTitle(ScreenUtil.buildTitle("Part: Main", page, Display.kEditorModePartPageCount));
                        this.setButtonCell(this.asWheelControl("Grid"), 2, false);
                        this.setButtonCell(this.asWheelControl("Transpose"), 3, false);
                        this.setButtonCell(this.asWheelControl("Nudge"), 4, false);
                        this.setButtonCell(this.asWheelControl("Velocity"), 5, false);
                    }
                    else if (page == 1) {
                        this.setTitle(ScreenUtil.buildTitle("Part: Alt", page, Display.kEditorModePartPageCount));
                        this.setButtonCell("Humanize", 0, false);
                    }
                    return;
                }
            case DisplayMode.kEditorModePattern:
                {
                    switch (page) {
                        case 0:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Pattern: Variations", page, Display.kEditorModePatternPageCount));
                                this.setButtonCell("Variation", 2, true);
                                this.setButtonCell("Steps", 3, true);
                                this.setButtonCell("Resolution", 4, true);
                                this.setButtonCell("Swing", 5, true);
                                return;
                            }
                        case 1:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Pattern: Lanes", page, Display.kEditorModePatternPageCount));
                                this.setButtonCell("Layout", 0, true);
                                this.setButtonCell(this.asWheelControl("Shift"), 2, false);
                                this.setButtonCell("Steps", 3, true);
                                this.setButtonCell("Resolution", 4, true);
                                this.setButtonCell("Clear\nLane", 5, false);
                                return;
                            }
                        case 2:
                            {
                                this.setTitle(ScreenUtil.buildTitle("Pattern: Steps", page, Display.kEditorModePatternPageCount));
                                this.setButtonCell("Velocity", 0, true);
                                this.setButtonCell("Repeat", 1, true);
                                this.setButtonCell("Delay", 2, true);
                                this.setButtonCell("Probability", 3, true);
                                return;
                            }
                        default:
                            return;
                    }
                }
            case DisplayMode.kUserMode:
                {
                    return;
                }
            default:
                break;
        }
    }
    update(mode, page, samplerMode) {
        this.updateForPage(mode, page, samplerMode);
    }
    setNoteRepeatIndicator(state) {
        this.showNoteRepeatIndicator = state;
        this.refreshTitle(this.lastTitle);
    }
    clearCell(index) {
        this.clearButtonCell(index);
    }
    setCommandName(category, command, control, color) {
        let cmd = this.cmdNameMap.get(category, command);
        switch (control) {
            case "lcdButton[0]":
                this.setTopRowWithColor(cmd, 0, color);
                break;
            case "lcdButton[1]":
                this.setTopRowWithColor(cmd, 1, color);
                break;
            case "lcdButton[2]":
                this.setTopRowWithColor(cmd, 2, color);
                break;
            case "lcdButton[3]":
                this.setBottomRowWithColor(cmd, 0, color);
                break;
            case "lcdButton[4]":
                this.setBottomRowWithColor(cmd, 1, color);
                break;
            case "lcdButton[5]":
                this.setBottomRowWithColor(cmd, 2, color);
                break;
            default:
                return;
        }
    }
}
class ControlLinkOverlayHandler {
    constructor(paramList) {
        this.titleParam = paramList.addString("controlLinkTitle");
        this.valueParam = paramList.addString("controlLinkValue");
        this.enableOverlayParam = paramList.addParam("controlLinkOverlayEnabled");
        this.enableOverlayParam.setSignalAlways(true);
        this.paramNames = {};
        this.knobCount = 8;
        for (let knobIndex = 0; knobIndex < this.knobCount; knobIndex++) {
            let knobControlName = this.buildKnobControlName(knobIndex);
            this.paramNames[knobControlName] = "";
        }
        this.paramNames[Controls.kControlLinkTouchStrip] = "";
    }
    setParamNameForControl(controlName, paramName) {
        this.paramNames[controlName] = paramName;
    }
    knobIndexInRange(index) {
        return index >= 0 && index < 8;
    }
    buildKnobControlName(index) {
        return "knob[" + index + "]";
    }
    onParamInvoke(controlName, paramValue) {
        let paramName = this.paramNames[controlName];
        this.titleParam.setValue(paramName);
        this.valueParam.setValue(paramValue);
        this.enableOverlayParam.setValue(1, true);
    }
    onParamInvokeByKnob(knobIndex, paramValue) {
        if (!this.knobIndexInRange(knobIndex))
            return;
        let controlName = this.buildKnobControlName(knobIndex);
        this.onParamInvoke(controlName, paramValue);
    }
    onParamInvokeByTouchStrip(paramValue) {
        this.onParamInvoke(Controls.kControlLinkTouchStrip, paramValue);
    }
}
var PadConfiguration;
(function (PadConfiguration) {
    PadConfiguration[PadConfiguration["kScale"] = 0] = "kScale";
    PadConfiguration[PadConfiguration["kOctave"] = 1] = "kOctave";
    PadConfiguration[PadConfiguration["kRootOffset"] = 2] = "kRootOffset";
    PadConfiguration[PadConfiguration["kRange"] = 3] = "kRange";
    PadConfiguration[PadConfiguration["kAccentColor"] = 4] = "kAccentColor";
    PadConfiguration[PadConfiguration["kLayout"] = 5] = "kLayout";
    PadConfiguration[PadConfiguration["kFullVelocity"] = 6] = "kFullVelocity";
    PadConfiguration[PadConfiguration["kPadFocus"] = 7] = "kPadFocus";
})(PadConfiguration || (PadConfiguration = {}));
class PadSectionElementConfig {
    constructor(name, element) {
        this.name = name;
        this.element = element;
        this.roles = [];
        this.rateTriggerActive = false;
    }
}
class PadSectionManager {
    constructor(parent) {
        this.padSectionConfigs = [];
        this.parent = parent;
        this.debugLog = false;
        this.activeMusicInputID = PadSectionID.kNone;
        this.accentModifierActive = false;
        this.stepBindModifierActive = false;
    }
    getRateTriggerState(name) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            if (config.name == name)
                return config.rateTriggerActive;
        }
        return false;
    }
    setRateTriggerState(name, state) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            if (config.name == name)
                config.rateTriggerActive = state;
        }
        return false;
    }
    getHandlerIndexByName(name, role) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            if (config.name == name)
                return config.roles.indexOf(role);
        }
        return -1;
    }
    getHandlerIndexByElement(element, role) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            if (config.element == element)
                return config.roles.indexOf(role);
        }
        return -1;
    }
    log(msg) {
        if (this.debugLog)
            this.parent.log("ATOMSQ.PadSectionManager:" + msg);
    }
    setupKeyboardModeSettings(c, supportKeyboardLayout) {
        c.setPadColoringSupported(true);
        for (let i = 0; i < PadSectionConfig.kPadSnapColors.length; i++)
            c.addPadPaletteColor(PadSectionConfig.kPadSnapColors[i]);
        let kbSettings = c.keyboardModeSettings;
        let colors = PadSectionConfig.kKeyboardModeColors;
        kbSettings.whiteKeyColor = colors[0];
        kbSettings.blackKeyColor = colors[1];
        kbSettings.octave0Color = colors[2];
        kbSettings.octave1Color = colors[3];
        kbSettings.octave2Color = colors[4];
        kbSettings.octave3Color = colors[5];
        kbSettings.octaveShiftEnabled = false;
        kbSettings.supportKeyboardLayout = supportKeyboardLayout;
    }
    activate(element, role) {
        let handlerIndex = this.getHandlerIndexByElement(element, role);
        element.component.setActiveHandler(handlerIndex);
    }
    deactivate(element) {
        element.component.clearPadPressedState();
        let handlerIndex = this.getHandlerIndexByElement(element, PreSonus.PadSectionRole.kIdle);
        element.component.setActiveHandler(handlerIndex);
    }
    add(root) {
        const kXmlElements = [
            PadSectionID.kMain,
            PadSectionID.kDualMusic,
            PadSectionID.kDualStep
        ];
        for (let i = 0; i < kXmlElements.length; i++) {
            let name = kXmlElements[i];
            let element = root.find(name);
            if (!element)
                return;
            let component = element.component;
            if (!component)
                return;
            switch (name) {
                case PadSectionID.kMain:
                    {
                        let config = new PadSectionElementConfig(name, element);
                        config.roles = [
                            PreSonus.PadSectionRole.kMusicInput,
                            PreSonus.PadSectionRole.kIdle,
                            PreSonus.PadSectionRole.kRateTrigger
                        ];
                        this.setupKeyboardModeSettings(component, true);
                        this.addHandlers(component, config.roles);
                        this.padSectionConfigs.push(config);
                        break;
                    }
                case PadSectionID.kDualMusic:
                    {
                        let config = new PadSectionElementConfig(name, element);
                        config.roles = [
                            PreSonus.PadSectionRole.kMusicInput,
                            PreSonus.PadSectionRole.kIdle,
                            PreSonus.PadSectionRole.kRateTrigger
                        ];
                        this.setupKeyboardModeSettings(component, false);
                        this.addHandlers(component, config.roles);
                        this.padSectionConfigs.push(config);
                        break;
                    }
                case PadSectionID.kDualStep:
                    {
                        let config = new PadSectionElementConfig(name, element);
                        config.roles = [
                            PreSonus.PadSectionRole.kStepEdit,
                            PreSonus.PadSectionRole.kStepFocus,
                            PreSonus.PadSectionRole.kIdle
                        ];
                        this.setupKeyboardModeSettings(component, false);
                        this.addHandlers(component, config.roles);
                        this.padSectionConfigs.push(config);
                        break;
                    }
            }
        }
    }
    addHandlers(padSectionComponent, roles) {
        let handlerIndex = 0;
        for (let roleIndex = 0; roleIndex < roles.length; roleIndex++) {
            let role = roles[roleIndex];
            switch (role) {
                case PreSonus.PadSectionRole.kMusicInput:
                    {
                        padSectionComponent.addHandlerForRole(role);
                        let handler = padSectionComponent.getHandler(handlerIndex);
                        this.configureMusicInputHandler(handler);
                        handlerIndex++;
                        break;
                    }
                case PreSonus.PadSectionRole.kStepEdit:
                case PreSonus.PadSectionRole.kStepFocus:
                    {
                        padSectionComponent.addHandlerForRole(role);
                        handlerIndex++;
                        break;
                    }
                case PreSonus.PadSectionRole.kIdle:
                    {
                        padSectionComponent.addNullHandler();
                        handlerIndex++;
                        break;
                    }
                case PreSonus.PadSectionRole.kRateTrigger:
                    {
                        padSectionComponent.addHandlerForRole(role);
                        padSectionComponent.getHandler(handlerIndex).setPadColor(kRateTriggerColor);
                        for (let i = 0; i < padRepeatRates.length; i++)
                            padSectionComponent.setPadRate(i, padRepeatRates[i]);
                        handlerIndex++;
                        break;
                    }
                default:
                    break;
            }
        }
    }
    configureMusicInputHandler(handler) {
        if (!handler)
            return;
        handler.setDisplayMode(PreSonus.MusicPadDisplayMode.kBrightColors);
        handler.setPadColor(PadSectionConfig.kDefaultBankColor);
        for (let i = 0; i < PadSectionConfig.kBankCount; i++)
            handler.setBankColor(i, PadSectionConfig.kBankColors[i]);
    }
    getPadSectionElement(name) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            if (config.name == name)
                return config.element;
        }
        return null;
    }
    getActiveMusicInputPadSectionElement() {
        return this.getPadSectionElement(this.activeMusicInputID);
    }
    init() {
        let pse = this.getPadSectionElement(PadSectionID.kMain);
        this.activate(pse, PreSonus.PadSectionRole.kMusicInput);
        pse.component.setCurrentOctave(PadSectionConfig.kDefaultOctave);
        pse.component.setKeyboardModeLayout(PadLayoutID.kKeyboard);
        this.activeMusicInputID = PadSectionID.kMain;
        pse = this.getPadSectionElement(PadSectionID.kDualMusic);
        this.deactivate(pse);
        pse.component.setCurrentOctave(PadSectionConfig.kDefaultOctave);
        pse = this.getPadSectionElement(PadSectionID.kDualStep);
        this.deactivate(pse);
    }
    setWorkflow(workflow) {
        if (workflow == PadWorkflow.kSequencing) {
            this.deactivate(this.getPadSectionElement(PadSectionID.kMain));
            this.activate(this.getPadSectionElement(PadSectionID.kDualMusic), PreSonus.PadSectionRole.kMusicInput);
            this.activate(this.getPadSectionElement(PadSectionID.kDualStep), PreSonus.PadSectionRole.kStepEdit);
            this.activeMusicInputID = PadSectionID.kDualMusic;
        }
        else if (workflow == PadWorkflow.kStepControl) {
            this.deactivate(this.getPadSectionElement(PadSectionID.kMain));
            this.activate(this.getPadSectionElement(PadSectionID.kDualMusic), PreSonus.PadSectionRole.kMusicInput);
            this.activate(this.getPadSectionElement(PadSectionID.kDualStep), PreSonus.PadSectionRole.kStepFocus);
            this.activeMusicInputID = PadSectionID.kDualMusic;
        }
        else if (workflow == PadWorkflow.kKeyboardPlay) {
            this.deactivate(this.getPadSectionElement(PadSectionID.kDualMusic));
            this.deactivate(this.getPadSectionElement(PadSectionID.kDualStep));
            this.activate(this.getPadSectionElement(PadSectionID.kMain), PreSonus.PadSectionRole.kMusicInput);
            this.activeMusicInputID = PadSectionID.kMain;
        }
    }
    enableRateTriggerMode(state) {
        if (state) {
            if (this.getRateTriggerState(this.activeMusicInputID))
                return;
            let pse = this.getPadSectionElement(this.activeMusicInputID);
            let handlerIndex = this.getHandlerIndexByName(this.activeMusicInputID, PreSonus.PadSectionRole.kRateTrigger);
            pse.component.setActiveHandler(handlerIndex);
            this.setRateTriggerState(this.activeMusicInputID, true);
        }
        else {
            if (!this.getRateTriggerState(this.activeMusicInputID))
                return;
            let pse = this.getPadSectionElement(this.activeMusicInputID);
            let handlerIndex = this.getHandlerIndexByName(this.activeMusicInputID, PreSonus.PadSectionRole.kMusicInput);
            pse.component.setActiveHandler(handlerIndex);
            this.setRateTriggerState(this.activeMusicInputID, false);
        }
    }
    setAccentModifierActive(state) {
        if (state == this.accentModifierActive)
            return;
        this.accentModifierActive = state;
        let pse = this.getPadSectionElement(PadSectionID.kDualStep);
        pse.component.setModifierActive(this.accentModifierActive, PreSonus.PadModifier.kAccentedStep);
    }
    setStepBindModifierActive(state) {
        if (state == this.stepBindModifierActive)
            return;
        this.stepBindModifierActive = state;
        let pse = this.getPadSectionElement(PadSectionID.kDualStep);
        pse.component.setModifierActive(this.stepBindModifierActive, PreSonus.PadModifier.kStepBinding);
    }
    configureMusicInputPads(modification, value) {
        let musicInputElements = [PadSectionID.kMain, PadSectionID.kDualMusic];
        for (let i = 0; i < musicInputElements.length; i++) {
            let elementName = musicInputElements[i];
            let c = this.getPadSectionElement(elementName).component;
            switch (modification) {
                case PadConfiguration.kScale:
                    c.setScale(value);
                    break;
                case PadConfiguration.kOctave:
                    c.setCurrentOctave(value);
                    break;
                case PadConfiguration.kRootOffset:
                    c.setRootOffset(value);
                    break;
                case PadConfiguration.kRange:
                    c.setPadOffset(value);
                    break;
                case PadConfiguration.kAccentColor:
                    c.setAccentColor(value);
                    break;
                case PadConfiguration.kLayout:
                    c.setKeyboardModeLayout(value);
                    break;
                case PadConfiguration.kFullVelocity:
                    c.setFullVelocityMode(value);
                    break;
                case PadConfiguration.kPadFocus:
                    {
                        let handlerIndex = this.getHandlerIndexByName(elementName, PreSonus.PadSectionRole.kMusicInput);
                        let musicInputHandler = c.getHandler(handlerIndex);
                        musicInputHandler.setFocusPadWhenPressed(value);
                    }
                    break;
                default:
                    break;
            }
        }
    }
    adviseHostSignals(observer) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            Host.Signals.advise(config.element.component, observer);
        }
    }
    unadviseHostSignals(observer) {
        for (let i = 0; i < this.padSectionConfigs.length; i++) {
            let config = this.padSectionConfigs[i];
            Host.Signals.unadvise(config.element.component, observer);
        }
    }
}
class ParamContainerUtil {
    static addIntParam(paramList, min, max, name) {
        let p = paramList.addInteger(min, max, name);
        p.setValue(min);
        return p;
    }
    static addColorParam(paramList, name, color) {
        let p = paramList.addColor(name);
        p.fromString(color);
        return p;
    }
}
class ATOMSQComponent extends ATOMTrackSamplerComponent {
    onInit(hostComponent) {
        super.onInit(hostComponent);
        this.debugLog = false;
        let paramList = hostComponent.paramList;
        this.shiftModifierParam = paramList.addParam("shiftModifier");
        this.displayModeParam = paramList.addInteger(DisplayMode.kModeMin, DisplayMode.kModeMax, "displayMode");
        this.displayPageIndexParams = [
            ParamContainerUtil.addIntParam(paramList, 0, Display.kDefaultModePageCount - 1, "defaultModePageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kSongModePageCount - 1, "songModePageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kInstrumentModePageCount - 1, "instrumentModePageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kEditorModeNonePageCount - 1, "editorModeNonePageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kEditorModeAudioPageCount - 1, "editorModeAudioPageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kEditorModePartPageCount - 1, "editorModeMusicPageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kEditorModePatternPageCount - 1, "editorModePatternPageIndex"),
            ParamContainerUtil.addIntParam(paramList, 0, Display.kUserModePageCount - 1, "userModePageIndex"),
        ];
        paramList.addColor("playButtonColor").fromString(PadSectionConfig.kPlayButtonColor);
        paramList.addColor("loopButtonColor").fromString(PadSectionConfig.kLoopButtonColor);
        this.modeButtonLEDParams = [
            paramList.addParam("modeLED0"),
            paramList.addParam("modeLED1"),
            paramList.addParam("modeLED2"),
            paramList.addParam("modeLED3")
        ];
        this.pitchBendParam = paramList.addFloat(0.0, 1.0, "pitchBendValue");
        this.pitchBendParam.setValue(Controls.kPitchBendDefault);
        this.modulationParam = paramList.addFloat(0.0, 1.0, "modulationValue");
        this.modulationParam.setValue(Controls.kModulationDefault);
        this.expressionParam = paramList.addFloat(0.0, 1.0, "expressionValue");
        this.expressionParam.setValue(Controls.kExpressionDefault);
        this.breathControlParam = paramList.addFloat(0.0, 1.0, "breathControlValue");
        this.breathControlParam.setValue(Controls.kBreathControlDefault);
        this.sustainParam = paramList.addParam("sustain");
        this.sustainParam.setValue(0);
        this.whiteColorParam = ParamContainerUtil.addColorParam(paramList, "whiteColor", "white");
        this.grayColorParam = ParamContainerUtil.addColorParam(paramList, "grayColor", "#6e7281");
        this.redColorParam = ParamContainerUtil.addColorParam(paramList, "redColor", "red");
        this.yellowColorParam = ParamContainerUtil.addColorParam(paramList, "yellowColor", "yellow");
        this.dimmedButtonColorParam = ParamContainerUtil.addColorParam(paramList, "dimmedButtonColor", "#363636");
        this.controlLinkFocusColorParam = ParamContainerUtil.addColorParam(paramList, "controlLinkFocusColor", "#fff673");
        this.plusModifierColorAlias = paramList.addAlias("plusModifierLED");
        this.minusModifierColorAlias = paramList.addAlias("minusModifierLED");
        this.plusModifierColorAlias.setOriginal(this.grayColorParam);
        this.minusModifierColorAlias.setOriginal(this.grayColorParam);
        this.bankButtonEditModeColor = ParamContainerUtil.addColorParam(paramList, "editModeButtonColor", "#EF3F00");
        this.deactivatedColorParam = ParamContainerUtil.addColorParam(paramList, "deactivatedColor", "#4A4A4F");
        this.padPlusColorParam = ParamContainerUtil.addColorParam(paramList, "padPlusColor", "white");
        this.padMinusColorParam = ParamContainerUtil.addColorParam(paramList, "padMinusColor", "white");
        this.padWorkflowParam = paramList.addInteger(PadWorkflow.kMin, PadWorkflow.kMax, "padWorkflow");
        this.padWorkflowParam.setValue(PadWorkflow.kKeyboardPlay);
        this.isDrumPatternEditor = paramList.addParam("isDrumPatternEditor");
        this.isDrumPatternEditor.setValue(true);
        this.fullVelocityModeParam = paramList.addParam("fullVelocityMode");
        this.setupKeyboardModeParams(paramList);
        this.screen = new ATOMSQScreen(paramList);
        this.focusTrackColorParam = paramList.addAlias("focusTrackColor");
        this.focusTrackColorParam.setFeedbackNeeded(true);
        this.focusTrackLabelParam = paramList.addAlias("focusTrackLabel");
        this.focusTrackLabelParam.setFeedbackNeeded(true);
        this.lcdButtonPressedParam = paramList.addInteger(0, 6, "lcdButtonPressed");
        for (let i = 0; i < 8; i++)
            paramList.addInteger(0, 8, "bankButtonPressed[" + i + "]");
        for (let i = 0; i < 8; i++)
            ParamContainerUtil.addColorParam(paramList, "bankColor[" + i + "]", PadSectionConfig.kBankColors[i]);
        this.ledOnParam = paramList.addParam("onLED");
        this.ledOnParam.setValue(1);
        this.dimmedLEDParam = paramList.addInteger(0, 127, "dimmedLED");
        this.dimmedLEDParam.setValue(0);
        this.stripLEDOffParam = paramList.addParam("stripOffLED");
        this.stripLEDOffParam.setValue(0);
        this.touchStripModeParam = paramList.addInteger(0, 7, "touchStripMode");
        this.touchStripModeParam.setValue(TouchStripMode.kDefault);
        this.touchStripModeTitleParam = paramList.addString("touchStripModeTitle");
        this.handleStripModeParamChange(this.touchStripModeParam.value);
        this.lastTouchStripMode = TouchStripMode.kDefault;
        this.functionPadsModeParam = paramList.addInteger(0, 1, "functionPadsMode");
        this.functionPadsModeParam.setValue(0);
        this.functionPadsModeTitleParam = paramList.addString("functionPadsModeTitle");
        this.updateFunctionPadsTitle(this.functionPadsModeParam.value);
        this.followEditor = false;
        this.editorEngaged = false;
        this.ledPressedParams = [];
        for (let i = 0; i < 6; i++)
            this.ledPressedParams.push(paramList.addParam("ledPressed[" + i + "]"));
        let root = this.hostComponent.model.root;
        this.pageConfigProvider = new PageConfigProvider();
        this.padSectionManager = new PadSectionManager(this);
        this.padSectionManager.add(root);
        this.padSectionManager.init();
        this.editHintTopRow = paramList.addString("editHintTopRow");
        this.editHintTopRow.setValue("Windows | SelectAll | Copy | Duplicate");
        this.editHintBottomRow = paramList.addString("editHintBottomRow");
        this.editHintBottomRow.setValue("Redo | Retro | Paste | Delete");
        this.lastTrackEditorType = PreSonus.HostUtils.kEditorTypeNone;
        PreSonus.HostUtils.enableEngineEditNotifications(this, true);
        this.padSectionManager.adviseHostSignals(this);
        this.padFocusMode = paramList.addParam("padFocusMode");
        this.padFocusMode.setValue(1, true);
        this.isKeyboardModeParam = paramList.addParam("keyboardModeEngaged");
        this.genericMappingElement = root.find("GenericMapping");
        let mixerConsoleMappingElement = root.find("MixerConsoleMapping");
        this.mixerFollowBankMapping = mixerConsoleMappingElement.find("MixerFollowBank");
        let musicTrackMapping = root.find("MusicTrackMapping");
        this.focusChannelMapping = musicTrackMapping.find("FocusChannelMapping");
        this.noteRepeatElement = root.find("NoteRepeatElement");
        this.overlayHandler = new ControlLinkOverlayHandler(paramList);
        this.browserNodeSync = new BrowserNodeSyncronizer(paramList);
        this.enablePresetOverlayParam = paramList.addParam("presetOverlayEnabled");
        this.enablePresetOverlayParam.setSignalAlways(true);
        this.focusPresetTextParam = paramList.addString("focusPresetText");
        this.focusDeviceNameParam = paramList.addString("focusDeviceText");
        this.plugBankElement = root.getGenericMapping().getElement(0);
        this.pagingStatusAlias = paramList.addAlias("pagingStatusAlias");
        this.nextPageAlias = paramList.addAlias("nextPageAlias");
        this.prevPageAlias = paramList.addAlias("prevPageAlias");
        this.knobsPagingComponent = hostComponent.find(PreSonus.ComponentID.kPaging);
        let formatParam = this.knobsPagingComponent.findParameter(PreSonus.ParamID.kPagingStatusFormat);
        formatParam.setValue("Knobs pageNumber/pageCount: pageTitle", true);
        let mapping = root.find("UserCommands");
        this.commandsPagingComponent = mapping.component.find("Paging");
        formatParam = this.commandsPagingComponent.findParameter(PreSonus.ParamID.kPagingStatusFormat);
        formatParam.setValue("Commands pageNumber/pageCount: pageTitle", true);
        this.controlLinkPageColors = [];
        for (let bankButtonIndex = 0; bankButtonIndex < PadSectionConfig.kBankCount; bankButtonIndex++) {
            let p = paramList.addColor("controlLinkPageColor[" + bankButtonIndex + "]");
            this.controlLinkPageColors.push(p);
        }
        this.selectStepParamHint = paramList.addString("selectStep");
        this.selectStepParamHint.fromString("Select a step");
        this.noStepParamHint = paramList.addString("noStepParam");
        this.noStepParamHint.fromString("*");
        this.stepFocusOverlayTitle = paramList.addString("stepFocusOverlayTitle");
        this.stepFocusOverlayTitle.fromString("Knobs 5-8");
        this.stepFocusOverlayHint = paramList.addString("stepFocusOverlayHint");
        this.stepFocusOverlayHint.fromString("Velocity | Repeat | Delay | Probability");
        this.stepFocusOverlayEnabled = paramList.addParam("stepFocusOverlayEnabled");
        this.stepFocusOverlayEnabled.setSignalAlways(true);
        this.noSamplerHint = paramList.addString("noSamplerHint");
        this.noSamplerHint.setValue("No Sampler Track Selected");
        this.firmware = paramList.addString("firmware");
        this.firmware.setValue("");
        this.controlLinkUserTitleParam = paramList.addString("controlLinkUserTitle");
        this.onFocusDeviceNameChanged("");
        this.isFocusMappingParam = paramList.addParam("isFocusMapping");
        this.isFocusMappingParam.setValue(0);
        this.displayModeParam.setValue(DisplayMode.kInstrumentMode, true);
        this.sendMessage(FirmwareMessage.kRequest);
    }
    setupKeyboardModeParams(paramList) {
        this.padLayoutParam = paramList.addInteger(0, PadLayoutID.kLayoutCount - 1, "padLayout");
        this.padLayoutParam.setValue(PadLayoutID.kKeyboard);
        this.padLayoutTitleParam = paramList.addString("padLayoutTitle");
        this.padLayoutTitleParam.setValue(ScreenUtil.padLayoutToTitle(PadLayoutID.kKeyboard));
        this.scaleParam = paramList.addInteger(PreSonus.MusicalScale.kDefault, PreSonus.MusicalScale.kMaxScale, "scale");
        this.scaleNameParam = paramList.addString("scaleName");
        let scaleName = ScreenUtil.scaleToDisplayTitle(this.scaleParam.value);
        this.scaleNameParam.setValue(scaleName);
        this.rootOffsetParam = paramList.addInteger(0, PadSectionConfig.kRootOffsetLimit, "rootOffset");
        this.rootOffsetParam.setValue(0);
        let limit = PadSectionConfig.kPadOffsetLimit;
        this.padOffsetParam = paramList.addInteger(limit * -1, limit, "padOffset");
        this.padOffsetParam.setValue(0);
        this.octaveParam = paramList.addInteger(0, PadSectionConfig.kOctaveCount - 1, "octave");
        this.octaveParam.setValue(PadSectionConfig.kDefaultOctave);
        this.bankParam = paramList.addInteger(0, PadSectionConfig.kBankCount, "bank");
        this.bankParam.setValue(0);
        this.octaveTitleParam = paramList.addString("octaveTitle");
        this.octaveTitleParam.setValue(ScreenUtil.octaveToIndicator(this.octaveParam.value));
        this.rootOffsetTitleParam = paramList.addString("rootOffsetTitle");
        this.rootOffsetTitleParam.setValue(ScreenUtil.semitonesToKeySymbol(this.rootOffsetParam.value));
        this.patternModeTitleParam = paramList.addString("patternModeTitle");
    }
    onExit() {
        this.padSectionManager.unadviseHostSignals(this);
        PreSonus.HostUtils.enableEngineEditNotifications(this, false);
        super.onExit();
    }
    onNoteRepeatButtonPressed(state) {
        if (state) {
            let shiftPressed = this.shiftModifierParam.value;
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
        let repeatActive = this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive);
        this.onActivateNoteRepeat(repeatActive);
    }
    onActivateNoteRepeat(value) {
        if (value == 1) {
            if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kSpread))
                this.padSectionManager.enableRateTriggerMode(value);
        }
        else if (value == 0) {
            this.padSectionManager.enableRateTriggerMode(value);
        }
        this.screen.setNoteRepeatIndicator(value);
    }
    onSpreadModeChanged(value) {
        if (value == 1) {
            if (this.noteRepeatElement.getParamValue(PreSonus.NoteRepeat.kActive))
                this.padSectionManager.enableRateTriggerMode(true);
        }
        else if (value == 0) {
            this.padSectionManager.enableRateTriggerMode(false);
        }
    }
    onActivateCommand(element, state) {
        if (!state)
            return;
        let command = element.commandName;
        let category = element.commandCategory;
        let control = element.controlName;
        if (!command || !category || !control)
            return;
        this.screen.setCommandName(category, command, control, Display.kTextColorDefault);
    }
    onTrackColorChange(value) {
        let color = this.focusTrackColorParam.value;
        this.padSectionManager.configureMusicInputPads(PadConfiguration.kAccentColor, color);
        this.syncFunctionPadColors();
    }
    notify(subject, msg) {
        if (!msg)
            return;
        if (msg.id == "changed" && subject) {
            if (subject == this.focusTrackColorParam)
                this.onTrackColorChange(this.focusTrackColorParam.value);
        }
        else if (msg.id == PreSonus.HostUtils.kTrackEditorChanged) {
            if (msg.getArgCount() > 0)
                this.onTrackEditorChangedNotify(msg.getArg(0));
        }
        else if (msg.id == PreSonus.PadSection.kKeyboardModeChanged && subject) {
            let padSectionComponent = subject;
            this.isKeyboardModeParam.setValue(padSectionComponent.isKeyboardMode(), true);
        }
        else if (msg.id == PreSonus.PadSection.kCurrentBankChanged && subject) {
            let padSection = subject;
            this.onPadSectionCurrentBankChanged(padSection);
        }
        else if (msg.id == FirmwareMessage.kUpdate) {
            if (msg.getArgCount() >= FirmwareMessage.kArgCount) {
                let major = msg.getArg(FirmwareMessage.kArgMajor);
                let minor = msg.getArg(FirmwareMessage.kArgMinor);
                this.firmware.fromString(`Firmware: v${major}.${(minor)}`);
            }
        }
        else
            super.notify(subject, msg);
    }
    onPadSectionCurrentBankChanged(padSection) {
        if (!padSection || padSection.isKeyboardMode())
            return;
        let bank = padSection.getCurrentBank();
        if (bank == this.bankParam.value)
            return;
        this.bankParam.setValue(bank, false);
    }
    syncLabelAndColor(element) {
        if (!element || !element.isConnected())
            return;
        let previousColor = this.focusTrackColorParam.value;
        element.connectAliasParam(this.focusTrackColorParam, PreSonus.ParamID.kColor);
        element.connectAliasParam(this.focusTrackLabelParam, PreSonus.ParamID.kLabel);
        let color = element.getParamValue(PreSonus.ParamID.kColor);
        if (color == previousColor)
            return;
        this.padSectionManager.configureMusicInputPads(PadConfiguration.kAccentColor, color);
    }
    onFollowBankChanged() {
        if (!this.mixerFollowBankMapping.isConnected())
            return;
        let channelElement = this.mixerFollowBankMapping.getElement(0);
        this.syncLabelAndColor(channelElement);
    }
    onFocusChannelChanged() {
        if (!this.focusChannelMapping.isConnected())
            return;
        let channelElement = this.focusChannelMapping.getElement(0);
        if (channelElement && channelElement.getParamValue(PreSonus.ParamID.kLabel))
            this.syncLabelAndColor(channelElement);
    }
    syncFunctionPadColors() {
        let mode = this.functionPadsModeParam.value;
        if (mode == null)
            return;
        if (mode == FunctionPadsMode.kPitchBend) {
            this.onPitchBendParamChanged(this.pitchBendParam.value);
        }
        else if (mode == FunctionPadsMode.kBreathMod) {
            this.onBreathControlParamChanged(this.breathControlParam.value);
            this.onModulationParamChanged(this.modulationParam.value);
        }
    }
    onPitchBendParamChanged(value) {
        let brightnessAmount = Util.toRange(value, 0.5, 1.0, 1.0, 0.0);
        let trackColor = this.focusTrackColorParam.value;
        this.padPlusColorParam.setValue(ColorUtil.addBrightness(trackColor, brightnessAmount));
        brightnessAmount = Util.toRange(value, 0.0, 0.5, 0.0, 1.0);
        trackColor = this.focusTrackColorParam.value;
        this.padMinusColorParam.setValue(ColorUtil.addBrightness(trackColor, brightnessAmount));
    }
    onBreathControlParamChanged(value) {
        let trackColor = this.focusTrackColorParam.value;
        this.padPlusColorParam.setValue(ColorUtil.addBrightness(trackColor, 1.0 - value));
    }
    onModulationParamChanged(value) {
        let trackColor = this.focusTrackColorParam.value;
        this.padMinusColorParam.setValue(ColorUtil.addBrightness(trackColor, 1.0 - value));
    }
    isSupportedEditorType(editorType) {
        return editorType == PreSonus.HostUtils.kEditorTypeNone || editorType == PreSonus.HostUtils.kEditorTypeMusic ||
            editorType == PreSonus.HostUtils.kEditorTypeAudio || editorType == PreSonus.HostUtils.kEditorTypePattern;
    }
    onTrackEditorChangedNotify(editor) {
        let editorType = PreSonus.HostUtils.kEditorTypeNone;
        if (editor != null)
            editorType = PreSonus.HostUtils.getEditorType(editor);
        if (!this.isSupportedEditorType(editorType)) {
            return;
        }
        this.lastTrackEditorType = editorType;
        if (this.followEditor)
            this.setEventEditorDisplayMode(editorType);
    }
    setEventEditorDisplayMode(editorType) {
        switch (editorType) {
            case PreSonus.HostUtils.kEditorTypeAudio:
                this.displayModeParam.setValue(DisplayMode.kEditorModeAudio, true);
                break;
            case PreSonus.HostUtils.kEditorTypeMusic:
                this.displayModeParam.setValue(DisplayMode.kEditorModePart, true);
                break;
            case PreSonus.HostUtils.kEditorTypePattern:
                this.displayModeParam.setValue(DisplayMode.kEditorModePattern, true);
                break;
            default:
                this.displayModeParam.setValue(DisplayMode.kEditorModeNone, true);
                break;
        }
    }
    restoreKeyboardPlayMode() {
        let p = this.padWorkflowParam;
        if (p.value != PadWorkflow.kKeyboardPlay)
            p.setValue(PadWorkflow.kKeyboardPlay, true);
    }
    restoreSequencerMode() {
        let p = this.padWorkflowParam;
        if (p.value != PadWorkflow.kSequencing)
            p.setValue(PadWorkflow.kSequencing, true);
    }
    restoreStepControlMode() {
        let p = this.padWorkflowParam;
        if (p.value != PadWorkflow.kStepControl)
            p.setValue(PadWorkflow.kStepControl, true);
    }
    isPageChange(param) {
        for (let i = 0; i < this.displayPageIndexParams.length; i++)
            if (param == this.displayPageIndexParams[i])
                return true;
        return false;
    }
    paramChanged(param) {
        if (!param)
            return;
        if (param == this.displayModeParam) {
            this.updateModeButtonLEDs(param.value);
            this.onModeChange(param.value);
        }
        else if (param == this.samplerControlMode) {
            let displayMode = this.displayModeParam.value;
            let pageIndex = this.getDisplayPageIndexParam(displayMode).value;
            if (displayMode == DisplayMode.kInstrumentMode && (pageIndex == Display.kSamplerControlPage))
                this.screen.update(displayMode, pageIndex, param.value);
        }
        else if (this.isPageChange(param)) {
            let displayMode = this.displayModeParam.value;
            this.onPageChange(displayMode, this.getDisplayPageIndexParam(displayMode));
        }
        else if (param == this.padFocusMode) {
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kPadFocus, param.value);
        }
        else if (param == this.padWorkflowParam) {
            this.padSectionManager.setWorkflow(param.value);
        }
        else if (param == this.scaleParam) {
            this.scaleNameParam.setValue(ScreenUtil.scaleToDisplayTitle(param.value));
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kScale, param.value);
        }
        else if (param == this.rootOffsetParam) {
            this.rootOffsetTitleParam.setValue(ScreenUtil.semitonesToKeySymbol(param.value));
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kRootOffset, param.value);
        }
        else if (param == this.padOffsetParam) {
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kRange, param.value * -1);
        }
        else if (param == this.octaveParam) {
            this.octaveTitleParam.setValue(ScreenUtil.octaveToIndicator(param.value));
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kOctave, param.value);
        }
        else if (param == this.bankParam) {
            let pse = this.padSectionManager.getActiveMusicInputPadSectionElement();
            if (pse.component)
                pse.component.setCurrentBank(param.value);
        }
        else if (param == this.padLayoutParam) {
            this.padLayoutTitleParam.setValue(ScreenUtil.padLayoutToTitle(param.value));
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kLayout, param.value);
        }
        else if (param == this.touchStripModeParam) {
            this.handleStripModeParamChange(param.value);
        }
        else if (param == this.functionPadsModeParam) {
            this.updateFunctionPadsTitle(param.value);
            this.updateFunctionPadControls(param.value);
            this.syncFunctionPadColors();
        }
        else if (param == this.fullVelocityModeParam) {
            this.padSectionManager.configureMusicInputPads(PadConfiguration.kFullVelocity, param.value);
        }
        else if (param == this.isKeyboardModeParam) {
            if (param.value == 0) {
                let mode = this.displayModeParam.value;
                this.deselectBlockedButtons(mode, this.getDisplayPageIndexParam(mode).value);
            }
        }
    }
    updateFunctionPadsTitle(mode) {
        let titleString = "undefined";
        if (mode == FunctionPadsMode.kPitchBend)
            titleString = "Pitchbend";
        else if (mode == FunctionPadsMode.kBreathMod)
            titleString = "Breath/Mod";
        this.functionPadsModeTitleParam.setValue(titleString);
    }
    updateFunctionPadControls(mode) {
        let useSplit = (mode == FunctionPadsMode.kPitchBend);
        this.hostComponent.model.setControlOption("padPlus", FunctionPads.kOptionSplit, useSplit);
        this.hostComponent.model.setControlOption("padMinus", FunctionPads.kOptionSplit, useSplit);
    }
    handleStripModeParamChange(value) {
        this.touchStripModeTitleParam.setValue(TouchStrip.getModeTitle(value));
        switch (value) {
            case TouchStripMode.kPitchBend:
            case TouchStripMode.kChannelPan:
                {
                    this.hostComponent.model.setControlOption("touchStripSingleLED", TouchStrip.kOptionRefresh, true);
                    break;
                }
            case TouchStripMode.kModWheel:
            case TouchStripMode.kExpression:
            case TouchStripMode.kBreathControl:
            case TouchStripMode.kChannelVolume:
            case TouchStripMode.kControlLink:
                {
                    this.hostComponent.model.setControlOption("touchStripMultiLED", TouchStrip.kOptionRefresh, true);
                    break;
                }
            case TouchStripMode.kNoteRepeat:
                break;
        }
        this.hostComponent.model.setControlOption("touchStrip", TouchStrip.kOptionMode, value);
    }
    getDisplayPageIndexParam(displayMode) {
        if (displayMode < DisplayMode.kModeMin || displayMode > DisplayMode.kModeMax)
            return null;
        return this.displayPageIndexParams[displayMode];
    }
    onModeChange(mode) {
        switch (mode) {
            case DisplayMode.kEditorModeNone:
            case DisplayMode.kEditorModeAudio:
            case DisplayMode.kEditorModePart:
            case DisplayMode.kEditorModePattern:
                this.followEditor = true;
                break;
            default:
                this.followEditor = false;
        }
        this.editorEngaged = (mode == DisplayMode.kEditorModeAudio ||
            mode == DisplayMode.kEditorModePart || mode == DisplayMode.kEditorModePattern);
        let pageParam = this.getDisplayPageIndexParam(mode);
        this.applyPageConfig(mode, pageParam.value);
        this.screen.update(mode, pageParam.value, this.samplerControlMode.value);
    }
    onPageChange(mode, pageParam) {
        this.deselectBlockedButtons(mode, pageParam.value);
        this.applyPageConfig(mode, pageParam.value);
        this.screen.update(mode, pageParam.value, this.samplerControlMode.value);
    }
    deselectBlockedButtons(mode, page) {
        let noButtonIndex = 6;
        if (mode == DisplayMode.kInstrumentMode && page == Display.kInstrumentPadConfigPage) {
            if (this.isKeyboardModeParam.value == 0) {
                let pressedButton = this.lcdButtonPressedParam.value;
                if (pressedButton >= 0 && pressedButton <= 4)
                    this.lcdButtonPressedParam.setValue(noButtonIndex, true);
            }
        }
    }
    applyPageConfig(mode, page) {
        let config = this.pageConfigProvider.get(mode, page);
        let frame = config["focusFrame"];
        if (frame != PageConfig.kFrameIgnore) {
            if (!this.hasControlLinkFocus())
                PreSonus.HostUtils.focusWorkspaceFrame(frame, false);
        }
        let editorAction = config["showEditor"];
        switch (editorAction) {
            case PageConfigEditorMode.kEditorShow:
                this.showEditor(true);
                break;
            case PageConfigEditorMode.kEditorHide:
                this.showEditor(false);
                break;
            default:
                break;
        }
        let padMode = config["padMode"];
        if (padMode == PageConfigPadMode.kPadsSequencer)
            this.restoreSequencerMode();
        else if (padMode == PageConfigPadMode.kPadsStepControl)
            this.restoreStepControlMode();
        else
            this.restoreKeyboardPlayMode();
    }
    onWheelLeftButtonPressed(value) {
        if (!value)
            return;
        let p = this.getDisplayPageIndexParam(this.displayModeParam.value);
        if (!p)
            return;
        if (p.max == 0)
            return;
        p.setValue(p.value == p.min ? p.max : p.value - 1, true);
    }
    onWheelRightButtonPressed(value) {
        if (!value)
            return;
        let p = this.getDisplayPageIndexParam(this.displayModeParam.value);
        if (!p)
            return;
        if (p.max == 0)
            return;
        p.setValue(p.value == p.max ? p.min : p.value + 1, true);
    }
    onLoadButtonPressed(state) {
        if (!state)
            return;
        PreSonus.HostUtils.focusWorkspaceFrame(PreSonus.HostUtils.kBrowserZone, false);
        let args = Host.Attributes(["Replace", this.shiftModifierParam.value]);
        Host.GUI.Commands.interpretCommand("Browser", "Insert Selected Item", false, args);
        args = Host.Attributes(["State", false]);
        Host.GUI.Commands.interpretCommand("View", "Browser", false, args);
    }
    showEditor(show) {
        let args = Host.Attributes(["State", show]);
        Host.GUI.Commands.deferCommand("View", "Editor", false, args);
    }
    onShowInstrumentEditor(state) {
        if (state) {
            let stripElement = this.mixerFollowBankMapping.getElement(0);
            PreSonus.HostUtils.openEditorAndFocus(this, stripElement, PreSonus.HostUtils.kInstrumentEditor, true);
        }
    }
    onGenericMappingStripActivateByKnob(knobIndex, element, state) {
        if (!state) {
            let controlName = this.overlayHandler.buildKnobControlName(knobIndex);
            this.overlayHandler.setParamNameForControl(controlName, "");
            return;
        }
        if (!element)
            return;
        let paramName = element.getParamValue(PreSonus.ParamID.kTitle);
        let controlName = this.overlayHandler.buildKnobControlName(knobIndex);
        this.overlayHandler.setParamNameForControl(controlName, paramName);
    }
    onGenericMappingStripActivateByTouchStrip(element, state) {
        if (!state) {
            this.overlayHandler.setParamNameForControl(Controls.kControlLinkTouchStrip, "");
            return;
        }
        if (!element)
            return;
        let paramName = element.getParamValue(PreSonus.ParamID.kTitle);
        this.overlayHandler.setParamNameForControl(Controls.kControlLinkTouchStrip, paramName);
    }
    onGenericMappingParamValueChangedByKnob(knobIndex, value) {
        this.overlayHandler.onParamInvokeByKnob(knobIndex, value);
    }
    onGenericMappingParamValueChangedByStrip(value) {
        this.overlayHandler.onParamInvokeByTouchStrip(value);
    }
    setModeButtonLEDEnabled(index) {
        for (let i = 0; i < 4; i++)
            this.modeButtonLEDParams[i].setValue(i == index ? true : false);
    }
    updateModeButtonLEDs(mode) {
        switch (mode) {
            case DisplayMode.kSongMode:
                this.setModeButtonLEDEnabled(0);
                break;
            case DisplayMode.kInstrumentMode:
                this.setModeButtonLEDEnabled(1);
                break;
            case DisplayMode.kEditorModeNone:
            case DisplayMode.kEditorModeAudio:
            case DisplayMode.kEditorModePart:
            case DisplayMode.kEditorModePattern:
                this.setModeButtonLEDEnabled(2);
                break;
            case DisplayMode.kUserMode:
                this.setModeButtonLEDEnabled(3);
                break;
            default:
                break;
        }
    }
    gotoDisplayModeDefaultPage(displayMode) {
        let pageIndexParam = this.getDisplayPageIndexParam(displayMode);
        pageIndexParam.setValue(0, true);
    }
    gotoDisplayModeOrDefaultPage(displayMode) {
        let currentMode = this.displayModeParam.value;
        if (currentMode == displayMode)
            this.gotoDisplayModeDefaultPage(displayMode);
        else
            this.displayModeParam.setValue(displayMode, true);
    }
    onSongModeButtonPressed(state) {
        if (!state)
            return;
        this.gotoDisplayModeOrDefaultPage(DisplayMode.kSongMode);
    }
    onInstrumentModeButtonPressed(state) {
        if (!state)
            return;
        this.gotoDisplayModeOrDefaultPage(DisplayMode.kInstrumentMode);
    }
    onTouchStripTouched(value) {
        let isPressed = (value != 0);
        if (!isPressed)
            this.pitchBendParam.setValue(Controls.kPitchBendDefault);
    }
    toDisplayEditorMode(editorType) {
        if (editorType == PreSonus.HostUtils.kEditorTypeAudio)
            return DisplayMode.kEditorModeAudio;
        else if (editorType == PreSonus.HostUtils.kEditorTypeMusic)
            return DisplayMode.kEditorModePart;
        else if (editorType == PreSonus.HostUtils.kEditorTypePattern)
            return DisplayMode.kEditorModePattern;
        else
            return DisplayMode.kEditorModeNone;
    }
    onEditorModeButtonPressed(state) {
        if (!state)
            return;
        if (this.editorEngaged) {
            let currentMode = this.displayModeParam.value;
            if (this.lastTrackEditorType == PreSonus.HostUtils.kEditorTypeAudio && currentMode == DisplayMode.kEditorModeAudio)
                this.gotoDisplayModeDefaultPage(DisplayMode.kEditorModeAudio);
            else if (this.lastTrackEditorType == PreSonus.HostUtils.kEditorTypeMusic && currentMode == DisplayMode.kEditorModePart)
                this.gotoDisplayModeDefaultPage(DisplayMode.kEditorModePart);
            else if (this.lastTrackEditorType == PreSonus.HostUtils.kEditorTypePattern && currentMode == DisplayMode.kEditorModePattern)
                this.gotoDisplayModeDefaultPage(DisplayMode.kEditorModePattern);
            return;
        }
        let targetMode = this.toDisplayEditorMode(this.lastTrackEditorType);
        this.displayModeParam.setValue(targetMode, true);
    }
    updatePagingAliasParams(component) {
        this.pagingStatusAlias.setOriginal(component.findParameter(PreSonus.ParamID.kPagingStatus));
        this.nextPageAlias.setOriginal(component.findParameter(PreSonus.ParamID.kPagingNextPage));
        this.prevPageAlias.setOriginal(component.findParameter(PreSonus.ParamID.kPagingPreviousPage));
    }
    onUserModeButtonPressed(state) {
        this.updatePagingAliasParams(state ?
            this.knobsPagingComponent : this.commandsPagingComponent);
        if (!state)
            return;
        if (this.displayModeParam.value != DisplayMode.kUserMode)
            this.displayModeParam.setValue(DisplayMode.kUserMode, true);
    }
    onSequencerPadPlusPressed(value) {
        let mode = this.functionPadsModeParam.value;
        let enable = (mode == FunctionPadsMode.kPitchBend) ? value > 0.5 : value > 0;
        this.padSectionManager.setAccentModifierActive(enable);
        this.plusModifierColorAlias.setOriginal(enable ? this.redColorParam : this.grayColorParam);
    }
    onSequencerPadMinusPressed(value) {
        let mode = this.functionPadsModeParam.value;
        let enable = (mode == FunctionPadsMode.kPitchBend) ? value < 0.5 : value > 0;
        this.padSectionManager.setStepBindModifierActive(enable);
        this.minusModifierColorAlias.setOriginal(enable ? this.redColorParam : this.grayColorParam);
    }
    onToggleArranger(state) {
        if (!state)
            return;
        Host.GUI.Commands.interpretCommand("View", "Open Arranger Track");
        PreSonus.HostUtils.focusWorkspaceFrame(PreSonus.HostUtils.kArrangementZone, false);
    }
    onBrowserNodeParamChanged(value, paramName) {
        this.browserNodeSync.update(paramName, value);
    }
    onActivateBrowserParamInvoke(element, state) {
        if (!state || !element)
            return;
        this.browserNodeSync.update(element.paramName, element.paramValue);
    }
    loadNoteFX(cid) {
        PreSonus.HostUtils.addNoteFXDevice(cid, false);
        let element = this.focusChannelMapping.getElement(0);
        if (element)
            PreSonus.HostUtils.openEditorAndFocus(this, element, PreSonus.HostUtils.kNoteFXEditor, false);
    }
    onAddChorder(state) {
        if (state)
            this.loadNoteFX(PreSonus.DeviceClassID.kNoteFXChorder);
    }
    onAddArpeggiator(state) {
        if (state)
            this.loadNoteFX(PreSonus.DeviceClassID.kNoteFXArpeggiator);
    }
    onDrumModeChanged(value) {
        this.isDrumPatternEditor.setValue(value);
        this.updateDrumModeTitle(value);
    }
    onActivateDrumModeParamInvoke(element, state) {
        if (!state)
            return;
        this.isDrumPatternEditor.setValue(element.paramValue);
        this.updateDrumModeTitle(state);
    }
    updateDrumModeTitle(value) {
        this.patternModeTitleParam.setValue(value ? "Drums" : "Melodic");
    }
    onPlayFromSelection(state) {
        if (!state)
            return;
        Host.GUI.Commands.interpretCommand("Transport", "Locate Selection");
        Host.GUI.Commands.interpretCommand("Transport", "Start");
    }
    onUserCommandTitleChanged(buttonIndex, value) {
        this.screen.clearCell(buttonIndex);
        let commandName = value;
        if (commandName)
            this.screen.setCommandName("", commandName, "lcdButton[" + buttonIndex + "]", Display.kTextColorDefault);
        else
            this.screen.setCommandName("", "Not assigned", "lcdButton[" + buttonIndex + "]", Display.kTextColorDisabled);
    }
    onUserCommandTitleActivate(buttonIndex, element, state) {
        if (this.displayModeParam.value != DisplayMode.kUserMode)
            return;
        if (!state || !element) {
            this.screen.clearCell(buttonIndex);
            return;
        }
        let commandName = element.paramValue;
        this.onUserCommandTitleChanged(buttonIndex, commandName);
    }
    onShiftButtonPressed(state) {
        if (state) {
            this.lastTouchStripMode = this.touchStripModeParam.value;
            this.touchStripModeParam.setValue(TouchStripMode.kChannelVolume, true);
        }
        else
            this.touchStripModeParam.setValue(this.lastTouchStripMode, true);
    }
    onWheelKnobReceive(state) {
        if (!state)
            return;
        if (!this.hasControlLinkFocus())
            this.focusPresetTextParam.setValue(ScreenUtil.formatAsPresetName("<No Focus>"));
        this.enablePresetOverlayParam.setValue(1, true);
    }
    onFocusPresetNameChanged(value) {
        this.focusPresetTextParam.setValue(ScreenUtil.formatAsPresetName(value));
    }
    onFocusDeviceNameChanged(value) {
        let text = "Control Link" + ": ";
        text += (value == "") ? "Global" : value;
        this.controlLinkUserTitleParam.setValue(text);
    }
    hasControlLinkFocus() {
        return this.plugBankElement.remapHint == PreSonus.RemapHint.kFocus;
    }
    onGenericMappingBankActivate(element, state) {
        if (!state)
            return;
        this.isFocusMappingParam.setValue(this.hasControlLinkFocus());
        this.syncControlLinkPageBanks();
    }
    syncControlLinkPageBanks() {
        let p = this.knobsPagingComponent.findParameter(PreSonus.ParamID.kPagingPageNumber);
        this.onPagingPageNumberChanged(p.value);
    }
    onPagingPageNumberChanged(value) {
        let maxEnabledBankButtons = PadSectionConfig.kBankCount;
        let pageIndex = value - 1;
        let pagingModeParam = this.knobsPagingComponent.findParameter(PreSonus.ParamID.kPagingMode);
        if (pagingModeParam.value == PreSonus.PagingMode.kAuto) {
            let pageCountParam = this.knobsPagingComponent.findParameter(PreSonus.ParamID.kPagingPageCount);
            let maxPages = pageCountParam.value;
            let blockIndex = Math.floor(pageIndex / PadSectionConfig.kBankCount);
            let lastBlockIndex = Math.floor(maxPages / PadSectionConfig.kBankCount);
            if (blockIndex == lastBlockIndex)
                maxEnabledBankButtons = maxPages % PadSectionConfig.kBankCount;
        }
        for (let bankButtonIndex = 0; bankButtonIndex < PadSectionConfig.kBankCount; bankButtonIndex++) {
            let colorString = bankButtonIndex < maxEnabledBankButtons ?
                Controls.kEditButtonOff : Controls.kButtonOffColor;
            if (bankButtonIndex == pageIndex)
                colorString = Controls.kEditButtonOn;
            let p = this.controlLinkPageColors[bankButtonIndex];
            p.fromString(colorString);
        }
    }
    onStepParamEdited(value) {
        if (value)
            this.stepFocusOverlayEnabled.setValue(1);
    }
    onStepFocusActiveChanged(value) {
        if (value == 0)
            this.stepFocusOverlayEnabled.setValue(0);
    }
}
function createATOMSQComponentInstance() {
    return new ATOMSQComponent;
}
