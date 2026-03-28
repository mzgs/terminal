export interface LocalTextFile {
  content: string
  path: string
  size: number
}

export interface ShellApi {
  openExternal: (url: string) => Promise<void>
  openPath: (path: string) => Promise<void>
  readTextFile: (path: string) => Promise<LocalTextFile>
  writeTextFile: (path: string, content: string) => Promise<void>
}
