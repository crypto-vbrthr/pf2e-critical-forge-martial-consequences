import { MARTIAL_PACK_IDS } from "./martial/card-factory.js";
import { MARTIAL_ATTACK_FUMBLE_CARDS } from "./martial/cards/martial-attack-fumbles.js";

export const MARTIAL_PACK_CONFIGS = Object.freeze([
  Object.freeze({
    settingKey: "enableMartialAttackFumbles",
    id: MARTIAL_PACK_IDS.martialAttackFumbles,
    titleKey: "PF2ECFMC.Packs.MartialAttackFumbles.Title",
    descriptionKey: "PF2ECFMC.Packs.MartialAttackFumbles.Description",
    fallbackTitle: "Martial Consequences: Martial Attack Fumbles",
    fallbackDescription: "General critical-fumble consequences for non-spell weapon attacks, focused on stance, timing, positioning, and combat rhythm.",
    cards: MARTIAL_ATTACK_FUMBLE_CARDS,
    metadata: Object.freeze({
      theme: "martial-consequences",
      family: "martial-consequences",
      category: "weapon-critical-fumble",
      scope: "non-spell-weapon-attacks"
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
    version: "0.1.3",
    priority: 10,
    enabled: Boolean(isEnabled(config.settingKey)),
    metadata: config.metadata,
    cards: config.cards
  }));
}
