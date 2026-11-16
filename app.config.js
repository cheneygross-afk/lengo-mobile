// One codebase, two apps.
//
// With no APP_VARIANT this is app.json unchanged: "Deep End: Learn
// Spanish" (com.deependspanish.app). With APP_VARIANT=languages (the
// "languages" build profiles in eas.json set it) the same code builds
// "Deep End Languages" (com.deependlanguages.app), the app for every
// course except Spanish. At run time the app tells which one it is from
// its own bundle id (src/lib/appVariant.ts), so the JavaScript is the
// same for both and only this file differs.
//
// The two apps are separate installs with separate update channels
// (eas.json), so an update published for one never reaches the other.

module.exports = ({ config }) => {
  if (process.env.APP_VARIANT !== "languages") return config;
  return {
    ...config,
    name: "Deep End Languages",
    icon: "./assets/languages/icon.png",
    ios: {
      ...config.ios,
      bundleIdentifier: "com.deependlanguages.app",
    },
    android: {
      ...config.android,
      package: "com.deependlanguages.app",
      adaptiveIcon: {
        ...config.android.adaptiveIcon,
        backgroundColor: "#FFF6EC",
        foregroundImage: "./assets/languages/android-icon-foreground.png",
        backgroundImage: "./assets/languages/android-icon-background.png",
      },
    },
  };
};
