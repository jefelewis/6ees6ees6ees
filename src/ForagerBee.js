// Extend the HoneyMakerBee Methods to the ForagerBee
class ForagerBee extends HoneyMakerBee{

  // Constructor
  constructor(){
    // Super Calls the parent function, depending on the context, and then returns the result
    super();
    this.age = 10;
    this.job = "find pollen"
    this.canFly = true;
    this.treasureChest = [];
  }

  // METHODS
  forage(){
    this.treasureChest.push(3);
  }

};
