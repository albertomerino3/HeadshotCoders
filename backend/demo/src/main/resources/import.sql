-- ═══════════════════════════════════════════════════════════════════
--  import.sql
--  Spring Boot ejecuta este archivo automáticamente al arrancar.
-- ═══════════════════════════════════════════════════════════════════


-- ── 3 Autores ────────────────────────────────────────────────────────────────
INSERT INTO autor (id, nombre, nacionalidad) VALUES (1, 'Gabriel García Márquez', 'Colombiana');
INSERT INTO autor (id, nombre, nacionalidad) VALUES (2, 'Umberto Eco',            'Italiana');
INSERT INTO autor (id, nombre, nacionalidad) VALUES (3, 'George Orwell',          'Británica');


-- ── 5 Libros ─────────────────────────────────────────────────────────────────
INSERT INTO libro (id, titulo, genero, autor_id) VALUES (1, 'Cien años de soledad',              'Realismo Mágico', 1);
INSERT INTO libro (id, titulo, genero, autor_id) VALUES (2, 'El amor en los tiempos del cólera', 'Romance',         1);
INSERT INTO libro (id, titulo, genero, autor_id) VALUES (3, 'El nombre de la rosa',              'Misterio',        2);
INSERT INTO libro (id, titulo, genero, autor_id) VALUES (4, '1984',                              'Distopía',        3);
INSERT INTO libro (id, titulo, genero, autor_id) VALUES (5, 'Rebelión en la granja',             'Fábula',          3);
