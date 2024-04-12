import { transpileConfig } from '../../src/transpile-config'

describe('next-config-ts-node-api', () => {
  it('should be able to use Node.js API', async () => {
    const config = await transpileConfig({
      cwd: __dirname,
      nextConfigPath: `${__dirname}/next.config.ts`,
    })

    expect(config.env.foo).toBe('foo')
  })
})
