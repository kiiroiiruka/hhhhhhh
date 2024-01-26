class Icon {
}
Icon.kArrowsUpDown = String.fromCharCode(0x01);
Icon.kArrowUp = String.fromCharCode(0x02);
Icon.kArrowDown = String.fromCharCode(0x03);
Icon.kArrowLeft = String.fromCharCode(0x04);
Icon.kArrowRight = String.fromCharCode(0x05);
Icon.kArrowDoubleLeft = String.fromCharCode(0x06);
Icon.kArrowDoubleRight = String.fromCharCode(0x07);
Icon.kCircle = String.fromCharCode(0x08);
Icon.kDegree = String.fromCharCode(0x09);
Icon.kFolder = String.fromCharCode(0x0A);
Icon.kNote = String.fromCharCode(0x0B);
Icon.kPower = String.fromCharCode(0x1B);
Icon.kOk = String.fromCharCode(0x1C);
Icon.kClose = String.fromCharCode(0x1D);
Icon.kDotSmall = String.fromCharCode(0x1E);
Icon.kDotBig = String.fromCharCode(0x1F);
class IdentityRequestMessage {
    static build(sysexBuffer) {
        sysexBuffer.begin([]);
        sysexBuffer.push(0x7E);
        sysexBuffer.push(0x7F);
        sysexBuffer.push(0x06);
        sysexBuffer.push(0x01);
        sysexBuffer.end();
        return sysexBuffer;
    }
}
class IdentityReplyMessage {
    static isMessage(data, length) {
        if (length < IdentityReplyMessage.kLength)
            return false;
        return data[0] == 0xF0 && data[1] == 0x7E && data[2] == 0x7F &&
            data[3] == 0x06 && data[4] == 0x02;
    }
    static getFirmwareMajor(data) {
        return parseInt(data[13].toString(16));
    }
    static getFirmwareMinor(data) {
        return parseInt(data[14].toString(16));
    }
}
IdentityReplyMessage.kLength = 17;
class ScreenUpdateMessage {
    static build(sysexBuffer, cellId, r, g, b, alignment, text) {
        sysexBuffer.begin(ScreenUpdateMessage.kHeader);
        sysexBuffer.push(0x12);
        sysexBuffer.push(cellId);
        sysexBuffer.push(r);
        sysexBuffer.push(g);
        sysexBuffer.push(b);
        sysexBuffer.push(alignment);
        if (text.length > ScreenConfig.kMaxTextLength)
            text = text.substring(0, ScreenConfig.kMaxTextLength - 1);
        sysexBuffer.appendAscii(text);
        sysexBuffer.end();
        return sysexBuffer;
    }
}
ScreenUpdateMessage.kHeader = [0x00, 0x01, 0x06, 0x22];
var ScreenTextAlignment;
(function (ScreenTextAlignment) {
    ScreenTextAlignment[ScreenTextAlignment["kCenter"] = 0] = "kCenter";
    ScreenTextAlignment[ScreenTextAlignment["kLeft"] = 1] = "kLeft";
    ScreenTextAlignment[ScreenTextAlignment["kRight"] = 2] = "kRight";
})(ScreenTextAlignment || (ScreenTextAlignment = {}));
class ScreenConfig {
}
ScreenConfig.kCellCount = 14;
ScreenConfig.kMaxTextLength = 50;
var TouchStripMode;
(function (TouchStripMode) {
    TouchStripMode[TouchStripMode["kPitchBend"] = 0] = "kPitchBend";
    TouchStripMode[TouchStripMode["kModWheel"] = 1] = "kModWheel";
    TouchStripMode[TouchStripMode["kControlLink"] = 2] = "kControlLink";
    TouchStripMode[TouchStripMode["kExpression"] = 3] = "kExpression";
    TouchStripMode[TouchStripMode["kBreathControl"] = 4] = "kBreathControl";
    TouchStripMode[TouchStripMode["kNoteRepeat"] = 5] = "kNoteRepeat";
    TouchStripMode[TouchStripMode["kChannelVolume"] = 6] = "kChannelVolume";
    TouchStripMode[TouchStripMode["kChannelPan"] = 7] = "kChannelPan";
    TouchStripMode[TouchStripMode["kDefault"] = 1] = "kDefault";
})(TouchStripMode || (TouchStripMode = {}));
class TouchStrip {
    static getModeTitle(mode) {
        switch (mode) {
            case TouchStripMode.kPitchBend:
                return "Pitchbend";
            case TouchStripMode.kModWheel:
                return "Modwheel";
            case TouchStripMode.kControlLink:
                return "Control Link";
            case TouchStripMode.kExpression:
                return "Expression";
            case TouchStripMode.kBreathControl:
                return "Breath CC";
            case TouchStripMode.kNoteRepeat:
                return "Repeater";
            case TouchStripMode.kChannelVolume:
                return "Ch.Vol.";
            case TouchStripMode.kChannelPan:
                return "Ch.Pan";
            default:
                break;
        }
        return "Undefined";
    }
}
TouchStrip.kLEDCount = 25;
TouchStrip.kLEDAddressStart = 55;
TouchStrip.kOptionMode = "touchStripMode";
TouchStrip.kOptionRefresh = "refresh";
TouchStrip.kNoteRepeatListEntries = [
    1, 2, 3, 4,
    7, 8, 9, 10
];
var FunctionPadsMode;
(function (FunctionPadsMode) {
    FunctionPadsMode[FunctionPadsMode["kPitchBend"] = 0] = "kPitchBend";
    FunctionPadsMode[FunctionPadsMode["kBreathMod"] = 1] = "kBreathMod";
})(FunctionPadsMode || (FunctionPadsMode = {}));
class FunctionPads {
}
FunctionPads.kPadPlusPitch = 0;
FunctionPads.kPadMinusPitch = 1;
FunctionPads.kOptionSplit = "functionPadSplit";
class FirmwareMessage {
}
FirmwareMessage.kArgMajor = 0;
FirmwareMessage.kArgMinor = 1;
FirmwareMessage.kArgCount = 2;
FirmwareMessage.kRequest = "firmwareRequest";
FirmwareMessage.kUpdate = "firmwareUpdate";
