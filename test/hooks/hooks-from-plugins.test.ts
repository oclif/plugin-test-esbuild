import {runHook} from '@oclif/test'
import {expect} from 'chai'

describe('hooks (@oclif/plugin-test-esm-1)', () => {
  it('shows a message', async () => {
    const {stdout} = await runHook('init', {id: 'mycommand'})
    expect(stdout).to.contain('Greetings! from plugin-test-esm-1 init hook')
  })
})
