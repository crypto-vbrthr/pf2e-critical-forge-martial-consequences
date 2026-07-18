# Martial Consequences Card Packs

## Martial Attack Fumbles

### Current Status

- 30 of 30 planned cards
- Blocks MAF-001 through MAF-030 implemented
- Full mechanical review completed in 0.1.3

### Purpose

General critical-fumble consequences for non-spell weapon attacks.

### Trigger

Critical failure on a weapon attack. Cards exclude attacks carrying the synthetic `spell` attack trait.

### Typical Effects

- lost footing and unstable stances
- exposed defenses
- disrupted combat rhythm
- action taxes and impaired follow-up attacks
- forced or permitted repositioning
- lapses in awareness and battlefield attention
- temporary restrictions on reactions
- short-lived tactical benefits for the target

### Not Included

- damage-type-specific injuries
- persistent wounds or bleeding
- weapon destruction
- ammunition destruction
- spell attacks
- combat maneuvers and other skill actions
- ranged-weapon-specific technical mishaps

### Boundary

This pack describes general martial failure. **Ranged Mishaps** covers failures unique to bows, crossbows, firearms, thrown weapons, aiming, projectile paths, range, and firing positions.

The completed pack received a full mechanical review after reaching 30 cards. Version 0.1.3 replaced generic Off-Guard, Dazzled, AC, attack-roll, and Speed penalties with more distinctive tactical consequences. The pack now leans more strongly into movement, timing, claimed space, flanking, action sequencing, and reaction economy.

## Ranged Mishaps

### Current Status

- 30 of 30 planned cards
- Blocks RM-001 through RM-030 implemented
- Full mechanical review pending

### Purpose

Critical-fumble consequences that depend specifically on non-spell ranged weapon attacks.

### Trigger

Critical failure on an attack carrying the synthetic `ranged` attack trait. Every card excludes attacks carrying the synthetic `spell` attack trait.

```js
filters: {
  attackTraits: ["ranged"],
  excludedAttackTraits: ["spell"]
}
```

### Typical Effects

- lost or compromised sightlines
- revealed firing positions
- forced changes of firing position
- disrupted shooting or throwing rhythm
- targets moving toward cover
- projectile-path complications
- reduced protection against return fire
- mistakes in range estimation
- targets exploiting posture, crowds, blind spots, and counterfire
- nearby allies reacting to the warning provided by a miss
- projectile impacts that reshape a small piece of terrain
- shields, hiding, formation changes, close-range pressure, and counterfire setup

### Not Included

- spell attacks
- general martial errors that work equally well in melee
- damage-type-specific injuries
- permanent weapon damage
- automatic ammunition destruction
- combat maneuvers and other skill actions

### Boundary

This pack is not a second general fumble deck. A card belongs here only when its fiction and mechanics require a ranged weapon attack. General loss of stance, defense, or combat rhythm remains the domain of **Martial Attack Fumbles**. Injuries caused by piercing, slashing, or bludgeoning projectiles remain the domain of **Arsenal**.

## Planned Packs

### Martial Openings
Critical successes that create an opening on the target or help allies exploit the target's defense.

### Combat Momentum
Critical successes that benefit the attacker through position, stability, readiness, or tempo.
