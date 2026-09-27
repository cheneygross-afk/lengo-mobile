# Deep End: App Store Connect listing

Draft for App Store Connect. Character counts checked against Apple's limits.

## App information
- **Name** (28/30): Deep End: Spanish & Japanese
- **Subtitle** (28/30): Lessons, drills & flashcards
- **Bundle ID:** com.deependspanish.app
- **Primary category:** Education
- **Secondary category:** Reference
- **Age rating:** 4+ (no objectionable content; the in-app browser link is for deependspanish.com only)
- **Price:** Free
- **Copyright:** 2026 BBC LLC

## URLs
- **Support URL:** https://deependspanish.com/support
- **Marketing URL:** https://deependspanish.com
- **Privacy Policy URL:** https://deependspanish.com/privacy

## Promotional text (168/170)
Thousands of bite-sized Spanish and Japanese lessons, from total beginner to professional fluency. Tap any word to hear it spoken. Your progress syncs with the website.

## Keywords (100/100)
learn,language,grammar,verb,conjugation,vocabulary,flashcards,hiragana,katakana,kanji,espanol,fluent

(Words already in the app name, like "Spanish" and "Japanese", are indexed automatically, so they're left out here.)

## Description (1179/4000)
Deep End teaches Spanish and Japanese the way a good tutor would: short, focused lessons that build on each other, with practice drills right where you need them.

SPANISH, BEGINNER TO PROFESSIONAL
Six levels, from your first "hola" to professional and academic fluency, plus a colloquial Spanish and culture track. Each lesson takes 4 to 10 minutes and ends with quick checks so you know it stuck.

JAPANESE, FROM THE ALPHABETS UP
Start with hiragana and katakana, then work through six levels of grammar, vocabulary, and kanji.

PRACTICE THAT TARGETS THE HARD PARTS
Reinforcement lessons and drills are woven in right after the lessons they support, with extra focus on the concepts learners find hardest.

HEAR EVERY WORD
Tap any Spanish or Japanese word to hear it pronounced. Choose a male or female voice in Settings.

FLASHCARDS WITH SPACED REPETITION
Save words as you learn and review them on a schedule designed to move them into long-term memory.

READINGS AND A BUILT-IN TRANSLATOR
Leveled stories for practice, plus quick translation whenever you get stuck.

ONE ACCOUNT, EVERYWHERE
Your lessons, progress, and flashcards sync between the app and deependspanish.com.

## App privacy (the "nutrition label")
Based on what the app's code actually does as of this draft:

**Tracking:** No. The app has no ad SDKs or third-party analytics.

**Data linked to the user, used for App Functionality only:**
- **Contact Info > Email Address:** account sign-up and sign-in (Supabase Auth)
- **User Content > Other User Content:** flashcards and lesson highlights, synced to the account
- **Usage Data > Product Interaction:** lesson completions (progress tracking)

**Sent to the server but not stored:** words sent for pronunciation audio and text sent for translation. Answer "not collected" for these only if the /api/translate and /api/pronounce routes don't log or store the text; confirm before submitting.

## Notes for App Review
Apple needs a working login to review a sign-in app. Before submitting, create a dedicated reviewer account on deependspanish.com and enter its email and password in App Store Connect's "Sign-in required" fields (not in this file).

Suggested review note:
> Deep End is a language-learning app for Spanish and Japanese. Sign in with the provided demo account to access lessons, flashcards, and readings. Tap any Spanish or Japanese word in a lesson to hear its pronunciation.

## Open items before submission
1. **App icon:** assets/icon.png is still Expo's default placeholder. Replace it with a 1024x1024 Deep End icon.
2. ~~**Account deletion:**~~ Done: Settings > "Delete account" (bottom of the screen). Test it once with a throwaway account before submitting.
3. **Payment:** "Get Premium" in Settings opens website checkout, a common rejection reason (Guideline 3.1.1). Decision pending: remove it from the iOS app or add in-app purchase.
4. **Screenshots:** need 6.9" iPhone screenshots (1320x2868) at minimum. iPad support is off for launch, so no iPad screenshots are needed.
