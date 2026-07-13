# FamilyChat

A family-focused group-chat mobile app (Expo / React Native / Firebase), originally built as a
**University of Central Florida Senior Design project** (Group 48, FALL 2021 / SPRING 2022) by
Evan C. Navarro (PM, mobile, brand, app design), Jacques "JJ" Parizeau, and Pedro Roman.

> **Note:** the original `familychat.app` domain was a promo site that is **no longer owned by us** —
> whatever currently serves it is out of our control; do not treat it as this project's site.

## Repo structure — the original is frozen, new work is separate

| dir | what | status |
|---|---|---|
| **`2022-original/`** | the untouched senior-design codebase, exactly as delivered | **frozen** — archival; do not modify. Also preserved at git tag `original-2022` (retrievable at its original root layout via `git checkout original-2022`) |
| **`2026-new/`** | the 2026-forward evolution | active — all new work goes here |

The split exists so the academic artifact stays pristine (portfolio / provenance) while the project
can move forward without rewriting history. Treat `2022-original/` as read-only.

## ⚠️ Security — read before touching the live Firebase project
The 2022 app shipped with **world-open Firestore rules** (`allow read, write: if true` — see
`2022-original/firestore.rules`) on the project **`family-chat-app-48`**. That project is **not under
our current Firebase account** (owned by a teammate or an old account) and the `familychat.app` domain
is also no longer ours — so the live surface is outside our control. If the project is still active,
its DB may be publicly readable/writable with real family-chat PII, and only the owning account can
lock it down or shut it off. See `SECURITY.md` and `ROADMAP.md`.

## Running the original (reference)
```bash
cd 2022-original && npm install && npx expo start
```
Requires the `family-chat-app-48` Firebase project + Expo. The original targets that live project —
don't point new work at it until the security review is done.
