import ESBuild from './commands/esbuild'
import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'
export {default as INIT_HOOK} from './hooks/init/init'

export const COMMANDS = {
  esbuild: ESBuild,
  hello: Hello,
  'hello:alias': HelloWorld,
  'hello:world': HelloWorld,
}
