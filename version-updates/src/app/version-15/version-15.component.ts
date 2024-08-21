import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './directives/custom.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-version-15',
  standalone: true,
  imports: [
    RouterOutlet,NgIf, CommonModule,CustomDirective, 
    NgIf, TooltipDirective, HighlightDirective, MatCardModule,
    CommonModule
  ],
  templateUrl: './version-15.component.html',
  styleUrl: './version-15.component.scss'
})
export class Version15Component {
  isFruit = true
}
