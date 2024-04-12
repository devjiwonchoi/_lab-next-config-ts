import { nextTestSetup } from 'e2e-utils'

describe('nested-imports', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('should handle nested imports', async () => {
    const $ = await next.render$('/')
    expect($('p').text()).toBe('foobar')
  })
})