var Car = function (colors, convertible){
  this.colors = colors
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

module.exports = Car
