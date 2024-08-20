import { Routes } from '@angular/router';
import { DirectiveCompositionApiComponent } from './directive-composition-api/directive-composition-api.component';
import { TemplateTypeCheckingComponent } from './template-type-checking/template-type-checking.component';

export const routes: Routes = [
    { path: '', redirectTo: 'directive-composition-Api', pathMatch: 'full' },
    { path: 'directive-composition-api', component: DirectiveCompositionApiComponent },
    { path: 'template-typeChecking-component', component: TemplateTypeCheckingComponent },
];
