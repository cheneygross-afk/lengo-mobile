// One codebase, two apps:
//
//   - "Deep End: Learn Spanish" (com.deependspanish.app): the Spanish course.
//   - "Deep End Languages" (com.deependlanguages.app): every other course.
//
// The same split as the two websites (deependspanish.com and
// deependlanguages.com). Which app this is comes from the installed app's
// own id, so it is right in a store build and in an over-the-air update
// alike, with nothing to remember at publish time. In development (Expo Go
// has its own id), start with EXPO_PUBLIC_APP_VARIANT=languages to get the
// Languages app.
import * as Application from "expo-application";
import type { CourseId } from "./courses";

export const LANGUAGES_APP_ID = "com.deependlanguages.app";

export const IS_LANGUAGES_APP: boolean =
  Application.applicationId === LANGUAGES_APP_ID || process.env.EXPO_PUBLIC_APP_VARIANT === "languages";

/** The name on the home screen, sign-in and sign-up. */
export const APP_NAME = IS_LANGUAGES_APP ? "Deep End Languages" : "Deep End";

/** The website this app belongs to (plans, account pages, course files). */
export const APP_WEBSITE = IS_LANGUAGES_APP ? "https://deependlanguages.com" : "https://deependspanish.com";

/** The courses this app offers, in the order Home lists them. */
export const APP_COURSES: CourseId[] = IS_LANGUAGES_APP ? ["ja", "zh", "fr", "de", "pt", "it", "ko", "en"] : ["es"];

/** The course a new install starts on. */
export const DEFAULT_COURSE: CourseId = APP_COURSES[0];
