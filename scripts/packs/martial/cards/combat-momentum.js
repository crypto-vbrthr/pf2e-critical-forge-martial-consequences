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
    fallbackDescription: "Your follow-through closes every obvious angle. Before the end of your next turn, for the target's next Strike against you, ignore circumstance bonuses to its attack roll and circumstance penalties to your AC. Other modifiers apply normally. The benefit is consumed when that Strike resolves.",
    tags: ["self-defense", "circumstance-neutralization", "target-strike", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-003-next-in-line", localizationKey: "NextInLine",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Next in Line",
    fallbackDescription: "Before the end of your next turn, when you make a melee Strike against a creature other than the target, you may Step immediately before the Strike as part of the same action. You must end with that creature in reach. The benefit is consumed only when you use the Step.",
    tags: ["target-switch", "step", "action-sequence", "self-movement", "conditional-consumption", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-004-longer-stride", localizationKey: "LongerStride",
    tone: "neutral", impact: "light", fallbackTitle: "Longer Stride",
    fallbackDescription: "The successful attack carries your movement forward. The next time you Stride before the end of your next turn, you may move 5 feet farther than your Speed. The benefit is then consumed.",
    weight: 2, tags: ["self-movement", "stride", "speed", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-005-rhythm-carries", localizationKey: "RhythmCarries",
    tone: "dramatic", impact: "strong", fallbackTitle: "Rhythm Carries",
    fallbackDescription: "For your next melee Strike before the end of your next turn that would take a multiple attack penalty, reduce that penalty by 2. This cannot reduce the penalty below 0. The benefit is consumed only when it actually reduces the penalty.",
    tags: ["multiple-attack-penalty", "follow-up-strike", "conditional-consumption", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-006-no-time-to-answer", localizationKey: "NoTimeToAnswer",
    tone: "serious", impact: "moderate", fallbackTitle: "No Time to Answer",
    fallbackDescription: "Before the end of your next turn, when you begin an action that could trigger a reaction from the target, you may declare that action protected. The target cannot use reactions triggered by that action. The benefit is consumed only when you declare a protected action.",
    tags: ["reaction-denial", "self-action", "conditional-consumption", "one-use", "manual"]
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
  }),
  defineCombatMomentum({
    id: "cm-011-pivot-point", localizationKey: "PivotPoint",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Pivot Point",
    fallbackDescription: "The target's guard becomes your fulcrum. You may immediately move up to 10 feet through spaces adjacent to the target, ending adjacent to it. This special movement does not trigger reactions from the target, but it cannot pass through occupied or otherwise impassable spaces.",
    tags: ["self-movement", "special-movement", "positioning", "adjacent", "reaction-protection", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-012-hands-still-moving", localizationKey: "HandsStillMoving",
    tone: "neutral", impact: "moderate", fallbackTitle: "Hands Still Moving",
    fallbackDescription: "Before the end of your next turn, you may attempt one Grapple, Reposition, Shove, or Trip against the target without needing a free hand or a weapon with the corresponding trait. You must still be able to reach and affect the target, and your multiple attack penalty and all other requirements apply. The benefit is consumed when you attempt the check.",
    tags: ["combat-maneuver", "free-hand", "grapple", "reposition", "shove", "trip", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-013-hard-to-ignore", localizationKey: "HardToIgnore",
    tone: "serious", impact: "moderate", fallbackTitle: "Hard to Ignore",
    fallbackDescription: "Until the start of your next turn, the target takes a -1 circumstance penalty to its next Strike against a creature other than you. The penalty is consumed when applied.",
    tags: ["mark", "target-choice", "attack-penalty", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-014-fear-can-wait", localizationKey: "FearCanWait",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Fear Can Wait",
    fallbackDescription: "Reduce your frightened value by 1. If you are not frightened, you instead gain a +1 circumstance bonus to your next Will save before the end of your next turn. The bonus is then consumed.",
    tags: ["condition-reduction", "frightened", "will", "fallback", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-015-cut-the-corner", localizationKey: "CutTheCorner",
    tone: "neutral", impact: "light", fallbackTitle: "Cut the Corner",
    fallbackDescription: "The next time you Stride before the end of your next turn, ignore up to 10 feet of difficult terrain during that movement. The benefit is then consumed and does not let you cross greater difficult terrain or impassable spaces.",
    weight: 2, tags: ["self-movement", "stride", "difficult-terrain", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-016-center-of-the-fight", localizationKey: "CenterOfTheFight",
    tone: "serious", impact: "moderate", fallbackTitle: "Center of the Fight",
    fallbackDescription: "Until the start of your next turn, spaces within your melee reach are difficult terrain for the target when it moves voluntarily. This does not affect forced movement or teleportation, and it does not stack with other difficult terrain.",
    tags: ["space-control", "difficult-terrain", "target-movement", "reach", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-017-let-them-swing", localizationKey: "LetThemSwing",
    tone: "neutral", impact: "moderate", fallbackTitle: "Let Them Swing",
    fallbackDescription: "Until the start of your next turn, you gain a one-use reaction. Trigger: the target makes a melee Strike against you and misses. Effect: after the Strike resolves, you Step. The reaction is then expended.",
    tags: ["self-movement", "reaction", "step", "target-miss", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-018-adrenaline-dividend", localizationKey: "AdrenalineDividend",
    tone: "humorous", impact: "strong", fallbackTitle: "Adrenaline Dividend",
    fallbackDescription: "Apparently, success pays interest. Before the end of your next turn, the next time you attempt an Athletics or Acrobatics check that targets the target or is rolled against one of its DCs, roll twice and use the higher result. This is a fortune effect, and the benefit is then consumed.",
    tags: ["fortune", "athletics", "acrobatics", "target-specific", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-019-through-the-gap", localizationKey: "ThroughTheGap",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Through the Gap",
    fallbackDescription: "Before the end of your next turn, when you begin to Tumble Through the target, gain a +1 circumstance bonus to the Acrobatics check, and the target cannot use reactions triggered by any movement that is part of that action. The benefit is consumed when the action begins, regardless of the check's result.",
    tags: ["tumble-through", "acrobatics", "reaction-protection", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-020-long-follow-through", localizationKey: "LongFollowThrough",
    tone: "dramatic", impact: "strong", fallbackTitle: "Long Follow-Through",
    fallbackDescription: "Before the end of your next turn, you may increase your reach by 5 feet for one melee Strike. The benefit is consumed when you declare the increased reach, even if the Strike fails, and it does not stack with another temporary increase to your reach.",
    tags: ["reach", "follow-up-strike", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-021-break-contact", localizationKey: "BreakContact",
    tone: "neutral", impact: "strong", fallbackTitle: "Break Contact",
    fallbackDescription: "The impact creates a clean exit. You may immediately Stride up to half your Speed as a free action. You must end farther from the target than you began, and this movement does not trigger reactions from the target.",
    tags: ["self-movement", "stride", "retreat", "reaction-protection", "free-action", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-022-living-bulwark", localizationKey: "LivingBulwark",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Living Bulwark",
    fallbackDescription: "Until the end of your next turn, the first ranged attack made against you by a creature other than the target grants you a +2 circumstance bonus to AC if the target is between you and the attacker, or a +1 circumstance bonus otherwise. The benefit is consumed when that attack resolves.",
    tags: ["self-defense", "ranged-defense", "target-position", "ac", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-023-form-finds-you", localizationKey: "FormFindsYou",
    tone: "dramatic", impact: "strong", fallbackTitle: "Form Finds You",
    fallbackDescription: "Your body settles into practiced form without losing the beat. You may immediately enter a stance you know as a free action only if you can legally enter it under all normal stance rules, including any restriction on changing stances. If you have no eligible stance or are already in the stance you want, you may immediately Step instead.",
    tags: ["stance", "free-action", "fallback-step", "self-readiness", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-024-momentum-to-spare", localizationKey: "MomentumToSpare",
    tone: "serious", impact: "strong", fallbackTitle: "Momentum to Spare",
    fallbackDescription: "Gain one additional reaction that lasts until the start of your next turn. It can be used only for a reaction whose trigger is caused by the target's action or activity. All normal triggers, requirements, restrictions, and frequency limits of that reaction still apply, and this does not allow the same reaction to be used more than once for a single trigger.",
    tags: ["reaction", "reaction-economy", "target-specific", "frequency-limits", "self-readiness", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-025-break-the-bind", localizationKey: "BreakTheBind",
    tone: "serious", impact: "moderate", fallbackTitle: "Break the Bind",
    fallbackDescription: "If you are grabbed or immobilized, you may immediately attempt to Escape from one such effect as a free action, following the normal rules. If neither condition applies, you may immediately Step instead and must end farther from the target if possible.",
    tags: ["escape", "condition-response", "free-action", "fallback-step", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-026-close-quarters-clarity", localizationKey: "CloseQuartersClarity",
    tone: "neutral", impact: "strong", fallbackTitle: "Close-Quarters Clarity",
    fallbackDescription: "Until the start of your next turn, the first time the target Steps while within your melee reach, that Step can trigger your reactions as though it were a move action other than Step. This does not grant an additional reaction or waive any normal requirements. The benefit is consumed when the target Steps, whether or not you react.",
    tags: ["reaction-window", "step", "movement", "target-specific", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-027-turn-the-tables", localizationKey: "TurnTheTables",
    tone: "dramatic", impact: "strong", fallbackTitle: "Turn the Tables",
    fallbackDescription: "Until the start of your next turn, you gain a one-use reaction. Trigger: the target fails or critically fails an attempt to Grapple, Reposition, Shove, or Trip you. Effect: after its action resolves, you may attempt the same action against the target with a -2 circumstance penalty, following the normal requirements. The reaction is then expended.",
    tags: ["reaction", "counter-maneuver", "grapple", "reposition", "shove", "trip", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-028-dont-blink", localizationKey: "DontBlink",
    tone: "serious", impact: "moderate", fallbackTitle: "Don't Blink",
    fallbackDescription: "Until the start of your next turn, you gain a one-use reaction. Trigger: the target Hides or Sneaks. Effect: after the action resolves, you Seek as a reaction and must include the target's last known space in the area you search. The reaction is then expended.",
    tags: ["reaction", "seek", "hide", "sneak", "tracking", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-029-victory-echo", localizationKey: "VictoryEcho",
    tone: "humorous", impact: "moderate", fallbackTitle: "Victory Echo",
    fallbackDescription: "If the triggering critical hit reduces the target to 0 Hit Points, you may immediately attempt to Demoralize one other enemy within 30 feet as a free action, following the normal rules. Otherwise, your next attempt to Demoralize before the end of your next turn gains a +1 circumstance bonus. The bonus is then consumed.",
    tags: ["demoralize", "defeat-trigger", "free-action", "fallback-bonus", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-030-momentum-unspent", localizationKey: "MomentumUnspent",
    tone: "dramatic", impact: "strong", fallbackTitle: "Momentum Unspent",
    fallbackDescription: "After resolving the triggering attack's damage, you may immediately make a melee Strike as a free action against a different creature within your reach. If the triggering Strike occurred during your turn, apply your multiple attack penalty as though this were your next attack that turn. If it occurred outside your turn, apply a -5 multiple attack penalty, or -4 if the follow-up Strike uses an agile attack. This Strike cannot trigger another Critical Forge card. If no other creature is within reach, you may immediately Step instead.",
    tags: ["follow-up-strike", "multiple-attack-penalty", "out-of-turn", "free-action", "anti-chain", "fallback-step", "manual"]
  })
]);
