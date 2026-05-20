#!/bin/bash

# ==========================================================================
# Script de Inicio Universal (Linux / macOS)
# Propósito: Automatiza el arranque completo del sistema (Backend + Frontend)
# ==========================================================================

echo "🚀 Iniciando Sistema de Biblioteca (Headshot Coders)..."

# 1. Gestión de dependencias del Frontend
# Si la carpeta node_modules no existe, se ejecuta la instalación automática
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 No se encontró node_modules. Instalando dependencias (esto puede tardar)..."
    cd frontend && npm install && cd ..
fi

# 2. Arranque del Backend (Spring Boot)
# Se ejecuta en segundo plano (&) para permitir el arranque del frontend en la misma terminal
echo "☕ Levantando el servidor Backend (Spring Boot)..."
cd backend/demo
chmod +x mvnw
./mvnw spring-boot:run &
BACKEND_PID=$! # Capturamos el ID del proceso para gestionarlo al cerrar
cd ../..

# 3. Arranque del Frontend (Angular)
# Se lanza en primer plano para mostrar los logs de compilación y la URL de acceso
echo "🅰️  Levantando el servidor Frontend (Angular)..."
echo "💡 El link de acceso (http://localhost:4200) aparecerá en los logs de abajo."
cd frontend
npm start

# Nota: Al cerrar esta terminal con Ctrl+C, se recomienda usar ./stop.sh
# para asegurar que los puertos queden libres.
