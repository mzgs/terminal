export interface TerminalAppearanceSettings {
  colorSchemeId: string
  fontFamilyId: string
  fontSize: number
  fontWeight: string
}

export interface AppSettings {
  terminal: TerminalAppearanceSettings
  version: 1
}

export interface SettingsApi {
  load: () => Promise<AppSettings | null>
  save: (settings: AppSettings) => Promise<void>
}
