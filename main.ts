basic.showString("HOLA")
basic.forever(function () {
    basic.showNumber(12)
    basic.clearScreen()
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        # # . # #
        # . . . #
        `)
    basic.clearScreen()
    basic.pause(500)
    basic.showIcon(IconNames.StickFigure)
    basic.clearScreen()
    basic.pause(500)
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
    basic.pause(500)
})
