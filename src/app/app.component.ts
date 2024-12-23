import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
}
