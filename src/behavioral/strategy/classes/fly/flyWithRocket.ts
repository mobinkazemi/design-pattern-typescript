import { IFlyBehavior } from "../../interfaces/flyBehavior";

export class FlyWithRocket implements IFlyBehavior {
  fly() {
    console.log("I'm flying with a rocket");
  }
}
