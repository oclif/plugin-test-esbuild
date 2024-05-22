import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('esm1 (@oclif/plugin-test-esm-1)', () => {
  it('runs esm1 cmd from @oclif/plugin-test-esm-1', async () => {
    const {stdout} = await runCommand(['esm1'])
    expect(stdout).to.contain('hello I am an ESM plugin from')
  })
})
