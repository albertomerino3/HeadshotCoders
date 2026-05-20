/*
 * File: AutorService.java
 * Project: HeadshotCoders - Library Management System
 * Purpose: Service class for managing Autor-related business logic.
 */

package com.ntt.libreria.demo.service;

import com.ntt.libreria.demo.model.Autor;
import com.ntt.libreria.demo.repository.AutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service class for managing authors in the library system.
 * This class provides methods to perform operations on Autor entities by interacting with the AutorRepository.
 */
@Service
public class AutorService {

    /**
     * Repository interface for Autor data access operations.
     */
    private final AutorRepository autorRepository;

    /**
     * Constructs an AutorService with the required AutorRepository dependency.
     *
     * @param autorRepository The repository used to interact with the database.
     */
    @Autowired
    public AutorService(AutorRepository autorRepository) {
        this.autorRepository = autorRepository;
    }

    /**
     * Retrieves a list of all authors available in the system.
     *
     * @return A list containing all Autor entities.
     */
    public List<Autor> listarTodos() {
        return autorRepository.findAll();
    }

    /**
     * Searches for an author by their unique identifier.
     *
     * @param id The unique identifier of the author to find.
     * @return An Optional containing the found author, or empty if no author exists with the given ID.
     */
    public Optional<Autor> buscarPorId(Long id) {
        return autorRepository.findById(id);
    }

    /**
     * Persists a new author or updates an existing one in the system.
     *
     * @param autor The Autor entity to be saved.
     * @return The saved Autor entity.
     */
    public Autor guardar(Autor autor) {
        return autorRepository.save(autor);
    }
}
