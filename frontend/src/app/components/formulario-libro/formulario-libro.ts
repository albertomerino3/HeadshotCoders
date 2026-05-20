/**
 * @fileoverview Component for the book registration form.
 * Handles the creation of new books and their association with existing authors.
 */

import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BibliotecaService } from '../../../core/services/biblioteca.service';
import { Autor } from '../../shared/models/biblioteca.model';

/**
 * Component that provides a reactive form for adding new books to the library.
 */
@Component({
  selector: 'app-formulario-libro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-libro.html',
  styleUrl: './formulario-libro.css',
})
export class FormularioLibro implements OnInit {
  /**
   * FormBuilder service to facilitate form creation.
   */
  private fb = inject(FormBuilder);

  /**
   * Service injected to handle library-related data operations.
   */
  private bibliotecaService = inject(BibliotecaService);

  /**
   * Signal that holds the list of available authors for the selection dropdown.
   */
  autores = signal<Autor[]>([]);

  /**
   * Signal that holds feedback messages for the user.
   */
  mensaje = signal<string>('');

  /**
   * Reactive form definition for book creation.
   * Requisito obligatorio: Formulario Reactivo
   */
  libroForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    genero: ['', Validators.required],
    autorId: ['', Validators.required]
  });

  /**
   * Initializes the component by fetching the list of authors.
   */
  ngOnInit(): void {
    // Cargamos los autores para el select del formulario
    this.bibliotecaService.getAutores().subscribe((data: Autor[]) => this.autores.set(data));
  }

  /**
   * Submits the form data to create a new book.
   * Only proceeds if the form is valid.
   */
  guardarLibro() {
    if (this.libroForm.valid) {
      const { titulo, genero, autorId } = this.libroForm.value;
      const nuevoLibro = { titulo: titulo!, genero: genero! };

      this.bibliotecaService.createLibro(nuevoLibro, Number(autorId)).subscribe({
        next: () => {
          this.mensaje.set('Libro guardado con éxito!');
          this.libroForm.reset();
        },
        error: (err: any) => this.mensaje.set('Error al guardar el libro')
      });
    }
  }
}
