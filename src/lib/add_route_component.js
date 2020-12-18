fs = require('fs');
chalk = require('chalk');

if (!process.argv[2]) {
    console.error(chalk.red.bold('No argument found.\nSpecify the name of the component as a positional argument :\n'));
    console.error(chalk.red.italic('e.g. node add_route_component.js <<componentName>>'));
    return 1;
}

const routeEntryLines = `\t'${process.argv[2].toLowerCase()}': function () {
\t\tconst comp = new ${process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1)}Component();
\t\tsetContent(comp.html);
\t\tcomp.onInit();
\t\tsetActiveInNavbar('link-${process.argv[2].toLowerCase()}');
\t},`.split('\n');
// console.table(routeEntryLines);
const importStatement = `import ${process.argv[2].charAt(0).toUpperCase() + process.argv[2].slice(1)}Component from './components/${process.argv[2].toLowerCase()}';`;
const routeFilePath = 'src/routes.js';

fs.readFile(routeFilePath, (err, res) => {
    if (err) {
        console.error(chalk.red.bold(`Failed to read routes file : ${routeFilePath}`));
        console.error(chalk.red(err));
        return 1;
    }

    console.log(chalk.blue.bold(`Adding route for component "${process.argv[2]}" ...`));
    const file = res.toString('utf-8');
    let isCrlf = false;
    if (file.match(/\r\n/g))
        isCrlf = true;
    let lines = file.split(/\r?\n/g);
    let pastRouterLine = false;
    let addedRoute = false;
    // Insert import statement
    lines.unshift(importStatement);
    // Insert route entry
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/router\.on/i)) {
            // console.log('found start of routes at line ' + i);
            pastRouterLine = true;
        } else if (lines[i].match(/}\);/i) && pastRouterLine) {
            // console.log('found end of routes at line ' + i);
            lines.splice(i, 0, ...routeEntryLines);
            addedRoute = true;
            break;
        }
    }
    // console.table(lines);

    if (!addedRoute) {
        console.error(chalk.red.bold('Could not add route entry, check format'));
        return 1;
    }

    const newFile = lines.join(isCrlf ? '\r\n' : '\n');
    fs.writeFile('src/test-proc.js', newFile, function (err) {
        if (err) {
            console.error(chalk.red.bold(`Could not write new file : ${routeFilePath}`));
            console.error(chalk.red(err));
            return 1;
        }
        console.log(chalk.green.bold(`Route entry for component "${process.argv[2]}" has been added`));
        return 0;
    });
});