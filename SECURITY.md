# FamilyChat — SECURITY

## 🚨 Open finding — world-writable Firestore on the live project
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

Note: **www.familychat.app is served by Apache** — a separate promo/marketing site, *not* the Firebase
project. It is not the data-exposure surface; the exposure (if any) is Firestore on `family-chat-app-48`.

**To resolve (needs the OWNING account):**
1. Identify who owns `family-chat-app-48` — an old Google account of yours, or a teammate's.
2. Log in to that account (or ask the teammate) and check the Firebase console: is the project active,
   does Firestore hold real data, are the deployed rules still `allow read, write: if true`?
3. If keeping it: deploy authenticated per-user rules (`allow read, write: if request.auth != null
   && ...`). If retired: delete the data / project so nothing stays world-open.
4. If the project turns out already deleted, there is no live exposure — close this item.

## Notes (lower severity)
- **No hard secrets committed** — no `.env`, no service-account JSON, no `google-services.json`. The
  Firebase *web* config (client `apiKey`) is a client-side identifier, not a secret; its safety depends
  entirely on the Firestore rules above (currently: none).
- **Tracked debug logs** — `2022-original/**/*-debug.log` (6 files) shouldn't have been committed;
  left in place to keep the original untouched (they carry no secrets, only local build noise).
- Any real family PII in the DB is personal data — handle per the workspace PII rules; do not export
  or read it beyond what's needed to secure it.
