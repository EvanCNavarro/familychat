# FamilyChat — ROADMAP

Resumable audit + go-forward plan. See `README.md` for the `2022-original/` (frozen) vs `2026-new/`
(active) split, and `SECURITY.md` for the open Firestore finding.

*Audited 2026-07-13 as part of the ~/Developer cleanup. This pass: restructured into
`2022-original/` (frozen, tagged `original-2022`) + `2026-new/`, and captured the findings below.*

---

## Cleanup completeness — the raised-bar checklist
| item | status |
|---|---|
| Placed / named correctly | ✅ `~/Developer/familychat`, repo `EvanCNavarro/familychat` |
| README clean | ✅ root README (split + status) |
| Compliance docs (ROADMAP / PROJECT / DESIGN / CHECKLIST / SECURITY) | ✅ ROADMAP + SECURITY; PROJECT/DESIGN/CHECKLIST land in `2026-new/` at project-start |
| Head-to-toe audit → ROADMAP | ✅ this file |
| Claude memory added | ✅ `project_familychat.md` + MEMORY.md pointer |
| GitHub repo name clean | ✅ `familychat` |
| GitHub description + topic chips + metadata | ✅ description corrected; homepage cleared (domain lost); `reactjs`→`react-native` |
| GitHub visibility correct | ✅ public (clean portfolio piece, no secrets) |
| GitHub Actions correct | ✅ none (frozen archival; CI applies to `2026-new/` when built) |
| No secrets / exposed keys | ✅ full sweep — see `SECURITY.md` "Full security sweep" |
| project-start + chug set up in `2026-new/` | ✅ direction decided (revive Expo/RN as portfolio); PROJECT/DESIGN/CHECKLIST/README scaffolded; chug ready (`.engine` auto-scaffolds on first `/order`) |

---

## PITSTOP 0 — ✅ Firebase exposure very likely resolved (project appears deleted)
- [x] **Checked as the owner account `app.familychat@gmail.com` (Firebase console, `/u/2/`):** the
      account has ZERO projects (got the "prepare a demo project" onboarding) and `family-chat-app-48`
      shows "does not exist / no permission." Almost certainly **deleted — auto-pruned as a dormant
      free-tier project.** No live project → the world-open `allow read, write: if true` rules expose
      nothing; they survive only as a historical artifact in `2022-original/`. See `SECURITY.md`.
- [ ] (Optional certainty) Check `console.cloud.google.com/cloud-resource-manager` under
      `app.familychat@gmail.com` for a pending-deletion entry (~30-day window). Otherwise this is closed.
- [x] **Ruled out / lost:** the `familychat.app` domain is no longer ours (separate Apache promo site,
      not the Firebase project) — not the exposure surface.

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
