radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        openclose = 0
    }
    if (receivedNumber == 1) {
        openclose += 1
    }
    if (receivedNumber == 2) {
        basic.clearScreen()
        onoff = 0
    }
    if (receivedNumber == 3) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        onoff = 1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let onoff = 0
let openclose = 0
basic.clearScreen()
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.pause(500)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    if (onoff == 1) {
        if (openclose == 0 && pins.digitalReadPin(DigitalPin.P2) == 0) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
        if (openclose == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    }
})
