# FamilyChat 2026 — CHECKLIST

The build checklist for reviving FamilyChat as a portfolio piece. Run it top-to-bottom via the chug
loop (each item a verified baby-step). `PROJECT.md` = what, `DESIGN.md` = how.

## Phase 1 — scaffold & assess
- [ ] Scaffold a current Expo app (SDK 52+, TypeScript, new architecture) inside `2026-new/`.
- [ ] Inventory `../2022-original/`: list every screen, component, style, and the Firestore data shapes
      (groups / topics / chats / polls / events / members) — this is the port map.
- [ ] Pick the Expo SDK/RN pin and navigation lib; record in `DESIGN.md`.

## Phase 2 — data & shell
- [ ] Build mock/seed data modeling the original Firestore shape (a few demo families/groups/chats).
- [ ] Set up navigation shell: the original IA (tabs Home / GroupChats / DMs / Profile).

## Phase 3 — port the screens (one at a time, verified)
- [ ] Port each screen from `2022-original/screens/` onto current RN + the mock data, preserving the
      design/UX. Verify each renders before the next (red-first where it makes sense).
- [ ] Port shared components + styles + brand/assets.

## Phase 4 — polish & present (the portfolio goal)
- [ ] Polish interactions + visual fidelity to the original brand.
- [ ] Runnable demo path (Expo Go and/or Expo web) with seeded content.
- [ ] A short "what this is" framing crediting the UCF Senior Design team + linking `../2022-original/`.

## Standing rules
- [ ] `../2022-original/` stays read-only (reference only).
- [ ] No secrets in the repo; sensitive → `../private/`.
- [ ] Deploy/publish (app store, live backend) is out of scope unless explicitly re-scoped — gate it.
