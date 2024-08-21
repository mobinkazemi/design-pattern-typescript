import { Observer } from "../../interfaces/observer.interface";
import { Subject } from "../../interfaces/subject.interface";
import { WeatherData } from "../WeatherData.class";

export class AirportWeatherDisplay implements Observer {
  private name!: string;
  private temp!: number;
  private pressure!: number;
  private humidity!: number;
  private wind!: number;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: Subject) {
    if (subject instanceof WeatherData) {
      this.temp = subject.getTemperature();
      this.pressure = subject.getPressure();
      this.humidity = subject.getHumidity();
      this.wind = subject.getWind();
    }
  }

  display() {
    console.log(`
        Current weather data in ${this.name} airport:
        Temperature: ${this.temp}
        Pressure: ${this.pressure}
        Humidity:  ${this.humidity}
        Wind:  ${this.wind}`);
  }
}
