# Repository Guidelines

## Project Structure & Module Organization
- `app/` contains Expo Router screens and layouts (e.g., `app/(tabs)/`, `app/auth/`).
- `components/` holds shared UI and form components; tests live in `components/__tests__/`.
- `constants/` includes theme tokens like `constants/Colors.ts`.
- `validation/` stores Zod schemas for forms (e.g., `validation/login-schema.ts`).
- `assets/` contains fonts and images used by the Expo app.

## Build, Test, and Development Commands
- `npm run start`: starts the Expo dev server.
- `npm run android`: builds and launches the Android app via Expo.
- `npm run ios`: builds and launches the iOS app via Expo.
- `npm run web`: runs the web build in the browser.
- `npm test`: runs Jest in watch mode for component tests.

## Coding Style & Naming Conventions
- Use TypeScript/TSX with 2-space indentation and double quotes (match existing files like `app/index.tsx`).
- Prefer PascalCase for component files (`components/StyledText.tsx`) and kebab case for route segments.
- No formatter/linter is configured; keep changes consistent with nearby code.

## Testing Guidelines
- Framework: Jest with `jest-expo`.
- Tests live under `components/__tests__/` with `*-test.js` naming.
- Run `npm test` locally before opening a PR that changes components or behavior.

## Commit & Pull Request Guidelines
- Commit messages are short and imperative (e.g., “Fix broken home screen”, “Setup basic tabs layout”).
- PRs should include: a concise description, linked issue (if any), and screenshots for UI changes.
- Note any new dependencies or configuration updates in the PR description.

## Configuration Notes
- Expo config lives in `app.json`; build config lives in `eas.json`.
- Ensure new environment values are documented and kept out of source where appropriate.
