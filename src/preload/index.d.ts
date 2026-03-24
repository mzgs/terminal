import { ElectronAPI } from '@electron-toolkit/preload'
import type { TerminalApi } from '../shared/terminal'

interface WebUtilsApi {
  getPathForFile: (file: File) => string
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      terminal: TerminalApi
      webUtils: WebUtilsApi
    }
  }
}
