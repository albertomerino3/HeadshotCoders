/**
 * @fileoverview Feature component for adding a new book to the catalog.
 * Uses a reactive form and interacts with the LibroService for backend communication.
 */

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';

/**
 * Component that provides the functionality to create a new book record.
 */
@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './libro-form.component.html'
})
export class LibroFormComponent {
  /**
   * FormBuilder service to facilitate form creation.
   */
  private readonly fb = inject(FormBuilder);

  /**
   * Service injected to handle book-related data operations.
   */
  private readonly libroService = inject(LibroService);

  /**
   * Router service for navigation after successful submission.
   */
  private readonly router = inject(Router);

  /**
   * Reactive form definition for book creation with validation rules.
   * Inicialización del Formulario Reactivo
   */
  libroForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    autor: ['', Validators.required],
    isbn: ['', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]],
    precio: [0, [Validators.required, Validators.min(0.01)]]
  });

  /**
   * Handles the form submission.
   * Validates the form and sends the data to the backend via LibroService.
   */
  onSubmit(): void {
    if (this.libroForm.valid) {
      this.libroService.createLibro(this.libroForm.value).subscribe({
        next: () => {
          alert('¡Libro guardado con éxito en Spring Boot!');
          this.router.navigate(['/']);
        },
        // Handles backend error response
        // Tipamos 'err' como HttpErrorResponse
        error: (err: HttpErrorResponse) => {
          console.error('Status del backend:', err.status);
          console.error('Mensaje del backend:', err.message);
        }
      });
    }
  }
}
