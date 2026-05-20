/**
 * Modelo de datos para un Libro.
 * Representa una entidad en la base de datos para almacenar información de libros.
 */
package com.ntt.libreria.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

/**
 * La entidad Libro representa un libro en la biblioteca.
 * Está mapeada a la tabla "libro" en la base de datos y está asociada con un {@link Autor}.
 */
@Entity
public class Libro {

    /**
     * Identificador único para el libro.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Título del libro.
     */
    private String titulo;

    /**
     * Género o categoría del libro.
     */
    private String genero;

    /**
     * El autor que escribió este libro.
     * Mapeado mediante una relación muchos-a-uno con la entidad Autor.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "autor_id")
    @JsonBackReference
    private Autor autor;

    /**
     * Constructor por defecto para JPA.
     */
    public Libro() {}

    /**
     * Constructor completo para crear un libro con todos los campos.
     * 
     * @param id El identificador único.
     * @param titulo El título del libro.
     * @param genero El género del libro.
     * @param autor El autor del libro.
     */
    public Libro(Long id, String titulo, String genero, Autor autor) {
        this.id = id;
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
    }

    /**
     * Constructor de conveniencia para crear un libro con título, género y autor.
     * 
     * @param titulo El título del libro.
     * @param genero El género del libro.
     * @param autor El autor del libro.
     */
    public Libro(String titulo, String genero, Autor autor) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
    }

    // Getters y Setters
    /**
     * @return El identificador único del libro.
     */
    public Long getId() { return id; }
    /**
     * @param id El identificador único a establecer.
     */
    public void setId(Long id) { this.id = id; }

    /**
     * @return El título del libro.
     */
    public String getTitulo() { return titulo; }
    /**
     * @param titulo El título a establecer.
     */
    public void setTitulo(String titulo) { this.titulo = titulo; }

    /**
     * @return El género del libro.
     */
    public String getGenero() { return genero; }
    /**
     * @param genero El género a establecer.
     */
    public void setGenero(String genero) { this.genero = genero; }

    /**
     * @return El {@link Autor} del libro.
     */
    public Autor getAutor() { return autor; }
    /**
     * @param autor El autor a establecer.
     */
    public void setAutor(Autor autor) { this.autor = autor; }
}
