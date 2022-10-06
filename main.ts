input.onPinPressed(TouchPin.P0, function () {
    basic.showString("3")
    basic.showString("2")
    basic.showString("1")
    basic.showString("Ja!")
    for (let index = 0; index < 20; index++) {
        basic.pause(randint(1000, 8000))
        basic.showIcon(IconNames.Target)
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    let player_1 = 0
    if (player_1 == 0) {
    	
    }
})
basic.forever(function () {
	
})
