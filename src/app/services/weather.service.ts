import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, Observable, tap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  http: HttpClient = inject(HttpClient);
  private API_KEY: string = '89a88172e7af87a32c519850ef7d01fb'
  private geoUrl: string = 'http://api.openweathermap.org/geo/1.0/direct?q=';
  private weatherUrl: string = 'https://api.openweathermap.org/data/2.5/weather?lat=';

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(this.geoUrl + city + '&appid=' + this.API_KEY).pipe(
      tap(data => {
        if (data.length === 0) {
          throw new Error('Aucune coordonnée trouvée pour cette ville.');
        }
      }),
      map(data => data[0]),
      switchMap(coord =>
        this.http.get<any>(
          `${this.weatherUrl}${coord.lat}&lon=${coord.lon}&appid=${this.API_KEY}`
        )
      )
    );
  }
}
