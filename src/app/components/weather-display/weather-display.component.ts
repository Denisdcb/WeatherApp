import { Component, inject, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {
  weather: any = [];
  main: any = [];
  city: string = '';
  temp: number = 0;
  tempFeels: number = 0;

  private weatherService: WeatherService = inject(WeatherService);

  ngOnInit(): void {
    this.weatherService.getWeather('Montréal').subscribe(data => {
      this.weather = data.weather[0];
      this.main = data.main;
      this.city = data.name;
      this.temp = Math.round(this.main.temp - 273.15);
      this.tempFeels = Math.round(this.main.feels_like - 273.15);
    });
  }
}
