/**
 * Clase de configuración para inicializar datos en la base de datos.
 * Esta clase asegura que la base de datos tenga datos iniciales para propósitos de prueba y demostración.
 */
package com.ntt.libreria.demo.config;

import com.ntt.libreria.demo.model.Autor;
import com.ntt.libreria.demo.model.Libro;
import com.ntt.libreria.demo.repository.AutorRepository;
import com.ntt.libreria.demo.repository.LibroRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * DataInitializer proporciona un bean {@link CommandLineRunner} que puebla la base de datos
 * con autores y libros iniciales si la base de datos está actualmente vacía.
 */
@Configuration
public class DataInitializer {

    /**
     * Inicializa la base de datos con autores y libros predeterminados.
     * Este método se ejecuta al iniciar la aplicación.
     *
     * @param autorRepository El repositorio para gestionar entidades {@link Autor}.
     * @param libroRepository El repositorio para gestionar entidades {@link Libro}.
     * @return Un {@link CommandLineRunner} que realiza la inicialización de datos.
     */
    @Bean
    public CommandLineRunner initData(AutorRepository autorRepository, LibroRepository libroRepository) {
        return args -> {
            // Solo inicializar si la base de datos está vacía
            if (autorRepository.count() == 0) {
                // Autores
                Autor gabo = new Autor("Gabriel García Márquez", "Colombiana");
                Autor eco = new Autor("Umberto Eco", "Italiana");
                Autor orwell = new Autor("George Orwell", "Británica");

                autorRepository.save(gabo);
                autorRepository.save(eco);
                autorRepository.save(orwell);

                // Libros
                libroRepository.save(new Libro("Cien años de soledad", "Realismo Mágico", gabo));
                libroRepository.save(new Libro("El amor en los tiempos del cólera", "Romance", gabo));
                libroRepository.save(new Libro("El nombre de la rosa", "Misterio", eco));
                libroRepository.save(new Libro("1984", "Distopía", orwell));
                libroRepository.save(new Libro("Rebelión en la granja", "Fábula", orwell));

                System.out.println(">> Base de datos inicializada con éxito.");
            }
        };
    }
}
