let Counter = 0
input.onPinPressed(TouchPin.P0, function () {
    Counter = 9
    while (Counter >= 1) {
        basic.showNumber(Counter)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(200)
        Counter += -1
    }
    basic.showNumber(0)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    Counter = 9
    for (let index = 0; index <= 8; index++) {
        basic.showNumber(Counter)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(200)
        Counter += -1
    }
    basic.showNumber(0)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    Counter = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Counter)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(200)
        Counter += -1
    }
    basic.showNumber(0)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
