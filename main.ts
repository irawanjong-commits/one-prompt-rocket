// Entry program for the make.fun bounty "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709). Node 22, standard library only.
//
// The entry itself is a post on X: a short video of an AI coding agent building
// the tiny browser game in this repository (game.html) from a single prompt,
// ending with make.fun's referral end card. POST.json at the repository root
// names that post. All this program has to do is hand POST.json to the gate:
// it copies it from the repository root (MAKEFUN_BOT_DIR, /bot in the grader)
// to the output directory (MAKEFUN_OUTPUT_DIR, /output in the grader).
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
