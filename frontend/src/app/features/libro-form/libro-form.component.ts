import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LibroService } from '../../core/services/libro.service';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './libro-form.component.html'
})
export class LibroFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly libroService = inject(LibroService);
  private readonly router = inject(Router);

  // Inicialización del Formulario Reactivo
  libroForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    autor: ['', Validators.required],
    isbn: ['', [Validators.required, Validators.pattern('^[0-9]{10,13}$')]],
    precio: [0, [Validators.required, Validators.min(0.01)]]
  });

  onSubmit(): void {
    if (this.libroForm.valid) {
      this.libroService.createLibro(this.libroForm.value).subscribe({
        next: () => {
          alert('¡Libro guardado con éxito en Spring Boot!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error al guardar:', err)
      });
    }
  }
}
