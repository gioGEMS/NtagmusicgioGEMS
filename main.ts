input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Ghost)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Baddy), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # # #
        . # # # #
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # . . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . #
        . # # # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . #
        # . . . #
        . # # # #
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . # #
        # . . . #
        . # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
    basic.showString("gioGEMS")
})
