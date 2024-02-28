import {expect, test} from '@oclif/test'

describe('hooks (@oclif/plugin-test-esm-1)', () => {
  test
    .stdout()
    .hook('init', {id: 'mycommand'})
    .do((output) => expect(output.stdout).to.contain('Greetings! from plugin-test-esm-1 init hook'))
    .it('shows a message')
})
