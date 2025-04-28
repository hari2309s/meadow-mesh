# Meadow Mesh

Design systems should feel like second nature. Welcome to Meadow Mesh 🐰🥕

A modern, scalable monorepo for building reusable UI components, design tokens, and documentation using [pnpm workspaces](https://pnpm.io/workspaces).

---

## Monorepo Structure

- `packages/components` — React UI components, built with Vite and EmotionJS.
- `packages/tokens` — Design tokens (colors, spacing, etc.), built with Style Dictionary to output CSS variables.
- `packages/docs` — Storybook documentation site for your components.

---

## Getting Started

### 1. Install dependencies

```sh
pnpm install
```

### 2. Build all packages

```sh
pnpm run build:tokens     # Build design tokens (CSS variables)
pnpm run build:components # Build UI components
pnpm run build:docs      # Build Storybook docs
```

Or, to ensure tokens are always built before Storybook:

```sh
pnpm run build:storybook
```

### 3. Develop locally

```sh
pnpm run dev:components   # Start components dev server
pnpm run dev:docs         # Start Storybook (docs) dev server
```

---

## Scripts Reference

- `build:tokens` — Build design tokens (must be run before Storybook if tokens change)
- `build:components` — Build the components library
- `build:docs` — Build Storybook docs
- `build:storybook` — Build tokens, then Storybook docs (recommended)
- `dev:components` — Dev server for components
- `dev:docs` — Dev server for Storybook

---

## Contribution

Contributions are welcome! Please open issues or submit PRs.

## License

[MIT](LICENSE)
