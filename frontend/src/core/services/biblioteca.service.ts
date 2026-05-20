import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor, Libro } from '../shared/models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api';

  // Métodos para Autores
  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.baseUrl}/autores`);
  }

  getAutorById(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.baseUrl}/autores/${id}`);
  }

  // Métodos para Libros
  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.baseUrl}/libros`);
  }

  createLibro(libro: Libro, autorId: number): Observable<Libro> {
    return this.http.post<Libro>(`${this.baseUrl}/libros/autor/${autorId}`, libro);
  }
}
