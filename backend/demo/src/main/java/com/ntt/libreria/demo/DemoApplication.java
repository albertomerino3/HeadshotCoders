/**
 * Clase principal de la aplicación para el sistema de gestión de la biblioteca.
 * Esta clase sirve como punto de entrada para la aplicación Spring Boot.
 */
package com.ntt.libreria.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * DemoApplication es la clase principal que arranca la aplicación Spring Boot.
 * Utiliza {@link SpringBootApplication} para habilitar la autoconfiguración, el escaneo de componentes
 * y la configuración adicional en su clase de aplicación.
 */
@SpringBootApplication
public class DemoApplication {

    /**
     * Método principal que sirve como punto de entrada para la JVM.
     * 
     * @param args Argumentos de línea de comandos pasados a la aplicación.
     */
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

}
