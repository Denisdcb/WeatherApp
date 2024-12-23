import { Component, inject } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';


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
      city: new FormControl(''),
    });

  weather: any = [];
  main: any = [];
  city: string = '';
  temp: number = 0;
  tempFeels: number = 0;

  onSubmit() {
    const formData = this.myForm.value.city;
    this.weatherService.getWeather(this.myForm.value.city).subscribe(data => {
      this.weather = data.weather[0];
      this.main = data.main;
      this.city = data.name;
      this.temp = Math.round(this.main.temp - 273.15);
      this.tempFeels = Math.round(this.main.feels_like - 273.15);
    });
  }

}
