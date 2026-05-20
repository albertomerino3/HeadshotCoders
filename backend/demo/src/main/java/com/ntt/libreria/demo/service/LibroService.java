/*
 * File: LibroService.java
 * Project: HeadshotCoders - Library Management System
 * Purpose: Service class for managing Libro-related business logic.
 */

package com.ntt.libreria.demo.service;

import com.ntt.libreria.demo.model.Autor;
import com.ntt.libreria.demo.model.Libro;
import com.ntt.libreria.demo.repository.AutorRepository;
import com.ntt.libreria.demo.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service class for managing books in the library system.
 * This class provides methods to perform operations on Libro entities, including retrieval and creation with author association.
 */
@Service
public class LibroService {

    /**
     * Repository interface for Libro data access operations.
     */
    private final LibroRepository libroRepository;

    /**
     * Repository interface for Autor data access operations.
     */
    private final AutorRepository autorRepository;

    /**
     * Constructs a LibroService with the required LibroRepository and AutorRepository dependencies.
     *
     * @param libroRepository The repository used to interact with the books database.
     * @param autorRepository The repository used to interact with the authors database.
     */
    @Autowired
    public LibroService(LibroRepository libroRepository, AutorRepository autorRepository) {
        this.libroRepository = libroRepository;
        this.autorRepository = autorRepository;
    }

    /**
     * Retrieves a list of all books available in the system.
     *
     * @return A list containing all Libro entities.
     */
    public List<Libro> listarTodos() {
        return libroRepository.findAll();
    }

    /**
     * Persists a new book in the system and associates it with an existing author.
     *
     * @param libro   The Libro entity to be saved.
     * @param autorId The unique identifier of the author to be associated with the book.
     * @return The saved Libro entity.
     * @throws RuntimeException if no author is found with the provided autorId.
     */
    public Libro guardar(Libro libro, Long autorId) {
        Autor autor = autorRepository.findById(autorId)
                .orElseThrow(() -> new RuntimeException("Autor no encontrado con ID: " + autorId));
        libro.setAutor(autor);
        return libroRepository.save(libro);
    }
}
