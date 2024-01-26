var AxiomProDefs;
(function (AxiomProDefs) {
    AxiomProDefs[AxiomProDefs["kTopRow"] = 1] = "kTopRow";
    AxiomProDefs[AxiomProDefs["kParameterRow"] = 2] = "kParameterRow";
    AxiomProDefs[AxiomProDefs["kGraphicDisplay"] = 3] = "kGraphicDisplay";
    AxiomProDefs[AxiomProDefs["kSoftKeyLabel"] = 4] = "kSoftKeyLabel";
    AxiomProDefs[AxiomProDefs["kEncoders"] = 2] = "kEncoders";
    AxiomProDefs[AxiomProDefs["kPads"] = 4] = "kPads";
    AxiomProDefs[AxiomProDefs["kSliders"] = 8] = "kSliders";
    AxiomProDefs[AxiomProDefs["kNumpad"] = 16] = "kNumpad";
    AxiomProDefs[AxiomProDefs["kTransport"] = 32] = "kTransport";
    AxiomProDefs[AxiomProDefs["kKeyboard"] = 64] = "kKeyboard";
})(AxiomProDefs || (AxiomProDefs = {}));
class TextControl {
    constructor(address, line, offset, length) {
        this.address = address;
        this.line = line;
        this.offset = offset;
        this.length = length;
    }
}
class AxiomProProtocol {
    static buildHyperModeSysex(buffer) {
        let hyperMode = AxiomProDefs.kEncoders | AxiomProDefs.kSliders | AxiomProDefs.kTransport | AxiomProDefs.kNumpad;
        buffer.begin(AxiomProProtocol.kSysexHeader);
        buffer.push(0x20);
        buffer.push(hyperMode);
        buffer.end();
        return buffer;
    }
    static buildTextSysex(buffer, address, line, offset, text) {
        buffer.begin(AxiomProProtocol.kSysexHeader);
        buffer.push(0x11);
        buffer.push(address);
        buffer.push(line);
        buffer.push(offset);
        buffer.appendAscii(text);
        buffer.end();
        return buffer;
    }
    static buildTextArraySysex(buffer, address, text) {
        buffer.begin(AxiomProProtocol.kSysexHeader);
        buffer.push(0x11);
        buffer.push(address);
        for (let line = 0; line < 4; line++) {
            buffer.push(line);
            buffer.push(0x00);
            let txt = text[line];
            buffer.appendAscii(txt);
            if (line < 3)
                buffer.push(0x00);
        }
        buffer.end();
        return buffer;
    }
    static buildClearAllSysex(buffer) {
        buffer.begin(AxiomProProtocol.kSysexHeader);
        buffer.push(0x10);
        buffer.end();
        return buffer;
    }
    static buildClearLineSysex(buffer, index) {
        buffer.begin(AxiomProProtocol.kSysexHeader);
        buffer.push(0x11);
        buffer.push(0x01 + index);
        buffer.push(0x00);
        buffer.push(0x00);
        buffer.push(0x00);
        buffer.end();
        return buffer;
    }
}
AxiomProProtocol.kSysexHeader = [
    0x00,
    0x01,
    0x05,
    0x20,
    0x7F
];
