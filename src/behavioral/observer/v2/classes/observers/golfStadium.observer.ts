import { Observer } from "../../interfaces/observer.interface";
import { Subject } from "../../interfaces/subject.interface";
import { WeatherData } from "../WeatherData.class";

export class GolfStadiumWeatherDisplay implements Observer {
  private name!: string;
  private temp!: number;
  private wind!: number;

  constructor(name: string) {
    this.name = name;
  }

  update(subject: Subject) {
    if (subject instanceof WeatherData) {
      this.temp = subject.getTemperature();
      this.wind = subject.getWind();
    }
  }

  display() {
    console.log(`
        Current weather data in ${this.name} Circuit:
        Temperature: ${this.temp}
        Wind: ${this.wind}`);
  }
}
