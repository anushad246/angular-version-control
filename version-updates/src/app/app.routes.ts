
import { Routes } from '@angular/router';
import { Version15Component } from './version-15/version-15.component';
import { Version16Component } from './version-16/version-16.component';
import { DirectiveCompositionApiComponent } from './version-15/directive-composition-api/directive-composition-api.component';
import { NgOptimizedImageComponent } from './version-15/ng-optimized-image/ng-optimized-image.component';
// import { TemplateTypeCheckingComponent } from './version-15/template-type-checking/template-type-checking.component';


export const routes: Routes = [
    { path: '', redirectTo: 'v-15', pathMatch: 'full' },
    {
        path: 'v-15',
        component: Version15Component,
        title: 'version-15',
        children: [
            { path: '', redirectTo: 'directive-composition-api', pathMatch: 'full' },
            {
                path: 'directive-composition-api',
                component: DirectiveCompositionApiComponent,
                title: 'directive-composition-api',
            },
            {
                path: 'ng-optimized-image',
                component: NgOptimizedImageComponent,
                title: 'ng-optimized-image',
            },
        ],
    },
    { path: 'v-16', component: Version16Component, title: 'version-16'},
];


