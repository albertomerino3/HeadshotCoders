/*
 * File: LibroRepository.java
 * Project: HeadshotCoders - Library Management System
 * Purpose: Repository interface for performing CRUD operations on Libro entities.
 */

package com.ntt.libreria.demo.repository;

import com.ntt.libreria.demo.model.Libro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for Libro entities.
 * Provides the mechanism for storage, retrieval, search, update and delete operations on Libro objects.
 * It extends JpaRepository to leverage Spring Data JPA's built-in functionality.
 */
@Repository
public interface LibroRepository extends JpaRepository<Libro, Long> {
}
