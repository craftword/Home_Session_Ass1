function Animal(name, nofleg ) {
    this.name = "Animal";
    this.nofleg = 0;


}

// check if the animal is crawling, walking or flying 

Animal.prototype.movement = function () {
  if(this.nofleg === 0) {
    return "crawling";
  }
  else if(this.nofleg === 2) {
    return "flying";
  }else{
    return "walking";
  }

}


// Mammal inherits from Animal
Mammal.prototype = new Animal();
Mammal.prototype.constructor = Mammal;

function Mammal(name) {
  // base contruction
  Animal.call(this, name);

}
// Mammal type of skin method 
Mammal.prototype.skin = function(typeOfSkin) {
  if(this.typeOfSkin == "scales") {
    return "The Mammal is a Whale";
  }else if(this.typeOfSkin == "no Hair") {
    return "The Mammal is a Human Being";

  }else {
    return "Others";
  }

}