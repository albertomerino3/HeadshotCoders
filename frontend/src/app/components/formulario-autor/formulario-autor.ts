import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BibliotecaService } from '../../../core/services/biblioteca.service';

@Component({
  selector: 'app-formulario-autor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-autor.html',
  styleUrl: './formulario-autor.css',
})
export class FormularioAutor {
  private fb = inject(FormBuilder);
  private bibliotecaService = inject(BibliotecaService);

  mensaje = signal<string>('');

  // Requisito obligatorio: Formulario Reactivo
  autorForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    nacionalidad: ['', Validators.required]
  });

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
