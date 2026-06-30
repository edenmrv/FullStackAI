const contactService = require('../services/contactService');

function showHelp() {
    console.log(`Usage: node contacts.js [command] [arguments]

Commands:
  add "name" "email" "phone"  - Add a new contact
  list                        - List all contacts
  search "query"              - Search contacts by name or email
  delete "email"              - Delete contact by email
  help                        - Show this help message

Examples:
  node contacts.js add "John Doe" "john@example.com" "555-123-4567"
  node contacts.js search "john"
  node contacts.js delete "john@example.com"`);
}

// Parses the CLI arguments and executes the matched command
function handleCommand(args) {
    const command = args[0];

    switch (command) {
        case 'add':
            if (args.length < 4) {
                console.log(`✗ Error: Missing arguments for add command\nUsage: node contacts.js add "name" "email" "phone"`);
                return;
            }
            contactService.add(args[1], args[2], args[3]);
            break;
            
        case 'list':
            contactService.list();
            break;
            
        case 'search':
            if (!args[1]) {
                console.log(`✗ Error: Missing search query`);
                return;
            }
            contactService.search(args[1]);
            break;
            
        case 'delete':
            if (!args[1]) {
                console.log(`✗ Error: Missing email to delete`);
                return;
            }
            contactService.remove(args[1]);
            break;
            
        case 'help':
        case undefined:
            showHelp();
            break;
            
        default:
            console.log(`✗ Error: Unknown command '${command}'`);
            console.log(`Usage: node contacts.js [add|list|search|delete|help] [arguments]`);
    }
}

module.exports = { handleCommand };