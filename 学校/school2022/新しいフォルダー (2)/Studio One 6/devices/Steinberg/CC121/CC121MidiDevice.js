include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
include_file("CC121Protocol.js");
class CC121MidiDevice extends PreSonus.ControlSurfaceDevice {
    constructor() {
        super();
        this.lastHeartbeatSent = 0;
        this.heartbeatIntervalMs = 1000;
    }
    onInit(hostDevice) {
        super.onInit(hostDevice);
        this.debugLog = false;
    }
    onIdle(time) {
        if (time - this.lastHeartbeatSent > this.heartbeatIntervalMs) {
            this.sendSysex(CC121.buildHeartbeatSysEx(this.sysexSendBuffer));
            this.lastHeartbeatSent = time;
        }
    }
    onMidiOutConnected(state) {
        super.onMidiOutConnected(state);
    }
}
function createCC121DeviceInstance() {
    return new CC121MidiDevice();
}
