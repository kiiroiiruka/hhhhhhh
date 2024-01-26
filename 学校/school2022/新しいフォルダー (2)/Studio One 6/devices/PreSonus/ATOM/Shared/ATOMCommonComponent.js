include_file("resource://com.presonus.musicdevices/sdk/plugininterfaces.js");
class ATOMSamplerUIComponent extends PreSonus.ControlSurfaceComponent {
    constructor() {
        super();
        this.sampler = null;
        this.moveMultiplier = 6;
        this.zoomMultiplier = 0.005;
        this.scrollMultiplier = 30;
    }
    onSamplerWheelZoom(value) {
        if (!value)
            return;
        let delta = value * this.zoomMultiplier;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kZoom, delta);
    }
    onSamplerWheelScroll(value) {
        if (!value)
            return;
        let delta = value * this.scrollMultiplier;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kScroll, delta);
    }
    onSamplerSampleStartMove(value) {
        if (!value)
            return;
        let distance = value * this.moveMultiplier;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kStartSample, distance);
    }
    onSamplerSampleEndMove(value) {
        if (!value)
            return;
        let distance = value * this.moveMultiplier;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kEndSample, distance);
    }
    onSamplerLoopStartMove(value) {
        if (!value)
            return;
        let distance = value * this.moveMultiplier;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kLoopStart, distance);
    }
    onSamplerLoopEndMove(value) {
        if (!value)
            return;
        let distance = value * this.moveMultiplier;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kLoopEnd, distance);
    }
    onSamplerScrollToLoopStart(value) {
        if (!value)
            return;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kScrollTo, PreSonus.ISamplerUIEditor.ActionID.kLoopStart);
    }
    onSamplerScrollToLoopEnd(value) {
        if (!value)
            return;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kScrollTo, PreSonus.ISamplerUIEditor.ActionID.kLoopEnd);
    }
    onSamplerScrollToSampleStart(value) {
        if (!value)
            return;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kScrollTo, PreSonus.ISamplerUIEditor.ActionID.kStartSample);
    }
    onSamplerScrollToSampleEnd(value) {
        if (!value)
            return;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kScrollTo, PreSonus.ISamplerUIEditor.ActionID.kEndSample);
    }
    onSamplerCopy(value) {
        if (!value)
            return;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kCopy, 0);
    }
    onSamplerPaste(value) {
        if (!value)
            return;
        this.performSamplerUIAction(PreSonus.ISamplerUIEditor.ActionID.kPaste, 0);
    }
    performSamplerUIAction(actionId, value) {
        if (!this.sampler)
            return;
        this.sampler.performUIAction(actionId, value);
    }
}
var SamplerControlMode;
(function (SamplerControlMode) {
    SamplerControlMode[SamplerControlMode["kNone"] = 0] = "kNone";
    SamplerControlMode[SamplerControlMode["kImpact"] = 1] = "kImpact";
    SamplerControlMode[SamplerControlMode["kSampleOne"] = 2] = "kSampleOne";
    SamplerControlMode[SamplerControlMode["kMin"] = 0] = "kMin";
    SamplerControlMode[SamplerControlMode["kMax"] = 2] = "kMax";
})(SamplerControlMode || (SamplerControlMode = {}));
class ATOMTrackSamplerComponent extends ATOMSamplerUIComponent {
    onInit(hostComponent) {
        super.onInit(hostComponent);
        let root = this.hostComponent.model.root;
        let mapping = root.find("MusicTrackMapping");
        this.focusInstrumentMapping = mapping.find("FocusInstrumentMapping");
        let paramList = hostComponent.paramList;
        this.samplerControlMode = paramList.addInteger(SamplerControlMode.kMin, SamplerControlMode.kMax, "samplerControlMode");
        this.samplerControlMode.setValue(SamplerControlMode.kNone);
    }
    onFocusInstrumentChanged() {
        let element = this.focusInstrumentMapping.getElement(0);
        if (!element || !element.isConnected()) {
            this.updateSamplerControl(null, SamplerControlMode.kNone);
            return;
        }
        let samplerInterface = element.getPlugInInterface(PreSonus.ISamplerUIEditor.kIID);
        if (!samplerInterface) {
            this.updateSamplerControl(null, SamplerControlMode.kNone);
            return;
        }
        if (element.matchesPlugInClass(PreSonus.DeviceClassID.kInstrumentImpact))
            this.updateSamplerControl(samplerInterface, SamplerControlMode.kImpact);
        else if (element.matchesPlugInClass(PreSonus.DeviceClassID.kInstrumentSampleOne))
            this.updateSamplerControl(samplerInterface, SamplerControlMode.kSampleOne);
        else
            this.updateSamplerControl(null, SamplerControlMode.kNone);
    }
    hasSamplerInFocus() {
        return this.samplerControlMode.value != SamplerControlMode.kNone;
    }
    updateSamplerControl(pluginInterface, mode) {
        if (pluginInterface) {
            this.sampler = pluginInterface;
            this.samplerControlMode.setValue(mode, true);
        }
        else {
            this.samplerControlMode.setValue(SamplerControlMode.kNone, true);
            this.sampler = null;
        }
    }
}
