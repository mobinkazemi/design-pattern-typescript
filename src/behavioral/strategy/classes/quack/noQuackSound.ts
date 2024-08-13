import { IQuackBehavior } from "../../interfaces/quackBehavior";

export class NoQuackSound implements IQuackBehavior {
  quack() {
    console.log("I'm silent. Making no quack sound...");
  }
}
