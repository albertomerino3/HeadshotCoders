import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/libro-list/libro-list.component').then(m => m.LibroListComponent)
  },
  {
    path: 'nuevo',
    loadComponent: () => import('./features/libro-form/libro-form.component').then(m => m.LibroFormComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
