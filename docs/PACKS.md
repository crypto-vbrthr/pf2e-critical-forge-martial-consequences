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
- Full mechanical review completed in 0.2.3

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

The completed pack received a full mechanical review after reaching 30 cards. Version 0.2.3 replaced redundant movement delays, generic free Steps, narrow reaction restrictions, invalid Point Out and Aid usage, and several conditional no-result outcomes. The pack now leans more strongly into firing-position exposure, cover decisions, predictable firing lanes, delayed target reactions, environmental trajectory complications, counterfire information, and defensive coordination.

## Martial Openings

### Current Status

- 30 of 30 planned cards
- Blocks MO-001 through MO-030 implemented
- Full mechanical review passed in version 0.3.3

### Purpose

Critical-hit consequences that turn a successful non-spell Strike into a tactical opportunity for allies.

### Trigger

Critical success on a non-spell Strike. The pack does not require a weapon trait and therefore includes weapon attacks, unarmed attacks, and natural attacks. Every card excludes attacks carrying the synthetic `spell` attack trait.

```js
filters: {
  excludedAttackTraits: ["spell"]
}
```

### Typical Effects

- one-use bonuses for an ally's follow-up attack or skill action
- ally movement and formation changes
- temporary limits on reactions against an ally
- cleared lines of fire and reduced creature-provided cover
- pursuit reactions and movement through the target's space
- opportunities to Take Cover or Hide while the target is distracted
- safe manipulate actions, equipment adjustments, and reloading windows
- free Stand, Escape, Interact, Recall Knowledge, and engagement opportunities
- formation disruption, reduced flanking support, and concealment counterplay
- shield and parry openings, coordinated exchanges, item hand-offs, defensive setup, containment, and chained team actions

### Not Included

- additional damage or damage-type-specific injuries
- persistent wounds, bleeding, or broken equipment
- spell attacks
- bonuses that primarily benefit the attacker; those belong to **Combat Momentum**
- generic target debuffs that do not create a recognizable team opportunity

### Boundary

**Martial Openings** changes what allies can do because the target's defense has been disrupted. **Combat Momentum** instead changes what the attacker can do because the attacker has seized the rhythm of the fight. Arsenal remains responsible for physical injuries and damage-type-specific consequences.

All three blocks deliberately use manual one-use effects, immediate movement, reaction windows, free actions, and source-specific opportunities. These mechanics preserve the pack's teamplay identity more clearly than broad automated penalties would.

The version 0.3.3 mechanical review redesigned five cards to reduce repeated Step and fixed attack-bonus patterns. It also added reliable fallbacks, conditional consumption, pursuit that can answer a normal Stride, a rules-clear coordinated exchange, chained reaction denial, and a containment reaction using Grapple or Trip.

## Combat Momentum

### Current Status

- 10 of 30 planned cards
- Block CM-001 through CM-010 implemented
- Mechanical review scheduled after CM-030

### Purpose

Critical-hit consequences that turn a successful non-spell melee Strike into personal momentum for the attacker.

### Trigger

Critical success on a non-spell melee Strike. The pack requires the synthetic `melee` attack trait and excludes attacks carrying the synthetic `spell` attack trait. It includes melee weapons, unarmed melee attacks, and natural melee attacks.

```js
filters: {
  attackTraits: ["melee"],
  excludedAttackTraits: ["spell"]
}
```

### Typical Effects

- immediate repositioning while maintaining pressure
- defensive recovery through shields, parries, or guarded follow-through
- changing targets without losing the attack sequence
- longer movement carried by the successful strike
- reduced multiple attack penalty for one follow-up
- temporary protection from the target's reactions
- occupying space vacated by a retreating target
- immediate Feint, Demoralize, Grapple, or Trip attempts
- resistance to retaliatory Shove, Reposition, or Trip attempts

### Not Included

- benefits for allies; those belong to **Martial Openings**
- additional damage or damage-type-specific injuries
- spell attacks
- ranged attacks, including thrown ranged attacks; critical ranged hits are reserved for a separate future extension
- permanent equipment changes

### Boundary

**Combat Momentum** changes what the attacker can do because the attacker has seized the rhythm of melee combat. **Martial Openings** changes what allies can do because the target's defense has been disrupted. Arsenal remains responsible for injury and damage-type-specific consequences.

The first block is manually resolved because its effects rely on one-use timing, immediate free actions, action sequencing, source-specific reaction denial, target switching, and movement into vacated spaces.
