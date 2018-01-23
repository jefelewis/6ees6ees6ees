// Extend the ForagerBee Methods to the RetiredForagerBee
class RetiredForagerBee extends ForagerBee {

  // Constructor
  constructor(){
    // Super Calls the parent function, depending on the context, and then returns the result
    super();
    this.age = 40;
    this.job = "gamble";
    this.canFly = false;
    this.color = "grey";
  }

  // METHODS
  forage(){
    return "I am too old, let me play cards instead"
  }

  gamble(){
    this.treasureChest.push(2);
  }

};
