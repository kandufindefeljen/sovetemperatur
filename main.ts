input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (15 < input.temperature() && 22 > input.temperature()) {
        basic.showIcon(IconNames.Happy)
    } else if (15 >= input.temperature()) {
        basic.showIcon(IconNames.Surprised)
        basic.showArrow(ArrowNames.North)
        basic.showNumber(Math.abs(15 - input.temperature()))
    } else if (22 <= input.temperature()) {
        basic.showIcon(IconNames.Asleep)
        basic.showArrow(ArrowNames.South)
        basic.showNumber(Math.abs(22 - input.temperature()))
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
basic.showNumber(input.temperature())
