include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
include_file("ATOMSQProtocol.js");
include_file("../Shared/ATOMCommonMidiDevice.js");
class PitchBendHandler extends PreSonus.ControlHandler {
    constructor(name) {
        super();
        this.name = name;
        this.mode = 0;
    }
    setOption(id, value) {
        if (id == TouchStrip.kOptionMode) {
            this.mode = value;
            return true;
        }
        return false;
    }
    bytesToValue(data1, data2) {
        return data1 | (data2 << 7);
    }
    receiveMidi(status, data1, data2) {
        if (status != PreSonus.Midi["kPitchBend"])
            return false;
        if (this.mode == TouchStripMode.kNoteRepeat) {
            let mappedValue = 0;
            if (data2 >= 0 && data2 < 10)
                mappedValue = 0;
            else if (data2 >= 10 && data2 < 30)
                mappedValue = 1;
            else if (data2 >= 30 && data2 < 45)
                mappedValue = 2;
            else if (data2 >= 45 && data2 < 64)
                mappedValue = 3;
            else if (data2 >= 64 && data2 < 81)
                mappedValue = 4;
            else if (data2 >= 81 && data2 < 102)
                mappedValue = 5;
            else if (data2 >= 102 && data2 < 121)
                mappedValue = 6;
            else if (data2 >= 121)
                mappedValue = 7;
            if (mappedValue >= 0 && mappedValue < TouchStrip.kNoteRepeatListEntries.length) {
                let listParamEntryIndex = TouchStrip.kNoteRepeatListEntries[mappedValue];
                this.updateValue(listParamEntryIndex);
            }
        }
        else if (this.mode == TouchStripMode.kChannelPan) {
            let value = this.bytesToValue(data1, data2);
            if (value >= PitchBendHandler.kPitchBendCenter - 250 && value <= PitchBendHandler.kPitchBendCenter + 450)
                this.updateValue(0.5);
            else
                this.updateValue(Util.toRange(value, PitchBendHandler.kPitchBendMin, PitchBendHandler.kPitchBendMax, 0.0, 1.0));
        }
        else {
            let value = this.bytesToValue(data1, data2);
            this.updateValue(Util.toRange(value, PitchBendHandler.kPitchBendMin, PitchBendHandler.kPitchBendMax, 0.0, 1.0));
        }
        return true;
    }
}
PitchBendHandler.kPitchBendMin = 0;
PitchBendHandler.kPitchBendMax = 16383;
PitchBendHandler.kPitchBendCenter = PitchBendHandler.kPitchBendMax / 2;
class StripState {
    constructor(address, value, dirty) {
        this.address = address;
        this.value = value;
        this.dirty = dirty;
    }
}
class StripLEDHandler extends PreSonus.ControlHandler {
    constructor(name) {
        super();
        this.name = name;
        this.lastItemIndex = -1;
        this.forceRefresh = false;
        this.states = [];
        for (let i = 0; i < TouchStrip.kLEDCount; i++)
            this.states.push(new StripState(i + TouchStrip.kLEDAddressStart, 0, true));
    }
    setOption(id, value) {
        if (id == TouchStrip.kOptionRefresh) {
            this.forceRefresh = value;
            return true;
        }
        return false;
    }
    static toIndex(value) {
        let maxLEDIndex = TouchStrip.kLEDCount - 1;
        return Math.floor((maxLEDIndex / 1.0) * value);
    }
    reset(needed) {
        if (needed == false)
            return;
        for (let index = 0; index < TouchStrip.kLEDCount; index++) {
            let state = this.states[index];
            state["dirty"] = true;
        }
        this.lastItemIndex = -1;
        this.forceRefresh = false;
    }
    updateState(status, value) {
        if (status["value"] == value)
            return;
        status["value"] = value;
        status["dirty"] = true;
    }
    sendCC(status) {
        if (status["dirty"] == false)
            return;
        this.device.sendMidi(PreSonus.Midi["kController"], status["address"], status["value"]);
        status["dirty"] = false;
    }
    sendAllCC() {
        for (let index = 0; index < TouchStrip.kLEDCount; index++)
            this.sendCC(this.states[index]);
    }
}
StripLEDHandler.kOn = 127;
StripLEDHandler.kOff = 0;
class MultiLEDHandler extends StripLEDHandler {
    constructor(name) {
        super(name);
    }
    updateLEDStates(activeItemIndex) {
        for (let index = 0; index < TouchStrip.kLEDCount; index++) {
            let status = this.states[index];
            this.updateState(status, index <= activeItemIndex ? StripLEDHandler.kOn : StripLEDHandler.kOff);
        }
    }
    sendValue(value, flags) {
        if (value == null)
            return;
        this.reset(this.forceRefresh);
        let currentItemIndex = StripLEDHandler.toIndex(value);
        if (currentItemIndex == this.lastItemIndex)
            return;
        this.updateLEDStates(StripLEDHandler.toIndex(value));
        this.lastItemIndex = currentItemIndex;
        this.sendAllCC();
    }
}
class SingleLEDHandler extends StripLEDHandler {
    constructor(name) {
        super(name);
        this.sendValue = function (value, flags) {
            if (value == null)
                return;
            this.reset(this.forceRefresh);
            let currentItemIndex = StripLEDHandler.toIndex(value);
            if (currentItemIndex == this.lastItemIndex)
                return;
            this.updateLEDStates(currentItemIndex);
            this.lastItemIndex = currentItemIndex;
            this.sendAllCC();
        };
    }
    updateLEDStates(activeItemIndex) {
        for (let index = 0; index < TouchStrip.kLEDCount; index++) {
            let status = this.states[index];
            this.updateState(status, index == activeItemIndex ? StripLEDHandler.kOn : StripLEDHandler.kOff);
        }
    }
}
class HostEventHandler extends PreSonus.ControlHandler {
    constructor(name) {
        super();
        this.name = name;
    }
    hostEventGenerator(value, device) { }
    ;
    sendValue(value, flags) {
        if (value == null)
            return;
        this.hostEventGenerator(value, this.device);
    }
}
class HostEventFunctions {
    static sendPitchBend(value, device) {
        device.sendPitchBendToHost(value);
    }
}
HostEventFunctions.sendModulaton = function (value, device) {
    device.sendModulationToHost(value);
};
HostEventFunctions.sendExpression = function (value, device) {
    device.sendExpressionToHost(value);
};
HostEventFunctions.sendBreathControl = function (value, device) {
    device.sendBreathControlToHost(value);
};
HostEventFunctions.sendSustain = function (value, device) {
    device.sendSustainToHost(value);
};
class PadPolyPressureHandler extends PreSonus.ControlHandler {
    constructor(name, padPitch) {
        super();
        this.name = name;
        this.padPitch = padPitch;
        this.splitMode = true;
    }
    setOption(id, value) {
        if (id == FunctionPads.kOptionSplit) {
            this.splitMode = value;
            return true;
        }
        return false;
    }
    receiveMidi(status, data1, data2) {
        if (status != PreSonus.Midi["kPolyPressure"])
            return false;
        if (data1 != this.padPitch)
            return false;
        if (this.splitMode) {
            let centerValue = 0.5;
            let value = (data2 / 127) * centerValue;
            let direction = this.padPitch == FunctionPads.kPadPlusPitch ? 1 : -1;
            this.updateValue(centerValue + (direction * value));
        }
        else {
            let value = (data2 / 127);
            this.updateValue(value);
        }
        return true;
    }
}
class TextCellControlHandler extends PreSonus.ControlHandler {
    constructor(name, textCellId) {
        super();
        this.name = name + "[" + textCellId + "]";
        this.textCellId = textCellId;
    }
    sendValue(value, flags) {
        if (value != null)
            this.device.sendSysexForBufferedTextCell(this.textCellId);
    }
}
class TextCellTextControlHandler extends TextCellControlHandler {
    constructor(textCellId) {
        super("textCell", textCellId);
    }
    sendValue(value, flags) {
        if (value == null)
            return;
        this.device.updateBuffer(ScreenBuffer.kText, this.textCellId, value);
        super.sendValue(value, flags);
    }
}
class TextCellColorControlHandler extends TextCellControlHandler {
    constructor(textCellId) {
        super("textColor", textCellId);
    }
    sendValue(value, flags) {
        let color = ColorUtil.fromValue(value);
        this.device.updateBuffer(ScreenBuffer.kColor, this.textCellId, color);
        super.sendValue(value, flags);
    }
}
class TextCellAlignControlHandler extends TextCellControlHandler {
    constructor(textCellId) {
        super("textAlign", textCellId);
    }
    sendValue(value, flags) {
        if (value == null)
            return;
        this.device.updateBuffer(ScreenBuffer.kAlign, this.textCellId, value);
        super.sendValue(value, flags);
    }
}
class ScreenBufferState {
    constructor(text, color, align) {
        this.text = text;
        this.color = color;
        this.align = align;
    }
    getText() { return this.text; }
    setText(value) { this.text = value; }
    getColor() { return this.color; }
    setColor(value) { this.color = value; }
    getAlignment() { return this.align; }
    setAlignment(value) { this.align = value; }
}
class ScreenBuffer {
    constructor() {
        this.data = [];
        for (let i = 0; i < ScreenConfig.kCellCount; i++)
            this.data.push(new ScreenBufferState("", RgbColor.kRgbWhite, ScreenTextAlignment.kCenter));
    }
    isValid(textCellId) {
        return textCellId >= 0 && textCellId < ScreenConfig.kCellCount;
    }
    set(option, textCellId, value) {
        if (!this.isValid(textCellId))
            return null;
        let entry = this.data[textCellId];
        if (option == ScreenBuffer.kColor)
            return entry.setColor(value);
        else if (option == ScreenBuffer.kText)
            return entry.setText(value);
        else if (option == ScreenBuffer.kAlign)
            return entry.setAlignment(value);
    }
    get(option, textCellId) {
        if (!this.isValid(textCellId))
            return null;
        let entry = this.data[textCellId];
        if (option == ScreenBuffer.kColor)
            return entry.getColor();
        else if (option == ScreenBuffer.kText)
            return entry.getText();
        else if (option == ScreenBuffer.kAlign)
            return entry.getAlignment;
        return null;
    }
}
ScreenBuffer.kText = "text";
ScreenBuffer.kColor = "color";
ScreenBuffer.kAlign = "align";
class ATOMSQMidiDevice extends ATOMCommonMidiDevice {
    constructor() {
        super();
        this.screenBuffer = new ScreenBuffer();
    }
    sendSysexForBufferedTextCell(textCellId) {
        let color = this.screenBuffer.get(ScreenBuffer.kColor, textCellId);
        this.sendSysex(ScreenUpdateMessage.build(this.sysexSendBuffer, textCellId, color.r, color.g, color.b, this.screenBuffer.get(ScreenBuffer.kAlign, textCellId), this.screenBuffer.get(ScreenBuffer.kText, textCellId)));
    }
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
        this.firmwareMajor = 0;
        this.firmwareMinor = 0;
        for (let id = 0; id < ScreenConfig.kCellCount; id++) {
            this.addHandler(new TextCellTextControlHandler(id));
            this.addHandler(new TextCellColorControlHandler(id));
            this.addHandler(new TextCellAlignControlHandler(id));
        }
        this.addReceiveHandler(new PitchBendHandler("touchStrip"));
        let pitchBendHandler = new HostEventHandler("pitchBendEventGenerator");
        pitchBendHandler.hostEventGenerator = HostEventFunctions.sendPitchBend;
        this.addHandler(pitchBendHandler);
        let modulationHandler = new HostEventHandler("modulationEventGenerator");
        modulationHandler.hostEventGenerator = HostEventFunctions.sendModulaton;
        this.addHandler(modulationHandler);
        let expressionHandler = new HostEventHandler("expressionEventGenerator");
        expressionHandler.hostEventGenerator = HostEventFunctions.sendExpression;
        this.addHandler(expressionHandler);
        let breathControlHandler = new HostEventHandler("breathControlEventGenerator");
        breathControlHandler.hostEventGenerator = HostEventFunctions.sendBreathControl;
        this.addHandler(breathControlHandler);
        let sustainHandler = new HostEventHandler("sustainEventGenerator");
        sustainHandler.hostEventGenerator = HostEventFunctions.sendSustain;
        this.addHandler(sustainHandler);
        this.addHandler(new SingleLEDHandler("touchStripSingleLED"));
        this.addHandler(new MultiLEDHandler("touchStripMultiLED"));
        this.addReceiveHandler(new PadPolyPressureHandler("padPlus", FunctionPads.kPadPlusPitch));
        this.addReceiveHandler(new PadPolyPressureHandler("padMinus", FunctionPads.kPadMinusPitch));
    }
    updateBuffer(option, textCellId, value) {
        this.screenBuffer.set(option, textCellId, value);
    }
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
        if (state)
            this.sendSysex(IdentityRequestMessage.build(this.sysexSendBuffer));
    }
    notify(messageID, ...vargs) {
        if (this.debugLog) {
            this.log("ATOMSQMidiDevice::notify ()");
            this.log("-> msgid=" + messageID);
            vargs.forEach(arg => {
                if (arg)
                    this.log("-> arg=" + arg);
            });
        }
        if (!messageID)
            return;
        if (messageID == FirmwareMessage.kRequest)
            this.sendFirmwareUpdate();
        else
            super.notify(messageID, vargs);
    }
    onSysexEvent(data, length) {
        if (IdentityReplyMessage.isMessage(data, length)) {
            this.firmwareMajor = IdentityReplyMessage.getFirmwareMajor(data);
            this.firmwareMinor = IdentityReplyMessage.getFirmwareMinor(data);
            this.sendFirmwareUpdate();
            return true;
        }
        else
            return super.onSysexEvent(data, length);
    }
    sendFirmwareUpdate() {
        if (this.firmwareMajor > 0 && this.firmwareMinor > 0 && this.connectionPoint)
            this.connectionPoint.notify(FirmwareMessage.kUpdate, this.firmwareMajor, this.firmwareMinor);
    }
}
function createATOMSQDeviceInstance() {
    return new ATOMSQMidiDevice;
}
