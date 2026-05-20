import { Component, OnInit, signal } from '@angular/core'; // 1. Añadimos OnInit y signal
import { LibroService } from '../../../core/services/libro.service';
import { Libro } from '../../shared/models/libro.model'; // 2. Importamos el modelo también

@Component({
  selector: 'app-lista-libros',
  standalone: true, // Requisito obligatorio: Standalone Component
  imports: [], // Como usamos el nuevo @for de Angular 21, esto puede ir vacío
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibrosComponent implements OnInit { // Cambiado a ListaLibrosComponent por buena práctica

  // Requisito obligatorio: Uso de Signals para el estado
  libros = signal<Libro[]>([]);

  // Inyectamos tu servicio real en el constructor
  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    // Requisito obligatorio: Llamada a la API usando el Observable
    this.libroService.getLibros().subscribe({
      next: (data) => {
        this.libros.set(data); // Guardamos los libros en el Signal
      },
      error: (err) => {
        console.error('Error al traer los libros del backend:', err);
      }
    });
  }
}
