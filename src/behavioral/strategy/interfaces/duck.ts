import { IFlyBehavior } from "./flyBehavior";
import { IQuackBehavior } from "./quackBehavior";

export interface IDuck {
  flyBehavior: IFlyBehavior;
  quackBehavior: IQuackBehavior;

  performFly: () => void;
  performQuack: () => void;

  setFly: (flyBehavior: IFlyBehavior) => void;
  setQuack: (quackBehavior: IQuackBehavior) => void;
}
