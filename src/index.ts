import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'
export {default as INIT_HOOK} from './hooks/init/init'

export const COMMANDS = {
  hello: Hello,
  'hello:alias': HelloWorld,
  'hello:world': HelloWorld,
}
