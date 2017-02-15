
var jasmine = require("jasmine")
var Animal = require("../OOP/OOP.js");


(function(){
  'use strict';
  describe("Animal Class: Check type of skin and movement", function() {

    it("The Animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var myDog = new Animal.Animal('BullDog');
      expect(typeof myDog).toEqual(typeof {});
      expect(myDog instanceof Animal.Animal).toBeTruthy();
    });

    it("The Animal should be called 'Animal' if no name is passed as a parameter", function() {
      var goat = new Animal.Animal();
	  expect(goat.name).toEqual('Animal');
      expect(goat.noleg).toBe(0);
    });

    it("The Animal name and nofleg should be a property of the car", function() {
      var bird  = new Animal.Animal('flamigo', 2);
      expect(bird.name).toBe('flamigo');
      expect(bird.noleg).toBe(2);
    });

    it("The Animal should be able to fly is has two legs", function() {
      var eagle  = new Animal.Animal();
      expect(eagle.movement(2)).toBe('flying');
      
    });

    it("The Mammal should be human beign if skin is no hair", function() {
      var man  = new Animal.Mammal('MAN');
      expect(man.skin('no Hair')).toBe('The Mammal is a Human Being');
            
    });

    it("The cat should have access to method skin and movement", function() {
      var cat  = new Animal.Mammal();
      expect(cat.skin('Hair')).toBe('Others');
      expect(cat.movement(4)).toBe('walking');
    });
   it("The Parent want to access method child skin", function() {
      var mouse = new Animal.Mammal();
      expect(mouse.skin() instanceof Animal.Animal).toBeFalsy();
      ;
    });
    
  });
})();