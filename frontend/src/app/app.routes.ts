/**
 * @file app.routes.ts
 * @description Application routing configuration.
 * Maps URL paths to their corresponding components.
 */

import { Routes } from '@angular/router';
import { ListaLibros } from './components/lista-libros/lista-libros';
import { FormularioLibro } from './components/formulario-libro/formulario-libro';
import { FormularioAutor } from './components/formulario-autor/formulario-autor';

/**
 * Defines the application's routes.
 */
export const routes: Routes = [
  // Redirect empty path to the book list
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  // Path for the book list component
  { path: 'lista', component: ListaLibros },
  // Path for the add book form component
  { path: 'nuevo-libro', component: FormularioLibro },
  // Path for the add author form component
  { path: 'nuevo-autor', component: FormularioAutor }
];
