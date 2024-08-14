
import { RouterOutlet } from '@angular/router';
import { Version15Component } from './version-15/version-15.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatIconModule } from '@angular/material/icon';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Version16Component } from './version-16/version-16.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Version15Component, SidenavComponent,
    MatIconModule, MatCardModule, MatSidenavModule, MatDrawer,
    CommonModule, Version16Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'version-updates';

}
