import { readFile, writeFile } from 'fs/promises'

const nextNodeModulesDistPath = './node_modules/next/dist'
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
    const content = await readFile(`./scripts/${name}.js`, 'utf-8')
    await writeFile(nodeModulesPath, content)
  })

  await Promise.all(jobs)
}

main()
