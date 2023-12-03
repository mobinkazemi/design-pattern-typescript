# Facade Pattern

This pattern wraps one or more interfaces and hides their complexity inside a simpler interface. When we have some workflows that need to be orchestrated in a specific manner, we can use this pattern to hide all those complexities behind an API to offer a simpler and more readable way to call those workflows.

## Disadvantages

This pattern suffers from **God Class** pattern. If we just wrap so many interfaces and classes inside a Facade class, you will face a Facade class that does so many jobs unrelated to each other. To avoid **God class** pattern, we should keep in mind that if those classes do not have a shared goal, then they should not belong to the same Facade.
