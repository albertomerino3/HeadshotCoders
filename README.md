
# 📚 HeadshotCoders - Sistema de Gestión de Librería

Este proyecto, realizado por Alberto Campoy Merino, Alba Montoro Ruiz, Andrés Gorea Olari y Álvaro José Mata Báez, para finalizar las prácticas de NTT DATA, consta de un **Backend** (Java con Spring Boot) y un **Frontend** (Angular 21).

---

## 🛠️ Prerrequisitos
* **Java JDK 17** (Obligatorio para el Backend, si usas Java 8 dará error).
* **Node.js** (v18 o superior) para el Frontend.

---

## 🖥️ 1. Cómo arrancar el Backend (Java)

1. Abre una terminal en tu proyecto.
2. Entra en la carpeta del backend:
   ```bash
   cd backend/demo

3. (Solo para Mac) Si tienes problemas de versión con Java, activa la versión 17 con:
Bash        export JAVA_HOME=`/usr/libexec/java_home -v 17`

4 Arranca el servidor: 
Bash        ./mvnw spring-boot:run

## 🖥️ 2. Cómo arrancar el Frontend (Angular)

1. Abre una segunda terminal diferente (no cierres la del Backend).

2. Entra en la carpeta del frontend:
Bash        cd frontend

3. Instala los paquetes del proyecto
Bash        npm install

3. Enciende la web:
Bash        ng serve

## COMANDOS GIT PARA EL EQUIPO
Cada vez que vayas a subir cambios a tu rama, pon estos 3 comandos en orden:
Bash        git add .
            git commit -m "mensaje"
            git push origin frontend/backend