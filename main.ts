let player_2 = 0
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
    player_2 = 1
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P2, function () {
	
})
input.onPinPressed(TouchPin.P1, function () {
    player_2 += 1
})
basic.forever(function () {
    music.playMelody("C5 B E C5 B E F A ", 120)
})
