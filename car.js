var Car = function(color, convertible){
  this.color = color
  this.speed = 0
  this.convertible = convertible
}

Car.prototype.acc = function(num) {
  this.speed += num
}

module.exports = Car
