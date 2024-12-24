import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable, tap, switchMap } from 'rxjs';
import { API_KEYSECRET } from './API_KEY';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http: HttpClient = inject(HttpClient);
  private API_KEY: string = API_KEYSECRET;
  private weatherUrl: string = 'https://api.openweathermap.org/data/2.5/weather?q=';

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(this.weatherUrl + city + '&appid=' + this.API_KEY)
  }
}
