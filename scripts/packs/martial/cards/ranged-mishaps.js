import { defineRangedMishap } from "../card-factory.js";

export const RANGED_MISHAP_CARDS = Object.freeze([
  defineRangedMishap({
    id: "rm-001-lost-sightline", localizationKey: "LostSightline",
    tone: "neutral", impact: "light", fallbackTitle: "Lost Sightline",
    fallbackDescription: "You lose the target behind movement, cover, or your own weapon arm. The target gains lesser cover against your next ranged attack before the end of your next turn. This benefit ends if you first move to a different space or spend a single action to re-establish your sightline.",
    weight: 2, tags: ["aiming", "cover", "recovery", "manual"]
  }),
  defineRangedMishap({
    id: "rm-002-revealing-shot", localizationKey: "RevealingShot",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Revealing Shot",
    fallbackDescription: "The failed shot reveals your exact firing position. Until the start of your next turn, you cannot be hidden or undetected from the target. Concealment still applies normally.",
    tags: ["position", "stealth", "revealed", "manual"]
  }),
  defineRangedMishap({
    id: "rm-003-awkward-release", localizationKey: "AwkwardRelease",
    tone: "neutral", impact: "light", fallbackTitle: "Awkward Release",
    fallbackDescription: "The projectile leaves at the wrong moment. Your next ranged attack before the end of your next turn must originate from a different space or take a -1 circumstance penalty.",
    weight: 2, tags: ["release", "positioning", "tactical-choice", "manual"]
  }),
  defineRangedMishap({
    id: "rm-004-broken-firing-rhythm", localizationKey: "BrokenFiringRhythm",
    tone: "serious", impact: "light", fallbackTitle: "Broken Firing Rhythm",
    fallbackDescription: "The failed shot breaks your firing rhythm. Until the start of your next turn, you cannot use reactions that require or include a ranged Strike.",
    weight: 2, tags: ["timing", "reaction", "conditional", "manual"]
  }),
  defineRangedMishap({
    id: "rm-005-forced-reposition", localizationKey: "ForcedReposition",
    tone: "serious", impact: "moderate", fallbackTitle: "Forced Reposition",
    fallbackDescription: "Your current firing position no longer feels usable. Before you can make another ranged attack against the same target before the end of your next turn, you must move to a different space.",
    tags: ["positioning", "movement", "target-lock", "manual"]
  }),
  defineRangedMishap({
    id: "rm-006-target-finds-cover", localizationKey: "TargetFindsCover",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Target Finds Cover",
    fallbackDescription: "The miss makes the danger angle obvious. The target may immediately Step as a free action. If possible, it must end that Step closer to cover from you.",
    tags: ["target-movement", "cover", "free-action", "manual"]
  }),
  defineRangedMishap({
    id: "rm-007-poor-follow-through", localizationKey: "PoorFollowThrough",
    tone: "serious", impact: "moderate", fallbackTitle: "Poor Follow-Through",
    fallbackDescription: "Your weapon or throwing arm finishes outside the line needed for another shot. The next action you use before the end of your next turn cannot require or include a ranged Strike.",
    tags: ["follow-through", "action-sequencing", "tempo", "manual"]
  }),
  defineRangedMishap({
    id: "rm-008-obstructed-arc", localizationKey: "ObstructedArc",
    tone: "neutral", impact: "light", fallbackTitle: "Obstructed Arc",
    fallbackDescription: "The errant projectile forces someone in its path to shift. One creature between you and the target may immediately Step as a free action.",
    tags: ["trajectory", "bystander", "conditional", "manual"]
  }),
  defineRangedMishap({
    id: "rm-009-exposed-to-return-fire", localizationKey: "ExposedToReturnFire",
    tone: "serious", impact: "moderate", fallbackTitle: "Exposed to Return Fire",
    fallbackDescription: "Trying to save the shot pulls you out of your protected firing posture. Against the next ranged attack made against you before the start of your next turn, reduce the cover granted by your current space by one degree. Moving to a different space ends this effect.",
    tags: ["cover", "defense", "return-fire", "manual"]
  }),
  defineRangedMishap({
    id: "rm-010-misjudged-distance", localizationKey: "MisjudgedDistance",
    tone: "neutral", impact: "light", fallbackTitle: "Misjudged Distance",
    fallbackDescription: "You misread the distance, movement, or projectile path. For your next ranged Strike before the end of your next turn, treat the target as one range increment farther away when determining the range penalty. You may spend a single action to gauge the distance and end this effect.",
    weight: 2, tags: ["range", "aiming", "manual-removal", "manual"]
  }),
  defineRangedMishap({
    id: "rm-011-ducking-lesson", localizationKey: "DuckingLesson",
    tone: "humorous", impact: "moderate", fallbackTitle: "Ducking Lesson",
    fallbackDescription: "You miss high enough to teach the target the tactical value of being horizontal. The target may immediately Drop Prone as a free action. If it does, it may Take Cover as part of the same free action; the normal rules for Take Cover then apply.",
    tags: ["target-posture", "cover", "free-action", "manual"]
  }),
  defineRangedMishap({
    id: "rm-012-closing-the-distance", localizationKey: "ClosingTheDistance",
    tone: "dramatic", impact: "strong", fallbackTitle: "Closing the Distance",
    fallbackDescription: "The miss shows the target exactly when to advance. The target may immediately Stride up to 10 feet toward you as a free action. This movement does not trigger reactions from you.",
    tags: ["target-movement", "advance", "free-action", "manual"]
  }),
  defineRangedMishap({
    id: "rm-013-borrowed-silhouette", localizationKey: "BorrowedSilhouette",
    tone: "neutral", impact: "moderate", fallbackTitle: "Borrowed Silhouette",
    fallbackDescription: "The target learns to hide inside the crowd around it. Until the start of your next turn, it gains lesser cover against your ranged attacks while adjacent to at least one creature, even if that creature would not normally provide cover. Moving to a different space ends this effect.",
    tags: ["cover", "crowd", "positioning", "manual"]
  }),
  defineRangedMishap({
    id: "rm-014-follow-the-shot", localizationKey: "FollowTheShot",
    tone: "serious", impact: "moderate", fallbackTitle: "Follow the Shot",
    fallbackDescription: "The impact points straight back to you. The target may immediately Point Out you as a free action to creatures that can see or hear it. If all of the target's allies already observe you, the target instead chooses one ally; that ally gains a +1 circumstance bonus to its next ranged attack against you before the start of your next turn.",
    tags: ["position", "point-out", "ally-support", "manual"]
  }),
  defineRangedMishap({
    id: "rm-015-read-the-angle", localizationKey: "ReadTheAngle",
    tone: "serious", impact: "strong", fallbackTitle: "Read the Angle",
    fallbackDescription: "The target reads the line of your failed shot. Until the end of your next turn, it gains a one-use reaction: when you begin a ranged Strike against it from your current space, it Steps before the attack roll. The Strike continues if the target remains valid; recalculate cover and range after the Step.",
    tags: ["target-reaction", "step", "trajectory", "manual"]
  }),
  defineRangedMishap({
    id: "rm-016-dead-ground", localizationKey: "DeadGround",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Dead Ground",
    fallbackDescription: "The failed shot exposes a blind spot in your current angle. The target chooses one unoccupied space adjacent to it. Until the start of your next turn, you cannot make ranged attacks from your current space against a creature occupying the chosen space. Moving to a different space ends this effect.",
    tags: ["blind-spot", "claimed-space", "positioning", "manual"]
  }),
  defineRangedMishap({
    id: "rm-017-a-very-encouraging-miss", localizationKey: "AVeryEncouragingMiss",
    tone: "humorous", impact: "light", fallbackTitle: "A Very Encouraging Miss",
    fallbackDescription: "The target's confidence improves dramatically. Before the end of your next turn, it gains a +1 circumstance bonus to its next attempt to Demoralize or Feint against you.",
    weight: 2, tags: ["confidence", "demoralize", "feint", "manual"]
  }),
  defineRangedMishap({
    id: "rm-018-scenic-detour", localizationKey: "ScenicDetour",
    tone: "humorous", impact: "moderate", fallbackTitle: "Scenic Detour",
    fallbackDescription: "The projectile finds the scenery with admirable precision. The GM chooses one suitable space adjacent to the target, roughly beyond it along the shot's path; that space becomes difficult terrain until the end of your next turn. If no suitable scenery or space exists, the target may immediately Step instead.",
    tags: ["environment", "difficult-terrain", "fallback-step", "manual"]
  }),
  defineRangedMishap({
    id: "rm-019-helpful-warning", localizationKey: "HelpfulWarning",
    tone: "neutral", impact: "moderate", fallbackTitle: "Helpful Warning",
    fallbackDescription: "The miss warns everyone near the target. One creature adjacent to the target gains a one-use reaction until the start of your next turn. It may use that reaction to Aid the target's AC against your next ranged attack, without having prepared to Aid; all other Aid rules apply normally.",
    tags: ["ally-support", "aid", "reaction", "manual"]
  }),
  defineRangedMishap({
    id: "rm-020-range-found", localizationKey: "RangeFound",
    tone: "serious", impact: "moderate", fallbackTitle: "Range Found",
    fallbackDescription: "The target watches the projectile and learns the distance. For its next ranged Strike against you before the start of your next turn, it treats you as one range increment closer when determining its range penalty.",
    tags: ["range", "counterfire", "target-benefit", "manual"]
  }),
  defineRangedMishap({
    id: "rm-021-shield-meet-warning", localizationKey: "ShieldMeetWarning",
    tone: "humorous", impact: "moderate", fallbackTitle: "Shield, Meet Warning",
    fallbackDescription: "The miss gives the target exactly enough warning to brace. If it is wielding a shield that is not already raised, it may immediately Raise a Shield as a free action. Otherwise, it may immediately Step.",
    tags: ["shield", "target-action", "free-action", "fallback-step", "manual"]
  }),
  defineRangedMishap({
    id: "rm-022-look-over-there", localizationKey: "LookOverThere",
    tone: "dramatic", impact: "strong", fallbackTitle: "Look Over There",
    fallbackDescription: "The projectile drags attention past the target. If the target has cover or concealment from you, it may immediately Hide as a free action, following the normal rules for Hide. If it cannot Hide, it may immediately Step toward cover or concealment instead.",
    tags: ["hide", "cover", "concealment", "free-action", "fallback-step", "manual"]
  }),
  defineRangedMishap({
    id: "rm-023-committed-aim", localizationKey: "CommittedAim",
    tone: "serious", impact: "light", fallbackTitle: "Committed Aim",
    fallbackDescription: "You remain locked onto the creature you missed. The first ranged attack you make against a different target before the end of your next turn takes a -1 circumstance penalty. Moving to a different space or spending a single action to reassess the battlefield ends this effect.",
    weight: 2, tags: ["aiming", "target-lock", "target-switch", "manual-removal", "manual"]
  }),
  defineRangedMishap({
    id: "rm-024-friendly-fire-drill", localizationKey: "FriendlyFireDrill",
    tone: "humorous", impact: "light", fallbackTitle: "Friendly Fire Drill",
    fallbackDescription: "The shot gives your allies a compelling reason to reconsider the line of fire. One ally between you and the target may immediately Step as a free action. If no such ally moves, the next ranged attack you make through an ally's space before the end of your next turn takes a -1 circumstance penalty.",
    weight: 2, tags: ["ally-movement", "trajectory", "conditional", "fallback-penalty", "manual"]
  }),
  defineRangedMishap({
    id: "rm-025-inside-the-arc", localizationKey: "InsideTheArc",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Inside the Arc",
    fallbackDescription: "The miss invites the target inside your comfortable firing line. If the target is adjacent to you, it may immediately Step to another space adjacent to you. Otherwise, it may immediately Step toward you. This movement does not trigger reactions from you.",
    tags: ["close-quarters", "target-movement", "free-action", "manual"]
  }),
  defineRangedMishap({
    id: "rm-026-ammunition-argument", localizationKey: "AmmunitionArgument",
    tone: "humorous", impact: "moderate", fallbackTitle: "Ammunition Argument",
    fallbackDescription: "Your weapon, projectile, or throwing grip stops cooperating with your timing. Before your next ranged Strike before the end of your next turn, you must either spend a single action checking and resetting the attack or use a different weapon or unarmed attack. Nothing is broken; everything is merely being difficult.",
    tags: ["weapon-handling", "action-tax", "recovery", "manual"]
  }),
  defineRangedMishap({
    id: "rm-027-hecklers-range", localizationKey: "HecklersRange",
    tone: "humorous", impact: "moderate", fallbackTitle: "Heckler's Range",
    fallbackDescription: "The miss passes close enough for immediate commentary. The target may attempt to Demoralize you as a free action, following the normal rules. If it cannot attempt to Demoralize you, it may immediately Step instead.",
    tags: ["demoralize", "target-action", "free-action", "fallback-step", "manual"]
  }),
  defineRangedMishap({
    id: "rm-028-scatter-formation", localizationKey: "ScatterFormation",
    tone: "serious", impact: "strong", fallbackTitle: "Scatter Formation",
    fallbackDescription: "The near miss convinces the target's formation to spread out. The target and one willing ally adjacent to it may each immediately Step as free actions, in either order, but they must end these Steps non-adjacent to each other. Neither Step triggers reactions from you. If no eligible ally participates, the target may Step normally.",
    tags: ["formation", "target-movement", "ally-movement", "free-action", "manual"]
  }),
  defineRangedMishap({
    id: "rm-029-dust-signature", localizationKey: "DustSignature",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Dust Signature",
    fallbackDescription: "The projectile kicks up dust, splinters, sparks, or similar debris around the target. If the environment can plausibly produce such debris, the target is concealed from you until the start of your next turn or until it leaves its space. If the environment cannot support the effect, the target may immediately Step instead.",
    tags: ["environment", "concealment", "debris", "fallback-step", "manual"]
  }),
  defineRangedMishap({
    id: "rm-030-return-address-included", localizationKey: "ReturnAddressIncluded",
    tone: "humorous", impact: "moderate", fallbackTitle: "Return Address Included",
    fallbackDescription: "The miss arrives with a remarkably clear return address. The target chooses one ally that can see it and has a ranged attack. That ally may immediately Step as a free action and, if possible, must end with line of effect to you. This movement does not trigger reactions from you. If no eligible ally exists, the target may immediately Step instead.",
    tags: ["counterfire", "ally-movement", "line-of-effect", "fallback-step", "manual"]
  })
]);
