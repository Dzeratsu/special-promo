#!/usr/bin/env bash
set -euo pipefail

APP_DIR=/var/www/pirilax-special
BRANCH=production
IMAGE=pirilax-special:latest
NAME=pirilax-special
LOG=/var/log/pirilax-special-deploy.log

exec >>"$LOG" 2>&1
echo "===== $(date -Is) deploy start ====="

cd "$APP_DIR"

if [[ ! -f .env ]]; then
  echo "ERROR: .env missing in $APP_DIR"
  exit 1
fi

git fetch origin "$BRANCH"
git checkout -B "$BRANCH" "origin/$BRANCH"
git reset --hard "origin/$BRANCH"

echo "Building image..."
docker build -f dockerfile -t "$IMAGE" .

echo "Recreating container..."
docker stop "$NAME" || true
docker rm "$NAME" || true
docker run -d \
  --name "$NAME" \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  "$IMAGE"

echo "Health check..."
sleep 3
docker ps --filter "name=$NAME" --format '{{.Names}} {{.Status}}'
curl -fsS -o /dev/null -w 'HTTP %{http_code}\n' http://127.0.0.1:3000/ || true

echo "===== $(date -Is) deploy done ====="
