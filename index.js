// Add your Circle class here
class Circle {
  constructor(radius){
    this.radius = radius
  }

  get diameter(){
    return  this.radius*2
  }

  set diameter(diameter){
   return this.radius = diameter/2
  }

  get circumference(){
    return  Math.floor(Math.PI*this.diameter*100)/100
  }

  set circumference(circumference){
    return this.radius = circumference/Math.PI/2
  }

  get area(){
    return Math.PI*(this.radius*this.radius)
    
  }

  set area(area){
   return this.radius = Math.sqrt(area/Math.PI)
  }
}

circle = new Circle(6)