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
assert.equal(manifest.version, "0.1.0");
assert.equal(manifest.compatibility.minimum, "14");
assert.ok(manifest.esmodules.includes("scripts/main.js"));
assert.ok(manifest.relationships?.requires?.some((entry) => entry.id === "pf2e-critical-forge"));
assert.ok(manifest.relationships?.systems?.some((entry) => entry.id === "pf2e"));

assert.equal(MARTIAL_PACK_CONFIGS.length, 1);
const disabled = buildMartialConsequencesPacks(() => false);
const enabled = buildMartialConsequencesPacks(() => true);
assert.equal(disabled.length, 1);
assert.equal(disabled[0].id, MARTIAL_PACK_IDS.martialAttackFumbles);
assert.equal(disabled[0].enabled, false);
assert.equal(enabled[0].enabled, true);
assert.equal(disabled[0].cards.length, 10);

const ids = new Set();
let automated = 0;
let manual = 0;
for (const pack of disabled) {
  assert.equal(pack.schemaVersion, 1);
  assert.equal(pack.version, "0.1.0");
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

assert.equal(ids.size, 10);
assert.equal(automated, 5);
assert.equal(manual, 5);

const settingsScript = await readFile(path.join(root, "scripts/settings.js"), "utf8");
assert.match(settingsScript, /game\.settings\.register/);
assert.match(settingsScript, /default: false/);

const mainScript = await readFile(path.join(root, "scripts/main.js"), "utf8");
assert.match(mainScript, /pf2eCriticalForgeReady/);
assert.match(mainScript, /registerPacks/);
assert.match(mainScript, /replace: true/);

console.log("PF2E Critical Forge: Martial Consequences 0.1.0 structural validation passed.");
