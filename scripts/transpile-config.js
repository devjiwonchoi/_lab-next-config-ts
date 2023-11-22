'use strict'
Object.defineProperty(exports, '__esModule', {
  value: true,
})
Object.defineProperty(exports, 'transpileConfig', {
  enumerable: true,
  get: function () {
    return transpileConfig
  },
})
const _promises = require('fs/promises')
const _swc = require('./swc')
async function transpileConfig({ configPath, configFileName, log }) {
  try {
    const nextConfig = await (0, _promises.readFile)(configPath, 'utf-8')
    const { code } = await (0, _swc.transform)(nextConfig, {
      jsc: {
        target: 'esnext',
        parser: {
          syntax: 'typescript',
        },
      },
      isModule: 'unknown',
    })
    return code
  } catch (error) {
    log.error(`Failed to compile ${configFileName}`)
    throw error
  }
}

//# sourceMappingURL=transpile-config.js.map
