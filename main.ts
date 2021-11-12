input.onButtonPressed(Button.A, function () {
    serialmp3.runMp3Command(Mp3Command.PLAY_NEXT_TRACK)
})
input.onButtonPressed(Button.B, function () {
    serialmp3.runMp3Command(Mp3Command.PLAY_PREVIOUS_TRACK)
})
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.setLedColor(0x00ff00)
serialmp3.playMp3TrackFromFolder(2, 1, Mp3Repeat.No)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
