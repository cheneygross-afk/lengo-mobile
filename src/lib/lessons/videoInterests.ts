// Synced from cheneygross-afk/lengo:src/lib/lessons/videoInterests.ts by scripts/sync-content.mjs -- edit it there, not here.
// Which of the six interest topics (interests.ts) each linked video is
// about, so a learner's videos can lead with what they are into. Only
// videos whose title is clearly about a topic are tagged; the rest stay
// where they are. Used by the level watch list and, in the redesign
// preview, to offer a video on the lesson's topic.
import { topicRotation, type InterestProfile, type InterestTopic } from "../interests";
import { LEVEL_WATCH_VIDEOS, type LessonVideo } from "./lessonVideos";
import type { SpanishLevelPath } from "./levels";

const BY_TOPIC: Record<InterestTopic, string[]> = {
  food: [
    "49dp2lDULr8", "jDPGnj1DAg4", "KwwlRhFhF5I", "z3UN34gkWQw", "gUGPeMAFZtA", "gUFFliB-D0w", "aZnXBVrpeq0", "XsQT0DygbJg",
    "TiHikPlDXr8", "_raLMEnUGbI", "5zUgZA6_YoU", "oYBl3CcVmZ4", "4p4L31m8LXQ", "PqiOLBvjMyw", "RBMkZlAeTTQ", "BrT7qDT56SQ",
    "dMpaxy9RSPM", "6CwX_8xM8eE", "On4Uroj5xCY", "0rMUfn7BA8Y", "LTXWPfNhXzI", "fcYeXCacyrk", "3LrZQjEcneI", "G7-5DCXbPx4",
    "qeVONnXobOY", "wnwjcJfC-1U", "FbzSztEoNYk", "XQFdw1Fp4dQ", "sgGpTomFMcU", "7nh5k2xVT9I",
  ],
  sports: ["UPHmXouXHdM", "ULUlPBcgABY", "a6G1bmXayls", "ISBxZXSDgWE", "E1R1P_NyvF8", "6C_G5NXJajU", "jpeNrCCm4ZU"],
  travel: [
    "sgGpTomFMcU", "pHT1baomLJk", "NNwIcU2a2sE", "sOduX-pwufc", "p5ZHNWifka4", "Y9GdBSsllWA", "_Fn7_qP9vlc", "5EIlaOWF5fw",
    "xVS2GLMgh8I", "S6lF6yThw54", "sypG8LmcDvI", "bUImA2SXaZY", "kI3PuL07a5Q", "H2yxSYUEkEc", "7x4anDYN_3c", "7Iu19NxSe3w",
    "bCPU7lfV9TI", "Fy15p9swnV4", "9LkjKEpvEmE", "BUVgxjrLGvc", "epRoztxFC8k", "Vbm1Z9Qjy0Q", "Cfh1g9Yn7-U", "rMLfEL02QeY",
    "BhwnAYvzhm4", "ov2Q5uEuB-w", "O4liq0hTr2o", "eKVxRAzq0Jc", "zIR2eBtkhN0", "dB-btbvrRLM", "zUup-lRefn8", "OBZu4T-01Jg",
    "cneeDbhaffo", "9GZWcx7_wXA", "CTHoo_eIiIA", "7nh5k2xVT9I", "UcZmsHERcDs", "I3kS2f94qvo", "Sebrv96h2Ak", "pfmbBhG24YE",
    "FhGr5oW27z4", "QMI9YegGels", "BHPBQMwrsT8", "Nvcr_dvP-S0", "-juyR8dX2fw", "vmp7gnY3E58", "-oVGKqOQtXI", "hHbgRS5A-yI",
    "QB4efS_sbqs", "YbahIjEG2i4", "SDk0N2QoC_4", "TKPR5GFF4qQ", "yG80JZbOtbg", "RYeYeB7y11w", "dmXUtGZVsks",
  ],
  arts: [
    "OrszUmEdk4Y", "6Vqr8pjH_5Q", "4j-bCVCeLfo", "oWDYCzZbaSc", "bHsJMDhroiA", "TfNAo3OWXkI", "np8bQxtiNzI", "WekEN6S5-S0",
    "3DntxjPjJ34", "C7R6p9YWzbg", "jvbiARc1dyA", "lt-Ee9rZyhM", "7fVKkgqaTjk", "asazqcTcZlM", "mL6_AIrInWo", "6Mq-DJMMeRk",
    "FOIPy_cmoX4", "P5oergPAcXs", "S9WahQFFAw4", "N0v2qauFV6s",
  ],
  work: [
    "0-Y0ayj9F-w", "76_kYx7s6pI", "-BJfyi_PS50", "MGKJ95A7VkA", "8ogT5co7DTU", "eQIJumlvH-E", "4LR0WiVtBx4", "Tp_EZBYavWE",
    "Nvcr_dvP-S0", "sQND3WdnIjg", "fdyEWiPFS-I", "mkfaM6Psv8c", "iHew_Vgtw5Q",
  ],
  "daily-life": [
    "KQ76zWZSmbg", "jY5JMBCLBlk", "4tUEXGXmTng", "5YrrZ2RPmx4", "Tf0VsnEzRKo", "b5Y1GXIhuNY", "f7Xo3abyf60", "3G5dIfIrQAE",
    "gjOdUIpyus0", "82nmyWfWBYg", "2wlMlDON1rg", "iUdr4TKO65E", "m77OOFdnLfE", "LgJ3UGrdt1k", "KTnxevIcYSA", "b4ALAtrJVuw",
    "ybfyLfI5Ml0", "hC-zjqsDYcE", "xyVZDmzt6HY", "LDjkk6fWTQ8", "eWEHnBjI6Gc", "WCoBT1x1abk", "mECAxJYzj0Y", "AAs42Kh-m5g",
    "vBBX139AClA", "relDmMP55wM", "SDcJPk62qG0", "tdp_dz24bWc", "92PMSjsf3Ss", "x95lZUdAdCc", "FD3cN1rUOYo", "jrRJQBB4oKs",
  ],
};

/** videoId -> the interest topics it is about. */
export const VIDEO_INTERESTS: Record<string, InterestTopic[]> = (() => {
  const out: Record<string, InterestTopic[]> = {};
  for (const [topic, ids] of Object.entries(BY_TOPIC) as [InterestTopic, string[]][]) for (const id of ids) (out[id] ??= []).push(topic);
  return out;
})();

export function interestsOf(video: LessonVideo): InterestTopic[] {
  return VIDEO_INTERESTS[video.videoId] ?? [];
}

/** The same videos with the learner's topics first (favourite first), each
 * group in its original order. Unchanged for a learner with no picks. */
export function orderForLearner(videos: LessonVideo[], profile: InterestProfile | null): LessonVideo[] {
  if (!profile || !profile.topics.length) return videos;
  const rotation = topicRotation(profile);
  const rank = (v: LessonVideo) => {
    const hits = interestsOf(v).map((t) => rotation.indexOf(t)).filter((i) => i >= 0);
    return hits.length ? Math.min(...hits) : rotation.length;
  };
  return videos.map((v, i) => ({ v, i, r: rank(v) })).sort((a, b) => a.r - b.r || a.i - b.i).map((x) => x.v);
}

/** A level's watch-list videos on one topic. */
export function videosOnTopic(levelPath: SpanishLevelPath, topic: InterestTopic): LessonVideo[] {
  return (LEVEL_WATCH_VIDEOS[levelPath] ?? []).filter((v) => interestsOf(v).includes(topic));
}

const LEVELS: SpanishLevelPath[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

/** A video on `topic` for the nth unit of a level (0-based), so units in
 * one level don't all offer the same one. Falls back to the nearest level
 * that has a video on the topic, easier levels first; null if none. */
export function videoForUnit(levelPath: SpanishLevelPath, topic: InterestTopic, n: number): LessonVideo | null {
  const at = LEVELS.indexOf(levelPath);
  const order = [...LEVELS].sort((a, b) => Math.abs(LEVELS.indexOf(a) - at) - Math.abs(LEVELS.indexOf(b) - at) || LEVELS.indexOf(a) - LEVELS.indexOf(b));
  for (const lvl of order) {
    const list = videosOnTopic(lvl, topic);
    if (list.length) return list[((n % list.length) + list.length) % list.length];
  }
  return null;
}
