export interface Choice<T> {
  value: T
  name?: string
  description?: string
  disabled?: boolean | string
  type?: never
  privateKey?: string
}

export interface IConfig {
  appid: string
  name?: string
  version?: string
  projectPath?: string
  privateKeyPath?: string
  description?: string
}
