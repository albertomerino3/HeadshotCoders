@echo off
TITLE Sistema de Biblioteca - Headshot Coders

:: ==========================================================================
:: Script de Inicio para Windows
:: Propósito: Automatiza el arranque del Backend y Frontend de forma nativa.
:: ==========================================================================

echo 🚀 Iniciando Sistema de Biblioteca Premium...

:: 1. Gestión de dependencias del Frontend
:: Si falta la carpeta de módulos de Node, se ejecuta la instalación automática.
if not exist "frontend\node_modules" (
    echo 📦 No se detectó node_modules. Instalando dependencias necesarias...
    cd frontend
    call npm install
    cd ..
)

:: 2. Lanzamiento del Backend (Spring Boot)
:: Se abre en una ventana independiente para facilitar la lectura de logs paralelos.
echo ☕ Iniciando el servidor Backend en una nueva ventana...
start "Backend - Spring Boot" cmd /c "cd backend\demo && mvnw.cmd spring-boot:run"

:: 3. Lanzamiento del Frontend (Angular)
:: Se ejecuta en la ventana actual para ver la URL local (http://localhost:4200).
echo 🅰️  Iniciando el servidor Frontend...
echo 💡 Busca la direccion http://localhost:4200 en los logs de abajo para acceder.
cd frontend
npm start
