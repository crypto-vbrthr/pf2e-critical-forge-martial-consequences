export const MARTIAL_CARD_ID_PREFIX = "pf2e-critical-forge-martial-consequences";
export const MARTIAL_PACK_IDS = Object.freeze({
  martialAttackFumbles: `${MARTIAL_CARD_ID_PREFIX}.martial-attack-fumbles`,
  rangedMishaps: `${MARTIAL_CARD_ID_PREFIX}.ranged-mishaps`
});

export const DURATIONS = Object.freeze({
  ONE_ROUND: Object.freeze({ value: 1, unit: "rounds", expiry: "turn-end" })
});

const FILTER_KEYS = Object.freeze([
  "damageTypes", "weaponGroups", "attackTraits", "excludedAttackTraits",
  "saveTypes", "spellTraditions", "spellTraits", "sourceTraits", "targetTraits",
  "excludedSourceTraits", "excludedTargetTraits"
]);

function unique(values = []) {
  return [...new Set(values)];
}

function freezeFilters(filters = {}) {
  const result = {};
  for (const key of FILTER_KEYS) result[key] = Object.freeze(unique(filters[key] ?? []));
  return Object.freeze(result);
}

function freezeEffect(effect, localizationKey, fallbackTitle) {
  if (!effect) return null;
  return Object.freeze({
    target: effect.target ?? "source",
    nameKey: `PF2ECFMC.Effects.${localizationKey}.Name`,
    fallbackName: effect.fallbackName ?? fallbackTitle,
    definition: Object.freeze({
      schemaVersion: 2,
      duration: effect.duration,
      components: Object.freeze((effect.components ?? []).map((component) => Object.freeze({ ...component })))
    })
  });
}

function defineCriticalFumble({
  id, packId, collection, localizationKey, tone, impact, fallbackTitle, fallbackDescription,
  weight = 1, tags = [], filters = {}, effect = null, requiredAttackTraits = []
}) {
  return Object.freeze({
    schemaVersion: 1,
    id: `${MARTIAL_CARD_ID_PREFIX}.${id}`,
    packId,
    category: "criticalFumble",
    tone,
    impact,
    titleKey: `PF2ECFMC.Cards.${localizationKey}.Title`,
    descriptionKey: `PF2ECFMC.Cards.${localizationKey}.Description`,
    fallbackTitle,
    fallbackDescription,
    weight,
    tags: Object.freeze(["weapon", "martial", "critical-fumble", ...tags]),
    filters: freezeFilters({
      ...filters,
      attackTraits: unique([...requiredAttackTraits, ...(filters.attackTraits ?? [])]),
      excludedAttackTraits: unique(["spell", ...(filters.excludedAttackTraits ?? [])])
    }),
    effect: freezeEffect(effect, localizationKey, fallbackTitle),
    metadata: Object.freeze({ collection })
  });
}

export function defineMartialAttackFumble(card) {
  return defineCriticalFumble({
    ...card,
    packId: MARTIAL_PACK_IDS.martialAttackFumbles,
    collection: "martial-attack-fumbles"
  });
}

export function defineRangedMishap(card) {
  return defineCriticalFumble({
    ...card,
    packId: MARTIAL_PACK_IDS.rangedMishaps,
    collection: "ranged-mishaps",
    requiredAttackTraits: ["ranged"],
    tags: ["ranged", ...(card.tags ?? [])]
  });
}
