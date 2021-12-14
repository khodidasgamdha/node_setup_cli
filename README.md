### Generate Node Setup using CLI

```bash
$ npm install
```

```bash
$ npm lik
```

**Custom Command**

```
Commands:
  init|i                            Initialize Node Setup.
  create-module|cm <moduleName...>  Create a new Node Module.
  help [command]                    display help for command
```

## Usage of Custom Command

```bash
$ framework init
    > Choose the Database
    - MySQL - sequelize
    - MongoDB - mongoose

# it will ask for which database you want to configure for your nodejs setup
```

```bash
$ framework create-module mouleName
$ framework cm mouleName

$ framework create-module moduleName1 moduleName2 mmoduleName3 ...
$ framework cm moduleName1 moduleName2 mmoduleName3 ...

# Note: ModuleName should be separted by spaces
```

```bash
$ framework --help
# Output
Usage: cli [options] [command]

Node setup Management

Options:
  -V, --version                     output the version number
  -h, --help                        display help for command

Commands:
  init|i                            Initializes the nodejs setup
  create-module|cm <moduleName...>  Create a new module in the apis
  help [command]                    display help for command
```

```bash
$ framework --version
# Will gives you the current version of the cli
```
