import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BibliotecaService } from '../../../core/services/biblioteca.service';
import { Autor } from '../../shared/models/biblioteca.model';

@Component({
  selector: 'app-formulario-libro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-libro.html',
  styleUrl: './formulario-libro.css',
})
export class FormularioLibro implements OnInit {
  private fb = inject(FormBuilder);
  private bibliotecaService = inject(BibliotecaService);

  autores = signal<Autor[]>([]);
  mensaje = signal<string>('');

  // Requisito obligatorio: Formulario Reactivo
  libroForm = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(3)]],
    genero: ['', Validators.required],
    autorId: ['', Validators.required]
  });

  ngOnInit(): void {
    // Cargamos los autores para el select del formulario
    this.bibliotecaService.getAutores().subscribe((data: Autor[]) => this.autores.set(data));
  }

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
