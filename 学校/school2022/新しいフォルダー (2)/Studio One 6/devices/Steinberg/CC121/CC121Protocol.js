class CC121 {
    static buildHeartbeatSysEx(sysexBuffer) {
        sysexBuffer.begin(CC121.kHeartbeatMessage);
        sysexBuffer.end();
        return sysexBuffer;
    }
}
CC121.kHeartbeatMessage = [0x43, 0x10, 0x3E, 0x15, 0x00, 0x01];
