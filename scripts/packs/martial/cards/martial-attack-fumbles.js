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
  })
]);
