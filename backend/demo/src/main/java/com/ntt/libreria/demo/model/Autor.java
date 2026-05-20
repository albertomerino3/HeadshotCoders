/**
 * Modelo de datos para un Autor.
 * Representa una entidad en la base de datos para almacenar información de autores.
 */
package com.ntt.libreria.demo.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * La entidad Autor representa a una persona que escribe libros.
 * Está mapeada a la tabla "autor" en la base de datos.
 */
@Entity
public class Autor {
    
    /**
     * Identificador único para el autor.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    /**
     * Nombre completo del autor.
     */
    private String nombre;

    /**
     * Nacionalidad del autor.
     */
    private String nacionalidad;

    /**
     * Lista de libros escritos por este autor.
     * Gestionado por el campo 'autor' en la entidad Libro.
     */
    @OneToMany(mappedBy = "autor", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Libro> libros = new ArrayList<>();

    /**
     * Constructor por defecto para JPA.
     */
    public Autor() {}

    /**
     * Constructor completo para crear un autor con todos los campos.
     * 
     * @param id El identificador único.
     * @param nombre El nombre del autor.
     * @param nacionalidad La nacionalidad del autor.
     * @param libros La lista de libros.
     */
    public Autor(Long id, String nombre, String nacionalidad, List<Libro> libros) {
        this.id = id;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.libros = libros;
    }

    /**
     * Constructor de conveniencia para crear un autor con nombre y nacionalidad.
     * 
     * @param nombre El nombre del autor.
     * @param nacionalidad La nacionalidad del autor.
     */
    public Autor(String nombre, String nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    // Getters y Setters
    /**
     * @return El identificador único del autor.
     */
    public Long getId() { return id; }
    /**
     * @param id El identificador único a establecer.
     */
    public void setId(Long id) { this.id = id; }

    /**
     * @return El nombre del autor.
     */
    public String getNombre() { return nombre; }
    /**
     * @param nombre El nombre del autor a establecer.
     */
    public void setNombre(String nombre) { this.nombre = nombre; }

    /**
     * @return La nacionalidad del autor.
     */
    public String getNacionalidad() { return nacionalidad; }
    /**
     * @param nacionalidad La nacionalidad del autor a establecer.
     */
    public void setNacionalidad(String nacionalidad) { this.nacionalidad = nacionalidad; }

    /**
     * @return La lista de libros escritos por el autor.
     */
    public List<Libro> getLibros() { return libros; }
    /**
     * @param libros La lista de libros a establecer.
     */
    public void setLibros(List<Libro> libros) { this.libros = libros; }
}
