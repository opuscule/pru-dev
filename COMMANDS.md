# Development Commands Cheatsheet

## Tailwind CSS

### Watch Mode (Development)
```bash
npm run watch:css
```
Watches Tailwind CSS for changes and rebuilds automatically. Keep this running in a terminal while developing.

### Build (Production)
```bash
npm run build:css
```
Builds and minifies the Tailwind CSS output for production.

---

## Shopify Theme

### Development Server
```bash
shopify theme dev
```
Starts local development server with hot reload. Keep this running in a terminal while developing.

### Development Server (Specific Store & Theme)
```bash
shopify theme dev --store <store-url> --theme <theme-name-or-id>
```
Example:
```bash
shopify theme dev --store puppysrusdev.myshopify.com --theme pru-dev/main
```

### Push to Shopify
```bash
shopify theme push
```
Pushes theme to the default theme on Shopify.

### Push to Specific Theme
```bash
shopify theme push --theme pru-dev/main
```
Pushes to a specific theme (development, staging, or production).

### Push to Specific Store & Theme
```bash
shopify theme push --store <store-url> --theme <theme-name-or-id>
```
Example:
```bash
shopify theme push --store puppysrusdev.myshopify.com --theme pru-dev
```

### Pull from Shopify
```bash
shopify theme pull
```
Pulls the latest changes from Shopify to your local environment.

### Pull from Specific Store
```bash
shopify theme pull --store <store-url> --theme <theme-name-or-id>
```
Example:
```bash
shopify theme pull --store puppysrusdev.myshopify.com --theme pru-dev
```

### List Themes
```bash
shopify theme list
```
Shows all themes in your Shopify store.

### List Themes for Specific Store
```bash
shopify theme list --store <store-url>
```
Example:
```bash
shopify theme list --store puppysrusdev.myshopify.com
```

---

## Git Commands

### Stage All Changes
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your commit message"
```

### Push to Repository
```bash
git push
```

### Quick Commit & Push
```bash
git add . && git commit -m "Your commit message" && git push
```

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

---

## Typical Development Workflow

1. **Start development environment** (in separate terminals):
   ```bash
   npm run watch:css
   shopify theme dev
   ```

2. **Make changes** → Auto-reloads in browser

3. **Commit changes when ready**:
   ```bash
   git add . && git commit -m "Your descriptive message" && git push
   ```

4. **Deploy to production**:
   ```bash
   npm run build:css
   shopify theme push --theme <production-theme>
   ```

---

## Quick Reference

| Task | Command |
|------|---------|
| Start dev | `npm run watch:css` + `shopify theme dev` |
| Build CSS | `npm run build:css` |
| Push to Shopify | `shopify theme push` |
| Git commit | `git add . && git commit -m "message" && git push` |
| View themes | `shopify theme list` |
| Pull changes | `shopify theme pull` |
