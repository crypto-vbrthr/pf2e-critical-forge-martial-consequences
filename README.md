# PF2E Critical Forge: Martial Consequences

*Expand Critical Forge with tactical consequences that shape the flow of battle.*

Martial Consequences is an extension module for **PF2E Critical Forge**. It adds card packs focused on stance, timing, positioning, openings, and battlefield momentum.

## Version 0.2.1

The current release contains two optional packs:

- **Martial Attack Fumbles** — 30 cards for critical failures on non-spell weapon attacks.
- **Ranged Mishaps** — 20 cards for critical failures unique to non-spell ranged weapon attacks.

The packs deliberately avoid damage-type-specific injuries. Those belong to **PF2E Critical Forge: Arsenal**. Martial Consequences instead asks how the failed attack changes the next few moments of the fight.

## Installation

Install and enable both modules:

1. PF2E Critical Forge
2. PF2E Critical Forge: Martial Consequences

Then enable the desired card packs in the module settings. Each pack can be activated independently.

## Pack Boundaries

**Martial Attack Fumbles** covers general failures of stance, timing, positioning, and combat rhythm. It applies to non-spell weapon attacks in both melee and ranged combat unless an individual card narrows the filter further.

**Ranged Mishaps** covers failures that depend specifically on ranged combat: sightlines, cover, firing positions, trajectory, range estimation, and shot rhythm. Every card requires the synthetic `ranged` attack trait and excludes `spell`.

## Automation

Four Martial Attack Fumbles create applicable Critical Forge effects. The remaining 26 Martial Attack Fumbles and all 20 current Ranged Mishaps describe tactical consequences that require manual resolution because the current Effect Engine does not model immediate movement, one-use or source-specific modifiers, action taxes, multiple-attack-penalty changes, claimed spaces, extra reactions, temporary reaction restrictions, cover changes, visibility changes, range-increment changes, or action sequencing.

**Forced Reset** creates an automated effect that may be removed manually when the affected creature spends the action described by the card.

## Review Status

Martial Attack Fumbles completed its first full mechanical review in version 0.1.3. Nine redundant or impractical cards were redesigned, and five additional cards received targeted clarity, weight, or reliability adjustments.

Ranged Mishaps now contains its first two 10-card development blocks. It will receive a full mechanical review after reaching 30 cards.

## Planned Packs

- Martial Attack Fumbles — 30/30, mechanical review passed
- Ranged Mishaps — 20/30
- Martial Openings — planned
- Combat Momentum — planned

Each completed pack is planned to contain 30 cards. After reaching 30 cards, each pack receives a dedicated review for redundant mechanics, overlapping themes, balance, and identity.

See [docs/PACKS.md](docs/PACKS.md) and [docs/CARD_BIBLE.md](docs/CARD_BIBLE.md).
