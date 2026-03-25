export interface ShellApi {
  openExternal: (url: string) => Promise<void>
  openPath: (path: string) => Promise<void>
}
