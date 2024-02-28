import {Command, execute} from '@oclif/core'
import * as PluginTestEsm1 from '@oclif/plugin-test-esm-1'

import ESBuild from './commands/esbuild.js'
import Hello from './commands/hello/index.js'
import HelloWorld from './commands/hello/world.js'
export {default as INIT_HOOK} from './hooks/init/init.js'

export const ESM1_INIT_HOOK = PluginTestEsm1.hooks.init

export const COMMANDS: Record<string, Command.Class> = {
  ...PluginTestEsm1.commands,
  esbuild: ESBuild,
  hello: Hello,
  'hello:alias': HelloWorld,
  'hello:world': HelloWorld,
}

export async function run() {
  await execute({dir: import.meta.url})
}
