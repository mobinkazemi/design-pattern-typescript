import { Observer } from "../interfaces/observer.interface";
import { Subject } from "../interfaces/subject.interface";

export type WeatherDataType = {
  temperature: number;
  humidity: number;
  pressure: number;
};

export class WeatherData implements Subject<WeatherDataType> {
  private observers!: Observer<WeatherDataType>[];
  private temperature!: number;
  private humidity!: number;
  private pressure!: number;

  constructor() {
    this.observers = [];
  }

  registerObserver(o: Observer<WeatherDataType>) {
    this.observers.push(o);
  }

  removeObserver(o: Observer<WeatherDataType>) {
    this.observers.splice(this.observers.indexOf(o));
  }

  notifyObservers() {
    for (let o of this.observers) {
      o.update({
        temperature: this.temperature,
        humidity: this.humidity,
        pressure: this.pressure,
      });
    }
  }

  private mesarementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.mesarementsChanged();
  }
}
