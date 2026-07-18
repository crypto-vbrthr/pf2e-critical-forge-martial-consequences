# Changelog

## 0.2.1

- Added Ranged Mishaps RM-011 through RM-020.
- Expanded Ranged Mishaps to 20 cards and the module to 50 cards across two optional packs.
- Added tactical consequences involving prone cover, closing distance, crowd cover, Point Out, reactive Steps, blind spots, confidence, terrain disruption, Aid, and counterfire range estimation.
- Preserved ranged-only filtering and explicit spell-attack exclusion for every new card.
- Expanded German and English localization.
- Updated the Card Bible, pack documentation, README, and validation tests.

## 0.2.0

- Added the optional Ranged Mishaps card pack.
- Added Ranged Mishaps RM-001 through RM-010.
- Added ranged-only filtering through `attackTraits: ["ranged"]`.
- Excluded spell attacks through `excludedAttackTraits: ["spell"]`.
- Added tactical consequences for sightlines, firing positions, cover, projectile paths, shot rhythm, and range estimation.
- Added independent module settings for Martial Attack Fumbles and Ranged Mishaps.
- Expanded German and English localization.
- Updated the Card Bible, pack documentation, README, and validation tests.
- Expanded the module to 40 cards across two optional packs.

## 0.1.3

- Completed the first full mechanical review of Martial Attack Fumbles.
- Redesigned MAF-001, MAF-004, MAF-006, MAF-008, MAF-009, MAF-010, MAF-027, MAF-028, and MAF-030.
- Replaced duplicate Core-style Off-Guard, Dazzled, AC, attack-roll, and Speed penalties with tactical movement, action sequencing, target actions, claimed space, delayed movement, and flanking consequences.
- Corrected Wild Follow-Through so it resolves at ordinary adjacent melee range.
- Adjusted MAF-013 for unarmed and natural attacks by replacing the Interact requirement with a generic recovery action.
- Adjusted MAF-021 so a Strike without a multiple attack penalty does not consume the effect.
- Reduced the weight of MAF-022 and clarified common uses of Reflex DC.
- Reclassified MAF-026 as Light due to its conditional trigger.
- Added a reliable fallback reaction to MAF-029.
- Updated German and English localization, the Card Bible, pack documentation, README, and validation tests.
- Reduced automated effects from nine to four as the pack shifted toward distinctive tactical consequences.

## 0.1.2

- Added Martial Attack Fumbles MAF-021 through MAF-030.
- Completed the first 30-card Martial Attack Fumbles set.
- Added two new automated effects: Guard Too High and Eyes on the Weapon.
- Added agile-weapon, awareness, conditional-defense, reaction-economy, and target-repositioning consequences.
- Expanded German and English localization.
- Updated the Card Bible, pack documentation, README, and validation tests.
- Marked Martial Attack Fumbles as ready for its full mechanical review.

## 0.1.1

- Added Martial Attack Fumbles MAF-011 through MAF-020.
- Expanded the Martial Attack Fumbles pack to 20 cards.
- Added two new automated effects: Weight on the Wrong Foot and Forced Reset.
- Added new tactical consequences for stance, action economy, multiple attack penalty, and battlefield repositioning.
- Expanded German and English localization.
- Updated the Card Bible, pack documentation, README, and validation tests.
- Normalized the internal card collection metadata to `martial-attack-fumbles`.

## 0.1.0

- Added the Martial Consequences extension module framework.
- Added the optional Martial Attack Fumbles pack.
- Added the first 10 cards, MAF-001 through MAF-010.
- Excluded spell attacks through `excludedAttackTraits: ["spell"]`.
- Added German and English localization.
- Added pack documentation and the initial Card Bible.
- Added structural and startup-order tests.
