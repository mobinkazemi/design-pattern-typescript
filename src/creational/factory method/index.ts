interface Weapon {
  getName(): string;
  getDamage(): number;
  getRange(): number;
}

class RedWeapon implements Weapon {
  getName(): string {
    return "Red";
  }
  getDamage(): number {
    return 10;
  }
  getRange(): number {
    return 2;
  }
}

class BlueWeapon implements Weapon {
  getName(): string {
    return "Blue";
  }
  getDamage(): number {
    return 20;
  }
  getRange(): number {
    return 4;
  }
}

interface WeaponFactory {
  create(): Weapon;
}

class RedWeaponFactory implements WeaponFactory {
  create(): Weapon {
    return new RedWeapon();
  }
}

class BlueWeaponFactory implements WeaponFactory {
  create(): Weapon {
    return new BlueWeapon();
  }
}

// Or an alternative way to classic implementation

const enum WeaponTypes {
  RED,
  BLUE,
}

interface WeaponFactory2 {
  create(type: WeaponTypes): Weapon;
}

class WeaponFactory2 implements WeaponFactory2 {
  create(type: WeaponTypes): Weapon {
    switch (type) {
      case WeaponTypes.RED:
        return new RedWeapon();
        break;

      case WeaponTypes.BLUE:
        return new BlueWeapon();
        break;
    }
  }
}
