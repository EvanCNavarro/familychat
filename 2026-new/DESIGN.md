# FamilyChat 2026 — DESIGN

The modernization approach. `PROJECT.md` is the what/why; this is the how.

## Strategy: port, don't in-place-upgrade
The 2022 app is too stale to `npm upgrade` forward (pre-new-architecture Expo/RN, old navigation +
`@react-native-*` that don't have clean upgrade paths). Cleaner to **scaffold a current Expo app and
port the screens/UX/brand into it** from `../2022-original/` (read-only reference).

## Stack (target)
- **Current Expo SDK** (52+) + React Native new architecture, TypeScript.
- **Navigation:** current Expo Router (or React Navigation v7) — the original used React Navigation v5/6.
- **Backend (portfolio-first):** the original Firebase is dead. Since the goal is showcase, start with
  **mock/local data** (seed fixtures modeling the original Firestore shape) so screens are fully
  demoable with no live backend. Wiring a fresh backend (Firebase or Supabase) is a later option, not
  required for the portfolio goal.
- **State:** keep it simple (React state / a light store) — no heavy infra for a showcase.

## What to preserve vs. rebuild
| preserve (from 2022-original) | rebuild |
|---|---|
| Screen designs, UX flows, brand, copy, assets | dependency stack (Expo/RN/navigation) |
| The Firestore data model *shape* (groups, topics, chats, polls, events, members) | the backend itself (mock/fresh) |
| The information architecture (tabs: Home / GroupChats / DMs / Profile) | auth (phone auth → mock or a modern provider) |

## Portfolio presentation
Because the driver is showcase: prioritize a clean runnable demo (Expo Go / web build), a few polished
seeded groups/chats, and a short "what this is" framing that credits the original UCF Senior Design
team and links the frozen `2022-original/`.

## Open decisions (resolve during the build)
- Exact Expo SDK / RN version pin.
- Mock-data-only vs. a fresh minimal backend.
- Web target (Expo web) for easy portfolio viewing vs. mobile-only.
