import { NoFly } from "./classes/fly/noFly";
import { MagicDuck } from "./classes/magicDuck";
import { WoodDock } from "./classes/woodDuck";

const woodDuck = new WoodDock();
const wieredDuck = new MagicDuck();

console.group("Wood Duck");
woodDuck.performFly();
woodDuck.performQuack();
woodDuck.setFly(new NoFly());
woodDuck.performFly();
console.groupEnd();

console.group("Wiered Duck");
wieredDuck.performFly();
wieredDuck.performQuack();
console.groupEnd();
