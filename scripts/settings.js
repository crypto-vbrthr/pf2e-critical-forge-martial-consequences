import { MARTIAL_PACK_CONFIGS } from "./packs/martial-consequences.js";

export const MODULE_ID = "pf2e-critical-forge-martial-consequences";

const SETTING_LOCALIZATION = Object.freeze({
  enableMartialAttackFumbles: "MartialAttackFumbles",
  enableRangedMishaps: "RangedMishaps"
});

export function registerMartialConsequencesSettings(onPackSettingChanged) {
  for (const config of MARTIAL_PACK_CONFIGS) {
    const localizationKey = SETTING_LOCALIZATION[config.settingKey];
    game.settings.register(MODULE_ID, config.settingKey, {
      name: `PF2ECFMC.Settings.${localizationKey}.Name`,
      hint: `PF2ECFMC.Settings.${localizationKey}.Hint`,
      scope: "world",
      config: true,
      type: Boolean,
      default: false,
      onChange: () => onPackSettingChanged?.()
    });
  }
}

export function isMartialPackEnabled(settingKey) {
  return Boolean(game.settings.get(MODULE_ID, settingKey));
}
