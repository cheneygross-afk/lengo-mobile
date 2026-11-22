// The app is portrait-only (app.json "orientation": "portrait"). Android
// reads that as needing a portrait screen, and Google Play then hides the
// app from tablets, Chromebooks and XR headsets that don't report one.
// Declaring the feature as not required keeps the app in portrait but lets
// Play offer it on those devices too.
const { withAndroidManifest } = require("expo/config-plugins");

const FEATURE = "android.hardware.screen.portrait";

module.exports = function withOptionalPortrait(config) {
  return withAndroidManifest(config, (cfg) => {
    const manifest = cfg.modResults.manifest;
    const features = (manifest["uses-feature"] = manifest["uses-feature"] || []);
    const existing = features.find((f) => f.$ && f.$["android:name"] === FEATURE);
    if (existing) existing.$["android:required"] = "false";
    else features.push({ $: { "android:name": FEATURE, "android:required": "false" } });
    return cfg;
  });
};
