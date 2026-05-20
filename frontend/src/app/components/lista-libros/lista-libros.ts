/**
 * @fileoverview Component for displaying the list of authors and their associated books.
 * This component fetches data from the BibliotecaService and manages it using Angular Signals.
 */

import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../../core/services/biblioteca.service';
import { Autor } from '../../shared/models/biblioteca.model';

/**
 * Component that displays a grid of authors and their respective books.
 */
@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros implements OnInit {
  /**
   * Service injected to handle library-related data operations.
   */
  private bibliotecaService = inject(BibliotecaService);

  /**
   * Signal that holds the list of authors.
   * Requisito obligatorio: Uso de Signals para el estado
   */
  autores = signal<Autor[]>([]);

  /**
   * Initializes the component by fetching the list of authors from the service.
   * Requisito obligatorio: Llamada a la API usando el Observable
   */
  ngOnInit(): void {
    this.bibliotecaService.getAutores().subscribe({
      next: (data: Autor[]) => {
        this.autores.set(data);
      },
      error: (err: any) => console.error('Error al traer datos:', err)
    });
  }
}
