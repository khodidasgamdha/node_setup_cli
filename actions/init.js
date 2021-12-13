const download = require("download-git-repo");
const Spinner = require("cli-spinner").Spinner;
const chalk = require("chalk");

const gtiRepo =
    "https://github.com/khodidasgamdha/node_sequelize_setup/archive/refs/heads/main.zip";

module.exports = {
    init: (basePath) => {
        let spinner = new Spinner("Initializing Node setup.... %s");
        spinner.setSpinnerString("|/-\\");
        spinner.start();

        download(`direct:${gtiRepo}`, basePath, function (err) {
            spinner.stop(true);
            console.log(
                err ? err : chalk.green("Setup Initialized Successfully...")
            );
        });
    },
};
