import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { Coords } from '../../types/Coords';



@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {

  private weatherService: WeatherService = inject(WeatherService);

  myForm = new FormGroup({
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

  weatherEmoji: string = '🌤';
  tempColor: string = '';
  weather!: Coords;
  temp: number = 0;
  tempFeel: number = 0;

  onSubmit() {
    const formData = this.myForm.value.city;
    this.weatherService.getWeather(formData!).subscribe(data => {
      this.weather = data;
      this.temp = Math.round(data.main.temp - 273.15);
      this.tempFeel = Math.round(data.main.feels_like - 273.15);
      if(data.weather[0].main === 'Clear') {
        this.weatherEmoji = '☀️';
      }
      else if(data.weather[0].main === 'Clouds') {
        this.weatherEmoji = '☁️';
      }
      else if(data.weather[0].main === 'Rain') {
        this.weatherEmoji = '🌧️';
      }
      else if(data.weather[0].main === 'Snow') {
        this.weatherEmoji = '❄️';
      }
      if(this.temp <= 5) {
        this.tempColor = 'blue';
      }
      else if(this.temp > 5 && this.temp <= 25) {
        this.tempColor = 'yellow';
      } else {
        this.tempColor = 'red';
      }
    });
    this.myForm.reset();
  }
}
