// Extend the Bee Methods to the HoneyMakerBee
class HoneyMakerBee extends Bee{

  // Constructor
  constructor(){
    // Super Calls the parent function, depending on the context, and then returns the result
    super();
    this.age = 10;
    this.job = "make honey";
    this.honeyPot = 0;
  }

  // METHODS
  makeHoney(){
    this.honeyPot += 1;
  }

  giveHoney(){
    this.honeyPot -= 1;
  }

};
