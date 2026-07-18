import { defineMartialAttackFumble, DURATIONS } from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const MARTIAL_ATTACK_FUMBLE_CARDS = Object.freeze([
  defineMartialAttackFumble({
    id: "maf-001-lost-footing", localizationKey: "LostFooting",
    tone: "neutral", impact: "light", fallbackTitle: "Lost Footing",
    fallbackDescription: "Your footing slips at the worst possible moment. You are off-guard for 1 round.",
    weight: 2, tags: ["stance", "defense"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "off-guard" }] }
  }),
  defineMartialAttackFumble({
    id: "maf-002-overextended-swing", localizationKey: "OverextendedSwing",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Overextended Swing",
    fallbackDescription: "Your attack carries you too far. The target may immediately Step as a free action.",
    tags: ["positioning", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-003-broken-guard", localizationKey: "BrokenGuard",
    tone: "serious", impact: "light", fallbackTitle: "Broken Guard",
    fallbackDescription: "Your weapon finishes wide. The next attack made against you before the start of your next turn gains a +1 circumstance bonus.",
    weight: 2, tags: ["defense", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-004-slippery-grip", localizationKey: "SlipperyGrip",
    tone: "neutral", impact: "light", fallbackTitle: "Slippery Grip",
    fallbackDescription: "Your grip shifts unexpectedly. You take a -1 circumstance penalty to attack rolls for 1 round.",
    weight: 2, tags: ["weapon-control", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "attack-roll", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineMartialAttackFumble({
    id: "maf-005-lost-rhythm", localizationKey: "LostRhythm",
    tone: "dramatic", impact: "strong", fallbackTitle: "Lost Rhythm",
    fallbackDescription: "The failed strike disrupts your combat rhythm. You cannot use reactions until the start of your next turn.",
    tags: ["action-economy", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-006-wild-follow-through", localizationKey: "WildFollowThrough",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Wild Follow-Through",
    fallbackDescription: "The momentum pulls you out of position. If possible, Step 5 feet in the direction of the attempted attack.",
    tags: ["positioning", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-007-hesitation", localizationKey: "Hesitation",
    tone: "serious", impact: "light", fallbackTitle: "Hesitation",
    fallbackDescription: "You second-guess your next move. The first Strike you make before the end of your next turn takes a -1 circumstance penalty.",
    weight: 2, tags: ["timing", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-008-distracted-recovery", localizationKey: "DistractedRecovery",
    tone: "serious", impact: "moderate", fallbackTitle: "Distracted Recovery",
    fallbackDescription: "Recovering from the miss steals your attention from the battlefield. You are dazzled for 1 round.",
    tags: ["senses", "control"],
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "dazzled" }] }
  }),
  defineMartialAttackFumble({
    id: "maf-009-defensive-collapse", localizationKey: "DefensiveCollapse",
    tone: "serious", impact: "moderate", fallbackTitle: "Defensive Collapse",
    fallbackDescription: "Your failed attack leaves your defenses out of position. You take a -1 circumstance penalty to AC for 1 round.",
    tags: ["defense", "debuff"],
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "ac", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineMartialAttackFumble({
    id: "maf-010-unsteady-recovery", localizationKey: "UnsteadyRecovery",
    tone: "neutral", impact: "light", fallbackTitle: "Unsteady Recovery",
    fallbackDescription: "It takes longer than expected to regain your footing. All your Speeds are reduced by 5 feet for 1 round.",
    weight: 2, tags: ["movement", "recovery"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "movement", movementType: "all", value: -5, modifierType: "circumstance" }] }
  }),
  defineMartialAttackFumble({
    id: "maf-011-twisted-stance", localizationKey: "TwistedStance",
    tone: "neutral", impact: "moderate", fallbackTitle: "Twisted Stance",
    fallbackDescription: "Your body turns awkwardly after the miss. You cannot Step until the end of your next turn.",
    tags: ["stance", "movement", "manual"], filters: { excludedSourceTraits: ["incorporeal"] }
  }),
  defineMartialAttackFumble({
    id: "maf-012-weight-on-the-wrong-foot", localizationKey: "WeightOnTheWrongFoot",
    tone: "serious", impact: "light", fallbackTitle: "Weight on the Wrong Foot",
    fallbackDescription: "You settle your weight badly. You take a -1 circumstance penalty to Reflex saves for 1 round.",
    weight: 2, tags: ["stance", "defense", "debuff"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineMartialAttackFumble({
    id: "maf-013-late-recovery", localizationKey: "LateRecovery",
    tone: "dramatic", impact: "strong", fallbackTitle: "Late Recovery",
    fallbackDescription: "Your attack recovers too slowly. Before you can Strike again this turn, you must spend an Interact action to reset your stance. This restriction ends at the start of your next turn.",
    tags: ["recovery", "action-economy", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-014-tempo-broken", localizationKey: "TempoBroken",
    tone: "serious", impact: "strong", fallbackTitle: "Tempo Broken",
    fallbackDescription: "Your attack sequence falls apart. Treat the next Strike you make before the end of your next turn as though you had already made one additional attack that turn for the purpose of your multiple attack penalty.",
    tags: ["timing", "multiple-attack-penalty", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-015-forced-reset", localizationKey: "ForcedReset",
    tone: "neutral", impact: "moderate", fallbackTitle: "Forced Reset",
    fallbackDescription: "You must rebuild your stance from the ground up. You are clumsy 1 for 1 round. You may spend a single action to steady yourself and remove this effect early.",
    tags: ["stance", "recovery", "control", "manual-removal"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "condition", slug: "clumsy", value: 1 }] }
  }),
  defineMartialAttackFumble({
    id: "maf-016-open-lane", localizationKey: "OpenLane",
    tone: "dramatic", impact: "strong", fallbackTitle: "Open Lane",
    fallbackDescription: "Your miss opens a route past you. The target may immediately Stride up to 10 feet as a free action. This movement does not trigger reactions from you.",
    tags: ["positioning", "enemy-movement", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-017-driven-aside", localizationKey: "DrivenAside",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Driven Aside",
    fallbackDescription: "The target controls your recovery. If possible, it chooses a safe, unoccupied space adjacent to you, and you Step into that space.",
    tags: ["positioning", "forced-movement", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-018-lost-ground", localizationKey: "LostGround",
    tone: "neutral", impact: "moderate", fallbackTitle: "Lost Ground",
    fallbackDescription: "You surrender ground to regain your balance. If possible, Step 5 feet directly away from the target.",
    tags: ["positioning", "forced-movement", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-019-crowded-position", localizationKey: "CrowdedPosition",
    tone: "serious", impact: "light", fallbackTitle: "Crowded Position",
    fallbackDescription: "Your recovery crowds your allies' fighting space. Until the start of your next turn, you take a -1 circumstance penalty to attack rolls while adjacent to an ally.",
    weight: 2, tags: ["positioning", "allies", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-020-weapon-out-of-line", localizationKey: "WeaponOutOfLine",
    tone: "serious", impact: "moderate", fallbackTitle: "Weapon Out of Line",
    fallbackDescription: "Your attack leaves the weapon far outside its fighting line. The next Strike you make with the same weapon or unarmed attack before the end of your next turn takes a -2 circumstance penalty. A different weapon or unarmed attack is unaffected.",
    tags: ["weapon-control", "tactical-choice", "manual"]
  })
]);
