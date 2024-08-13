import { IQuackBehavior } from "../../interfaces/quackBehavior";

export class WoodQuackSound implements IQuackBehavior {
  quack() {
    console.log("making a wood quack sound...");
  }
}
