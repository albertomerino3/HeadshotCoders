/**
 * @file biblioteca.model.ts
 * @description Shared domain models for the library management system.
 * Contains definitions for Authors and Books used across the application.
 */

/**
 * Interface representing an Author.
 */
export interface Autor {
  /** Unique identifier for the author */
  id?: number;
  /** Full name of the author */
  nombre: string;
  /** Country of origin */
  nacionalidad: string;
  /** Collection of books associated with this author */
  libros?: Libro[];
}

/**
 * Simplified Interface representing a Book (used in context of an Author).
 */
export interface Libro {
  /** Unique identifier for the book */
  id?: number;
  /** Title of the book */
  titulo: string;
  /** Genre of the book */
  genero: string;
}
