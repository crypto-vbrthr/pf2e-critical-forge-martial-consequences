import { MARTIAL_PACK_IDS } from "./martial/card-factory.js";
import { MARTIAL_ATTACK_FUMBLE_CARDS } from "./martial/cards/martial-attack-fumbles.js";
import { RANGED_MISHAP_CARDS } from "./martial/cards/ranged-mishaps.js";
import { MARTIAL_OPENING_CARDS } from "./martial/cards/martial-openings.js";
import { COMBAT_MOMENTUM_CARDS } from "./martial/cards/combat-momentum.js";

export const MARTIAL_PACK_CONFIGS = Object.freeze([
  Object.freeze({
    settingKey: "enableMartialAttackFumbles",
    id: MARTIAL_PACK_IDS.martialAttackFumbles,
    titleKey: "PF2ECFMC.Packs.MartialAttackFumbles.Title",
    descriptionKey: "PF2ECFMC.Packs.MartialAttackFumbles.Description",
    fallbackTitle: "Martial Consequences: Martial Attack Fumbles",
    fallbackDescription: "General critical-fumble consequences for non-spell attacks, focused on stance, timing, positioning, and combat rhythm.",
    cards: MARTIAL_ATTACK_FUMBLE_CARDS,
    metadata: Object.freeze({
      theme: "martial-consequences",
      family: "martial-consequences",
      category: "martial-critical-fumble",
      scope: "non-spell-attacks"
    })
  }),
  Object.freeze({
    settingKey: "enableRangedMishaps",
    id: MARTIAL_PACK_IDS.rangedMishaps,
    titleKey: "PF2ECFMC.Packs.RangedMishaps.Title",
    descriptionKey: "PF2ECFMC.Packs.RangedMishaps.Description",
    fallbackTitle: "Martial Consequences: Ranged Mishaps",
    fallbackDescription: "Critical fumbles unique to non-spell ranged attacks, focused on sightlines, firing positions, cover, range, and shot rhythm.",
    cards: RANGED_MISHAP_CARDS,
    metadata: Object.freeze({
      theme: "martial-consequences",
      family: "martial-consequences",
      category: "ranged-critical-fumble",
      scope: "non-spell-ranged-attacks"
    })
  }),
  Object.freeze({
    settingKey: "enableMartialOpenings",
    id: MARTIAL_PACK_IDS.martialOpenings,
    titleKey: "PF2ECFMC.Packs.MartialOpenings.Title",
    descriptionKey: "PF2ECFMC.Packs.MartialOpenings.Description",
    fallbackTitle: "Martial Consequences: Martial Openings",
    fallbackDescription: "Critical hits with non-spell Strikes that create tactical openings for allies instead of additional injuries.",
    cards: MARTIAL_OPENING_CARDS,
    metadata: Object.freeze({
      theme: "martial-consequences",
      family: "martial-consequences",
      category: "martial-critical-hit",
      scope: "non-spell-strikes"
    })
  }),
  Object.freeze({
    settingKey: "enableCombatMomentum",
    id: MARTIAL_PACK_IDS.combatMomentum,
    titleKey: "PF2ECFMC.Packs.CombatMomentum.Title",
    descriptionKey: "PF2ECFMC.Packs.CombatMomentum.Description",
    fallbackTitle: "Martial Consequences: Combat Momentum",
    fallbackDescription: "Critical hits with non-spell melee Strikes that turn success into personal movement, readiness, control, and follow-through.",
    cards: COMBAT_MOMENTUM_CARDS,
    metadata: Object.freeze({
      theme: "martial-consequences",
      family: "martial-consequences",
      category: "melee-critical-hit",
      scope: "non-spell-melee-strikes"
    })
  })
]);

export function buildMartialConsequencesPacks(isEnabled = () => false) {
  return MARTIAL_PACK_CONFIGS.map((config) => Object.freeze({
    schemaVersion: 1,
    id: config.id,
    titleKey: config.titleKey,
    descriptionKey: config.descriptionKey,
    fallbackTitle: config.fallbackTitle,
    fallbackDescription: config.fallbackDescription,
    version: "0.4.3",
    priority: 10,
    enabled: Boolean(isEnabled(config.settingKey)),
    metadata: config.metadata,
    cards: config.cards
  }));
}
