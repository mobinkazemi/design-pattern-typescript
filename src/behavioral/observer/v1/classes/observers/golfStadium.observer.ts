import { Observer } from "../../interfaces/observer.interface";
import { WeatherDataType } from "../WeatherData.class";

export class GolfStadiumWeatherDisplay implements Observer<WeatherDataType> {
  private name!: string;
  private temp!: number;
  private pressure!: number;
  private humidity!: number;

  constructor(name: string) {
    this.name = name;
  }

  update(data: WeatherDataType) {
    this.temp = data.temperature;
    this.pressure = data.pressure;
    this.humidity = data.humidity;
  }

  display() {
    console.log(`
        Current weather data in ${this.name} Golf Stadium:
        Temperature: ${this.temp}
        Pressure: ${this.pressure}
        Humidity:  ${this.humidity}`);
  }
}
