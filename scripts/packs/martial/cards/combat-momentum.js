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
  }),
  defineCombatMomentum({
    id: "cm-011-pivot-point", localizationKey: "PivotPoint",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Pivot Point",
    fallbackDescription: "The target's guard becomes your fulcrum. You may immediately move up to 10 feet through spaces adjacent to the target, ending adjacent to it. This special movement does not trigger reactions from the target, but it cannot pass through occupied or otherwise impassable spaces.",
    tags: ["self-movement", "special-movement", "positioning", "adjacent", "reaction-protection", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-012-hands-still-moving", localizationKey: "HandsStillMoving",
    tone: "neutral", impact: "light", fallbackTitle: "Hands Still Moving",
    fallbackDescription: "Without breaking rhythm, you may immediately Interact as a free action to draw or stow one worn item, pick up one unattended item within reach, or change your grip on an item you hold. This cannot be used to Reload or activate an item.",
    weight: 2, tags: ["equipment", "interact", "grip", "free-action", "manual"]
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
    fallbackDescription: "Reduce your frightened value by 1. If you are not frightened, you instead gain a +1 circumstance bonus to your next Will save before the start of your next turn. The bonus is then consumed.",
    tags: ["condition-reduction", "frightened", "will", "fallback", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-015-cut-the-corner", localizationKey: "CutTheCorner",
    tone: "neutral", impact: "light", fallbackTitle: "Cut the Corner",
    fallbackDescription: "The next time you Stride before the start of your next turn, ignore up to 10 feet of difficult terrain during that movement. The benefit is then consumed and does not let you cross greater difficult terrain or impassable spaces.",
    weight: 2, tags: ["self-movement", "stride", "difficult-terrain", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-016-center-of-the-fight", localizationKey: "CenterOfTheFight",
    tone: "serious", impact: "moderate", fallbackTitle: "Center of the Fight",
    fallbackDescription: "Until the start of your next turn, you are not off-guard from flanking if the target is one of the creatures flanking you. Other sources of off-guard affect you normally.",
    tags: ["self-defense", "flanking", "off-guard", "target-specific", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-017-let-them-swing", localizationKey: "LetThemSwing",
    tone: "neutral", impact: "moderate", fallbackTitle: "Let Them Swing",
    fallbackDescription: "Until the start of your next turn, you gain a one-use reaction. Trigger: the target makes a melee Strike against you and misses. Effect: after the Strike resolves, you Step. The reaction is then expended.",
    tags: ["self-movement", "reaction", "step", "target-miss", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-018-adrenaline-dividend", localizationKey: "AdrenalineDividend",
    tone: "humorous", impact: "moderate", fallbackTitle: "Adrenaline Dividend",
    fallbackDescription: "Apparently, success pays interest. Gain temporary Hit Points equal to half your level, rounded up, with a minimum of 1. They last until the end of your next turn.",
    tags: ["temporary-hit-points", "scaling", "self-recovery", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-019-through-the-gap", localizationKey: "ThroughTheGap",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Through the Gap",
    fallbackDescription: "Your next attempt to Tumble Through the target before the end of your next turn gains a +2 circumstance bonus. If you succeed, the target cannot use reactions triggered by that movement. The benefit is consumed when you attempt the check.",
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
    tone: "neutral", impact: "moderate", fallbackTitle: "Break Contact",
    fallbackDescription: "The impact creates a clean exit. You may immediately Stride up to half your Speed as a free action. You must end farther from the target than you began, and this movement does not trigger reactions from the target.",
    tags: ["self-movement", "stride", "retreat", "reaction-protection", "free-action", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-022-living-bulwark", localizationKey: "LivingBulwark",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Living Bulwark",
    fallbackDescription: "Until the start of your next turn, the first time a creature other than the target makes a ranged attack against you while the target is between you and the attacker, treat lesser cover granted by the target as standard cover for that attack. The benefit is then consumed.",
    tags: ["self-defense", "cover", "ranged-defense", "target-position", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-023-form-finds-you", localizationKey: "FormFindsYou",
    tone: "dramatic", impact: "strong", fallbackTitle: "Form Finds You",
    fallbackDescription: "Your body settles into practiced form without losing the beat. You may immediately enter a stance you know as a free action, provided you meet its requirements. If you have no eligible stance or are already in the stance you want, you may immediately Step instead.",
    tags: ["stance", "free-action", "fallback-step", "self-readiness", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-024-momentum-to-spare", localizationKey: "MomentumToSpare",
    tone: "serious", impact: "strong", fallbackTitle: "Momentum to Spare",
    fallbackDescription: "Gain one additional reaction that lasts until the start of your next turn. This reaction can be used only for a reaction whose trigger is caused by the target's action or activity. It does not allow the same reaction to be used more than once for a single trigger.",
    tags: ["reaction", "reaction-economy", "target-specific", "self-readiness", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-025-break-the-bind", localizationKey: "BreakTheBind",
    tone: "serious", impact: "moderate", fallbackTitle: "Break the Bind",
    fallbackDescription: "If you are grabbed, restrained, or immobilized, you may immediately attempt to Escape from one such effect as a free action, following the normal rules. If none of those conditions apply, your next attempt to Escape before the end of your next turn gains a +2 circumstance bonus. The bonus is then consumed.",
    tags: ["escape", "condition-response", "free-action", "fallback-bonus", "one-use", "manual"]
  }),
  defineCombatMomentum({
    id: "cm-026-close-quarters-clarity", localizationKey: "CloseQuartersClarity",
    tone: "neutral", impact: "light", fallbackTitle: "Close-Quarters Clarity",
    fallbackDescription: "At this distance, the target's habits become suddenly obvious. You may immediately Seek in an area that includes the target or Recall Knowledge about the target as a free action, following the normal rules for the chosen action.",
    weight: 2, tags: ["seek", "recall-knowledge", "perception", "knowledge", "free-action", "manual"]
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
    fallbackDescription: "After resolving the triggering attack's damage, you may immediately make a melee Strike as a free action against a different creature within your reach. Apply your multiple attack penalty as though this were your next attack of the turn. This Strike cannot trigger another Critical Forge card. If no other creature is within reach, you may immediately Step instead.",
    tags: ["follow-up-strike", "multiple-attack-penalty", "free-action", "anti-chain", "fallback-step", "manual"]
  })
]);
