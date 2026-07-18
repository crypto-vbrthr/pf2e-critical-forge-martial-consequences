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
assert.equal(manifest.version, "0.2.3");
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
assert.equal(disabled[1].cards.length, 30);

const ids = new Set();
let automated = 0;
let manual = 0;
for (const pack of disabled) {
  assert.equal(pack.schemaVersion, 1);
  assert.equal(pack.version, "0.2.3");
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

assert.equal(ids.size, 60);

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
assert.ok(rangedById.has("rm-011-ducking-lesson"));
assert.ok(rangedById.has("rm-020-range-found"));
assert.ok(rangedById.has("rm-021-shield-meet-warning"));
assert.ok(rangedById.has("rm-030-return-address-included"));
for (const card of rangedCards) {
  assert.ok(card.filters.attackTraits.includes("ranged"), `${card.id} must require ranged.`);
  assert.ok(card.filters.excludedAttackTraits.includes("spell"), `${card.id} must exclude spell.`);
  assert.ok(card.tags.includes("ranged"), `${card.id} must carry the ranged tag.`);
  assert.equal(card.metadata.collection, "ranged-mishaps");
  assert.equal(card.effect, null, `${card.id} should use manual tactical resolution in the current Ranged Mishaps blocks.`);
}
assert.equal(rangedById.get("rm-001-lost-sightline").impact, "light");
assert.equal(rangedById.get("rm-002-revealing-shot").impact, "moderate");
assert.ok(rangedById.get("rm-002-revealing-shot").tags.includes("seek"));
assert.ok(rangedById.get("rm-004-broken-firing-rhythm").tags.includes("action-sequencing"));
assert.ok(rangedById.get("rm-005-forced-reposition").tags.includes("target-reaction"));
assert.ok(rangedById.get("rm-006-target-finds-cover").tags.includes("fallback-ac"));
assert.ok(rangedById.get("rm-007-poor-follow-through").tags.includes("parry"));
assert.ok(rangedById.get("rm-008-obstructed-arc").tags.includes("environment"));
assert.ok(rangedById.get("rm-008-obstructed-arc").tags.includes("fallback-cover"));
assert.equal(rangedById.get("rm-009-exposed-to-return-fire").impact, "light");
assert.ok(rangedById.get("rm-009-exposed-to-return-fire").tags.includes("conditional"));
assert.equal(rangedById.get("rm-010-misjudged-distance").impact, "moderate");
assert.equal(rangedById.get("rm-010-misjudged-distance").weight, 1);
assert.ok(rangedById.get("rm-010-misjudged-distance").tags.includes("manual-removal"));
assert.equal(rangedById.get("rm-012-closing-the-distance").impact, "strong");
assert.ok(rangedById.get("rm-014-follow-the-shot").tags.includes("seek"));
assert.ok(!rangedById.get("rm-014-follow-the-shot").fallbackDescription.includes("Point Out"));
assert.ok(rangedById.get("rm-015-read-the-angle").tags.includes("target-reaction"));
assert.ok(rangedById.get("rm-015-read-the-angle").fallbackDescription.includes("remains a valid target"));
assert.ok(rangedById.get("rm-016-dead-ground").tags.includes("claimed-space"));
assert.equal(rangedById.get("rm-017-a-very-encouraging-miss").weight, 2);
assert.ok(rangedById.get("rm-017-a-very-encouraging-miss").tags.includes("stride"));
assert.ok(rangedById.get("rm-018-scenic-detour").tags.includes("fallback-step"));
assert.ok(rangedById.get("rm-019-helpful-warning").tags.includes("protective-reaction"));
assert.ok(!rangedById.get("rm-019-helpful-warning").fallbackDescription.includes("Aid"));
assert.ok(rangedById.get("rm-020-range-found").tags.includes("counterfire"));
assert.ok(rangedById.get("rm-020-range-found").tags.includes("fallback-stride"));
assert.ok(rangedById.get("rm-021-shield-meet-warning").tags.includes("shield"));
assert.equal(rangedById.get("rm-022-look-over-there").impact, "strong");
assert.equal(rangedById.get("rm-023-committed-aim").weight, 2);
assert.ok(rangedById.get("rm-024-friendly-fire-drill").tags.includes("fallback-penalty"));
assert.ok(rangedById.get("rm-025-inside-the-arc").tags.includes("close-quarters"));
assert.ok(!rangedById.get("rm-025-inside-the-arc").fallbackDescription.includes("does not trigger reactions"));
assert.ok(rangedById.get("rm-026-ammunition-argument").tags.includes("action-tax"));
assert.ok(rangedById.get("rm-027-hecklers-range").tags.includes("demoralize"));
assert.equal(rangedById.get("rm-028-scatter-formation").impact, "strong");
assert.ok(!rangedById.get("rm-028-scatter-formation").fallbackDescription.includes("triggers reactions"));
assert.ok(rangedById.get("rm-029-dust-signature").tags.includes("concealment"));
assert.ok(rangedById.get("rm-030-return-address-included").tags.includes("line-of-effect"));
assert.ok(!rangedById.get("rm-030-return-address-included").fallbackDescription.includes("does not trigger reactions"));

assert.equal(automated, 4);
assert.equal(manual, 56);

const settingsScript = await readFile(path.join(root, "scripts/settings.js"), "utf8");
assert.match(settingsScript, /game\.settings\.register/);
assert.match(settingsScript, /enableRangedMishaps/);
assert.match(settingsScript, /default: false/);

const mainScript = await readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainScript, /pf2eCriticalForgeReady/);
assert.match(mainScript, /registerPacks/);
assert.match(mainScript, /replace: true/);

console.log("PF2E Critical Forge: Martial Consequences 0.2.3 structural validation passed.");
