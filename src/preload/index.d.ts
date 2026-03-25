import { ElectronAPI } from '@electron-toolkit/preload'
import type { SessionApi } from '../shared/session'
import type { ShellApi } from '../shared/shell'
import type { SshApi } from '../shared/ssh'
import type { TerminalApi } from '../shared/terminal'

interface WebUtilsApi {
  getPathForFile: (file: File) => string
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      session: SessionApi
      shell: ShellApi
      ssh: SshApi
      terminal: TerminalApi
      webUtils: WebUtilsApi
    }
  }
}
