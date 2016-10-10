var Car = function(color, convertible, brand){
  this.color = color
  this.brand = brand
  this.speed = 0
  this.convertible = convertible
}

Car.prototype.acc = function(num) {
  this.speed += num
}

Car.prototype.setColor = function(color) {
  this.color = color
}

Car.prototype.setBrand = function(brand) {
  this.brand = brand
}

module.exports = Car
