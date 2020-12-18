fs = require('fs');
chalk = require('chalk');

if (!process.argv[2]) {
    console.error(chalk.red.bold('No argument found.\nSpecify the name of the component as a positional argument :\n'));
    console.error(chalk.red.italic('e.g. node add_link_component.js <<componentName>>'));
    return 1;
}

// Adding listener in JS
const jsListenerLines = `\t\tthis.element.querySelector('#link-${process.argv[2].toLowerCase()}').addEventListener('click', e => {
\t\t\te.preventDefault();
\t\t\trouter.navigate('/${process.argv[2].toLowerCase()}');
\t\t});`.split('\n');
// console.table(jsListenerLines);
const jsFilePath = `src/components/header.js`;

fs.readFile(jsFilePath, (err, res) => {
    if (err) {
        console.error(chalk.red.bold(`Failed to read JS file : ${jsFilePath}`));
        console.error(chalk.red(err));
        return 1;
    }

    console.log(chalk.blue.bold(`Adding JS link listener for component "${process.argv[2]}" ...`));
    const file = res.toString('utf-8');
    let isCrlf = false;
    if (file.match(/\r\n/g))
        isCrlf = true;
    let lines = file.split(/\r?\n/g);
    let addedListener = false;
    // Insert payload
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/onInit\(\)/i)) {
            // console.log('found start of routes at line ' + i);
            lines.splice(i + 1, 0, ...jsListenerLines);
            addedListener = true;
            break;
        }
    }
    // console.table(lines);

    if (!addedListener) {
        console.error(chalk.red.bold('Could not add JS listener, check format'));
        return 1;
    }

    const newFile = lines.join(isCrlf ? '\r\n' : '\n');
    fs.writeFile(jsFilePath, newFile, function (err) {
        if (err) {
            console.error(chalk.red.bold(`Could not write new file : ${jsFilePath}`));
            console.error(chalk.red(err));
            return 1;
        }
        console.log(chalk.green.bold(`JS listener for link of component "${process.argv[2]}" has been added`));
    });

});



// Adding link in HTML navbar
const htmlLinkLines = `\t\t\t\t<li class="nav-item">
\t\t\t\t\t<a id="link-${process.argv[2].toLowerCase()}" class="nav-link" aria-current="page" href="${process.argv[2].toLowerCase()}">${process.argv[2].toLowerCase()}</a>
\t\t\t\t</li>`.split('\n');
// console.table(htmlLinkLines);
const htmlFilePath = `src/components/header.html`;

fs.readFile(htmlFilePath, (err, res) => {
    if (err) {
        console.error(chalk.red.bold(`Failed to read HTML file : ${htmlFilePath}`));
        console.error(chalk.red(err));
        return 1;
    }

    console.log(chalk.blue.bold(`Adding HTML link for component "${process.argv[2]}" ...`));
    const file = res.toString('utf-8');
    let isCrlf = false;
    if (file.match(/\r\n/g))
        isCrlf = true;
    let lines = file.split(/\r?\n/g);
    let addedLink = false;
    let pastLinkUl = false;
    // Insert payload
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].match(/ul.+navbar-nav/i)) {
            pastLinkUl = true;
        } else if (lines[i].match(/ul/i) && pastLinkUl) {
            // console.log('found start of routes at line ' + i);
            lines.splice(i, 0, ...htmlLinkLines);
            addedLink = true;
            break;
        }
    }
    // console.table(lines);

    if (!addedLink) {
        console.error(chalk.red.bold('Could not add HTML link, check format'));
        return 1;
    }

    const newFile = lines.join(isCrlf ? '\r\n' : '\n');
    fs.writeFile(htmlFilePath, newFile, function (err) {
        if (err) {
            console.error(chalk.red.bold(`Could not write new file : ${htmlFilePath}`));
            console.error(chalk.red(err));
            return 1;
        }
        console.log(chalk.green.bold(`HTML link for component "${process.argv[2]}" has been added to Navbar`));
    });

});