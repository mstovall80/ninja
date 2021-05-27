
class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }


    sayName() {
        console.log(this.name)

    }
    showStats() {
        console.log(`name: ${this.name} health: ${this.health} speed: ${this.speed} strength: ${this.strength}`)
    }
    drinkSake() {
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10)
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`${this.wisdom}`)
}
}
    const ninja1 = new Ninja("Hyabusa");
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();
    ninja1.showStats();
    

    console.log(ninja1)


    const superSensei = new Sensei("Master Splinter");
    superSensei.showStats()
