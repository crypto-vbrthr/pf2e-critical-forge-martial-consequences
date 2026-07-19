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
  }),
  defineMartialOpening({
    id: "mo-011-hands-free", localizationKey: "HandsFree",
    tone: "neutral", impact: "moderate", fallbackTitle: "Hands Free",
    fallbackDescription: "Your hit occupies the target's guard. Choose one ally other than you that the target can perceive. Until the start of your next turn, the target cannot use reactions triggered by that ally's actions with the manipulate trait.",
    tags: ["ally-action", "manipulate", "reaction-denial", "manual"]
  }),
  defineMartialOpening({
    id: "mo-012-broken-screen", localizationKey: "BrokenScreen",
    tone: "serious", impact: "light", fallbackTitle: "Broken Screen",
    fallbackDescription: "The target can no longer screen its allies effectively. Choose one ally other than you. Until the start of your next turn, the target does not provide cover to other creatures against that ally's attacks. Other sources of cover still apply.",
    weight: 2, tags: ["cover", "ally-attack", "formation", "manual"]
  }),
  defineMartialOpening({
    id: "mo-013-no-time-to-brace", localizationKey: "NoTimeToBrace",
    tone: "dramatic", impact: "strong", fallbackTitle: "No Time to Brace",
    fallbackDescription: "Choose one ally other than you. Before the start of your next turn, that ally calculates its next Grapple, Reposition, Shove, or Trip against the target as though it had made one fewer attack that turn for its multiple attack penalty, to a minimum of no penalty. The benefit is then consumed.",
    tags: ["skill-action", "multiple-attack-penalty", "ally-support", "one-use", "manual"]
  }),
  defineMartialOpening({
    id: "mo-014-room-to-recover", localizationKey: "RoomToRecover",
    tone: "neutral", impact: "moderate", fallbackTitle: "Room to Recover",
    fallbackDescription: "The target's disrupted guard gives someone room to recover. Choose one ally other than you. That ally may immediately Stand, attempt to Escape an effect imposed by the target, or Step directly away from the target as a free action, following the normal rules for the chosen action.",
    tags: ["ally-action", "stand", "escape", "withdrawal", "manual"]
  }),
  defineMartialOpening({
    id: "mo-015-a-moment-please", localizationKey: "AMomentPlease",
    tone: "humorous", impact: "moderate", fallbackTitle: "A Moment, Please",
    fallbackDescription: "The target is too busy recovering to object to a brief adjustment. Choose one ally other than you. That ally may immediately take one Interact action as a free action to draw or stow an item, change its grip, or complete one Interact step required to reload a weapon.",
    tags: ["ally-action", "interact", "reload", "equipment", "manual"]
  }),
  defineMartialOpening({
    id: "mo-016-lesson-in-motion", localizationKey: "LessonInMotion",
    tone: "neutral", impact: "light", fallbackTitle: "Lesson in Motion",
    fallbackDescription: "The target's reaction to the hit reveals something useful about how it fights. Choose one ally other than you that can observe the target. That ally may immediately attempt to Recall Knowledge about the target as a free action, following the normal rules.",
    weight: 2, tags: ["recall-knowledge", "ally-action", "information", "manual"]
  }),
  defineMartialOpening({
    id: "mo-017-formation-cracked", localizationKey: "FormationCracked",
    tone: "serious", impact: "moderate", fallbackTitle: "Formation Cracked",
    fallbackDescription: "The target loses its place in the enemy formation. Choose one ally other than you. Until the start of your next turn, the target does not count as flanking that ally and cannot help another creature flank that ally.",
    tags: ["formation", "flanking", "ally-defense", "manual"]
  }),
  defineMartialOpening({
    id: "mo-018-inside-track", localizationKey: "InsideTrack",
    tone: "dramatic", impact: "strong", fallbackTitle: "Inside Track",
    fallbackDescription: "The opening gives an ally a direct route into the fight. Choose one willing ally other than you that can perceive the target. That ally may immediately Stride up to half its Speed as a free action and must end that movement adjacent to the target. If it cannot end adjacent, it cannot use this movement.",
    tags: ["ally-movement", "stride", "engagement", "free-action", "manual"]
  }),
  defineMartialOpening({
    id: "mo-019-while-theyre-busy", localizationKey: "WhileTheyreBusy",
    tone: "humorous", impact: "moderate", fallbackTitle: "While They're Busy",
    fallbackDescription: "Choose one ally other than you that can perceive the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: the target uses a reaction. Effect: the ally Steps or takes one Interact action.",
    tags: ["ally-reaction", "reaction-window", "step", "interact", "manual"]
  }),
  defineMartialOpening({
    id: "mo-020-marked-by-motion", localizationKey: "MarkedByMotion",
    tone: "neutral", impact: "light", fallbackTitle: "Marked by Motion",
    fallbackDescription: "The target's movement after the hit gives away its outline. Choose one ally other than you that can perceive the target. For that ally's next attack against the target before the start of your next turn, ignore the flat check caused only by the target being concealed. This does not affect hidden or undetected targets.",
    weight: 2, tags: ["concealment", "ally-attack", "one-use", "manual"]
  })
]);
