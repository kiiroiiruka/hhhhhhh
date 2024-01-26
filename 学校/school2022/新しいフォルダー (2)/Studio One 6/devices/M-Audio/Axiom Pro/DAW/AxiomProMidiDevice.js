include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
include_file("AxiomProProtocol.js");
class TextHandler extends PreSonus.ControlHandler {
    constructor(name, control) {
        super();
        this.name = name;
        this.control = control;
    }
    sendValue(value, flags) {
        let trimmedText = this.device.hostDevice.trimText(value, this.control.length, true);
        this.device.sendText(trimmedText, this.control);
    }
}
class AxiomProMidiDevice extends PreSonus.ControlSurfaceDevice {
    constructor() {
        super();
        this.debugLog = false;
    }
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
        for (let i = 0; i < 8; i++) {
            let control = new TextControl(AxiomProDefs.kGraphicDisplay, i, 0, 5);
            this.addHandler(new TextHandler(`graphicsText[${i}]`, control));
        }
        let topTextControl = new TextControl(AxiomProDefs.kTopRow, 0, 0, 20);
        this.addHandler(new TextHandler("topText", topTextControl));
        let paramTextControl = new TextControl(AxiomProDefs.kParameterRow, 0, 0, 6);
        this.addHandler(new TextHandler("parameterText", paramTextControl));
    }
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
        if (state) {
            this.sendEnableHyperMode();
            let topRowTextControl = new TextControl(AxiomProDefs.kTopRow, 0, 0, -1);
            this.sendText("Studio One", topRowTextControl);
            let messages = ["Prs-", "Prs+", "Dev-", "Dev+"];
            this.sendMultiLine(messages, AxiomProDefs.kSoftKeyLabel);
            this.hostDevice.invalidateAll();
        }
    }
    sendMultiLine(text, address) {
        this.sendSysex(AxiomProProtocol.buildTextArraySysex(this.sysexSendBuffer, address, text));
    }
    sendText(text, control) {
        this.sendSysex(AxiomProProtocol.buildTextSysex(this.sysexSendBuffer, control.address, control.line, control.offset, text));
    }
    sendClearAll() {
        this.sendSysex(AxiomProProtocol.buildClearAllSysex(this.sysexSendBuffer));
    }
    sendClearLine(line) {
        this.sendSysex(AxiomProProtocol.buildClearLineSysex(this.sysexSendBuffer, line));
    }
    sendEnableHyperMode() {
        this.sendSysex(AxiomProProtocol.buildHyperModeSysex(this.sysexSendBuffer));
    }
}
function createAxiomProDeviceInstance() {
    return new AxiomProMidiDevice();
}
