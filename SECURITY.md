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

Note: **the `familychat.app` domain is no longer owned by us** — it was a separate Apache-hosted promo
site (not the Firebase project); whatever serves it now is out of our control. It is not the
data-exposure surface. The exposure (if any) is Firestore on `family-chat-app-48`, which is likewise
outside our current account. **The entire live surface — domain and Firebase project — is no longer
under our control**, so any fix requires the owning account(s).

**The owning account — concrete lead: `familychatapp@gmail.com`.** This is the app's official contact
address (`2022-original/screens/4_Profile/ProfileTab.js`) — a dedicated project Gmail, the standard way
a team holds shared infrastructure. It almost certainly owns the Firebase project `family-chat-app-48`
(and likely the domain + app-store listings). `evancnavarro@gmail.com` owns only the *Expo* side
(`app.json` `owner: evancnavarro`) — which is why Firebase returns 403 (different owner), not 404.
Contributors on record: EvanCNavarro, parizeaujj@gmail.com (JJ), proman655 (Pedro), tule1102@knights.ucf.edu.

**To resolve:**
1. Log into the Firebase console with **`familychatapp@gmail.com`** (recover the password if needed, or
   ask a teammate who has it).
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
