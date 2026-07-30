#!/usr/bin/env bash
set -euo pipefail

APP_DIR=/var/www/pirilax-special
BRANCH=production
IMAGE=pirilax-special:latest
NAME=pirilax-special
LOG=/var/log/pirilax-special-deploy.log

mkdir -p "$(dirname "$LOG")"
exec >>"$LOG" 2>&1
echo "===== $(date -Is) deploy start ====="

cd "$APP_DIR"

if [[ ! -f .env ]]; then
  echo "ERROR: .env missing in $APP_DIR"
  exit 1
fi

# Preserve env across hard reset (untracked, but keep a backup anyway)
cp -a .env /tmp/pirilax-special.env.deploy

git fetch origin "$BRANCH"
# Already on production after first setup; force sync without checkout conflicts
git checkout -f -B "$BRANCH" "origin/$BRANCH"
git reset --hard "origin/$BRANCH"
git clean -fd -e .env -e .env.example

# Restore env if somehow removed
if [[ ! -f .env ]]; then
  cp -a /tmp/pirilax-special.env.deploy .env
  chmod 600 .env
fi

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
sleep 5
docker ps --filter "name=$NAME" --format '{{.Names}} {{.Status}}'
curl -fsS -o /dev/null -w 'HTTP %{http_code}\n' http://127.0.0.1:3000/ || true

echo "===== $(date -Is) deploy done ====="
