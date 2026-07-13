# FamilyChat 2026 — PROJECT

The go-forward version of FamilyChat. See `../README.md` for the frozen-original vs 2026-new split and
`../SECURITY.md` for why the 2022 infra is dead.

## What
**Revive & modernize** the 2021–2022 UCF Senior Design FamilyChat app (Expo / React Native / Firebase)
— carry the existing screens, UX, and brand forward onto a current stack — as a **portfolio / showcase
piece**. Polish and presentation matter more than a live production backend.

## Goal & non-goals
- **Goal:** a modern, runnable, presentable version that shows the work well (screens, interactions,
  design) — a portfolio artifact, not a shipped multi-user product.
- **Non-goals:** running real family data, a live paid backend, app-store distribution. (Can change
  later, but not the driver now.)

## Starting point
- **Reference (read-only):** `../2022-original/` (git tag `original-2022`) — the original screens,
  navigation, components, styles, and Firestore data model. Port from it; don't edit it.
- **Dead infra:** the `family-chat-app-48` Firebase project is deleted and `familychat.app` is lost —
  so the backend is a fresh decision, not a migration (see `DESIGN.md`).
- **Stack age:** the original is ~3+ years stale (2022 Expo/RN, pre-new-architecture, old
  `@react-native-*`), so "revive" is really "port onto current Expo/RN," not an in-place dep bump.

## Constraints
- Keep it in this monorepo subdir (`2026-new/`), alongside the frozen original.
- No secrets in the repo; anything sensitive → `../private/` (gitignored).

See `DESIGN.md` for the modernization approach, `CHECKLIST.md` for the build steps, `ROADMAP` at repo
root for the audit context.
