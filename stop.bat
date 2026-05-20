@echo off

:: ==========================================================================
:: Script de Parada para Windows
:: Propósito: Limpia los puertos 8080 y 4200 de forma forzosa.
:: ==========================================================================

echo 🛑 Deteniendo servicios y liberando puertos...

:: 1. Limpieza del puerto 8080 (Backend)
echo ⚙️ Buscando proceso en puerto 8080...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080') do (
    echo Terminando proceso PID %%a...
    taskkill /F /PID %%a
)

:: 2. Limpieza del puerto 4200 (Frontend)
echo 🎨 Buscando proceso en puerto 4200...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :4200') do (
    echo Terminando proceso PID %%a...
    taskkill /F /PID %%a
)

echo ✅ Servicios detenidos con éxito.
pause
