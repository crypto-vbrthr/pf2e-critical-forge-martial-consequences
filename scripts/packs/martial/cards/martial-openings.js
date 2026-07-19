import { defineMartialOpening } from "../card-factory.js";

export const MARTIAL_OPENING_CARDS = Object.freeze([
  defineMartialOpening({
    id: "mo-001-guard-drawn-wide", localizationKey: "GuardDrawnWide",
    tone: "serious", impact: "light", fallbackTitle: "Guard Drawn Wide",
    fallbackDescription: "Your critical hit pulls the target's defense wide. The next Strike made by an ally other than you against the target before the start of your next turn gains a +1 circumstance bonus. The bonus is then consumed.",
    weight: 2, tags: ["ally-attack", "one-use", "manual"]
  }),
  defineMartialOpening({
    id: "mo-002-clear-line", localizationKey: "ClearLine",
    tone: "neutral", impact: "light", fallbackTitle: "Clear Line",
    fallbackDescription: "The hit turns the target just enough to clear another combatant's view. Choose one ally other than you. The target does not gain cover from intervening creatures against that ally's next attack before the start of your next turn. Other sources of cover still apply.",
    weight: 2, tags: ["cover", "ally-attack", "line-of-fire", "manual"]
  }),
  defineMartialOpening({
    id: "mo-003-split-attention", localizationKey: "SplitAttention",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Split Attention",
    fallbackDescription: "The target cannot track every threat at once. Choose one ally other than you that the target can perceive. Until the start of your next turn, the target cannot use reactions triggered by that ally's movement.",
    tags: ["ally-movement", "reaction-denial", "manual"]
  }),
  defineMartialOpening({
    id: "mo-004-a-choice-technically", localizationKey: "AChoiceTechnically",
    tone: "humorous", impact: "moderate", fallbackTitle: "A Choice, Technically",
    fallbackDescription: "The target's defense collapses into two equally unappealing options. It chooses one: it immediately Steps; or one willing ally of yours within 10 feet of it may immediately Step. The creature that Steps chooses its destination.",
    tags: ["choice", "target-movement", "ally-movement", "free-action", "manual"]
  }),
  defineMartialOpening({
    id: "mo-005-read-the-defense", localizationKey: "ReadTheDefense",
    tone: "neutral", impact: "light", fallbackTitle: "Read the Defense",
    fallbackDescription: "Your strike reveals the rhythm behind the target's guard. Choose one ally other than you that can see the target. Before the start of your next turn, that ally gains a +1 circumstance bonus to its next Feint, Demoralize, Grapple, Reposition, Shove, or Trip against the target.",
    weight: 2, tags: ["skill-action", "ally-support", "one-use", "manual"]
  }),
  defineMartialOpening({
    id: "mo-006-crowd-the-gap", localizationKey: "CrowdTheGap",
    tone: "dramatic", impact: "strong", fallbackTitle: "Crowd the Gap",
    fallbackDescription: "The critical hit opens a path on both sides of the target. Up to two willing allies adjacent to the target may each immediately Step as free actions, in either order. Each must end adjacent to the target, and they cannot end in the same space.",
    tags: ["formation", "ally-movement", "flanking", "free-action", "manual"]
  }),
  defineMartialOpening({
    id: "mo-007-no-safe-retreat", localizationKey: "NoSafeRetreat",
    tone: "serious", impact: "moderate", fallbackTitle: "No Safe Retreat",
    fallbackDescription: "Choose one ally other than you that can perceive the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: the target completes a move action. Effect: the ally Steps and must end no farther from the target than it began.",
    tags: ["pursuit", "ally-reaction", "target-movement", "manual"]
  }),
  defineMartialOpening({
    id: "mo-008-open-passage", localizationKey: "OpenPassage",
    tone: "dramatic", impact: "moderate", fallbackTitle: "Open Passage",
    fallbackDescription: "The target turns aside under the force of the hit. Choose one ally other than you. Until the start of your next turn, that ally may move through the target's space without attempting to Tumble Through, treating the space as difficult terrain. It must end its movement in a legal space.",
    tags: ["ally-movement", "space", "tumble-through", "manual"]
  }),
  defineMartialOpening({
    id: "mo-009-keep-it-going", localizationKey: "KeepItGoing",
    tone: "neutral", impact: "moderate", fallbackTitle: "Keep It Going",
    fallbackDescription: "The opening survives just long enough for someone else to carry it forward. The next time an ally other than you hits the target before the start of your next turn, that ally may immediately Step as a free action after resolving the attack.",
    tags: ["ally-attack", "follow-through", "free-action", "manual"]
  }),
  defineMartialOpening({
    id: "mo-010-eyes-on-me", localizationKey: "EyesOnMe",
    tone: "humorous", impact: "moderate", fallbackTitle: "Eyes on Me",
    fallbackDescription: "The target's attention fixes on you with admirable dedication. Choose one ally other than you. That ally may immediately Take Cover as a free action if able. If it has cover or concealment from the target afterward, it may Hide as part of the same free action, following the normal rules for Hide.",
    tags: ["attention", "ally-action", "take-cover", "hide", "manual"]
  })
]);
