# FamilyChat — ROADMAP

Resumable audit + go-forward plan. See `README.md` for the `2022-original/` (frozen) vs `2026-new/`
(active) split, and `SECURITY.md` for the open Firestore finding.

*Audited 2026-07-13 as part of the ~/Developer cleanup. This pass: restructured into
`2022-original/` (frozen, tagged `original-2022`) + `2026-new/`, and captured the findings below.
No live Firebase changes made (CLI was blocked).*

---

## PITSTOP 0 — 🚨 secure the live Firebase project (BLOCKED — needs the owning account)
- [ ] **`family-chat-app-48` is not under `evancnavarro@gmail.com`** (0 projects; 403-not-404 = exists,
      different owner). Identify the owner — an old UCF-era Google account of yours, or a Group 48
      teammate. See `SECURITY.md`.
- [ ] From the owning account: confirm the project is active + whether Firestore holds real data + the
      deployed rules; then lock down (authenticated per-user rules) or shut down (delete). World-open
      rules (`allow read, write: if true`) are in the original code.
- [x] **Ruled out:** www.familychat.app is a separate Apache-hosted promo site, not the Firebase
      project — not the exposure surface.

## PITSTOP 1 — decide the 2026-forward direction (product call, Bobby)
- [ ] What is `2026-new/`? Options: revive/modernize the Expo/RN app (deps are 3+ years stale), a
      rebuild on a current stack, or a narrower re-scope. This is a product/design decision, not a
      mechanical one — it sets everything downstream.
- [ ] Once decided: scaffold `2026-new/` and add the `/project-start` contract files (PROJECT/DESIGN/
      CHECKLIST) for the go-forward version as it takes shape.

## PITSTOP 2 — the frozen original (leave it alone)
- [x] **DONE — original preserved.** `2022-original/` holds the untouched senior-design code; git tag
      `original-2022` snapshots it at its original root layout. Do not modify it.
- [ ] (Reference only) The original's stack is 3+ years old (Expo/RN 2021-2022, `@react-native-*`
      pre-Fabric). If the 2026 direction is "revive," that migration is a `2026-new/` effort, not an
      edit to the frozen original.

## PITSTOP 3 — housekeeping
- [ ] Tracked `*-debug.log` files (6, in `2022-original/`) — left committed to keep the original
      untouched; leave as-is or scrub only if the original is ever intentionally re-cut.
- [ ] Root now has a fresh `.gitignore`; `2022-original/` keeps its own.

---
*Nothing in `2022-original/` should change. All new work + the security fix live in `2026-new/` / the
live project. Re-run the audit if the 2026 direction lands.*
