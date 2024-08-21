import { Observer } from "../interfaces/observer.interface";
import { Subject } from "../interfaces/subject.interface";

export class WeatherData implements Subject {
  private observers!: Observer[];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;
  private wind!: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    this.observers.splice(this.observers.indexOf(o));
  }

  notifyObservers() {
    for (let o of this.observers) {
      o.update(this);
    }
  }

  private mesarementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number,
    wind: number
  ) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.wind = wind;

    this.mesarementsChanged();
  }

  getTemperature() {
    return this.temperature;
  }
  getHumidity() {
    return this.humidity;
  }
  getPressure() {
    return this.pressure;
  }
  getWind() {
    return this.wind;
  }
}
