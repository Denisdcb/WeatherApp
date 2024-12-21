import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDisplayComponent } from './components/main-display/main-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';
}
