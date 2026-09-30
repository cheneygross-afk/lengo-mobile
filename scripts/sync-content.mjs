#!/usr/bin/env node
// Copies lesson, story, reading, grammar-guide and placement-test content from the website repo
// (cheneygross-afk/lengo) into this app, so the two can't drift apart.
// The website is the single source of truth for course content: edit a
// lesson there, then run this script (or let the website's "Sync content
// to mobile" workflow run it and open a PR here).
//
//   node scripts/sync-content.mjs [--from ../lengo]   copy content in
//   node scripts/sync-content.mjs --verify            check nothing was hand-edited
//   --adopt   replace same-named app files that predate syncing (first run only)
//
// Every synced file gets a header line pointing back at its source, and
// src/content-sync.json records the source commit plus a hash of each
// synced file. --verify only needs this repo, so CI here can run it
// without access to the (private) website repo.
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST = path.join(ROOT, "src/content-sync.json");
const SOURCE_REPO = "cheneygross-afk/lengo";

// Directories mirrored from the website, and the website files in them
// that stay web-only (they depend on web code or aren't used by the app).
const DIRS = {
  "src/lib/lessons": [
    "ja-alphabet-decks.ts", // platform-specific flashcard seeding; the app has its own port
    "migrateC1C2Progress.ts",
    "readingPracticeRanges.ts",
  ],
  "src/lib/stories": [],
  "src/lib/readings": [],
  "src/lib/grammar": [],
};

// Single website files mirrored to the same path here (pure data that
// doesn't live in one of the directories above).
const FILES = ["src/lib/placementTest.ts"];

const header = (rel) =>
  `// Synced from ${SOURCE_REPO}:${rel} by scripts/sync-content.mjs -- edit it there, not here.\n`;
const HEADER_PREFIX = `// Synced from ${SOURCE_REPO}:`;
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");

function readManifest() {
  if (!fs.existsSync(MANIFEST)) return { source: SOURCE_REPO, commit: null, files: {} };
  return JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
}

function verify() {
  const manifest = readManifest();
  const problems = [];
  for (const [rel, hash] of Object.entries(manifest.files)) {
    const abs = path.join(ROOT, rel);
    if (!fs.existsSync(abs)) problems.push(`${rel} is missing`);
    else if (sha256(fs.readFileSync(abs)) !== hash) problems.push(`${rel} was edited by hand`);
  }
  for (const dir of Object.keys(DIRS)) {
    if (!fs.existsSync(path.join(ROOT, dir))) continue;
    for (const name of fs.readdirSync(path.join(ROOT, dir))) {
      const rel = `${dir}/${name}`;
      const text = fs.readFileSync(path.join(ROOT, rel), "utf8");
      if (text.startsWith(HEADER_PREFIX) && !(rel in manifest.files)) problems.push(`${rel} is not in src/content-sync.json`);
    }
  }
  if (problems.length) {
    console.error("Synced content doesn't match src/content-sync.json:");
    for (const p of problems) console.error(`  - ${p}`);
    console.error(`\nLesson content is edited in ${SOURCE_REPO}, then synced here with`);
    console.error("`npm run sync-content -- --from <path to lengo checkout>`.");
    process.exit(1);
  }
  console.log(`OK: ${Object.keys(manifest.files).length} synced files match ${SOURCE_REPO}@${manifest.commit?.slice(0, 7)}.`);
}

// Synced files may only import other content files, never web app code.
function checkImports(rel, text, willExist) {
  const bad = [];
  for (const m of text.matchAll(/^\s*(?:import|export)[^;]*?from\s+["']([^"']+)["']/gm)) {
    const spec = m[1];
    let target;
    if (spec.startsWith("./") || spec.startsWith("../")) target = path.posix.join(path.posix.dirname(rel), spec);
    else if (spec.startsWith("@/")) target = `src/${spec.slice(2)}`;
    else continue; // package imports
    if (!willExist(`${target}.ts`) && !willExist(`${target}/index.ts`)) bad.push(spec);
  }
  return bad;
}

function sync(from, adopt) {
  const src = path.resolve(from);
  if (!fs.existsSync(path.join(src, "src/lib/lessons"))) {
    console.error(`${src} doesn't look like a ${SOURCE_REPO} checkout (no src/lib/lessons).`);
    process.exit(1);
  }
  let commit = null;
  try {
    commit = execFileSync("git", ["-C", src, "rev-parse", "HEAD"], { encoding: "utf8" }).trim();
  } catch {}

  const old = readManifest();
  const next = {};
  const writes = new Map();
  for (const [dir, excluded] of Object.entries(DIRS)) {
    for (const name of fs.readdirSync(path.join(src, dir)).sort()) {
      if (!name.endsWith(".ts") || excluded.includes(name)) continue;
      const rel = `${dir}/${name}`;
      const dest = path.join(ROOT, rel);
      if (!adopt && fs.existsSync(dest) && !(rel in old.files) && !fs.readFileSync(dest, "utf8").startsWith(HEADER_PREFIX)) {
        console.error(`Refusing to overwrite ${rel}: it exists here but isn't a synced file.`);
        console.error(`Rename the app's file, add ${name} to the excluded list in scripts/sync-content.mjs,`);
        console.error("or pass --adopt to replace it with the website's copy.");
        process.exit(1);
      }
      writes.set(rel, header(rel) + fs.readFileSync(path.join(src, rel), "utf8"));
    }
  }
  for (const rel of FILES) {
    const dest = path.join(ROOT, rel);
    if (!adopt && fs.existsSync(dest) && !(rel in old.files) && !fs.readFileSync(dest, "utf8").startsWith(HEADER_PREFIX)) {
      console.error(`Refusing to overwrite ${rel}: it exists here but isn't a synced file.`);
      process.exit(1);
    }
    writes.set(rel, header(rel) + fs.readFileSync(path.join(src, rel), "utf8"));
  }

  const willExist = (rel) =>
    writes.has(rel) || (fs.existsSync(path.join(ROOT, rel)) && !(rel in old.files));

  const badImports = [];
  for (const [rel, text] of writes) {
    for (const spec of checkImports(rel, text, willExist)) badImports.push(`${rel} imports "${spec}"`);
  }
  if (badImports.length) {
    console.error("These synced files import something the app doesn't have:");
    for (const b of badImports) console.error(`  - ${b}`);
    console.error("Exclude the file in scripts/sync-content.mjs, or port what it imports.");
    process.exit(1);
  }

  let changed = 0;
  for (const [rel, text] of writes) {
    const dest = path.join(ROOT, rel);
    if (!fs.existsSync(dest) || fs.readFileSync(dest, "utf8") !== text) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, text);
      changed++;
      console.log(`updated ${rel}`);
    }
    next[rel] = sha256(Buffer.from(text));
  }
  for (const rel of Object.keys(old.files)) {
    if (!writes.has(rel) && fs.existsSync(path.join(ROOT, rel))) {
      fs.rmSync(path.join(ROOT, rel));
      changed++;
      console.log(`removed ${rel} (gone from ${SOURCE_REPO})`);
    }
  }

  // Keep the recorded commit when nothing changed, so an unrelated website
  // change doesn't produce a sync PR that only bumps this hash.
  const manifest = { source: SOURCE_REPO, commit: changed ? commit : old.commit ?? commit, files: next };
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`${changed} file(s) changed; ${writes.size} synced from ${SOURCE_REPO}@${commit?.slice(0, 7) ?? "unknown"}.`);
}

const args = process.argv.slice(2);
if (args.includes("--verify")) verify();
else {
  const i = args.indexOf("--from");
  sync(i >= 0 ? args[i + 1] : path.join(ROOT, "../lengo"), args.includes("--adopt"));
}
