import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDir, "..");

async function readJson(relativePath) {
  return JSON.parse(await readFile(path.join(root, relativePath), "utf8"));
}

function getLocalization(dictionary, dottedKey) {
  return dottedKey.split(".").reduce((value, key) => value?.[key], dictionary);
}

const manifest = await readJson("module.json");
const de = await readJson("lang/de.json");
const en = await readJson("lang/en.json");
const { buildMartialConsequencesPacks, MARTIAL_PACK_CONFIGS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/martial-consequences.js"))
);
const { MARTIAL_PACK_IDS } = await import(
  pathToFileURL(path.join(root, "scripts/packs/martial/card-factory.js"))
);

assert.equal(manifest.id, "pf2e-critical-forge-martial-consequences");
assert.equal(manifest.version, "0.2.0");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));
assert.ok(manifest.relationships?.requires?.some((entry) => entry.id === "pf2e-critical-forge"));
assert.ok(manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"));

assert.equal(MARTIAL_PACK_CONFIGS.length, 2);
const disabled = buildMartialConsequencesPacks(() => false);
const enabled = buildMartialConsequencesPacks(() => true);
const rangedOnly = buildMartialConsequencesPacks((key) => key === "enableRangedMishaps");
assert.equal(disabled.length, 2);
assert.equal(disabled[0].id, MARTIAL_PACK_IDS.martialAttackFumbles);
assert.equal(disabled[1].id, MARTIAL_PACK_IDS.rangedMishaps);
assert.ok(disabled.every((pack) => pack.enabled === false));
assert.ok(enabled.every((pack) => pack.enabled === true));
assert.equal(rangedOnly[0].enabled, false);
assert.equal(rangedOnly[1].enabled, true);
assert.equal(disabled[0].cards.length, 30);
assert.equal(disabled[1].cards.length, 10);

const ids = new Set();
let automated = 0;
let manual = 0;
for (const pack of disabled) {
  assert.equal(pack.schemaVersion, 1);
  assert.equal(pack.version, "0.2.0");
  for (const dictionary of [de, en]) {
    assert.ok(getLocalization(dictionary, pack.titleKey), pack.titleKey);
    assert.ok(getLocalization(dictionary, pack.descriptionKey), pack.descriptionKey);
  }

  for (const card of pack.cards) {
    assert.equal(card.schemaVersion, 1);
    assert.equal(card.packId, pack.id);
    assert.equal(card.category, "criticalFumble");
    assert.ok(!ids.has(card.id), `Duplicate card id: ${card.id}`);
    ids.add(card.id);
    assert.ok(card.filters.excludedAttackTraits.includes("spell"), `${card.id} must exclude spell attacks.`);
    for (const dictionary of [de, en]) {
      assert.ok(getLocalization(dictionary, card.titleKey), card.titleKey);
      assert.ok(getLocalization(dictionary, card.descriptionKey), card.descriptionKey);
    }
    if (card.effect) {
      automated += 1;
      assert.equal(card.effect.target, "source");
      assert.equal(card.effect.definition.schemaVersion, 2);
      assert.ok(card.effect.definition.duration);
      assert.ok(card.effect.definition.components.length > 0);
      for (const dictionary of [de, en]) {
        assert.ok(getLocalization(dictionary, card.effect.nameKey), card.effect.nameKey);
      }
    } else {
      manual += 1;
      assert.ok(card.tags.includes("manual"));
    }
  }
}

assert.equal(ids.size, 40);

const martialCards = disabled[0].cards;
const martialById = new Map(martialCards.map((card) => [card.id.split(".").at(-1), card]));
assert.ok(martialById.has("maf-011-twisted-stance"));
assert.ok(martialById.has("maf-020-weapon-out-of-line"));
assert.ok(martialById.has("maf-021-awkward-regrip"));
assert.ok(martialById.has("maf-030-guarded-the-wrong-side"));
assert.deepEqual(martialById.get("maf-012-weight-on-the-wrong-foot").effect.definition.components[0], {
  type: "modifier", selector: "reflex", value: -1, modifierType: "circumstance", predicate: []
});
assert.deepEqual(martialById.get("maf-015-forced-reset").effect.definition.components[0], {
  type: "condition", slug: "clumsy", value: 1
});
for (const slug of ["maf-006-wild-follow-through", "maf-016-open-lane", "maf-017-driven-aside", "maf-018-lost-ground", "maf-023-guard-too-low", "maf-026-missed-threat", "maf-028-exposed-flank"]) {
  assert.ok(martialById.get(slug).filters.attackTraits.includes("melee"), `${slug} must require melee.`);
}
assert.deepEqual(martialById.get("maf-022-guard-too-high").effect.definition.components[0], {
  type: "modifier", selector: "reflex-dc", value: -1, modifierType: "circumstance", predicate: []
});
assert.deepEqual(martialById.get("maf-024-eyes-on-the-weapon").effect.definition.components, [
  { type: "modifier", selector: "perception", value: -1, modifierType: "circumstance", predicate: [] },
  { type: "modifier", selector: "perception-dc", value: -1, modifierType: "circumstance", predicate: [] }
]);
assert.ok(martialById.get("maf-021-awkward-regrip").filters.attackTraits.includes("agile"));
assert.ok(martialById.get("maf-001-lost-footing").tags.includes("manual"));
assert.ok(martialById.get("maf-001-lost-footing").filters.excludedSourceTraits.includes("incorporeal"));
assert.ok(martialById.get("maf-004-slippery-grip").tags.includes("action-sequencing"));
assert.ok(martialById.get("maf-009-defensive-collapse").filters.attackTraits.includes("melee"));
assert.equal(martialById.get("maf-022-guard-too-high").weight, 1);
assert.equal(martialById.get("maf-026-missed-threat").impact, "light");
assert.equal(martialById.get("maf-030-guarded-the-wrong-side").impact, "light");
for (const slug of ["maf-001-lost-footing", "maf-004-slippery-grip", "maf-008-distracted-recovery", "maf-009-defensive-collapse", "maf-010-unsteady-recovery"]) {
  assert.equal(martialById.get(slug).effect, null, `${slug} should use manual tactical resolution after review.`);
}

const rangedCards = disabled[1].cards;
const rangedById = new Map(rangedCards.map((card) => [card.id.split(".").at(-1), card]));
assert.ok(rangedById.has("rm-001-lost-sightline"));
assert.ok(rangedById.has("rm-010-misjudged-distance"));
for (const card of rangedCards) {
  assert.ok(card.filters.attackTraits.includes("ranged"), `${card.id} must require ranged.`);
  assert.ok(card.filters.excludedAttackTraits.includes("spell"), `${card.id} must exclude spell.`);
  assert.ok(card.tags.includes("ranged"), `${card.id} must carry the ranged tag.`);
  assert.equal(card.metadata.collection, "ranged-mishaps");
  assert.equal(card.effect, null, `${card.id} should use manual tactical resolution in block 1.`);
}
assert.equal(rangedById.get("rm-001-lost-sightline").impact, "light");
assert.equal(rangedById.get("rm-002-revealing-shot").impact, "moderate");
assert.ok(rangedById.get("rm-008-obstructed-arc").tags.includes("conditional"));
assert.ok(rangedById.get("rm-010-misjudged-distance").tags.includes("manual-removal"));

assert.equal(automated, 4);
assert.equal(manual, 36);

const settingsScript = await readFile(path.join(root, "scripts/settings.js"), "utf8");
assert.match(settingsScript, /game\.settings\.register/);
assert.match(settingsScript, /enableRangedMishaps/);
assert.match(settingsScript, /default: false/);

const mainScript = await readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainScript, /pf2eCriticalForgeReady/);
assert.match(mainScript, /registerPacks/);
assert.match(mainScript, /replace: true/);

console.log("PF2E Critical Forge: Martial Consequences 0.2.0 structural validation passed.");
