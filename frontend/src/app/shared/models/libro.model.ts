/**
 * @file libro.model.ts
 * @description Defines the data structure for a Book entity.
 */

/**
 * Interface representing a Book within the application.
 */
export interface Libro {
  /** Unique identifier for the book (optional for new entries) */
  id?: string;
  /** Title of the book */
  titulo: string;
  /** Genre or category of the book */
  genero: string;
  /** Reference identifier to the author of the book */
  autorId: string;
}
