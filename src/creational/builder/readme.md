# Builder 
This pattern deals with simplifying the process of creating complex objects. Objects that take more than two or three parameters and many of them are not known ahead of time.
In builder pattern we use independent common steps (that each step returns a usable object) to create an object.
If we do not anticipate or require to have more than one representation in the future, then this pattern is unnecessary.

### Questions to ask before implementing this pattern:
1. Does that object has more than 3 parameters?
2. And Many of those parameters are optional?
3. And of you don't provide them, then you will get a default one?
4. And all of steps to create that object are independent?

if the answer is no to any of them, You do not need to implement ***Builder Pattern***

## Sample
Builder pattern will change the implementaion of a complex object from this:
```
const myHouse = new House('John Street 14', 4, true, true);
```
to this:
```
const myHouse = new HouseBuilder('John Street 14')
                     .setFloor(4)
                     .makeParking()
                     .makeGarden()
                     .build();

```
## Disadvantages
1. A concrete Builder for each representation

