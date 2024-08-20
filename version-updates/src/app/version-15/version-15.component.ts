import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-version-15',
  standalone: true,
  imports: [RouterOutlet,NgIf, CommonModule],
  templateUrl: './version-15.component.html',
  styleUrl: './version-15.component.scss'
})
export class Version15Component {

}
