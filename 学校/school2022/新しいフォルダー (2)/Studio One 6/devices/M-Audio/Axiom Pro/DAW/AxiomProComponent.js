include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
class AxiomProComponent extends PreSonus.ControlSurfaceComponent {
    onInit(hostComponent) {
        super.onInit(hostComponent);
        this.debugLog = false;
    }
}
function createAxiomProComponentInstance() {
    return new AxiomProComponent();
}
