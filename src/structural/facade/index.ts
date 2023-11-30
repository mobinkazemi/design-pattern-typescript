/*
These services should first implements and then
uses in Facade pattern
*/
interface IServiceA {
  actions(): void;
}
interface IServiceB {
  actions(): void;
}
interface IServiceC {
  actions(): void;
}

// Here we implement services

class serviceAImpl implements IServiceA {
  actions(): void {
    console.log("Complex actions of A service...");
  }
}
class serviceBImpl implements IServiceB {
  actions(): void {
    console.log("Complex actions of B service...");
  }
}
class serviceCImpl implements IServiceC {
  actions(): void {
    console.log("Complex actions of C service...");
  }
}

// Now we implement Facade pattern

class Facade {
  constructor(
    private readonly serviceA: serviceAImpl,
    private readonly serviceB: serviceBImpl,
    private readonly serviceC: serviceCImpl
  ) {}

  perform() {
    this.serviceA.actions();
    this.serviceB.actions();
    this.serviceC.actions();
  }
}

new Facade(
  new serviceAImpl(),
  new serviceBImpl(),
  new serviceCImpl()
).perform();
