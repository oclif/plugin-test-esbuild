import Hello from './commands/hello'
import HelloWorld from './commands/hello/world'

export const COMMANDS = {
  hello: Hello,
  'hello:world': HelloWorld,
}
