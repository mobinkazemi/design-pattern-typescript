import { IFlyBehavior } from "../../interfaces/flyBehavior";

export class NoFly implements IFlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}
