
var Car = function(color, convertible, brand){
  this.color = color
  this.brand = brand
  this.speed = 0
  this.convertible = convertible
}
Car.prototype.decelerate = function (num){
  this.speed = this.speed + num
}

Car.prototype.stop = function(){
   this.speed = 0
}

Car.prototype.acc = function (num) {
  this.speed += num
}

Car.prototype.setColor = function(color) {
  this.colors = color
}

Car.prototype.setBrand = function(brand) {
  this.brand = brand
}

module.exports = Car
