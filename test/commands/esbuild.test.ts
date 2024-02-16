import {expect, test} from '@oclif/test'

describe('esbuild', () => {
  test
    .stdout()
    .command(['esbuild'])
    .it('runs esbuild cmd', (ctx) => {
      expect(ctx.stdout).to.contain('hello I am a bundled (esbuild) plugin')
    })
})
