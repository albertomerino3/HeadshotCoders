/**
 * @file libro.service.ts
 * @description Service for managing book-related data operations.
 * Provides methods to interact with the backend API for CRUD operations on books.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../../app/shared/models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private readonly http = inject(HttpClient);
  // URL typical for Spring Boot backend
  private readonly apiUrl = 'http://localhost:8080/api/v1/libros';

  /**
   * Fetches the list of all books from the API.
   * @returns {Observable<Libro[]>} An observable of the array of books.
   */
  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }

  /**
   * Fetches a single book by its ID.
   * @param {number} id - The ID of the book to retrieve.
   * @returns {Observable<Libro>} An observable of the retrieved book.
   */
  getLibroById(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/${id}`);
  }

  /**
   * Creates a new book in the backend.
   * @param {Libro} libro - The book data to create.
   * @returns {Observable<Libro>} An observable of the created book.
   */
  createLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(this.apiUrl, libro);
  }

  /**
   * Deletes a book from the backend by its ID.
   * @param {number} id - The ID of the book to delete.
   * @returns {Observable<void>} An observable that completes when the deletion is finished.
   */
  deleteLibro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
