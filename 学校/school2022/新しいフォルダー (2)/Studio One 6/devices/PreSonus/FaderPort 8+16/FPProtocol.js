var FP;
(function (FP) {
    FP.kActiveSensingTimeout = 5000;
    let DisplayMode;
    (function (DisplayMode) {
        DisplayMode[DisplayMode["kDefault"] = 0] = "kDefault";
        DisplayMode[DisplayMode["kAltMode"] = 1] = "kAltMode";
        DisplayMode[DisplayMode["kAltSmallMode"] = 2] = "kAltSmallMode";
        DisplayMode[DisplayMode["kAltLargeMode"] = 3] = "kAltLargeMode";
        DisplayMode[DisplayMode["kMeterMode"] = 4] = "kMeterMode";
        DisplayMode[DisplayMode["kMeterMode2"] = 5] = "kMeterMode2";
        DisplayMode[DisplayMode["kNumModes"] = 6] = "kNumModes";
    })(DisplayMode = FP.DisplayMode || (FP.DisplayMode = {}));
    let TextStyle;
    (function (TextStyle) {
        TextStyle[TextStyle["kCenter"] = 0] = "kCenter";
        TextStyle[TextStyle["kLeft"] = 1] = "kLeft";
        TextStyle[TextStyle["kRight"] = 2] = "kRight";
        TextStyle[TextStyle["kInvert"] = 4] = "kInvert";
    })(TextStyle = FP.TextStyle || (FP.TextStyle = {}));
    let ValueBar;
    (function (ValueBar) {
        ValueBar[ValueBar["kNormal"] = 0] = "kNormal";
        ValueBar[ValueBar["kBipolar"] = 1] = "kBipolar";
        ValueBar[ValueBar["kFill"] = 2] = "kFill";
        ValueBar[ValueBar["kSpread"] = 3] = "kSpread";
        ValueBar[ValueBar["kOff"] = 4] = "kOff";
    })(ValueBar = FP.ValueBar || (FP.ValueBar = {}));
    class Support {
        static getValueBarValueByte(index) {
            return index < 8 ? (0x30 | index) : (0x40 | (index - 8));
        }
        static getValueBarModeByte(index) {
            return index < 8 ? (0x30 | (index + 8)) : (0x40 | index);
        }
        static getLevelStatusByte(index) {
            return index < 8 ? (0xD0 | index) : (0xC0 | (index - 8));
        }
        static getReductionStatusByte(index) {
            return index < 8 ? (0xD0 | (index + 8)) : (0xC0 | index);
        }
        static isMeterMode(mode) {
            return mode == FP.DisplayMode.kMeterMode || mode == FP.DisplayMode.kMeterMode2;
        }
        static getMaxTextLength(mode, line) {
            let meters = Support.isMeterMode(mode);
            if (Support.isLargeFont(mode, line))
                return meters ? 3 : 6;
            else
                return meters ? 6 : 10;
        }
        static scaleMeter(value) {
            return (Math.ceil(value * Support.kMaxMeter) & Support.kMaxMeter);
        }
        static buildDisplayModeSysex(sysexHeader, sysexBuffer, displayId, mode, clear) {
            sysexBuffer.begin(sysexHeader);
            sysexBuffer.push(0x13);
            sysexBuffer.push(displayId);
            let modeByte = mode;
            if (clear)
                modeByte |= 0x10;
            sysexBuffer.push(modeByte);
            sysexBuffer.end();
            return sysexBuffer;
        }
        static buildDisplayTextSysex(sysexHeader, sysexBuffer, displayId, lineId, style, text) {
            sysexBuffer.begin(sysexHeader);
            sysexBuffer.push(0x12);
            sysexBuffer.push(displayId);
            sysexBuffer.push(lineId);
            sysexBuffer.push(style);
            sysexBuffer.appendAscii(text);
            sysexBuffer.end();
            return sysexBuffer;
        }
    }
    Support.kTextStyle = "textStyle";
    Support.kMaxMeter = 0x7F;
    Support.kMaxLineCount = 4;
    Support.isLargeFont = function (mode, line) {
        switch (mode) {
            case FP.DisplayMode.kDefault: return line == 2;
            case FP.DisplayMode.kAltMode: return line == 0;
            case FP.DisplayMode.kAltSmallMode: return false;
            case FP.DisplayMode.kAltLargeMode: return true;
            case FP.DisplayMode.kMeterMode: return line == 2;
            case FP.DisplayMode.kMeterMode2: return line == 2;
        }
        return false;
    };
    Support.kSysexHeaderFP8 = [0x00, 0x01, 0x06, 0x02];
    Support.kSysexHeaderFP16 = [0x00, 0x01, 0x06, 0x16];
    FP.Support = Support;
})(FP || (FP = {}));
