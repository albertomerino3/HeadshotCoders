/**
 * @file biblioteca.service.ts
 * @description Comprehensive service for library management.
 * Handles API calls for both authors and books, facilitating data retrieval and creation.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Autor, Libro } from '../../app/shared/models/biblioteca.model';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:8080/api';

  // --- Author Methods ---

  /**
   * Retrieves all authors from the library.
   * @returns {Observable<Autor[]>} Observable list of authors.
   */
  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.baseUrl}/autores`);
  }

  /**
   * Retrieves a specific author by their unique identifier.
   * @param {number} id - The ID of the author.
   * @returns {Observable<Autor>} Observable of the requested author.
   */
  getAutorById(id: number): Observable<Autor> {
    return this.http.get<Autor>(`${this.baseUrl}/autores/${id}`);
  }

  /**
   * Registers a new author in the library system.
   * @param {Autor} autor - The author details to be registered.
   * @returns {Observable<Autor>} Observable of the newly created author.
   */
  createAutor(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(`${this.baseUrl}/autores`, autor);
  }

  // --- Book Methods ---

  /**
   * Retrieves the full collection of books.
   * @returns {Observable<Libro[]>} Observable list of books.
   */
  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.baseUrl}/libros`);
  }

  /**
   * Adds a new book to the collection, associated with a specific author.
   * @param {Libro} libro - The book data.
   * @param {number} autorId - The ID of the author who wrote the book.
   * @returns {Observable<Libro>} Observable of the newly created book.
   */
  createLibro(libro: Libro, autorId: number): Observable<Libro> {
    return this.http.post<Libro>(`${this.baseUrl}/libros/autor/${autorId}`, libro);
  }
}
