/**
 * Repository interface for Author entities.
 * Handles database operations for the {@link Autor} model.
 */
package com.ntt.libreria.demo.repository;

import com.ntt.libreria.demo.model.Autor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * AutorRepository provides standard CRUD operations for the Autor entity
 * by extending {@link JpaRepository}.
 */
@Repository
public interface AutorRepository extends JpaRepository<Autor, Long> {
}
