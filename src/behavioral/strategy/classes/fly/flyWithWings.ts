import { IFlyBehavior } from "../../interfaces/flyBehavior";

export class FlyWithWings implements IFlyBehavior {
  fly() {
    console.log("I'm flying with my wings");
  }
}
