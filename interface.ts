export interface App {
  id: string
  icon: Icon
  name: string
  shortDescription: string
  type: 'app' | 'api' | 'server'
  setup: Setup
}

// MARK: Icon
interface Icon {
  symbol?: SFSymbol
  text?: TextIcon
}
interface SFSymbol {
  name: string
  color?: Color
}
interface TextIcon {
  name: string
  color?: Color
}
interface Color {
  background?: string
  backgroundDark?: string
  foreground?: string
  foregroundDark?: string
}

// MARK: Setup
type Setup = TBun | TSh
interface IEnv {
  env?: Record<string, string>
}
// MARK: Bun
interface IGithub {
  repo: string
  commit?: string
}
interface IBun extends IGithub, IEnv {
  command?: string
}
interface TBun extends IBun {
  type: 'bun'
}
// MARK: Shell
interface ISh extends IEnv {
  directory?: string
  install?: string[] | string
  checkForUpdates?: string[] | string
  update?: string[] | string
  uninstall?: string[] | string
  run: string
}
interface TSh extends ISh {
  type: 'sh'
}
