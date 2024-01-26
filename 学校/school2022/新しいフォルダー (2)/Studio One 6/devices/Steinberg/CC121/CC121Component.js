include_file("resource://com.presonus.musicdevices/sdk/controlsurfacecomponent.js");
include_file("CC121Protocol.js");
var ValueKnobMode;
(function (ValueKnobMode) {
    ValueKnobMode[ValueKnobMode["kZoomX"] = 0] = "kZoomX";
    ValueKnobMode[ValueKnobMode["kZoomY"] = 1] = "kZoomY";
    ValueKnobMode[ValueKnobMode["kZoomData"] = 2] = "kZoomData";
    ValueKnobMode[ValueKnobMode["kPresetNav"] = 3] = "kPresetNav";
    ValueKnobMode[ValueKnobMode["kModeCount"] = 3] = "kModeCount";
})(ValueKnobMode || (ValueKnobMode = {}));
class CC121Component extends PreSonus.ControlSurfaceComponent {
    constructor() {
        super();
    }
    onInit(hostComponent) {
        PreSonus.ControlSurfaceComponent.prototype.onInit.call(this, hostComponent);
        this.debugLog = false;
        let paramList = hostComponent.paramList;
        this.valueKnobMode = paramList.addInteger(0, ValueKnobMode.kModeCount, "valueKnobMode");
        this.valueKnobMode.setValue(ValueKnobMode.kZoomX);
        this.onLED = paramList.addParam("onLED");
        this.onLED.setValue(1);
        this.pagingComponent = hostComponent.find(PreSonus.ComponentID.kPaging);
        let formatParam = this.pagingComponent.findParameter(PreSonus.ParamID.kPagingStatusFormat);
        formatParam.setValue("pageTitle pageNumber/pageCount", true);
        this.lockEncoderParam = paramList.addParam("lockEncoder");
        this.bypassAlias = paramList.addAlias("bypassAlias");
        this.focusMappingActive = paramList.addParam("focusMappingActive");
        let root = this.hostComponent.model.root;
        let mixerMapping = root.find("MixerMapping");
        let followBankElement = mixerMapping.find("FollowBankElement");
        this.focusChannelElement = followBankElement.getElement(0);
        this.plugBankElement = root.getGenericMapping().getElement(0);
    }
    paramChanged(param) {
        if (param == this.lockEncoderParam) {
            let model = this.hostComponent.model;
            model.lockRecentParameter(param.value);
        }
    }
    onConnectFocusChannel() {
        if (this.focusChannelElement.isConnected())
            this.focusChannelElement.connectAliasParam(this.bypassAlias, PreSonus.ParamID.kInsertBypass);
    }
    onGenericMappingBankConnect() {
        this.focusMappingActive.setValue(this.plugBankElement.remapHint == PreSonus.RemapHint.kFocus);
    }
}
function createCC121ComponentInstance() {
    return new CC121Component();
}
