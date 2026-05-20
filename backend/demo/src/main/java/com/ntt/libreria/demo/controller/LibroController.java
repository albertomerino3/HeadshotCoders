/**
 * Controlador REST para la gestión de libros.
 * Proporciona puntos de conexión para listar y crear libros asociados con autores.
 */
package com.ntt.libreria.demo.controller;

import com.ntt.libreria.demo.model.Libro;
import com.ntt.libreria.demo.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * LibroController maneja las solicitudes HTTP entrantes relacionadas con las entidades {@link Libro}.
 * Utiliza {@link LibroService} para gestionar las operaciones de libros.
 */
@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "*") // Permite que el frontend se conecte
public class LibroController {

    /**
     * Capa de servicio para manejar operaciones relacionadas con libros.
     */
    private final LibroService libroService;

    /**
     * Constructor para la inyección de dependencias de LibroService.
     * 
     * @param libroService El servicio utilizado para gestionar libros.
     */
    @Autowired
    public LibroController(LibroService libroService) {
        this.libroService = libroService;
    }

    /**
     * Recupera una lista de todos los libros de la biblioteca.
     * 
     * @return Una lista de todos los objetos {@link Libro} disponibles.
     */
    @GetMapping
    public List<Libro> listarLibros() {
        return libroService.listarTodos();
    }

    /**
     * Crea un nuevo libro y lo asocia con un autor específico.
     * 
     * @param nuevoLibro El objeto {@link Libro} a crear.
     * @param autorId El identificador único del autor para asociar con el libro.
     * @return Un {@link ResponseEntity} que contiene el libro guardado y un estado CREATED.
     */
    @PostMapping("/autor/{autorId}")
    public ResponseEntity<Libro> crearLibro(@RequestBody Libro nuevoLibro, @PathVariable Long autorId) {
        Libro libroGuardado = libroService.guardar(nuevoLibro, autorId);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(libroGuardado);
    }
}
