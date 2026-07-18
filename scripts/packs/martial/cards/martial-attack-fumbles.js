import { defineMartialAttackFumble, DURATIONS } from "../card-factory.js";

const { ONE_ROUND } = DURATIONS;

export const MARTIAL_ATTACK_FUMBLE_CARDS = Object.freeze([
  defineMartialAttackFumble({
    id: "maf-001-lost-footing", localizationKey: "LostFooting",
    tone: "neutral", impact: "light", fallbackTitle: "Lost Footing",
    fallbackDescription: "Your footing slips as you recover. The first square you enter before the end of your next turn costs 5 additional feet of movement.",
    weight: 2, tags: ["stance", "movement", "manual"], filters: { excludedSourceTraits: ["incorporeal"] }
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
    fallbackDescription: "Your grip shifts unexpectedly. The next Strike you make with the same weapon or unarmed attack before the end of your next turn must be either your first action or your last action of that turn.",
    weight: 2, tags: ["weapon-control", "action-sequencing", "manual"]
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
    fallbackDescription: "The target may immediately Step directly away from you. If it does and you can enter a square it vacated, you must Step into one such square.",
    tags: ["positioning", "enemy-movement", "forced-movement", "manual"], filters: { attackTraits: ["melee"] }
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
    fallbackDescription: "Recovering from the miss steals your attention from the battlefield. The target may immediately attempt to Feint against you as a free action.",
    tags: ["attention", "target-action", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-009-defensive-collapse", localizationKey: "DefensiveCollapse",
    tone: "serious", impact: "moderate", fallbackTitle: "Defensive Collapse",
    fallbackDescription: "Your failed attack leaves your defense open at close range. Until the start of your next turn, the target may move through your space without attempting to Tumble Through, treating your space as difficult terrain.",
    tags: ["defense", "positioning", "enemy-movement", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-010-unsteady-recovery", localizationKey: "UnsteadyRecovery",
    tone: "neutral", impact: "light", fallbackTitle: "Unsteady Recovery",
    fallbackDescription: "It takes longer than expected to regain your footing. The first move action you use before the end of your next turn must end farther from the target than you began, if possible.",
    weight: 2, tags: ["movement", "recovery", "positioning", "manual"], filters: { excludedSourceTraits: ["incorporeal"] }
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
    fallbackDescription: "Your attack recovers too slowly. Before you can Strike again this turn, you must spend one action to recover your stance. This restriction ends at the start of your next turn.",
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
  }),
  defineMartialAttackFumble({
    id: "maf-021-awkward-regrip", localizationKey: "AwkwardRegrip",
    tone: "neutral", impact: "moderate", fallbackTitle: "Awkward Regrip",
    fallbackDescription: "Your quick weapon slips into an awkward grip. The next Strike you make with the same weapon or unarmed attack before the end of your next turn that is subject to a multiple attack penalty does not benefit from the agile trait. A Strike made with no multiple attack penalty does not consume this effect.",
    tags: ["weapon-control", "multiple-attack-penalty", "manual"], filters: { attackTraits: ["agile"] }
  }),
  defineMartialAttackFumble({
    id: "maf-022-guard-too-high", localizationKey: "GuardTooHigh",
    tone: "serious", impact: "light", fallbackTitle: "Guard Too High",
    fallbackDescription: "Your guard rises too far and leaves your balance exposed. You take a -1 circumstance penalty to your Reflex DC for 1 round. This affects actions such as Trip and Tumble Through.",
    tags: ["defense", "stance", "debuff"], filters: { excludedSourceTraits: ["incorporeal"] },
    effect: { duration: ONE_ROUND, components: [{ type: "modifier", selector: "reflex-dc", value: -1, modifierType: "circumstance", predicate: [] }] }
  }),
  defineMartialAttackFumble({
    id: "maf-023-guard-too-low", localizationKey: "GuardTooLow",
    tone: "serious", impact: "light", fallbackTitle: "Guard Too Low",
    fallbackDescription: "Your weapon drops below the line needed to answer an incoming attack. Until the start of your next turn, you cannot use reactions that require you to make a melee Strike.",
    weight: 2, tags: ["defense", "reaction", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-024-eyes-on-the-weapon", localizationKey: "EyesOnTheWeapon",
    tone: "neutral", impact: "moderate", fallbackTitle: "Eyes on the Weapon",
    fallbackDescription: "You watch your own weapon instead of the battlefield. You take a -1 circumstance penalty to Perception and Perception DC for 1 round.",
    tags: ["attention", "perception", "debuff"],
    effect: { duration: ONE_ROUND, components: [
      { type: "modifier", selector: "perception", value: -1, modifierType: "circumstance", predicate: [] },
      { type: "modifier", selector: "perception-dc", value: -1, modifierType: "circumstance", predicate: [] }
    ] }
  }),
  defineMartialAttackFumble({
    id: "maf-025-tunnel-vision", localizationKey: "TunnelVision",
    tone: "dramatic", impact: "strong", fallbackTitle: "Tunnel Vision",
    fallbackDescription: "You focus so completely on the target that the rest of the battlefield disappears. Until the start of your next turn, you are off-guard to attacks made by creatures other than the target.",
    tags: ["attention", "defense", "conditional", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-026-missed-threat", localizationKey: "MissedThreat",
    tone: "serious", impact: "light", fallbackTitle: "Missed Threat",
    fallbackDescription: "Your failed attack hides another threat from view. Before the start of your next turn, the next creature other than the target that moves within or leaves your reach does not trigger reactions from you.",
    tags: ["attention", "reaction", "movement", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-027-false-opening", localizationKey: "FalseOpening",
    tone: "dramatic", impact: "moderate", fallbackTitle: "False Opening",
    fallbackDescription: "You commit to an opening that was never there. Until the end of your next turn, the target gains a one-use reaction: after you complete an attack against it, the target Steps.",
    tags: ["timing", "target-movement", "reaction", "one-use", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-028-exposed-flank", localizationKey: "ExposedFlank",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Exposed Flank",
    fallbackDescription: "Your miss leaves one side completely open. The target chooses one square adjacent to you. Until the start of your next turn, you cannot enter that square or use reactions triggered by movement into or out of it.",
    tags: ["positioning", "claimed-space", "reaction", "manual"], filters: { attackTraits: ["melee"] }
  }),
  defineMartialAttackFumble({
    id: "maf-029-reaction-bait", localizationKey: "ReactionBait",
    tone: "dramatic", impact: "strong", fallbackTitle: "Reaction Bait",
    fallbackDescription: "Your recovery practically invites a counter. Until the start of your next turn, the target gains one additional reaction that it can use only when one of your actions satisfies the reaction's normal trigger and requirements. If the target has no eligible reaction, it may instead use this reaction to Step after you complete a move action.",
    tags: ["action-economy", "target-benefit", "reaction", "manual"]
  }),
  defineMartialAttackFumble({
    id: "maf-030-guarded-the-wrong-side", localizationKey: "GuardedTheWrongSide",
    tone: "serious", impact: "light", fallbackTitle: "Guarded the Wrong Side",
    fallbackDescription: "You guard the wrong side of the engagement. Until the start of your next turn, you do not count as threatening any space for the purpose of helping an ally flank a creature.",
    tags: ["defense", "flanking", "conditional", "manual"]
  })
]);
