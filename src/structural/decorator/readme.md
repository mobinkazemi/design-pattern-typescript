# Decorator Pattern

When we want to add another functionality to an object without modifying current implementation of that object or extending it with subclasses, we use **_Decorator Pattern_**.

## Sample

For example in Nestjs we can simply decorate a class with `@Injectable()` decorator to register it for dependency-injection without altering that class's implementation:

```
@Injectable()
export class UserService {
  // ...
}
```
