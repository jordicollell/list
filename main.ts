input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    for (let index = 0; index <= 19; index++) {
        list[index] = input.soundLevel()
        basic.pause(100)
    }
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
})
input.onButtonPressed(Button.B, function () {
    led.plot(2, 2)
    for (let index = 0; index <= 20; index++) {
        music.setVolume(list[index] * 2)
        music.ringTone(988)
        basic.pause(100)
    }
    led.unplot(2, 2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    control.reset()
})
let list: number[] = []
list = [0, 0, 3, 4, 5, 6, 7, 8, 9, 50, 60, 70, 90, 6, 6, 6, 3, 45, 67, 80]
