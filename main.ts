input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(-80, 0)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.setAllMotor(-100, -100)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(0, -80)
})
input.onGesture(Gesture.Shake, function () {
    wuKong.stopAllMotor()
})
