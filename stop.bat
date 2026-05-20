@echo off

:: --- Script para detener el Sistema de Biblioteca en Windows ---

echo 🛑 Deteniendo servicios...

:: 1. Detener el Backend (Puerto 8080)
echo Buscando proceso en puerto 8080...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :8080') do (
    taskkill /F /PID %%a
)

:: 2. Detener el Frontend (Puerto 4200)
echo Buscando proceso en puerto 4200...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :4200') do (
    taskkill /F /PID %%a
)

echo ✅ Servicios detenidos.
pause
