#!/usr/bin/env node
'use strict'
Object.defineProperty(exports, '__esModule', {
  value: true,
})
const _promises = require('fs/promises')
const _path = require('path')
const cwd = process.cwd()
const nextNodeModulesDistPath = (0, _path.join)(cwd, './node_modules/next/dist')
const paths = [
  {
    name: 'config',
    nodeModulesPath: `${nextNodeModulesDistPath}/server/config.js`,
  },
  {
    name: 'constants',
    nodeModulesPath: `${nextNodeModulesDistPath}/shared/lib/constants.js`,
  },
  {
    name: 'transpile-config',
    nodeModulesPath: `${nextNodeModulesDistPath}/build/transpile-config.js`,
  },
]
async function main() {
  const jobs = paths.map(async ({ name, nodeModulesPath }) => {
    const content = await (0, _promises.readFile)(
      `./scripts/${name}.js`,
      'utf-8'
    )
    await (0, _promises.writeFile)(nodeModulesPath, content)
  })
  await Promise.all(jobs)
}
main()
