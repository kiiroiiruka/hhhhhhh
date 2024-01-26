include_file("../Shared/ATOMCommonUtil.js");
class ColorLEDHandler extends PreSonus.ControlHandler {
    constructor(name, id, status) {
        super();
        this.sendValue = function (value, flags) {
            let color = ColorUtil.fromValue(value);
            this.sendMidi(this.status | 1, this.id, color.r);
            this.sendMidi(this.status | 2, this.id, color.g * 0.8);
            this.sendMidi(this.status | 3, this.id, color.b * 0.7);
        };
        this.name = name;
        this.id = id;
        this.status = status;
    }
}
class ATOMCommonMidiDevice extends PreSonus.ControlSurfaceDevice {
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
    }
    onExit() {
        this.sendMidi(PreSonus.Midi.kNoteOff | 15, 0x00, 0x00);
        super.onExit();
    }
    createHandler(name, attributes) {
        let className = attributes.getAttribute("class");
        let address = attributes.getAttribute("address");
        let handler = null;
        if (className == "PadColorLEDHandler")
            handler = new ColorLEDHandler(name, address, PreSonus.Midi.kNoteOn);
        else if (className == "ButtonColorLEDHandler")
            handler = new ColorLEDHandler(name, address, PreSonus.Midi.kController);
        if (!handler)
            return false;
        this.addHandler(handler);
        return true;
    }
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
        if (state) {
            this.sendMidi(PreSonus.Midi.kNoteOff | 15, 0x00, 0x7F);
            this.hostDevice.invalidateAll();
        }
    }
}
