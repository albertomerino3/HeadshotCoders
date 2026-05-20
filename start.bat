@echo off
TITLE Sistema de Biblioteca - Headshot Coders

echo 🚀 Iniciando Sistema de Biblioteca...

:: 1. Instalar dependencias del frontend si no existen
if not exist "frontend\node_modules" (
    echo 📦 Instalando dependencias del frontend...
    cd frontend
    call npm install
    cd ..
)

:: 2. Iniciar el Backend en una nueva ventana
echo ☕ Iniciando Backend en ventana separada...
start "Backend - Spring Boot" cmd /c "cd backend\demo && mvnw.cmd spring-boot:run"

:: 3. Iniciar el Frontend en la ventana actual
echo 🅰️  Iniciando Frontend...
echo 💡 Busca la direccion http://localhost:4200 en los logs de abajo
cd frontend
npm start
