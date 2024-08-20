import { Component } from '@angular/core';
import { CustomDirective } from '../directives/custom.directive';
import { CommonModule, NgIf } from '@angular/common';
import { TooltipDirective } from '../directives/tooltip.directive';
import { HighlightDirective } from '../directives/highlight.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-directive-composition-api',
  standalone: true,
  imports: [CustomDirective, NgIf, TooltipDirective, HighlightDirective, MatCardModule,CommonModule],
  templateUrl: './directive-composition-api.component.html',
  styleUrl: './directive-composition-api.component.scss'
})
export class DirectiveCompositionApiComponent {
  isFruit = true

}
