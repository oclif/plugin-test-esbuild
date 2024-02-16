import {expect, test} from '@oclif/test'

describe('hello world', () => {
  test
    .stdout()
    .command(['hello:world'])
    .it('runs hello world cmd', (ctx) => {
      expect(ctx.stdout).to.contain('hello world!')
    })
})

describe('hello alias', () => {
  test
    .stdout()
    .command(['hello:alias'])
    .it('runs hello alias cmd', (ctx) => {
      expect(ctx.stdout).to.contain('hello world!')
    })
})
