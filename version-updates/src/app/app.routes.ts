import { Routes } from '@angular/router';
import { Version15Component } from './version-15/version-15.component';
import { Version16Component } from './version-16/version-16.component';

export const routes: Routes = [
    { path: '', component: Version15Component },
    { path: 'v-16', component: Version16Component },
];
