import { IDuck } from "../interfaces/duck";
import { IFlyBehavior } from "../interfaces/flyBehavior";
import { IQuackBehavior } from "../interfaces/quackBehavior";
import { FlyWithWings } from "./fly/flyWithWings";
import { WoodQuackSound } from "./quack/woodQuackSound";

export class WoodDock implements IDuck {
  flyBehavior!: IFlyBehavior;
  quackBehavior!: IQuackBehavior;

  constructor() {
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new WoodQuackSound();
  }

  performFly() {
    this.flyBehavior.fly();
  }
  performQuack() {
    this.quackBehavior.quack();
  }

  setFly(flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior;
  }

  setQuack(quackBehavior: IQuackBehavior) {
    this.quackBehavior = quackBehavior;
  }
}
