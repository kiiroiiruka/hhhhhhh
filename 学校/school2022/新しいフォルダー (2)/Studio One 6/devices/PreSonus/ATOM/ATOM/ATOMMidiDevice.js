include_file("resource://com.presonus.musicdevices/sdk/midiprotocol.js");
include_file("resource://com.presonus.musicdevices/sdk/controlsurfacedevice.js");
include_file("../Shared/ATOMCommonMidiDevice.js");
class ATOMMidiDevice extends ATOMCommonMidiDevice {
}
function createATOMDeviceInstance() {
    return new ATOMMidiDevice;
}
