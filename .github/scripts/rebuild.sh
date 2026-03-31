#!/usr/bin/env bash
set -euo pipefail

# rebuild.sh for typescript-eslint/typescript-eslint
# Runs on existing source tree (no clone).
# Current directory should be the docusaurus root (packages/website/).
# Monorepo: workspace package sources may exist but dist/ artifacts are gitignored.
# Strategy: clone source into temp dir, build packages there, copy artifacts back, then build.

REPO_URL="https://github.com/typescript-eslint/typescript-eslint"
BRANCH="main"

echo "=== rebuild.sh: typescript-eslint/typescript-eslint ==="

# Capture the current (docusaurus root) directory
DOCUSAURUS_ROOT="$(pwd)"

# --- Node.js setup via nvm ---
export NVM_DIR="${HOME}/.nvm"
if [ ! -f "${NVM_DIR}/nvm.sh" ]; then
    echo "Installing nvm..."
    curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
fi
# shellcheck source=/dev/null
source "${NVM_DIR}/nvm.sh"

nvm install 20
nvm use 20
echo "Node version: $(node --version)"
echo "npm version: $(npm --version)"

# --- pnpm setup via corepack ---
corepack enable
corepack prepare pnpm@10.32.0 --activate
echo "pnpm version: $(pnpm --version)"

# --- Clone source repo into temp dir for workspace builds ---
# The staging repo has the Docusaurus source but workspace packages lack dist/ artifacts.
# We clone the source, build all required packages there, then copy artifacts back.
TEMP_SOURCE="/tmp/ts-eslint-source-deps-$$"
echo "Cloning source for workspace builds to $TEMP_SOURCE..."
git clone --depth=1 --branch "$BRANCH" "$REPO_URL" "$TEMP_SOURCE"

cd "$TEMP_SOURCE"

echo "Installing workspace dependencies..."
pnpm install --frozen-lockfile

echo "Building workspace packages via NX..."
pnpm exec nx run-many \
  --target=build \
  --projects=@typescript-eslint/types,@typescript-eslint/visitor-keys,@typescript-eslint/scope-manager,@typescript-eslint/typescript-estree,@typescript-eslint/utils,@typescript-eslint/parser,@typescript-eslint/eslint-plugin,@typescript-eslint/rule-schema-to-typescript-types,@typescript-eslint/type-utils \
  --parallel=5 \
  --skip-nx-cache

echo "Building website-eslint..."
pnpm exec nx run website-eslint:build --skip-nx-cache

# --- Copy built artifacts to the staging repo's node_modules ---
# The staging repo's packages/website/node_modules has symlinks to workspace packages.
# We copy the dist/ folders from the temp build into the staging repo's node_modules.
echo "Copying workspace artifacts to staging repo..."

STAGING_NM="$DOCUSAURUS_ROOT/node_modules/@typescript-eslint"
TEMP_NM="$TEMP_SOURCE/node_modules/@typescript-eslint"

for pkg in types visitor-keys scope-manager typescript-estree utils parser eslint-plugin rule-schema-to-typescript-types type-utils; do
    SRC_DIST="$TEMP_SOURCE/packages/$pkg/dist"
    if [ -d "$SRC_DIST" ]; then
        # Copy into staging website node_modules if symlinked package exists
        if [ -d "$STAGING_NM/$pkg" ]; then
            cp -r "$SRC_DIST" "$STAGING_NM/$pkg/"
            echo "  copied dist/ for @typescript-eslint/$pkg"
        fi
    fi
done

# Copy website-eslint build artifact
WEBSITE_ESLINT_SRC="$TEMP_SOURCE/packages/website-eslint/dist"
WEBSITE_ESLINT_DST="$DOCUSAURUS_ROOT/node_modules/@typescript-eslint/website-eslint"
if [ -d "$WEBSITE_ESLINT_SRC" ] && [ -d "$WEBSITE_ESLINT_DST" ]; then
    cp -r "$WEBSITE_ESLINT_SRC" "$WEBSITE_ESLINT_DST/"
    echo "  copied dist/ for @typescript-eslint/website-eslint"
fi

# Cleanup temp
rm -rf "$TEMP_SOURCE"

# --- Build Docusaurus site ---
cd "$DOCUSAURUS_ROOT"
echo "Building Docusaurus site..."
export NODE_OPTIONS="--max-old-space-size=8192"
pnpm exec docusaurus build

echo "[DONE] Build complete."
