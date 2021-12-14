const { Command } = require("commander");
const init = require("./actions/init").init;
const CreateModule = require("./actions/module").module;
const chalk = require("chalk");

const program = new Command();

const basePath = process.cwd();

program
    .version("0.0.1")
    .description(chalk.green("Generate Node Setup with MySQL DB (Sequelize)."));

program
    .command("init")
    .alias("i")
    .description("Initialize Node Setup.")
    .action(() => {
        init(basePath);
    });

program
    .command("create-module <moduleName...>")
    .alias("cm")
    .description("Create a new Node Module.")
    .action((module) => {
        CreateModule(basePath, module);
    });

program.parse(process.argv);
