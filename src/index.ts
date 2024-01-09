#!/usr/bin/env node
import process from 'node:process'
import { getFile, selectMini, selectVersion, upload } from './select'

async function init() {
  const args = process.argv.slice(2)
  console.log(args[0])
  try {
    await getFile()
    await selectMini(args[0])
    await selectVersion()
    await upload()
  }
  catch (error) {
    console.error(error)
  }
}

init()
