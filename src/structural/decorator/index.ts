console.clear();

function CalleeLogger(output?: boolean) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const fn = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = fn.apply(this, args);

      console.group("@CalleeLogger:");
      console.groupCollapsed();
      console.log(
        `function "${key}" from class "${target.constructor.name}" called`
      );
      if (output) {
        console.log(`output:`, result);
      }
      console.groupEnd();
      return result;
    };
    return descriptor;
  };
}

interface IVehicle {
  id: number;
  type: "car" | "motorcycle" | "unknown";
  model: string;
  brand: string;
}

class Vehicle {
  private static vehicles: Partial<IVehicle>[] = [];
  private static id: number = 1;
  private vehicle: Partial<IVehicle> = {};

  constructor() {
    this.initializeVehicle();
  }

  private initializeVehicle() {
    this.vehicle = {
      id: Vehicle.id,
      type: "unknown",
      model: "unknown",
      brand: "unknown",
    };
  }
  addType(type: "car" | "motorcycle") {
    this.vehicle.type = type;
    return this;
  }
  addModel(model: string) {
    this.vehicle.model = model;
    return this;
  }
  addBrand(brand: string) {
    this.vehicle.brand = brand;
    return this;
  }
  save() {
    Vehicle.vehicles.push(this.vehicle);
    Vehicle.id++;
    this.initializeVehicle();
  }

  @CalleeLogger(true)
  getAll() {
    return Vehicle.vehicles;
  }
}

const instance = new Vehicle();
instance.addType("car").addBrand("BMW").addModel("M5").save();
instance.getAll();
