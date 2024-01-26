include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
class TranzportComponent extends PreSonus.ControlSurfaceComponent {
    onInit(hostComponent) {
        super.onInit(hostComponent);
        this.debugLog = false;
    }
}
function createTranzportComponentInstance() {
    return new TranzportComponent();
}
