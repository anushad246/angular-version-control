import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CustomDirective } from './directives/custom.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { HighlightDirective } from './directives/highlight.directive';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-version-15',
    standalone: true,
    imports: [CustomDirective, NgIf, TooltipDirective, HighlightDirective, MatCardModule],
    templateUrl: './version-15.component.html',
    styleUrl: './version-15.component.scss'
  })
export class Version15Component {
  isFruit= true
}
