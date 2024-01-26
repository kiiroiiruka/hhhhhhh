include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
include_file("FPProtocol.js");
class ColorLEDHandler extends PreSonus.ControlHandler {
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
    sendValue(value, flags) {
        let alpha = (value >> 24) & 0xFF;
        if (alpha == 0x00)
            value = 0x7FFFFFFF;
        let r = (value >> 1) & 0x7F;
        let g = (value >> 9) & 0x7F;
        let b = (value >> 17) & 0x7F;
        this.sendMidi(PreSonus.Midi.kNoteOn | 1, this.id, r);
        this.sendMidi(PreSonus.Midi.kNoteOn | 2, this.id, g);
        this.sendMidi(PreSonus.Midi.kNoteOn | 3, this.id, b);
    }
}
class DisplayModeHandler extends PreSonus.ControlHandler {
    constructor(name, displayId) {
        super();
        this.name = name;
        this.displayId = displayId;
        this.mode = FP.DisplayMode.kDefault;
    }
    sendValue(value, flags) {
        this.mode = value;
        this.device.sendDisplayMode(this.displayId, value);
    }
}
class TextCellHandler extends PreSonus.ControlHandler {
    constructor(name, displayId, lineId, modeHandler) {
        super();
        this.name = name;
        this.displayId = displayId;
        this.lineId = lineId;
        this.modeHandler = modeHandler;
        this.hostText = "";
        this.trimmedText = "";
        this.textStyle = FP.TextStyle.kCenter;
        this.enabled = true;
    }
    sendValue(value, flags) {
        this.hostText = value;
        this.updateTrimmedText();
        if (this.enabled)
            this.sendText();
    }
    setOption(id, value) {
        if (id == FP.Support.kTextStyle) {
            if (value != this.textStyle) {
                this.textStyle = value;
                if (this.enabled)
                    this.sendText();
            }
            return true;
        }
        return false;
    }
    updateTrimmedText() {
        let maxLength = FP.Support.getMaxTextLength(this.modeHandler.mode, this.lineId);
        this.trimmedText = this.trimText(this.hostText, maxLength, false);
    }
    sendText() {
        let style = this.textStyle;
        if (!this.trimmedText.length)
            style &= ~FP.TextStyle.kInvert;
        this.device.sendText(this.displayId, this.lineId, style, this.trimmedText);
    }
}
class ValueBarHandler extends PreSonus.ControlHandler {
    constructor(name, displayId) {
        super();
        this.name = name;
        this.displayId = displayId;
        this.lastMode = FP.ValueBar.kOff;
    }
    sendValue(value, flags) {
        let mode = FP.ValueBar.kFill;
        if (flags & PreSonus.ControlValue.kDisabled)
            mode = FP.ValueBar.kOff;
        else if (flags & PreSonus.ControlValue.kBipolar)
            mode = FP.ValueBar.kBipolar;
        if (mode != this.lastMode) {
            this.sendMidi(PreSonus.Midi.kController, FP.Support.getValueBarModeByte(this.displayId), mode);
            this.lastMode = mode;
        }
        let scaledVale = FP.Support.scaleMeter(value);
        this.sendMidi(PreSonus.Midi.kController, FP.Support.getValueBarValueByte(this.displayId), scaledVale);
    }
}
class MeterHandler extends PreSonus.ControlHandler {
    constructor(name, displayId, meterId) {
        super();
        this.name = name;
        this.displayId = displayId;
        this.meterId = meterId;
        this.lastValue = -1;
        this.peakMode = true;
    }
    sendMidiValue(value) {
        this.sendMidi(this.meterId, value, 0);
    }
    sendValue(value, flags) {
        let meterValue = FP.Support.scaleMeter(value);
        if (this.peakMode) {
            if (meterValue > 0 && meterValue > this.lastValue)
                this.sendMidiValue(meterValue);
        }
        else {
            if (meterValue != this.lastValue)
                this.sendMidiValue(meterValue);
        }
        this.lastValue = meterValue;
    }
    idle() {
        if (this.peakMode) {
            if (this.lastValue == FP.Support.kMaxMeter)
                this.sendMidiValue(this.lastValue);
        }
    }
    reset() {
        this.sendMidiValue(0);
        this.lastValue = 0;
    }
}
class LevelMeterHandler extends MeterHandler {
    constructor(name, displayId, meterId, rightHandler) {
        super(name, displayId, meterId);
        this.rightHandler = rightHandler;
        this.stereo = false;
    }
    sendValue(value, flags) {
        if (this.rightHandler == null) {
            this.lastValue = value;
            return;
        }
        let maxValue = value;
        if (this.stereo) {
            let rightValue = this.rightHandler.lastValue;
            if (rightValue > maxValue)
                maxValue = rightValue;
        }
        super.sendValue(maxValue, flags);
    }
}
class MeterStereoHandler extends PreSonus.ControlHandler {
    constructor(name, meterHandler) {
        super();
        this.name = name;
        this.meterHandler = meterHandler;
    }
    sendValue(value, flags) {
        this.meterHandler.stereo = value;
    }
}
class ReductionHandler extends MeterHandler {
    constructor(name, displayId, meterId) {
        super(name, displayId, meterId);
        this.peakMode = false;
    }
    sendValue(value, flags) {
        let meterValue = 0;
        let disabled = (flags & PreSonus.ControlValue.kDisabled) != 0;
        if (!disabled) {
            meterValue = 1 - value;
            meterValue *= 2;
            if (meterValue > 1)
                meterValue = 1;
        }
        super.sendValue(meterValue, flags);
    }
}
class TimeCodeHandler extends PreSonus.ControlHandler {
    constructor(name, displayId, lineId) {
        super();
        this.name = name;
        this.displayId = displayId;
        this.lineId = lineId;
        this.segments = ["", "", "", ""];
        this.labels = ["", "", "", ""];
        this.enabled = false;
        this.secondsLabels = ["hour", "min", "sec", "ms"];
        this.samplesLabels = ["", "", "", "samples"];
        this.musicalLabels = ["bar", "beat", "16th", "rem"];
        this.framesLabels = ["hour", "min", "sec", "frames"];
    }
    printSegment(value, size) {
        let valueString = value.toString();
        let result = "";
        let toPad = size - valueString.length;
        while (toPad > 0) {
            result += "0";
            toPad--;
        }
        result += valueString;
        return result;
    }
    updateSegment(index, text) {
        if (this.segments[index] != text) {
            this.segments[index] = text;
            if (this.enabled)
                this.sendSegment(index);
        }
    }
    sendSegment(index) {
        this.device.sendText(this.displayId + index, this.lineId, FP.TextStyle.kCenter, this.segments[index]);
    }
    sendLabel(index) {
        this.device.sendText(this.displayId + index, this.lineId + 1, FP.TextStyle.kCenter | FP.TextStyle.kInvert, this.labels[index]);
    }
    setEnabled(state) {
        this.enabled = state;
        for (let i = 0; i < 4; i++) {
            this.device.enableTextCell(this.displayId + i, this.lineId, !state);
            this.device.enableTextCell(this.displayId + i, this.lineId + 1, !state);
            if (state) {
                this.sendSegment(i);
                this.sendLabel(i);
            }
        }
    }
    setFormat(format) {
        for (let i = 0; i < 4; i++) {
            switch (format) {
                case PreSonus.TimeFormat.kSamples:
                    this.labels[i] = this.samplesLabels[i];
                    break;
                case PreSonus.TimeFormat.kMusical:
                    this.labels[i] = this.musicalLabels[i];
                    break;
                case PreSonus.TimeFormat.kFrames:
                    this.labels[i] = this.framesLabels[i];
                    break;
                default:
                    this.labels[i] = this.secondsLabels[i];
                    break;
            }
            if (this.enabled)
                this.sendLabel(i);
        }
    }
    isUsingDisplay(displayId) {
        return displayId >= this.displayId && displayId < this.displayId + 4;
    }
    sendValue(value, flags) {
        if (value instanceof Int32Array) {
            let count = value[0];
            if (count == 4) {
                for (let i = 0; i < 4; i++) {
                    let text = this.printSegment(value[1 + i], value[1 + count + i]);
                    this.updateSegment(i, text);
                }
            }
            else if (count == 1) {
                let samplesString = this.printSegment(value[1], 10);
                let offset = 0;
                for (let i = 0; i < 4; i++) {
                    let size = i >= 2 ? 3 : 2;
                    let text = samplesString.slice(offset, offset + size);
                    this.updateSegment(i, text);
                    offset += size;
                }
            }
        }
    }
}
class TimeCodeOverlayHandler extends PreSonus.ControlHandler {
    constructor(name, timeCodeHandler) {
        super();
        this.name = name;
        this.timeCodeHandler = timeCodeHandler;
    }
    sendValue(value, flags) {
        this.timeCodeHandler.setEnabled(value);
    }
}
class TimeCodeFormatHandler extends PreSonus.ControlHandler {
    constructor(name, handler) {
        super();
        this.name = name;
        this.timeCodeHandler = handler;
    }
    sendValue(value, flags) {
        this.timeCodeHandler.setFormat(value);
    }
}
class DisplayLineState {
    constructor(style, text, dirty) {
        this.style = style;
        this.text = "";
        this.dirty = false;
    }
}
class DisplayBuffer {
    constructor(device, displayId) {
        this.device = device;
        this.displayId = displayId;
        this.mode = FP.DisplayMode.kDefault;
        this.modeChanged = false;
        this.lines = [];
        this.linesChanged = false;
        for (let line = 0; line < FP.Support.kMaxLineCount; line++) {
            this.lines.push(new DisplayLineState(FP.TextStyle.kCenter, "", false));
        }
    }
    setMode(mode) {
        if (mode != this.mode) {
            this.mode = mode;
            this.modeChanged = true;
        }
    }
    setText(lineId, style, text) {
        let state = this.lines[lineId];
        if (state.style != style || state.text != text) {
            state.style = style;
            state.text = text;
            state.dirty = true;
            this.linesChanged = true;
        }
    }
    setDirty() {
        this.modeChanged = true;
        this.linesChanged = true;
        for (let lineId in this.lines)
            this.lines[lineId].dirty = true;
    }
    update(device, sysexBuffer) {
        let clear = false;
        if (this.modeChanged) {
            clear = this.linesChanged;
            device.sendSysex(FP.Support.buildDisplayModeSysex(device.sysexHeader, sysexBuffer, this.displayId, this.mode, clear));
            this.modeChanged = false;
        }
        if (this.linesChanged) {
            for (let lineId = 0; lineId < this.lines.length; lineId++) {
                let state = this.lines[lineId];
                if (state.dirty || clear) {
                    device.sendSysex(FP.Support.buildDisplayTextSysex(device.sysexHeader, sysexBuffer, this.displayId, lineId, state.style, state.text));
                    state.dirty = false;
                }
            }
            this.linesChanged = false;
        }
    }
}
class FPMidiDevice extends PreSonus.ControlSurfaceDevice {
    constructor(faderCount, sysexHeader) {
        super();
        this.faderCount = faderCount;
        this.sysexHeader = sysexHeader;
        this.lastActiveSensing = 0;
    }
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
        this.meters = [];
        this.textCells = [];
        this.valueBars = [];
        this.displayBuffers = [];
        for (let i = 0; i < this.faderCount; i++) {
            let displayBuffer = new DisplayBuffer(this, i);
            this.displayBuffers.push(displayBuffer);
            let displayModeHandler = new DisplayModeHandler("displayMode[" + i + "]", i);
            this.addHandler(displayModeHandler);
            this.textCells[i] = new Array;
            for (let line = 0; line < FP.Support.kMaxLineCount; line++) {
                let textHandler = new TextCellHandler("textCell[" + i + "][" + line + "]", i, line, displayModeHandler);
                this.textCells[i].push(textHandler);
                this.addHandler(textHandler);
            }
            let valueBarHandler = new ValueBarHandler("valueBar[" + i + "]", i);
            this.valueBars.push(valueBarHandler);
            this.addHandler(valueBarHandler);
            let levelMeterId = FP.Support.getLevelStatusByte(i);
            let rightMeterHandler = new LevelMeterHandler("meter[" + i + "][1]", i, levelMeterId, null);
            let leftMeterHandler = new LevelMeterHandler("meter[" + i + "][0]", i, levelMeterId, rightMeterHandler);
            let meterStereoHandler = new MeterStereoHandler("stereo[" + i + "]", leftMeterHandler);
            this.addHandler(leftMeterHandler);
            this.addHandler(rightMeterHandler);
            this.addHandler(meterStereoHandler);
            this.meters.push(leftMeterHandler);
            let reductionHandler = new ReductionHandler("reduction[" + i + "]", i, FP.Support.getReductionStatusByte(i));
            this.addHandler(reductionHandler);
            this.meters.push(reductionHandler);
        }
        this.timeCodeHandler = new TimeCodeHandler("timeCode", this.faderCount - 4, 0);
        this.addHandler(this.timeCodeHandler);
        this.addHandler(new TimeCodeOverlayHandler("timeCodeOverlay", this.timeCodeHandler));
        this.addHandler(new TimeCodeFormatHandler("timeCodeFormat", this.timeCodeHandler));
    }
    createHandler(name, attributes) {
        let className = attributes.getAttribute("class");
        if (className == "ColorLEDHandler") {
            let address = attributes.getAttribute("address");
            let handler = new ColorLEDHandler(name, address);
            this.addHandler(handler);
            return true;
        }
        return false;
    }
    enableTextCell(displayId, lineId, state) {
        let textHandler = this.textCells[displayId][lineId];
        textHandler.enabled = state;
        if (state)
            textHandler.sendText();
    }
    sendDisplayMode(displayId, mode) {
        this.displayBuffers[displayId].setMode(mode);
        this.valueBars[displayId].invalidate();
        for (let line = 0; line < FP.Support.kMaxLineCount; line++) {
            let textHandler = this.textCells[displayId][line];
            textHandler.updateTrimmedText();
            if (textHandler.enabled)
                textHandler.sendText();
        }
        for (let i in this.meters)
            if (this.meters[i].displayId == displayId) {
                let handler = this.meters[i];
                if (handler instanceof ReductionHandler)
                    handler.invalidate();
                else
                    handler.reset();
            }
        if (this.timeCodeHandler.enabled && this.timeCodeHandler.isUsingDisplay(displayId)) {
            let segmentId = displayId - this.timeCodeHandler.displayId;
            this.timeCodeHandler.sendSegment(segmentId);
            this.timeCodeHandler.sendLabel(segmentId);
        }
    }
    sendText(displayId, lineId, style, text) {
        this.displayBuffers[displayId].setText(lineId, style, text);
    }
    onIdle(time) {
        if (this.midiOutConnected) {
            for (let i in this.displayBuffers)
                this.displayBuffers[i].update(this, this.sysexSendBuffer);
            for (let i in this.meters)
                this.meters[i].idle();
            let interval = time - this.lastActiveSensing;
            if (interval >= FPMidiDevice.kActiveSensingInterval) {
                if (interval >= FP.kActiveSensingTimeout)
                    this.resetDevice();
                this.lastActiveSensing = time;
                this.sendActiveSensingMessage();
            }
        }
    }
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
        if (state)
            this.resetDevice();
    }
    resetDevice() {
        for (let i in this.valueBars)
            this.valueBars[i].lastMode = FP.ValueBar.kOff;
        this.hostDevice.invalidateAll();
        for (let i in this.displayBuffers)
            this.displayBuffers[i].setDirty();
    }
    sendActiveSensingMessage() {
        this.sendMidi(PreSonus.Midi.kPolyPressure, 0, 0);
    }
}
FPMidiDevice.kActiveSensingInterval = 1000;
function createFP8DeviceInstance() {
    return new FPMidiDevice(8, FP.Support.kSysexHeaderFP8);
}
function createFP16DeviceInstance() {
    return new FPMidiDevice(16, FP.Support.kSysexHeaderFP16);
}
