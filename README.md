plugin-test-esbuild
=================

Example of using `esbuild` with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-bundle
$ bundle COMMAND
running command...
$ bundle (--version)
@oclif/plugin-test-bundle/0.0.0 darwin-arm64 node-v20.11.0
$ bundle --help [COMMAND]
USAGE
  $ bundle COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [plugin-test-esbuild](#plugin-test-esbuild)
- [Usage](#usage)
- [Commands](#commands)
  - [`bundle hello PERSON`](#bundle-hello-person)
  - [`bundle hello world`](#bundle-hello-world)
  - [`bundle help [COMMANDS]`](#bundle-help-commands)
  - [`bundle plugins`](#bundle-plugins)
  - [`bundle plugins:install PLUGIN...`](#bundle-pluginsinstall-plugin)
  - [`bundle plugins:inspect PLUGIN...`](#bundle-pluginsinspect-plugin)
  - [`bundle plugins:install PLUGIN...`](#bundle-pluginsinstall-plugin-1)
  - [`bundle plugins:link PLUGIN`](#bundle-pluginslink-plugin)
  - [`bundle plugins:uninstall PLUGIN...`](#bundle-pluginsuninstall-plugin)
  - [`bundle plugins reset`](#bundle-plugins-reset)
  - [`bundle plugins:uninstall PLUGIN...`](#bundle-pluginsuninstall-plugin-1)
  - [`bundle plugins:uninstall PLUGIN...`](#bundle-pluginsuninstall-plugin-2)
  - [`bundle plugins update`](#bundle-plugins-update)

## `bundle hello PERSON`

Say hello

```
USAGE
  $ bundle hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/oclif/plugin-test-bundle/blob/v0.0.0/src/commands/hello/index.ts)_

## `bundle hello world`

Say hello world

```
USAGE
  $ bundle hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bundle hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/oclif/plugin-test-bundle/blob/v0.0.0/src/commands/hello/world.ts)_

## `bundle help [COMMANDS]`

Display help for bundle.

```
USAGE
  $ bundle help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bundle.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.12/src/commands/help.ts)_

## `bundle plugins`

List installed plugins.

```
USAGE
  $ bundle plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bundle plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/index.ts)_

## `bundle plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bundle plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bundle plugins add

EXAMPLES
  $ bundle plugins add myplugin

  $ bundle plugins add https://github.com/someuser/someplugin

  $ bundle plugins add someuser/someplugin
```

## `bundle plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bundle plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bundle plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/inspect.ts)_

## `bundle plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bundle plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bundle plugins add

EXAMPLES
  $ bundle plugins install myplugin

  $ bundle plugins install https://github.com/someuser/someplugin

  $ bundle plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/install.ts)_

## `bundle plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bundle plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bundle plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/link.ts)_

## `bundle plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bundle plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bundle plugins unlink
  $ bundle plugins remove

EXAMPLES
  $ bundle plugins remove myplugin
```

## `bundle plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ bundle plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/reset.ts)_

## `bundle plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bundle plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bundle plugins unlink
  $ bundle plugins remove

EXAMPLES
  $ bundle plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/uninstall.ts)_

## `bundle plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bundle plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bundle plugins unlink
  $ bundle plugins remove

EXAMPLES
  $ bundle plugins unlink myplugin
```

## `bundle plugins update`

Update installed plugins.

```
USAGE
  $ bundle plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.2.1/src/commands/plugins/update.ts)_
<!-- commandsstop -->
