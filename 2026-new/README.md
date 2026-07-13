# FamilyChat — 2026-new

The go-forward version: **revive & modernize the 2021–2022 Expo/React Native FamilyChat app as a
portfolio / showcase piece.** Carry the original screens, UX, and brand onto a current stack; polish
and presentation over a live production backend.

- **What / why:** `PROJECT.md`
- **How (modernization approach + stack):** `DESIGN.md`
- **Build steps (run via the chug loop):** `CHECKLIST.md`
- **Reference (read-only):** `../2022-original/` (git tag `original-2022`) — the original code to port
  from. Do **not** edit it.
- **Security / dead infra:** `../SECURITY.md` — the 2022 Firebase project is deleted and the domain is
  lost, so the backend is a fresh (mock-first) decision, not a migration.

## Getting started
The direction is set, so the build is ready to begin. Run the chug loop here (`/order` then
`/chug-02-continue`) — it will scaffold `.engine/` on first run and work through `CHECKLIST.md` one
verified step at a time, starting with scaffolding a current Expo app and inventorying the original.

No secrets in the repo; anything sensitive → `../private/` (gitignored).
