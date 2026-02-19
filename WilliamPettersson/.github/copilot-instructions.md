## Purpose
Provide concise, actionable guidance so an AI coding agent can be immediately productive working on this React + Vite personal site.

## Quick Start (DEV / BUILD)
- Install and run dev server: `npm install` then:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

- Preview built output:

```bash
npm run preview
```

Linting:

```bash
npm run lint
```

## Big-picture architecture
- Single-page React app bootstrapped with Vite. Entry is [src/main.jsx](src/main.jsx#L1).
- Routes and page composition live in [src/App.jsx](src/App.jsx#L1). The app shows a `SplashPage` first (controlled by local state) and then renders the main site sections (no nested router-based code-splitting).
- Components are colocated in `src/` (e.g., `InfoContainer`, `SkillsContainer`, `ContactContainer`, `PersonalContainer`, `InterestsPage`). Styles are per-component CSS files (e.g., `InfoContainer.css`).
- Static media lives under `src/assets/` (see `cooking.jfif`, `fishing.jfif`, `hunting.jfif`).

## Important files to inspect
- Project scripts & deps: [package.json](package.json#L1)
- Vite config + React Compiler plugin: [vite.config.js](vite.config.js#L1). Note: `babel-plugin-react-compiler` is enabled and affects dev/build performance. Keep it if you need the React Compiler features.
- App composition and Router: [src/App.jsx](src/App.jsx#L1)
- Entrypoint: [src/main.jsx](src/main.jsx#L1)
- Root HTML: `index.html` (standard Vite template)

## Project-specific conventions & patterns
- Minimal, flat component layout — components live directly in `src/` (no `components/` subfolder). Follow existing filenames and per-component CSS files (e.g., `SplashPage.css` alongside `SplashPage.jsx`).
- Routing: uses `react-router-dom` (v7); routes are declared in `App.jsx` with `Routes` + `Route` elements.
- Splash flow: the site uses a boolean `showSplash` state in `App.jsx` to gate the initial splash screen; modifying splash behavior should preserve this stateful handoff.
- No TypeScript; code uses `.jsx` files and plain JavaScript types in `package.json`.

## Build, debug and editing tips for agents
- Modify UI components and CSS directly; HMR via `npm run dev` will reload components.
- When touching bundler/plugin config, update [vite.config.js](vite.config.js#L1) and verify `npm run build` completes locally before proposing changes.
- Keep an eye on `babel-plugin-react-compiler` in `vite.config.js` and `devDependencies` — removing it may change compiled output and runtime behavior.

## Integration & external deps
- Runtime deps: `react`, `react-dom`, `react-router-dom` (see [package.json](package.json#L1)).
- Dev tools: `vite`, `@vitejs/plugin-react`, ESLint packages.

## What agents should do (concrete examples)
- To add a new page: create `NewPage.jsx` + `NewPage.css` in `src/`, then add a `Route` entry inside [src/App.jsx](src/App.jsx#L1) and link from existing UI.
- To change the splash behavior: update `showSplash` handling in [src/App.jsx](src/App.jsx#L1) and keep the `onComplete` callback pattern used by `SplashPage`.
- To add assets: put images in `src/assets/` and import them from components (e.g., `import img from './assets/cooking.jfif'`).

## Files to avoid or treat cautiously
- Do not remove or replace `babel-plugin-react-compiler` without testing both `dev` and `build` — it changes compilation.

## Tests & CI
- There are no tests or CI configs discovered. If adding tests, keep them separate and add `test` scripts to `package.json`.

## If you need clarification
- Ask the repo owner where the live deployment is hosted and whether the React Compiler optimization is required for production.

---
If any section is unclear or you'd like me to expand examples (route addition, splash refactor, or a small PR), tell me which area to elaborate.
