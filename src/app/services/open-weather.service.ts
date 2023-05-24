import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  constructor(
    private http: HttpClient
        ) { }

  API_KEY = '9df6779c32023ed1ff17d9c2859693c7';

  LOCATION = 'Poznań';

  getWeather(): any{
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?appid=$
{this.API_KEY}&units=metric&q=${this.LOCATION}`
    )
  }

}
