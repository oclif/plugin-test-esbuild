import {runHook} from '@oclif/test'
import {expect} from 'chai'

describe('hooks', () => {
  it('shows a message', async () => {
    const {stdout} = await runHook('init', {id: 'mycommand'})
    expect(stdout).to.contain('Greetings! from plugin-test-esbuild init hook')
  })
})
