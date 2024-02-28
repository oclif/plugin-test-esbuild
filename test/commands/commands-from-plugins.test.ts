import {expect, test} from '@oclif/test'

describe('esm1 (@oclif/plugin-test-esm-1)', () => {
  test
    .stdout()
    .command(['esm1'])
    .it('runs esm1 cmd from @oclif/plugin-test-esm-1', (ctx) => {
      expect(ctx.stdout).to.contain('hello I am an ESM plugin from')
    })
})
