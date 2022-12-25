function turnLeft () {
    wuKong.setAllMotor(0, -80)
}
input.onButtonPressed(Button.A, function () {
    turnRight()
})
function turnRight () {
    wuKong.setAllMotor(-80, 0)
}
input.onButtonPressed(Button.AB, function () {
    forward()
})
input.onButtonPressed(Button.B, function () {
    turnLeft()
})
input.onGesture(Gesture.Shake, function () {
    wuKong.stopAllMotor()
})
function forward () {
    wuKong.setAllMotor(-100, -100)
}
