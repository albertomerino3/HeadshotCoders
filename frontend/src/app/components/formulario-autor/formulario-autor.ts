/**
 * @fileoverview Component for the author registration form.
 * Handles the creation of new authors in the system.
 */

import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BibliotecaService } from '../../../core/services/biblioteca.service';

/**
 * Component that provides a reactive form for registering new authors.
 */
@Component({
  selector: 'app-formulario-autor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-autor.html',
  styleUrl: './formulario-autor.css',
})
export class FormularioAutor {
  /**
   * FormBuilder service to facilitate form creation.
   */
  private fb = inject(FormBuilder);

  /**
   * Service injected to handle library-related data operations.
   */
  private bibliotecaService = inject(BibliotecaService);

  /**
   * Signal that holds feedback messages for the user.
   */
  mensaje = signal<string>('');

  /**
   * Reactive form definition for author registration.
   * Requisito obligatorio: Formulario Reactivo
   */
  autorForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    nacionalidad: ['', Validators.required]
  });

  /**
   * Submits the form data to create a new author.
   * Only proceeds if the form is valid.
   */
  guardarAutor() {
    if (this.autorForm.valid) {
      const nuevoAutor = this.autorForm.value as any;

      this.bibliotecaService.createAutor(nuevoAutor).subscribe({
        next: () => {
          this.mensaje.set('Autor guardado con éxito!');
          this.autorForm.reset();
        },
        error: (err: any) => this.mensaje.set('Error al guardar el autor')
      });
    }
  }
}
