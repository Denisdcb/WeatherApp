import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CitySearchFormComponent } from '../city-search-form/city-search-form.component';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';

@Component({
  selector: 'app-main-display',
  standalone: true,
  imports: [HeaderComponent, WeatherDisplayComponent, CitySearchFormComponent],
  templateUrl: './main-display.component.html',
  styleUrl: './main-display.component.css'
})
export class MainDisplayComponent {

}
