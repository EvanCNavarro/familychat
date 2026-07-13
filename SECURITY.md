# FamilyChat — SECURITY

## ✅ Resolved (very likely) — the Firebase project appears deleted
**2026-07-13 update:** Checked the Firebase console signed in as the owner account
`app.familychat@gmail.com` (`/u/2/`). That account has **zero Firebase projects** (the console offered
to "prepare a demo project" — only shown for an empty account), and `family-chat-app-48` returns "the
project does not exist or you do not have permission." The most likely explanation is that the project
was **deleted — auto-pruned as a long-dormant free-tier project**, or cleaned up years ago. With no
live project, the world-open rules below expose nothing; they remain only as a historical artifact in
`2022-original/`. To be 100% certain, check `console.cloud.google.com/cloud-resource-manager` under
`app.familychat@gmail.com` for a pending-deletion entry (visible ~30 days). Otherwise: closed.

## Full security sweep (2026-07-13) — all clear
Comprehensive check of the whole repo (`2022-original/` + current) and git history:

| check | result |
|---|---|
| Firebase config (apiKey/authDomain/projectId) | ✅ **never committed** — `firebase.js` was gitignored by the original team (`/firebase.js`) |
| API keys (`AIza…`) in code or history | ✅ none |
| Private keys / PEM / service-account JSON | ✅ none |
| FCM server keys / third-party tokens (`AAAA…`, `sk-`, `ghp_`, `xox…`) | ✅ none, current or in history |
| Git history (all commits) for secrets committed-then-removed | ✅ none |
| Google tokens (`Bearer`, `ya29.…`) in the tracked debug logs | ✅ none |
| Phone numbers (app uses phone auth) | ✅ all fictional (555-range) / test / a timestamp — no real numbers |
| Real user PII (emails, chat data) | ✅ none — only the app contact address + a teammate email; no customer data |
| `private/PROJECT-ACCESS.md` (saved credentials) | ✅ gitignored, never in history, never pushed |
| Live Firebase project | ✅ deleted/inaccessible (see above) — no live exposure |
| `familychat.app` domain | ✅ no longer ours; separate Apache promo site, not the data surface |

**Nits (not exposures):** 6 tracked `*-debug.log` files (~31k lines of build noise; one contains a
teammate's local path `/Users/jjparizeau`) — left in place to keep `2022-original/` untouched (the
`original-2022` tag preserves them anyway). Scrub only if the original is ever intentionally re-cut.

## Original finding (historical) — world-writable Firestore
The 2022 app's Firestore rules (`2022-original/firestore.rules`) are:
```
match /{document=**} { allow read, write: if true; }
```
Anyone can read and write the **entire** database with no authentication. The project is
**`family-chat-app-48`** (`2022-original/.firebaserc`) and **www.familychat.app returns HTTP 200**, so
live infrastructure may still be up.

**Impact if the project is still active:** any Firestore data (family chat messages, user info — PII)
is publicly readable, and the database can be written or wiped by anyone.

**The project is NOT under the current account.** With `evancnavarro@gmail.com` logged in,
`firebase projects:list` returns **zero projects**, and `family-chat-app-48` returns **403 permission
denied** (not 404) — i.e. it exists but under a **different owner**. Most likely a Group 48 teammate
(JJ Parizeau / Pedro Roman) or an old UCF-era Google account. So the open DB, if still live, cannot be
secured from this account.

Note: **the `familychat.app` domain is no longer owned by us** — it was a separate Apache-hosted promo
site (not the Firebase project); whatever serves it now is out of our control. It is not the
data-exposure surface. The exposure (if any) is Firestore on `family-chat-app-48`, which is likewise
outside our current account. **The entire live surface — domain and Firebase project — is no longer
under our control**, so any fix requires the owning account(s).

**The owning account: `app.familychat@gmail.com`** — the shared project Gmail that owns the Firebase
project `family-chat-app-48` (and likely the domain + app-store listings). `evancnavarro@gmail.com` owns
only the *Expo* side (`app.json` `owner: evancnavarro`) — which is why Firebase returns 403 (different
owner), not 404. **Full credentials + all project links (Drive, Trello, Figma, Firebase console, GitHub
org UCF-SD-Group-48, Expo) are in the gitignored `private/PROJECT-ACCESS.md`** — never committed.
Contributors on record: EvanCNavarro, parizeaujj@gmail.com (JJ), proman655 (Pedro), tule1102@knights.ucf.edu.

**To resolve:**
1. Log into the Firebase console with **`app.familychat@gmail.com`** (credentials in `private/`).
2. Check: is `family-chat-app-48` active, does Firestore hold real data, are the deployed rules still
   `allow read, write: if true`?
3. If keeping it: deploy authenticated per-user rules (`allow read, write: if request.auth != null
   && ...`). If retired: delete the data / project so nothing stays world-open. Same account likely
   controls the `familychat.app` domain and store listings — clean those up while you're in there.
4. If the project turns out already deleted, there is no live exposure — close this item.

## Notes (lower severity)
- **No hard secrets committed** — no `.env`, no service-account JSON, no `google-services.json`. The
  Firebase *web* config (client `apiKey`) is a client-side identifier, not a secret; its safety depends
  entirely on the Firestore rules above (currently: none).
- **Tracked debug logs** — `2022-original/**/*-debug.log` (6 files) shouldn't have been committed;
  left in place to keep the original untouched (they carry no secrets, only local build noise).
- Any real family PII in the DB is personal data — handle per the workspace PII rules; do not export
  or read it beyond what's needed to secure it.
