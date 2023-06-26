interface IHeroPrototype {
  clone(): IHeroPrototype;
}

class Wizard implements IHeroPrototype {
  private spells: string[];
  private health: number;

  constructor(private name: string) {
    this.spells = [];
    this.health = 100;
  }

  clone(): Wizard {
    const cloned = Object.create(Wizard.prototype || null);

    Object.getOwnPropertyNames(this).map((key) => {
      if (key === "name") {
        cloned[key] = "Unknown";
      } else {
        cloned[key] = (this as any)[key];
      }
    });

    return cloned;
  }
}

class Warrior implements IHeroPrototype {
  private weapon: string;
  private health: number;

  constructor(name: string) {
    this.weapon = "Dagger";
    this.health = 150;
  }

  clone(): Warrior {
    const cloned = Object.create(Warrior.prototype || null);

    Object.getOwnPropertyNames(this).map((key: string) => {
      if (key == "weapon") {
        cloned[key] = "Bare Hands";
      } else {
        cloned[key] = (this as any)[key];
      }
    });

    return cloned;
  }
}

let wiz: Wizard = new Wizard('Wiz1');
let war:Warrior = new Warrior('War1');

let wizClone = wiz.clone();
let warClone = war.clone();

console.log({wizClone});
console.log({warClone});


