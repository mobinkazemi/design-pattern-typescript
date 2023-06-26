# Prototype Pattern
This pattern helps us in creating Objects. This Object gets its initial state and properties from that prototype interface. `clone()` method creates a clone Object related to that interface.

## Usage
1. When you have created some objects in your program and at the time you need another Object identical to these Objects, you want to quickly get that Object copy without creating it again that has some overloads.

## DisAdvantages
1. It is hard to write `clone()` method for every class that implements the Prototype interface.
2. We should cast Objects created with `clone()` method later to have access and use other properties of that Object.
3. If you use inheritence for the first problem and write a base clone method in a parent class and then use it inside child classes, then there is no reason to use this pattern. Because the reason we use Prototype pattern is to avoid inheritence to create Objects and clone Objects instead.