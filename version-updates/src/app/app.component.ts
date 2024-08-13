import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Version15Component } from './version-15/version-15.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Version15Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'version-updates';
}
