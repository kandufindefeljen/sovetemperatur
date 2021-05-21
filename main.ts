input.onButtonPressed(Button.A, function () {
    if (15 < input.temperature() && 22 > input.temperature()) {
        basic.showIcon(IconNames.Happy)
    } else if (15 > input.temperature()) {
        basic.showIcon(IconNames.Surprised)
        basic.showArrow(ArrowNames.North)
    } else if (22 < input.temperature()) {
        basic.showIcon(IconNames.Asleep)
        basic.showArrow(ArrowNames.South)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.showString("Sovetemperatur")
