#!/bin/bash

# --- Script de inicio para Linux y macOS ---

echo "🚀 Iniciando Sistema de Biblioteca..."

# 1. Instalar dependencias del frontend si no existen
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Instalando dependencias del frontend..."
    cd frontend && npm install && cd ..
fi

# 2. Iniciar el Backend (Spring Boot) en segundo plano
echo "☕ Iniciando Backend..."
cd backend/demo
chmod +x mvnw
./mvnw spring-boot:run &
BACKEND_PID=$!
cd ../..

# 3. Iniciar el Frontend (Angular)
echo "🅰️  Iniciando Frontend... (El link aparecerá abajo)"
cd frontend
# Ejecutamos el frontend en primer plano para ver su salida directamente
npm start
