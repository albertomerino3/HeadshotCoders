#!/bin/bash

# ==========================================================================
# Script de Parada Universal (Linux / macOS)
# Propósito: Libera los puertos utilizados por el sistema para evitar conflictos.
# ==========================================================================

echo "🛑 Deteniendo servicios del sistema..."

# 1. Localización y detención del Backend (Puerto por defecto 8080)
BE_PID=$(lsof -t -i:8080)
if [ ! -z "$BE_PID" ]; then
    echo "⚙️  Terminando proceso Backend (PID: $BE_PID)..."
    kill -9 $BE_PID
fi

# 2. Localización y detención del Frontend (Puerto por defecto 4200)
FE_PID=$(lsof -t -i:4200)
if [ ! -z "$FE_PID" ]; then
    echo "🎨 Terminando proceso Frontend (PID: $FE_PID)..."
    kill -9 $FE_PID
fi

echo "✅ Todos los puertos han sido liberados. El sistema se ha detenido correctamente."
