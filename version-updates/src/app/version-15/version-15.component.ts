import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CustomDirective } from './directives/custom.directive';

@Component({
    selector: 'app-version-15',
    standalone: true,
    imports: [CustomDirective, NgIf],
    templateUrl: './version-15.component.html',
    styleUrl: './version-15.component.scss'
  })
export class Version15Component {
  isFruit= true
}
