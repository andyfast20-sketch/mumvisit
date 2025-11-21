#!/bin/sh
# Startup script prints env for debugging then execs gunicorn with a safe PORT fallback
echo "[start.sh] Starting application"
echo "[start.sh] PORT="$PORT
PORT_TO_USE=${PORT:-8080}
echo "[start.sh] Using port: $PORT_TO_USE"
exec gunicorn app:app --bind 0.0.0.0:${PORT_TO_USE} --workers 2
