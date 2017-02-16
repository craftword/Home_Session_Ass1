

var Animal = function (name, noleg){
	 (typeof name === 'undefined')? this.name = "Animal" : this.name = name;
	 (typeof noleg === 'undefined')? this.noleg = 0 : this.noleg = noleg;
	
	this.movement = function(noleg) {
	   if(noleg == 0) {
           return 'crawling';
         }
        else if(noleg == 2) {
          return 'flying';
        }else{
         return 'walking';
         }

	  }
	}
var Mammal = function (name) {
	// implement closure inheritance
    this.inheritsFrom = Animal;
    this.inheritsFrom(name);
	this.skin = function(typeOfSkin) {
           if(typeOfSkin === 'scales') {
              return 'The Mammal is a Whale';
            }else if(typeOfSkin === 'no Hair') {
               return 'The Mammal is a Human Being';
          }else {
             return 'Others';
      }

	}
	
}

 
exports.Animal = Animal;
exports.Mammal = Mammal;
 
 
 
 
 
 
 
 	



