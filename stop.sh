#!/bin/bash

# --- Script para detener el Sistema de Biblioteca ---

echo "🛑 Deteniendo servicios..."

# 1. Detener el Backend (Puerto 8080)
BE_PID=$(lsof -t -i:8080)
if [ ! -z "$BE_PID" ]; then
    echo "Terminando Backend (PID: $BE_PID)..."
    kill -9 $BE_PID
fi

# 2. Detener el Frontend (Puerto 4200)
FE_PID=$(lsof -t -i:4200)
if [ ! -z "$FE_PID" ]; then
    echo "Terminando Frontend (PID: $FE_PID)..."
    kill -9 $FE_PID
fi

echo "✅ Servicios detenidos."
