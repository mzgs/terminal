#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Building release artifacts..."
# Build only the unpacked mac app bundle (skip dmg/zip artifacts).
npm run build -- --mac dir

VERSION="${npm_package_version:-$(node -p "require('./package.json').version")}"
RELEASE_DIR="release/${VERSION}"

APP_PATH="$(find "$RELEASE_DIR" -maxdepth 4 -type d -name '*.app' | head -n 1 || true)"
if [[ -z "$APP_PATH" ]]; then
  APP_PATH="$(find release -maxdepth 5 -type d -name '*.app' | sort | tail -n 1 || true)"
fi

if [[ -z "$APP_PATH" ]]; then
  echo "No .app bundle found under release/."
  exit 1
fi

APP_NAME="$(basename "$APP_PATH")"
TARGET_APP="/Applications/${APP_NAME}"

echo "Installing ${APP_NAME} to /Applications..."
if [[ -e "$TARGET_APP" ]]; then
  rm -rf "$TARGET_APP"
fi

# Use ditto to preserve app bundle metadata while copying.
ditto "$APP_PATH" "$TARGET_APP"

echo "Published successfully: $TARGET_APP"
