
var jasmine = require("jasmine")
var app = require("../OOP/OOP.js");



(function(){
  'use strict';
  describe("Animal Class: Check type of skin and movement", function() {

    it("The Animal should be a type of `object`, and an instance of the `Animal` class", function() {
      var myDog = new Animal('BullDog');
      expect(typeof myDog).toEqual(typeof {});
      expect(honda instanceof Animal).toBeTruthy();
    });

    it("The Animal should be called 'Animal' if no name is passed as a parameter", function() {
      var goat = new app.Animal();
      expect(goat.name).toEqual('Animal');
      expect(goat.nofleg).toBe(0);
    });

    it("The Animal name and nofleg should be a property of the car", function() {
      var bird  = new Animal('flamigo', 2);
      expect(bird.name).toBe('flamigo');
      expect(bird.nofleg).toBe(2);
    });

    it("The Animal should be able to fly is has two legs", function() {
      var eagle  = new Animal('eagle', 2);
      expect(eagle.movement()).toBe("flying");
      
    });

    it("The Mammal should be human beign if skin is no hair", function() {
      var man  = new Mammal('MAN');
      expect(man.skin("no Hair")).toBe("The Mammal is a Human Being");
            
    });

    it("The cat should have access to method skin and movement", function() {
      var cat  = new Mammal('LION', 4);
      expect(cat.skin("Hair")).toBe('Others');
      expect(cat.movement()).toBe('walking');
    });

    it("The car drive function should return the instance of the Car class", function() {
      var man  = new Animal();
      expect(man.movement instanceof Car).toBeTruthy();
      expect(typeof drivingMan.drive).toBe(typeof (function (){}));
      
    });
  });
})();