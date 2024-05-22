import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('esbuild', () => {
  it('runs esbuild cmd', async () => {
    const {stdout} = await runCommand('esbuild')
    expect(stdout).to.contain('hello I am a bundled (esbuild) plugin')
  })
})
