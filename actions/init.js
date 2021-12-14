const download = require("download-git-repo");
const Spinner = require("cli-spinner").Spinner;
const chalk = require("chalk");
const inquirer = require("inquirer");

const mysqlRepo = "https://github.com/khodidasgamdha/node_mysql_setup/archive/refs/heads/main.zip";
const mongodbRepo = "https://github.com/khodidasgamdha/node_mongodb_setup/archive/refs/heads/master.zip";

module.exports = {
    init: (basePath) => {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "options",
                    message: "Choose the Database",
                    choices: ["MySQL (sequelize)", "MongoDB (mongoose)"],
                },
            ])
            .then((ans) => {
                const { options } = ans;
                const repoLink = options === "MySQL (sequelize)" ? mysqlRepo : mongodbRepo;

                let spinner = new Spinner(`Initializing Node setup with ${options}.... %s`);
                spinner.setSpinnerString("|/-\\");
                spinner.start();

                download(`direct:${repoLink}`, basePath, function (err) {
                    spinner.stop(true);
                    console.log(
                        err ? err : chalk.green("Setup Initialized Successfully...")
                    );
                });
            });
    },
};
