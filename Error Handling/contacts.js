const { handleCommand } = require('./commands/commandHandler');

// process.argv contains the command line arguments
// [0] is node, [1] is the script path, we only need from [2] onwards
const args = process.argv.slice(2);

handleCommand(args);