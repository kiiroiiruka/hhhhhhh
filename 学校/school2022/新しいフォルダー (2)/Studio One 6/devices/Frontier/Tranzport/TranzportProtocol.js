class TextCell {
    constructor(offset, length) {
        this.length = length;
        this.offset = offset;
    }
}
class TranzportControls {
}
TranzportControls.kUpperRightText = new TextCell(0, 13);
TranzportControls.kUpperLeftText = new TextCell(13, 7);
TranzportControls.kLowerText = new TextCell(20, 20);
class TranzportProtocol {
    static buildNativeModeSysex(sysexBuffer) {
        sysexBuffer.begin(TranzportProtocol.kSysexHeader);
        sysexBuffer.push(0x10);
        sysexBuffer.push(0x01);
        sysexBuffer.push(0x00);
        sysexBuffer.end();
        return sysexBuffer;
    }
    static buildTextSysex(sysexBuffer, offset, text) {
        sysexBuffer.begin(TranzportProtocol.kSysexHeader);
        sysexBuffer.push(0x10);
        sysexBuffer.push(0x00);
        sysexBuffer.push(offset);
        sysexBuffer.appendAscii(text);
        sysexBuffer.end();
        return sysexBuffer;
    }
}
TranzportProtocol.kSysexHeader = [0x00, 0x01, 0x40];
