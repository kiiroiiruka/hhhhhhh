include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
include_file("TranzportProtocol.js");
class TextHandler extends PreSonus.ControlHandler {
    constructor(name, control) {
        super();
        this.name = name;
        this.control = control;
    }
    sendValue(value, flags) {
        this.device.sendText(value, this.control);
    }
}
class TranzportMidiDevice extends PreSonus.ControlSurfaceDevice {
    constructor() {
        super();
        this.debugLog = false;
    }
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
        this.addHandler(new TextHandler("upperRightText", TranzportControls.kUpperRightText));
        this.addHandler(new TextHandler("upperLeftText", TranzportControls.kUpperLeftText));
        this.addHandler(new TextHandler("lowerText", TranzportControls.kLowerText));
    }
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
        if (state) {
            this.sendSysex(TranzportProtocol.buildNativeModeSysex(this.sysexSendBuffer));
            this.sendText("Studio One", TranzportControls.kUpperRightText);
            this.sendText("Control Link", TranzportControls.kLowerText);
            this.hostDevice.invalidateAll();
        }
    }
    sendText(text, control) {
        let trimmedText = this.hostDevice.trimText(text, control.length, true);
        this.sendSysex(TranzportProtocol.buildTextSysex(this.sysexSendBuffer, control.offset, trimmedText));
    }
}
function createTranzportDeviceInstance() {
    return new TranzportMidiDevice();
}
