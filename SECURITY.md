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

**Not yet resolved this pass** — the Firebase CLI failed to list projects (logged in as
evancnavarro@gmail.com, but `firebase projects:list` errored; likely a stale token / Management API
not enabled). The live state could not be confirmed programmatically.

**To resolve (needs Firebase console or a working CLI):**
1. Confirm whether `family-chat-app-48` is still active and whether Firestore holds real data.
2. If keeping it: replace the rules with authenticated, per-user access (`allow read, write: if
   request.auth != null && ...`) and deploy.
3. If retired: delete the Firestore data + the project (or disable it) so nothing dangling stays open.
4. Fix the CLI if needed: `firebase login --reauth`, and enable the Firebase Management API.

## Notes (lower severity)
- **No hard secrets committed** — no `.env`, no service-account JSON, no `google-services.json`. The
  Firebase *web* config (client `apiKey`) is a client-side identifier, not a secret; its safety depends
  entirely on the Firestore rules above (currently: none).
- **Tracked debug logs** — `2022-original/**/*-debug.log` (6 files) shouldn't have been committed;
  left in place to keep the original untouched (they carry no secrets, only local build noise).
- Any real family PII in the DB is personal data — handle per the workspace PII rules; do not export
  or read it beyond what's needed to secure it.
