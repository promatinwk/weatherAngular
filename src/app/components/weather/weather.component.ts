import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Weather } from 'src/app/model/weather.interface';
import { OpenWeatherService } from 'src/app/services/open-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})


export class WeatherComponent {
  public weather: Weather = {
    sensed_temperature: 0,
    temperature: 0,
    pressure: 0,
    humidity: 0
  };
  constructor(
    private openWeatherService: OpenWeatherService
){
    this.openWeatherService
      .getWeather()
      .subscribe((data: any) => this.weather = {
          humidity: data?.main?.humidity,
          pressure: data?.main?.pressure,
          temperature: data?.main?.temp,
          sensed_temperature: data?.main?.feels_like
} );
}

public refreshData() {
    this.weather = {
      humidity: Math.floor(Math.random() * 100) + 1,
      pressure: Math.floor(Math.random() * 200) + 900,
      temperature: Math.floor(Math.random() * 30),
      sensed_temperature: Math.floor(Math.random() * 30)
} }
}
