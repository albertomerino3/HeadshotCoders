package com.ntt.libreria.demo.controller;

import com.ntt.libreria.demo.model.Libro;
import com.ntt.libreria.demo.service.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "*") // Permite que el frontend se conecte
public class LibroController {

    private final LibroService libroService;

    @Autowired
    public LibroController(LibroService libroService) {
        this.libroService = libroService;
    }

    @GetMapping
    public List<Libro> listarLibros() {
        return libroService.listarTodos();
    }

    @PostMapping("/autor/{autorId}")
    public ResponseEntity<Libro> crearLibro(@RequestBody Libro nuevoLibro, @PathVariable Long autorId) {
        Libro libroGuardado = libroService.guardar(nuevoLibro, autorId);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(libroGuardado);
    }
}
