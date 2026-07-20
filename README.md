# PF2E Critical Forge: Martial Consequences

*Expand Critical Forge with tactical consequences that shape the flow of battle.*

Martial Consequences is an extension module for **PF2E Critical Forge**. It adds card packs focused on stance, timing, positioning, openings, and battlefield momentum.

## Version 0.4.3

The current release contains four optional packs:

- **Martial Attack Fumbles** — 30 cards for critical failures on non-spell weapon attacks.
- **Ranged Mishaps** — 30 cards for critical failures unique to non-spell ranged attacks.
- **Martial Openings** — 30 cards for critical hits with non-spell Strikes that create tactical opportunities for allies.
- **Combat Momentum** — 30 cards for critical hits with non-spell melee Strikes that benefit the attacker.

The packs deliberately avoid damage-type-specific injuries. Those belong to **PF2E Critical Forge: Arsenal**. Martial Consequences instead asks how a critical attack changes the next few moments of the fight.

## Installation

Install and enable both modules:

1. PF2E Critical Forge
2. PF2E Critical Forge: Martial Consequences

Then enable the desired card packs in the module settings. Each pack can be activated independently.

## Pack Boundaries

**Martial Attack Fumbles** covers general failures of stance, timing, positioning, and combat rhythm. It applies to non-spell weapon attacks in both melee and ranged combat unless an individual card narrows the filter further.

**Ranged Mishaps** covers failures that depend specifically on ranged combat: sightlines, cover, firing positions, trajectory, range estimation, and shot rhythm. Every card requires the synthetic `ranged` attack trait and excludes `spell`.

**Martial Openings** covers critical hits with non-spell Strikes, including weapon, unarmed, and natural attacks. Its cards create opportunities for allies rather than additional injuries or personal momentum for the attacker.

**Combat Momentum** covers critical hits with non-spell melee Strikes, including melee weapons, unarmed attacks, and natural melee attacks. Its cards benefit the attacker through movement, defense, control, and follow-through. Ranged critical hits are intentionally reserved for a separate future extension.

## Automation

Four Martial Attack Fumbles create applicable Critical Forge effects. The remaining 26 Martial Attack Fumbles, all 30 Ranged Mishaps, all 30 Martial Openings, and all 30 Combat Momentum cards describe tactical consequences that require manual resolution because the current Effect Engine does not model immediate movement, one-use or source-specific modifiers, action taxes, multiple-attack-penalty changes, claimed spaces, extra reactions, temporary reaction restrictions, cover changes, visibility changes, range-increment changes, or action sequencing, fortune effects, temporary reaction windows, stance entry, out-of-turn multiple-attack-penalty handling, or temporary reach changes.

**Forced Reset** creates an automated effect that may be removed manually when the affected creature spends the action described by the card.

## Review Status

**Martial Attack Fumbles** completed its first full mechanical review in version 0.1.3. Nine redundant or impractical cards were redesigned, and five additional cards received targeted clarity, weight, or reliability adjustments.

**Ranged Mishaps** completed its first full mechanical review in version 0.2.3. Nine cards were redesigned to remove cross-pack overlap, invalid action usage, and empty conditional outcomes. Seven additional cards received targeted rules, reliability, impact, or wording adjustments.

**Martial Openings** completed its first full mechanical review in version 0.3.3. Five cards were redesigned to reduce repeated Step and fixed attack-bonus patterns, and nine cards received targeted rules, fallback, consumption, impact, or timing adjustments.

**Combat Momentum** completed its first full mechanical review in version 0.4.3. Six cards were redesigned to remove direct mirrors of Martial Openings and Core content, and twelve cards received timing, fallback, action-economy, stance, reaction, or out-of-turn corrections.

## Planned Packs

- Martial Attack Fumbles — 30/30, mechanical review passed
- Ranged Mishaps — 30/30, mechanical review passed
- Martial Openings — 30/30, mechanical review passed
- Combat Momentum — 30/30, mechanical review passed

Each completed pack contains 30 cards and has received a dedicated mechanical review for redundant mechanics, overlapping themes, balance, timing, and rules clarity. The next review stage can now examine identity, narrative consistency, localization, and module-wide statistics.

See [docs/PACKS.md](docs/PACKS.md) and [docs/CARD_BIBLE.md](docs/CARD_BIBLE.md).
