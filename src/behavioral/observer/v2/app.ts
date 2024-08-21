import { AirportWeatherDisplay } from "./classes/observers/airport.observer";
import { FormulaCircuitWeatherDisplay } from "./classes/observers/formulaCircuit.observer";
import { GolfStadiumWeatherDisplay } from "./classes/observers/golfStadium.observer";
import { WeatherData } from "./classes/WeatherData.class";

const washingtonWeatherData = new WeatherData();

const washingtonAirport = new AirportWeatherDisplay("Washington");
const washingtonGolfStadium = new GolfStadiumWeatherDisplay("Washington");
const washingtonCircuit = new FormulaCircuitWeatherDisplay("Washington");

washingtonWeatherData.registerObserver(washingtonAirport);
washingtonWeatherData.registerObserver(washingtonGolfStadium);
washingtonWeatherData.registerObserver(washingtonCircuit);

washingtonWeatherData.setMeasurements(20, 13, 29.7, 0);

washingtonAirport.display();
washingtonGolfStadium.display();
washingtonCircuit.display();

washingtonWeatherData.setMeasurements(43, 21, 21.1, 3);

washingtonAirport.display();
washingtonGolfStadium.display();
washingtonCircuit.display();
