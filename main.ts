bluetooth.onBluetoothConnected(function () {
    start_sending2 = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
})
bluetooth.onBluetoothDisconnected(function () {
    start_sending2 = 0
    basic.showIcon(IconNames.No)
    basic.pause(200)
})
let start_sending2 = 0
basic.showString("S")
basic.pause(200)
bluetooth.startUartService()
let distance = 0
start_sending2 = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P10,
    DigitalPin.P11,
    PingUnit.Centimeters
    )
    if (start_sending2 == 1) {
        bluetooth.uartWriteNumber(distance)
    }
    basic.pause(100)
})
