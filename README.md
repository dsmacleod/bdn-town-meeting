# BDN Town Meeting

An interactive news game by **Michael Shepherd** for the [Bangor Daily News](https://www.bangordailynews.com), built with Claude AI.

## The game

It's budget season in Newsville, Maine. The fire truck question is dividing the town. Pick one of two characters and navigate public hearings, door-to-door canvassing, and a live town meeting vote. Every playthrough generates a unique BDN front page based on your decisions.

**Steve Selectman** — Incumbent. Win re-election and block the $1M fire truck.

**Darlene Democracy** — Challenger. Win the seat and get the truck approved.

## How it works

Each character has a three-phase campaign leading to town meeting. Canvassing uses an argument-choice system — you read voter profiles and pick your pitch. Board presentations and BDN letters offer strategic approaches with variable outcomes. A procedural wildcard motion tests your instincts on the floor. The final BDN front page is dynamically written from every decision you made.

Scoring tracks phase completion, skill (choices and arguments), and luck. A backstory system generates randomized BDN coverage that shapes each run's political environment.

The Select Board election uses a written secret ballot counted by the town clerk, consistent with Maine municipal law (Title 30-A).

## Tracking

Player sessions are logged to a private Google Sheet when a player submits their score. Each row captures a session ID, display name, email, character, the sequence of in-game decisions, and the final score and outcome. Email addresses are never displayed publicly.

## Embed

```html
<iframe src="https://dsmacleod.github.io/bdn-town-meeting/"
  width="100%" height="900" frameborder="0"
  style="max-width:840px;margin:0 auto;display:block;"></iframe>
```

## Credits

Game written by **Michael Shepherd** using Claude AI.
