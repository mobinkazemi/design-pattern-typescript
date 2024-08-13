import { IDuck } from "../interfaces/duck";
import { IFlyBehavior } from "../interfaces/flyBehavior";
import { IQuackBehavior } from "../interfaces/quackBehavior";
import { FlyWithRocket } from "./fly/flyWithRocket";
import { NoQuackSound } from "./quack/noQuackSound";

export class MagicDuck implements IDuck {
  flyBehavior!: IFlyBehavior;
  quackBehavior!: IQuackBehavior;

  constructor() {
    this.flyBehavior = new FlyWithRocket();
    this.quackBehavior = new NoQuackSound();
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
