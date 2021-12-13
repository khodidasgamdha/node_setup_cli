const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

module.exports = {
    module: (basePath, moduleNames) => {
        if (moduleNames) {
            if (fs.existsSync(path.join(basePath, "api"))) {
                let duplicates = []

                for (let moduleName of moduleNames) {
                    const modulePath = path.join(basePath, "api", moduleName);
        
                    if (!fs.existsSync(modulePath)) {
                        fs.mkdir(modulePath, (err) => {
                            if (!err) {
                                
                                // create controller dir
                                fs.mkdirSync(path.join(modulePath, "controller"));
                                
                                // create middleware dir
                                fs.mkdirSync(path.join(modulePath, "middleware"));
                                
                                // create services dir
                                fs.mkdirSync(path.join(modulePath, "services"));
                                
                                // create routes.json file
                                fs.writeFileSync(
                                    path.join(modulePath, "routes.json"),
`[
    {
        "path": "/",
        "method": "get",
        "action": "${moduleName}.controllerName",
        "globalMiddlewares": [],
        "middlewares": [
            "${moduleName}.middlewareName"
        ],
        "public": true,
        "root": true
    }
]`
);
        
                                // create moduleName.js file inside controller folder
                                fs.writeFileSync(
                                    path.join(modulePath, "controller", `${moduleName}.js`),
`module.exports = {
    controllerName: (req, res, next) => {
        res.status(200).send(setup.services["${moduleName}"]["demo"]["serviceName"]());
    },
};`
);
                                
                                // create demo.js file inside middleware folder
                                fs.writeFileSync(
                                    path.join(modulePath, "middleware", 'demo.js'),
`module.exports = {
    middlewareName: (req, res, next) => {
        console.log("Middleware called.");
        next();
    },
};`
);

                                // create demo.js file inside services folder
                                fs.writeFileSync(
                                    path.join(modulePath, "services", 'demo.js'),
`module.exports = {
    serviceName: () => {
        return "Service Called";
    },
};`
);
                            }
                        });

                        console.log(chalk.green(`Module ${moduleName} created successfully...`));
                    } else {
                        duplicates.push(moduleName)
                    }
                }

                if(duplicates.length > 0) {
                    console.log(chalk.red('WARN : ') + chalk.yellowBright(`Module with Name ${duplicates} already exists.`));
                } else {
                    console.log(chalk.green("All Module created successfully..."));
                }
    
            } else {
                console.log(
                    chalk.red("WARN : ") +
                        chalk.yellowBright(`404 Not Found - ${path.join(basePath, "api")}`)
                );
            }
        } else {
            console.log(chalk.red('WARN : ') + chalk.yellowBright('Please enter Module Name.'));
        }
    },
};
