import {Args, Command, Flags, Interfaces} from '@oclif/core'

type Result = {
  args: Interfaces.InferredArgs<typeof ESBuild.args>
  flags: Interfaces.InferredFlags<typeof ESBuild.flags>
}

export default class ESBuild extends Command {
  static args = {
    defaultArg: Args.string({
      default: 'simple string default',
    }),
    defaultFnArg: Args.string({
      default: async () => 'async fn default',
    }),
    optionalArg: Args.string(),
  }

  static enableJsonFlag = true

  static flags = {
    defaultFnString: Flags.string({
      default: async () => 'async fn default',
    }),
    defaultString: Flags.string({
      default: 'simple string default',
    }),
    optionalString: Flags.string(),
  }

  async run(): Promise<Result> {
    const {args, flags} = await this.parse(ESBuild)
    this.log(`hello I am a bundled (esbuild) plugin from ${this.config.root}!`)
    return {args, flags}
  }
}
