import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../core/services/biblioteca.service';
import { Autor } from '../../shared/models/biblioteca.model';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros {
  private bibliotecaService = inject(BibliotecaService);

  // Requisito obligatorio: Uso de Signals para el estado
  autores = signal<Autor[]>([]);

  ngOnInit(): void {
    // Requisito obligatorio: Llamada a la API usando el Observable
    this.bibliotecaService.getAutores().subscribe({
      next: (data) => {
        this.autores.set(data);
      },
      error: (err) => console.error('Error al traer datos:', err)
    });
  }
}
