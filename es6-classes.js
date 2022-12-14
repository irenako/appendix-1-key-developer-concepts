// ES-6 Classes and Inheritnce

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}
class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "strongest fort in the world!";
  }
}

const dolby = new Elf("Dolby", "cloth", "house Elf");
dolby.attack();
const shrek = new Ogre("Shrek", "club", "green");
shrek.makeFort();
