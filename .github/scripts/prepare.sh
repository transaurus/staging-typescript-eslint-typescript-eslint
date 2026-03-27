#!/usr/bin/env bash
set -euo pipefail

# prepare.sh for typescript-eslint/typescript-eslint
# Docusaurus ~3.7.0, Node 20, pnpm 10.32.0 (corepack)
# Docusaurus path: packages/website/
# Clones repo, installs deps, builds workspace packages via NX.
# Does NOT run write-translations or build.

REPO_URL="https://github.com/typescript-eslint/typescript-eslint"
BRANCH="main"
REPO_DIR="source-repo"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "=== prepare.sh: typescript-eslint/typescript-eslint ==="

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

# --- Clone (skip if already exists) ---
if [ ! -d "$REPO_DIR" ]; then
    echo "Cloning $REPO_URL (depth 1, branch $BRANCH)..."
    git clone --depth=1 --branch "$BRANCH" "$REPO_URL" "$REPO_DIR"
    echo "Clone complete."
else
    echo "source-repo/ already exists, skipping clone."
fi

cd "$REPO_DIR"

# --- Apply fixes.json if present ---
FIXES_JSON="$SCRIPT_DIR/fixes.json"
if [ -f "$FIXES_JSON" ]; then
    echo "[INFO] Applying content fixes from fixes.json..."
    node -e "
    const fs = require('fs');
    const path = require('path');
    const fixes = JSON.parse(fs.readFileSync('$FIXES_JSON', 'utf8'));
    for (const [file, ops] of Object.entries(fixes.fixes || {})) {
        if (!fs.existsSync(file)) { console.log('  skip (not found):', file); continue; }
        let content = fs.readFileSync(file, 'utf8');
        for (const op of ops) {
            if (op.type === 'replace' && content.includes(op.find)) {
                content = content.split(op.find).join(op.replace || '');
                console.log('  fixed:', file, '-', op.comment || '');
            } else if (op.type === 'replace') {
                console.log('  skip (find not found):', file, '-', op.comment || '');
            }
        }
        fs.writeFileSync(file, content);
    }
    for (const [file, cfg] of Object.entries(fixes.newFiles || {})) {
        const c = typeof cfg === 'string' ? cfg : cfg.content;
        fs.mkdirSync(path.dirname(file), {recursive: true});
        fs.writeFileSync(file, c);
        console.log('  created:', file);
    }
    "
fi

# --- Install all workspace dependencies ---
echo "Installing workspace dependencies..."
pnpm install --frozen-lockfile

# --- Build workspace packages that website depends on ---
# website imports @typescript-eslint/* packages at runtime via workspace:*
# We need their build artifacts (dist/) before docusaurus can load its config
echo "Building workspace packages via NX..."
pnpm exec nx run-many \
  --target=build \
  --projects=@typescript-eslint/types,@typescript-eslint/visitor-keys,@typescript-eslint/scope-manager,@typescript-eslint/typescript-estree,@typescript-eslint/utils,@typescript-eslint/parser,@typescript-eslint/eslint-plugin,@typescript-eslint/rule-schema-to-typescript-types,@typescript-eslint/type-utils \
  --parallel=5 \
  --skip-nx-cache

# --- Build website-eslint AFTER eslint-plugin is complete ---
# website-eslint/build.mts uses esbuild to read eslint-plugin/dist/rules/* at build time,
# but doesn't declare this NX dependency. Build it separately after eslint-plugin is done.
echo "Building website-eslint..."
pnpm exec nx run website-eslint:build --skip-nx-cache

echo "[DONE] Repository is ready for docusaurus commands."
