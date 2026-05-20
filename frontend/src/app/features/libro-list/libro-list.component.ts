/**
 * @fileoverview Feature component for displaying the list of all books in the catalog.
 * Manages reactive state using Angular Signals and fetches data from the backend.
 */

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';
import { Libro } from '../../shared/models/libro.model';

/**
 * Component that displays a table of books retrieved from the Spring Boot backend.
 */
@Component({
  selector: 'app-libro-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './libro-list.component.html'
})
export class LibroListComponent implements OnInit {
  /**
   * Service injected to handle book-related data operations.
   */
  private readonly libroService = inject(LibroService);

  /**
   * Signal that holds the current list of books.
   * Definimos una Signal para manejar la lista de libros de forma reactiva
   */
  libros = signal<Libro[]>([]);

  /**
   * Signal that indicates if the data is currently being loaded.
   */
  loading = signal<boolean>(false);

  /**
   * Initializes the component by triggering the data load.
   */
  ngOnInit(): void {
    this.cargarLibros();
  }

  /**
   * Fetches the list of books from the service and updates the reactive state.
   */
  cargarLibros(): void {
    this.loading.set(true);
    // Consumimos el Observable de la API y actualizamos la Signal
    this.libroService.getLibros().subscribe({
      next: (data) => {
        this.libros.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al conectar con Spring Boot:', err);
        this.loading.set(false);
      }
    });
  }
}
