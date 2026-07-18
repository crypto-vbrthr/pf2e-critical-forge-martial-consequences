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
  })
]);
