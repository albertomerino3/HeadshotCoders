export interface Autor {
  id?: number;
  nombre: string;
  nacionalidad: string;
  libros?: Libro[];
}

export interface Libro {
  id?: number;
  titulo: string;
  genero: string;
}
