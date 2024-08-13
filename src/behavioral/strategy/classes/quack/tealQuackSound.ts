import { IQuackBehavior } from "../../interfaces/quackBehavior";

export class TealQuackSound implements IQuackBehavior {
  quack() {
    console.log("making a teal quack sound...");
  }
}
