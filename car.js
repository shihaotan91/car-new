var Car = function(color, convertible){
  this.color = color
  this.speed = 0
  this.convertible = convertible
}
Car.prototype.decelerate = function(num){
  this.speed = this.speed + num
}

Car.prototype.stop = function(){
   this.speed = 0
}

module.exports = Car
