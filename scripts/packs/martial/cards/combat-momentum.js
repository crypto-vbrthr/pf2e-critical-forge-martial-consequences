import { defineCombatMomentum } from "../card-factory.js";

export const COMBAT_MOMENTUM_CARDS = Object.freeze([
  defineCombatMomentum({
    id: "cm-001-press-the-advantage", localizationKey: "PressTheAdvantage",
    tone: "serious", impact: "light", fallbackTitle: "Press the Advantage",
    fallbackDescription: "The hit gives you exactly the space you need. You may immediately Step as a free action. You must end adjacent to the target.",
    weight: 2, tags: ["self-movement", "step", "positioning", "free-action", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-002-guard-on-the-return", localizationKey: "GuardOnTheReturn",
    tone: "neutral", impact: "moderate", fallbackTitle: "Guard on the Return",
    fallbackDescription: "Your attack returns to guard almost by itself. You may immediately Raise a Shield or use a single action granted by a parry trait as a free action. If neither option would improve your defense, the next attack the target makes against you before the start of your next turn takes a -1 circumstance penalty. The penalty is then consumed.",
    tags: ["self-defense", "shield", "parry", "fallback-penalty", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-003-next-in-line", localizationKey: "NextInLine",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Next in Line",
    fallbackDescription: "Choose a different enemy you can perceive. If your next action this turn is a melee Strike against that enemy, you may Step once immediately before the Strike as part of the same action. You must end with that enemy in reach; otherwise, you cannot use this Step.",
    tags: ["target-switch", "step", "action-sequence", "self-movement", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-004-longer-stride", localizationKey: "LongerStride",
    tone: "neutral", impact: "light", fallbackTitle: "Longer Stride",
    fallbackDescription: "The successful attack carries your movement forward. The next time you Stride before the start of your next turn, you may move 5 feet farther than your Speed. The benefit is then consumed.",
    weight: 2, tags: ["self-movement", "stride", "speed", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-005-rhythm-carries", localizationKey: "RhythmCarries",
    tone: "dramatic", impact: "strong", fallbackTitle: "Rhythm Carries",
    fallbackDescription: "The critical hit locks your next attack into the same rhythm. For your next melee Strike before the end of this turn, reduce your multiple attack penalty by 2. This cannot reduce the penalty below 0, and the benefit is then consumed.",
    tags: ["multiple-attack-penalty", "follow-up-strike", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-006-no-time-to-answer", localizationKey: "NoTimeToAnswer",
    tone: "serious", impact: "moderate", fallbackTitle: "No Time to Answer",
    fallbackDescription: "The target is still reacting to the impact when you move again. It cannot use reactions triggered by your next action before the start of your next turn. The benefit is consumed when that action begins.",
    tags: ["reaction-denial", "self-action", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-007-claim-the-gap", localizationKey: "ClaimTheGap",
    tone: "neutral", impact: "moderate", fallbackTitle: "Claim the Gap",
    fallbackDescription: "Until the start of your next turn, you gain a one-use triggered free action. Trigger: the target leaves its current space during an action with the move trait, and that space is vacant after the movement. Effect: after the target's movement ends, you Step into the space it left. You must be able to reach that space with a Step.",
    tags: ["space-control", "triggered-free-action", "step", "target-movement", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-008-apparently-impressive", localizationKey: "ApparentlyImpressive",
    tone: "humorous", impact: "moderate", fallbackTitle: "Apparently, That Was Impressive",
    fallbackDescription: "Whether by skill or theatrical accident, the target is paying attention now. You may immediately attempt to Feint or Demoralize the target as a free action, following the normal rules for the chosen action.",
    tags: ["skill-action", "feint", "demoralize", "free-action", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-009-keep-them-there", localizationKey: "KeepThemThere",
    tone: "serious", impact: "strong", fallbackTitle: "Keep Them There",
    fallbackDescription: "The hit leaves the target open to immediate control. You may immediately attempt to Grapple or Trip the target as a free action, applying your current multiple attack penalty and following the normal requirements for the chosen action.",
    tags: ["skill-action", "grapple", "trip", "multiple-attack-penalty", "free-action", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-010-unshaken-stance", localizationKey: "UnshakenStance",
    tone: "serious", impact: "moderate", fallbackTitle: "Unshaken Stance",
    fallbackDescription: "Your success settles your stance against retaliation. Before the start of your next turn, the first check made to Shove, Reposition, or Trip you takes a -2 circumstance penalty. The penalty is then consumed.",
    tags: ["self-defense", "athletics", "shove", "reposition", "trip", "one-use", "manual"]
  })
]);
