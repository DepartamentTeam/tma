import * as en from "./en";
import * as i18n from '@solid-primitives/i18n';

export type Locale = "en" | "ru"

export type RawDictionary = typeof en;
export type Dictionary = i18n.Flatten<RawDictionary>;

