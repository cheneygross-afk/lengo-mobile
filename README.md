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

## Adding another level (e.g. A2)

1. Copy the data file: `cp ../lengo/src/lib/lessons/a2.ts src/lib/lessons/a2.ts`
   (no edits needed -- it only imports `Lesson` from `./types`, which is
   already here)
2. In `LessonListScreen.tsx` and `LessonRunnerScreen.tsx`, generalize the
   hardcoded `A1_LESSONS` import and `LEVEL_PATH = "a1"` into a level
   picker/param the same shape as the web app's `[levelPath]` routes.

## Building for TestFlight

Needs an Apple Developer account and EAS (`npx eas build --platform ios`,
or a local Xcode build via `npx expo prebuild` + Xcode). Not set up yet --
next step once the MVP screens are signed off.
