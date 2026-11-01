# AGENTS.md

## Project overview

Demo of the "Ralph Wiggum" agent loop: `ralph.sh` repeatedly invokes an agent with `PROMPT.md` until all tasks in `PROJECT.md` are done (the agent outputs `<promise>COMPLETE</promise>`).

## Layout

- `PROJECT.md` — task list; check items off when done.
- `PROGRESS.md` — append-only log of completed work.
- `PROMPT.md` — instructions fed to the agent each iteration.
- `ralph.sh` — loop driver (`./ralph.sh [iterations]`).
- `app/` — Vue 3 + Vite app (created by the tasks in `PROJECT.md`).

## Commands

All app commands run inside `app/`:

- `npm install` — install dependencies
- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the build

## Conventions

- Vue 3 with `<script setup>` single-file components.
- `vue-router` for routing; routes live in `app/src/router.js`, views in `app/src/views/`.
- No linter or test runner is configured; verify changes via `npm run build` and the dev server.
- One task at a time; after finishing, append to `PROGRESS.md` and check the item in `PROJECT.md`.
