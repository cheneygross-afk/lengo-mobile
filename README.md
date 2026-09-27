# Deep End (iOS)

React Native / Expo app for Deep End Spanish, sharing the Supabase backend
(auth + `profiles` table) that [deependspanish.com](https://deependspanish.com)
(the `lengo` repo) runs on. Logging in here authenticates the same Supabase
account as the website; lesson progress, flashcards, and streaks are
device-local (AsyncStorage) the same way the website's are browser-local
(localStorage) -- neither syncs to the other today.

## What's here (MVP)

- Email/password login via `supabase.auth.signInWithPassword` (`src/screens/LoginScreen.tsx`)
- A1 lessons, ported verbatim from the web repo's `src/lib/lessons/` data
  files (`src/lib/lessons/a1.ts`, `types.ts` -- plain TS data, no DOM
  dependency, so they copy over unchanged)
- A lesson runner supporting all 6 exercise types (multiple-choice,
  multi-select, fill-blank, translate, word-order, matching) --
  `src/components/ExerciseBlock.tsx`
- Flashcards with the same Leitner-box spaced-repetition scheduler as the
  web app (`src/lib/srs.ts`, copied verbatim) and the same auto-enroll
  behavior (finishing a lesson queues its vocabulary for review)

## What's not here yet

- Sign-up (the web app's sign-up flow includes a Stripe checkout / free
  trial coupon; needs a product decision on how that works in-app given
  Apple's in-app purchase rules before building it)
- A2-C2 and the Japanese track (same copy-the-data-file process as A1 --
  see "Adding another level" below)
- Readings, the placement test, native-speaker conversation booking,
  writing contests, the instructor/admin surfaces -- none of these are
  in the MVP scope
- Progress sync between devices/web (would need a real backend table --
  today's local-only model matches the website's, which also has no
  server-side progress persistence)

## Setup

```
npm install
npx expo start
```

Scan the QR code with Expo Go on your phone, or press `i` for the iOS
Simulator (needs Xcode). `.env` already has the same Supabase project URL
and publishable anon key the web app uses -- nothing to configure.

## Lesson content comes from the website repo

Every lesson, story, and reading file under `src/lib/lessons/`,
`src/lib/stories/`, and `src/lib/readings/` that starts with a
`// Synced from cheneygross-afk/lengo:...` line is a copy of the website
repo's file. Edit content there, never here:

- On every content change to the website's `main`, its "Sync content to
  mobile" workflow runs `scripts/sync-content.mjs` and opens a
  "Sync lesson content from the website" PR here. Merge it to ship.
- To sync by hand: `npm run sync-content -- --from ../lengo`.
- `npm run verify-content` (also run by CI on every PR) fails if a synced
  file was edited here. `src/content-sync.json` records the website commit
  the app's content came from.

Files without that header (`registry.ts`, `review.ts`,
`ja-alphabet-decks.ts`, etc.) are app code and are edited here as usual.
A new level still needs adding to `src/lib/lessons/registry.ts` once its
file arrives.

## Building for TestFlight

Needs an Apple Developer account and EAS (`npx eas build --platform ios`,
or a local Xcode build via `npx expo prebuild` + Xcode). Not set up yet --
next step once the MVP screens are signed off.
