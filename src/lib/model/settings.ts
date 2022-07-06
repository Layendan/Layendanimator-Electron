import { writable } from "svelte/store";

export interface CustomTheme {
  name: string;
  source: string;
}

export interface Theme {
  custom: CustomTheme | undefined;
  syncWithSystem: boolean;
  appearance: "dark" | "light" | undefined;
}

export interface Settings {
  allowNSFW: boolean;
  ordered: boolean;
  reduceMotion: boolean;
  notifications: {
    enabled: boolean;
    grouped: boolean;
  };
  theme: Theme;
  customThemes: CustomTheme[];
}

export const defaultSettings: Settings = {
  allowNSFW: false,
  ordered: true,
  reduceMotion: false,
  notifications: {
    enabled: true,
    grouped: false,
  },
  theme: { custom: undefined, syncWithSystem: true, appearance: "dark" },
  customThemes: [],
};

export const settings = writable<Settings>(defaultSettings);
