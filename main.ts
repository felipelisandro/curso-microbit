basic.showNumber(5)
basic.showNumber(4)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showIcon(IconNames.Heart)
basic.showIcon(IconNames.SmallHeart)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # .
    # . . . .
    # # # . .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # .
    `)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showString("Hello!")
    basic.pause(1000)
})
