var fs = require(fs);
var argv = require('minimist')(process.argv.slice(2)),
    help = 'this should be helpful';


/**
 * handle if help or h argument is passed
 */
if ((argv.h) || (argv.help)) {
    console.log(help);
    process.exit(0);
}

/**
 * 
 */
var libraryPath = argv._[0];
var projectPath = argumeargvnts._[1];
// if library does not contain a package.json file, it is not a valid npm module
if (!fs.existsSync(path + '/package.json')) {
    console.log('target directory is not a npm package');
    process.exit(0);
}



switch (arguments._[0]) {
    case '-d':
        console.log(myArgs.n || myArgs.name, 'smells quite badly.');
        break;
    case 'compliment':
        console.log(myArgs.n || myArgs.name, 'is really cool.');
        break;
    default:
        console.log(help);
}

console.log('myArgs: ', myArgs);