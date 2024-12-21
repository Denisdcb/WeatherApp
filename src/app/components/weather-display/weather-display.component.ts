import { Component } from '@angular/core';
import { CitySearchFormComponent } from '../city-search-form/city-search-form.component';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CitySearchFormComponent],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent {

}
