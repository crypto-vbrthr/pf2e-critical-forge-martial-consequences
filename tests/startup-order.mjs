import assert from "node:assert/strict";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(testDir, "..");
const onceHandlers = new Map();
const registeredSettings = new Map();
const registeredPackBatches = [];

globalThis.Hooks = { once(name, callback) { onceHandlers.set(name, callback); } };
globalThis.game = {
  user: { isGM: true },
  i18n: { localize: (key) => key },
  settings: {
    register(moduleId, key, config) { registeredSettings.set(`${moduleId}.${key}`, config); },
    get(moduleId, key) {
      const fullKey = `${moduleId}.${key}`;
      if (!registeredSettings.has(fullKey)) throw new Error(`Setting not registered: ${fullKey}`);
      return registeredSettings.get(fullKey).default;
    }
  }
};
globalThis.ui = { notifications: { error() { throw new Error("Startup should not fail."); }, info() {} } };

await import(pathToFileURL(path.join(root, "scripts/main.js")));
const extensionReady = onceHandlers.get("pf2eCriticalForgeReady");
const init = onceHandlers.get("init");
assert.equal(typeof extensionReady, "function");
assert.equal(typeof init, "function");

const extensionController = {
  registerPacks(packs, options) {
    registeredPackBatches.push({ packs, options });
    return packs;
  }
};
extensionReady({ cards: { extensions: { forModule() { return extensionController; } } } });
assert.equal(registeredPackBatches.length, 0);
init();
assert.equal(registeredSettings.size, 1);
assert.equal(registeredPackBatches.length, 1);
assert.equal(registeredPackBatches[0].packs.length, 1);
assert.equal(registeredPackBatches[0].packs[0].cards.length, 20);
assert.equal(registeredPackBatches[0].packs[0].enabled, false);
assert.equal(registeredPackBatches[0].options.replace, false);

console.log("PF2E Critical Forge: Martial Consequences 0.1.1 startup-order validation passed.");
