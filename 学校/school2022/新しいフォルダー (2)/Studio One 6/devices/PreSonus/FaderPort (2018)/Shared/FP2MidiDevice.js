include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
class ColorLEDHandler extends PreSonus.ControlHandler {
    constructor(name, id) {
        super();
        this.name = name;
        this.id = id;
    }
    sendValue(value, flags) {
        let alpha = (value >> 24) & 0xFF;
        if (alpha == 0x00)
            value = 0xFFFFFFFF;
        let r = (value >> 1) & 0x7F;
        let g = (value >> 9) & 0x7F;
        let b = (value >> 17) & 0x7F;
        this.sendMidi(PreSonus.Midi.kNoteOn | 1, this.id, r);
        this.sendMidi(PreSonus.Midi.kNoteOn | 2, this.id, g);
        this.sendMidi(PreSonus.Midi.kNoteOn | 3, this.id, b);
    }
}
class FP2MidiDevice extends PreSonus.ControlSurfaceDevice {
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
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
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
        if (state) {
            this.hostDevice.invalidateAll();
        }
    }
}
function createFP2DeviceInstance() {
    return new FP2MidiDevice;
}
