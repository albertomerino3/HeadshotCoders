/**
 * Controlador REST para la gestión de autores.
 * Proporciona puntos de conexión para listar, recuperar y crear autores.
 */
package com.ntt.libreria.demo.controller;

import com.ntt.libreria.demo.model.Autor;
import com.ntt.libreria.demo.service.AutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * AutorController maneja las solicitudes HTTP entrantes relacionadas con las entidades {@link Autor}.
 * Utiliza {@link AutorService} para realizar la lógica de negocio y el acceso a datos.
 */
@RestController
@RequestMapping("/api/autores")
@CrossOrigin(origins = "*") // Permite que el frontend se conecte
public class AutorController {

    /**
     * Capa de servicio para manejar operaciones relacionadas con autores.
     */
    private final AutorService autorService;

    /**
     * Constructor para la inyección de dependencias de AutorService.
     * 
     * @param autorService El servicio utilizado para gestionar autores.
     */
    @Autowired
    public AutorController(AutorService autorService) {
        this.autorService = autorService;
    }

    /**
     * Recupera una lista de todos los autores.
     * 
     * @return Una lista de todos los objetos {@link Autor} disponibles.
     */
    @GetMapping
    public List<Autor> listarAutores() {
        return autorService.listarTodos();
    }

    /**
     * Recupera los detalles de un autor específico por su ID.
     * 
     * @param id El identificador único del autor.
     * @return Un {@link ResponseEntity} que contiene el autor si se encuentra, o un estado NOT FOUND si no.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Autor> obtenerDetalle(@PathVariable Long id) {
        return autorService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Crea un nuevo autor.
     * 
     * @param autor El objeto {@link Autor} a crear.
     * @return El objeto {@link Autor} guardado.
     */
    @PostMapping
    public Autor crearAutor(@RequestBody Autor autor) {
        return autorService.guardar(autor);
    }
}
