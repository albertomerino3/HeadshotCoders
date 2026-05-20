import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';
import { Libro } from '../../shared/models/libro.model';

@Component({
  selector: 'app-libro-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './libro-list.component.html'
})
export class LibroListComponent implements OnInit {
  private readonly libroService = inject(LibroService);

  // Definimos una Signal para manejar la lista de libros de forma reactiva
  libros = signal<Libro[]>([]);
  loading = signal<boolean>(false);

  ngOnInit(): void {
    this.cargarLibros();
  }

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
