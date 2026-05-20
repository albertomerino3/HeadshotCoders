package com.ntt.libreria.demo.service;

import com.ntt.libreria.demo.model.Autor;
import com.ntt.libreria.demo.model.Libro;
import com.ntt.libreria.demo.repository.AutorRepository;
import com.ntt.libreria.demo.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroService {

    private final LibroRepository libroRepository;
    private final AutorRepository autorRepository;

    @Autowired
    public LibroService(LibroRepository libroRepository, AutorRepository autorRepository) {
        this.libroRepository = libroRepository;
        this.autorRepository = autorRepository;
    }

    public List<Libro> listarTodos() {
        return libroRepository.findAll();
    }

    public Libro guardar(Libro libro, Long autorId) {
        Autor autor = autorRepository.findById(autorId)
                .orElseThrow(() -> new RuntimeException("Autor no encontrado con ID: " + autorId));
        libro.setAutor(autor);
        return libroRepository.save(libro);
    }
}
