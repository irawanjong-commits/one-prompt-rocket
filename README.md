# one-prompt-rocket

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/irawanjong-commits/one-prompt-rocket/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/irawanjong-commits/one-prompt-rocket/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

## About this entry

An entry for the make.fun bounty **"The agent builds a game from one prompt"**.
The entry is a short vertical video posted on X: an AI coding agent receives
exactly one prompt —

> Build a tiny browser game: pilot a rocket, dodge the asteroids, survive as
> long as you can. One single HTML file.

— writes the game while you watch, and the video ends on the finished game
actually running (it survives 16.4 seconds, score 164, before an asteroid it
cannot dodge ends the run), followed by make.fun's referral end card carrying
the entrant's referral code.

## The game

`game.html` is the finished game, exactly as prompted: one single HTML file,
no dependencies. **Rocket Dodge** — pilot the rocket with the arrow keys
(or A/D, or drag), dodge the falling asteroids, and survive as long as you
can. Open it in any browser and play.

## The program

`main.ts` (Node 22, standard library only) is the entry program the grader
runs: it copies `POST.json` — which names the X post that is the entry — from
the repository root to the output directory.

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## The post

The X post that is this entry is live:
https://x.com/Wilayyyy/status/2125274423582392379 — its address is recorded
in `POST.json`.
