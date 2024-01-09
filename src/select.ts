import { dirname, resolve } from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import select from '@inquirer/select'
import input from '@inquirer/input'
import semver from 'semver'
import ci from 'miniprogram-ci'

import type { IConfig } from './types'

type ConfigFile = IConfig | IConfig[]

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const answer = {
  appid: '',
  version: '',
  privateKey: '',
}

let config: ConfigFile

let currentApp: IConfig | null = null

const file = resolve(process.cwd(), 'mini-ci-config.json')

export async function getFile() {
  config = await fs.readJSON(file)
}

export async function selectMini(name: string) {
  function getChoice(item: IConfig) {
    const { name, appid } = item || {}
    return {
      name: name || appid,
      value: appid,
    }
  }
  if (Array.isArray(config)) {
    if (name) {
      const find = config.find(item => item.name === name)
      if (find) {
        currentApp = find
        return
      }
    }
    const choices = config.map(item => getChoice(item))
    answer.appid = await select({
      message: '请选择以下小程序',
      choices,
    })
    currentApp = config.find(item => item.appid === answer.appid) as IConfig
  }
  else {
    currentApp = config
  }

  return answer
}

export async function selectVersion() {
  if (!currentApp)
    return
  const { version } = currentApp
  const newVer = (version && semver.inc(version, 'patch', false, '1')) || '1.0.0'
  const res = await input({ message: `版本号为：${newVer}`, default: newVer, validate: val => !!semver.valid(val) })
  answer.version = res
}

export async function upload() {
  if (!currentApp)
    return

  // eslint-disable-next-line no-useless-catch
  try {
    currentApp.version = answer.version
    const { appid, privateKeyPath, projectPath = '' } = currentApp
    const project = new ci.Project({
      appid,
      type: 'miniProgram',
      privateKeyPath,
      projectPath,
    //   ignores: ['node_modules/**/*'],
    })
    const uploadResult = await ci.upload({
      project,
      version: answer.version,
      desc: '',
      setting: {
        es6: true,
        es7: true,
        codeProtect: false,
      },
    //   onProgressUpdate: console.log,
    })
    currentApp.version = answer.version
    console.log(uploadResult, '上传成功')
    fs.writeJson(file, config, {
      spaces: '\t',
    })
  }

  catch (error) {
    throw error
  }
}
