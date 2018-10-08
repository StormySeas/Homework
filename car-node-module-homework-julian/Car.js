
class Car {
    stats(color, convertible, speed) {
        this.color = color
        this.type = convertible
        this.speed = 0
        if (this.type = true) {
            return true
        } else {
            return false
        }
    }
    accelerate() {
        this.speed = this.speed + 25
    }
    decelerate() {
        this.speed = this.speed - 15
    }
}
module.exports = Car
