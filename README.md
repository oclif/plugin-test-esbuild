plugin-test-esbuild
=================

Example of using `esbuild` with oclif

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-esbuild
$ bundle COMMAND
running command...
$ bundle (--version)
@oclif/plugin-test-esbuild/0.5.82 linux-x64 node-v20.19.1
$ bundle --help [COMMAND]
USAGE
  $ bundle COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bundle esbuild [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#bundle-esbuild-optionalarg-defaultarg-defaultfnarg)
* [`bundle esm1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#bundle-esm1-optionalarg-defaultarg-defaultfnarg)
* [`bundle hello PERSON`](#bundle-hello-person)
* [`bundle hello alias`](#bundle-hello-alias)
* [`bundle hello world`](#bundle-hello-world)
* [`bundle plugins`](#bundle-plugins)
* [`bundle plugins:inspect PLUGIN...`](#bundle-pluginsinspect-plugin)
* [`bundle plugins install PLUGIN`](#bundle-plugins-install-plugin)
* [`bundle plugins link PATH`](#bundle-plugins-link-path)
* [`bundle plugins reset`](#bundle-plugins-reset)
* [`bundle plugins uninstall [PLUGIN]`](#bundle-plugins-uninstall-plugin)
* [`bundle plugins update`](#bundle-plugins-update)

## `bundle esbuild [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ bundle esbuild [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

## `bundle esm1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ bundle esm1 [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--json] [--optionalString <value>]
    [--defaultString <value>] [--defaultFnString <value>]

FLAGS
  --defaultFnString=<value>  [default: async fn default]
  --defaultString=<value>    [default: simple string default]
  --optionalString=<value>

GLOBAL FLAGS
  --json  Format output as json.
```

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

## `bundle hello alias`

Say hello world

```
USAGE
  $ bundle hello alias

DESCRIPTION
  Say hello world

EXAMPLES
  $ bundle hello alias
  hello world! (./src/commands/hello/world.ts)
```

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

## `bundle plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bundle plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

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

## `bundle plugins install PLUGIN`

Installs a plugin into bundle.

```
USAGE
  $ bundle plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into bundle.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BUNDLE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BUNDLE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ bundle plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ bundle plugins install myplugin

  Install a plugin from a github url.

    $ bundle plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ bundle plugins install someuser/someplugin
```

## `bundle plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ bundle plugins link PATH [-h] [--install] [-v]

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

## `bundle plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ bundle plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

## `bundle plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ bundle plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

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
<!-- commandsstop -->
