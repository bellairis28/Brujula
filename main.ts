basic.forever(function () {
    if (input.compassHeading() < 45 || input.compassHeading() > 315) {
        basic.clearScreen()
        basic.showString("N")
    } else if (input.compassHeading() > 45 && input.compassHeading() < 134) {
        basic.clearScreen()
        basic.showString("E")
    } else if (input.compassHeading() > 135 && input.compassHeading() < 224) {
        basic.clearScreen()
        basic.showString("S")
    } else if (input.compassHeading() > 225 && input.compassHeading() < 314) {
        basic.clearScreen()
        basic.showString("O")
    }
})
