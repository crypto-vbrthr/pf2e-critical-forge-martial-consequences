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
    fallbackDescription: "The target is invited to choose which ally becomes the problem. Choose up to two allies other than you that can perceive the target and have a reaction available. The target chooses one of them; if only one is eligible, that ally is chosen. Until the start of your next turn, the chosen ally is considered prepared to Aid the next attack roll or skill check another ally attempts against the target. The chosen ally must still use its reaction and attempt the normal Aid check.",
    tags: ["choice", "aid", "ally-support", "ally-reaction", "manual"]
  }),
  defineMartialOpening({
    id: "mo-005-read-the-defense", localizationKey: "ReadTheDefense",
    tone: "neutral", impact: "light", fallbackTitle: "Read the Defense",
    fallbackDescription: "Your strike reveals the rhythm behind the target's guard. Choose one ally other than you that can see the target. Before the start of your next turn, that ally gains a +1 circumstance bonus to the check for its next Feint, Demoralize, Grapple, Reposition, Shove, or Trip against the target.",
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
    fallbackDescription: "Choose one ally other than you that can perceive the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: the target completes an action with the move trait and is farther from the ally than it was before that action. Effect: the ally Strides up to half its Speed and must end closer to the target than it began. This movement must be used to pursue the target and follows the normal rules for movement.",
    tags: ["pursuit", "ally-reaction", "target-movement", "stride", "manual"]
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
    tone: "humorous", impact: "light", fallbackTitle: "Eyes on Me",
    fallbackDescription: "The target's attention fixes on you with admirable dedication. Choose one ally other than you. That ally may immediately Take Cover as a free action if able. If it has cover or concealment from the target afterward, it may Hide as part of the same free action, following the normal rules for Hide.",
    tags: ["attention", "ally-action", "take-cover", "hide", "conditional", "manual"]
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
    fallbackDescription: "Choose one ally other than you. Before the start of your next turn, the next Grapple, Reposition, Shove, or Trip that ally attempts against the target and that would take a multiple attack penalty is calculated as though the ally had made one fewer attack that turn, to a minimum of no penalty. A listed action that has no multiple attack penalty does not consume the benefit.",
    tags: ["skill-action", "multiple-attack-penalty", "ally-support", "one-use", "conditional-consumption", "manual"]
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
    fallbackDescription: "The target loses its place in the enemy formation. Choose one ally other than you. Until the start of your next turn, that ally is not off-guard due to any flank involving the target.",
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
    tone: "neutral", impact: "moderate", fallbackTitle: "While They're Busy",
    fallbackDescription: "Choose one ally other than you that can perceive the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: the target uses a reaction. Effect: the ally Steps or takes one Interact action. If the granted reaction remains unused when the duration ends, the ally may immediately take one Interact action as a free action instead.",
    tags: ["ally-reaction", "reaction-window", "step", "interact", "fallback-interact", "manual"]
  }),
  defineMartialOpening({
    id: "mo-020-marked-by-motion", localizationKey: "MarkedByMotion",
    tone: "neutral", impact: "light", fallbackTitle: "Marked by Motion",
    fallbackDescription: "The target's movement after the hit gives away its outline. Choose one ally other than you that can perceive the target. Before the start of your next turn, the first attack that ally makes against the target that would require a flat check solely because the target is concealed ignores that flat check. The benefit is consumed only when it removes such a flat check and does not affect hidden or undetected targets.",
    tags: ["concealment", "ally-attack", "one-use", "conditional-consumption", "manual"]
  }),
  defineMartialOpening({
    id: "mo-021-shield-turned", localizationKey: "ShieldTurned",
    tone: "serious", impact: "moderate", fallbackTitle: "Shield Turned",
    fallbackDescription: "The target drags its guard toward the impact and leaves the far side exposed. Choose one ally other than you. For that ally's next attack against the target before the start of your next turn, the target gains no circumstance bonus to AC from Raise a Shield, Parry, a defensive reaction, or a similar defensive action. If no such circumstance bonus would apply, the target instead cannot use reactions triggered by that attack.",
    tags: ["defense", "shield", "parry", "ally-attack", "reaction-denial", "fallback-reaction", "one-use", "manual"]
  }),
  defineMartialOpening({
    id: "mo-022-passing-the-breach", localizationKey: "PassingTheBreach",
    tone: "dramatic", impact: "strong", fallbackTitle: "Passing the Breach",
    fallbackDescription: "The opening can be handed down the line. Choose one ally other than you. The next time that ally hits the target before the start of your next turn, the target cannot use reactions until the start of its next turn. This restriction begins after the triggering attack resolves.",
    tags: ["ally-attack", "chain", "reaction-denial", "one-use", "manual"]
  }),
  defineMartialOpening({
    id: "mo-023-coordinated-exchange", localizationKey: "CoordinatedExchange",
    tone: "neutral", impact: "strong", fallbackTitle: "Coordinated Exchange",
    fallbackDescription: "Choose two willing allies other than you that are adjacent to each other, with at least one adjacent to the target. As a single special movement effect granted by this card, they may immediately exchange spaces simultaneously if both can occupy the other's space and the route is clear. This is not two separate actions, and the movement does not trigger reactions from the target.",
    tags: ["formation", "space-swap", "ally-movement", "special-movement", "manual"]
  }),
  defineMartialOpening({
    id: "mo-024-instant-coordination", localizationKey: "InstantCoordination",
    tone: "neutral", impact: "moderate", fallbackTitle: "Instant Coordination",
    fallbackDescription: "Choose one ally other than you that can perceive the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: another ally begins an action that either targets the target or would move that ally adjacent to it. Effect: the target cannot use reactions triggered by that action. The chosen ally must perceive the acting ally.",
    tags: ["ally-reaction", "coordination", "reaction-denial", "one-use", "manual"]
  }),
  defineMartialOpening({
    id: "mo-025-open-hand-off", localizationKey: "OpenHandOff",
    tone: "humorous", impact: "light", fallbackTitle: "Open Hand-Off",
    fallbackDescription: "The target is briefly too occupied to contest the logistics. Choose one ally other than you. That ally may immediately Interact as a free action to pass one held item to a willing adjacent ally with a free hand. The receiver takes the item as part of the same free action. Normal reach and hand requirements apply.",
    weight: 2, tags: ["interact", "item-transfer", "ally-action", "equipment", "manual"]
  }),
  defineMartialOpening({
    id: "mo-026-borrowed-defense", localizationKey: "BorrowedDefense",
    tone: "serious", impact: "moderate", fallbackTitle: "Borrowed Defense",
    fallbackDescription: "The target's disrupted offense gives someone else time to set a guard. Choose one ally other than you. That ally may immediately Raise a Shield or use a single action granted by a parry trait as a free action. If it can do neither, it may instead immediately Take Cover if able; if it cannot Take Cover, it may Drop Prone. It must meet all normal requirements for the chosen option.",
    tags: ["shield", "parry", "ally-defense", "take-cover", "drop-prone", "fallback-defense", "free-action", "manual"]
  }),
  defineMartialOpening({
    id: "mo-027-pinned-between-threats", localizationKey: "PinnedBetweenThreats",
    tone: "dramatic", impact: "strong", fallbackTitle: "Pinned Between Threats",
    fallbackDescription: "Choose one ally other than you that is adjacent to the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: the target begins an action with the move trait while adjacent to the ally. Effect: before the target moves, the ally attempts to Grapple or Trip it, applying its current multiple attack penalty. If the result prevents the triggering movement, the target's action is still spent.",
    tags: ["containment", "ally-reaction", "grapple", "trip", "target-movement", "manual"]
  }),
  defineMartialOpening({
    id: "mo-028-call-and-response", localizationKey: "CallAndResponse",
    tone: "neutral", impact: "moderate", fallbackTitle: "Call and Response",
    fallbackDescription: "Choose one ally other than you. The next time that ally succeeds at a Feint, Demoralize, Grapple, Reposition, Shove, or Trip against the target before the start of your next turn, one other willing ally within 10 feet of the target may immediately Step as a free action.",
    tags: ["skill-action", "ally-movement", "follow-up", "free-action", "manual"]
  }),
  defineMartialOpening({
    id: "mo-029-break-their-focus", localizationKey: "BreakTheirFocus",
    tone: "serious", impact: "moderate", fallbackTitle: "Break Their Focus",
    fallbackDescription: "Choose one ally other than you that can perceive the target. Until the start of your next turn, that ally gains a one-use reaction. Trigger: the target begins an action with the concentrate trait. Effect: the ally Steps or Takes Cover, following the normal rules for the chosen action.",
    tags: ["concentrate", "ally-reaction", "step", "take-cover", "manual"]
  }),
  defineMartialOpening({
    id: "mo-030-seize-the-moment", localizationKey: "SeizeTheMoment",
    tone: "dramatic", impact: "strong", fallbackTitle: "Seize the Moment",
    fallbackDescription: "Choose one ally other than you that can perceive the target. That ally may immediately attempt to Feint or Demoralize the target, or Seek for it, as a free action, following the normal rules for the chosen action.",
    tags: ["skill-action", "feint", "demoralize", "seek", "free-action", "manual"]
  })
]);
