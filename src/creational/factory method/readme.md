# Factory Method Pattern

This pattern deals with the creation of objects.In situations where we have some objects that they share a same characteristic (i.e. in nature or type or they are part of a hierarchy).
Factory object is an abstraction (an interface) that has a `create()` method and then some classes implement this interface. This **_create_** method accepts a variable as type or accepts an interface to describe what kind of object this function should create. So instead of using `new` operator to create those objects manually, this factory method will create that object for us with all details we are concern about.
Finally when we describe for `create` method what object we need to create, it will call the right constructor the right way and returns the created object.

## Usage

1. When we have a list of various objects with a parent-child relationship

## Example

Here we just pass 'div' to `createElement` function. we do not know about details of creating an instance of div element and we should not.

```
const divElement= document.createElement("div");
const content document.createTextNode("Hello");
const event = document.createEvent('Event');
```
