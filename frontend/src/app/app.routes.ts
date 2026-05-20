import { Routes } from '@angular/router';
import { ListaLibros } from './components/lista-libros/lista-libros';
import { FormularioLibro } from './components/formulario-libro/formulario-libro';
import { FormularioAutor } from './components/formulario-autor/formulario-autor';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaLibros },
  { path: 'nuevo-libro', component: FormularioLibro },
  { path: 'nuevo-autor', component: FormularioAutor }
];
