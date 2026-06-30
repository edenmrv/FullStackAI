const fs = require('fs');
const FILE_PATH = './contacts.json';

// loads contacts, handling missing or corrupted files
function loadContacts() {
    console.log(`Loading contacts from ${FILE_PATH}...`);
    try {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        const contacts = JSON.parse(data);
        console.log(`✓ Loaded ${contacts.length} contacts`);
        return contacts;
    } catch (error) {
        // handle case where file doesn't exist yet
        if (error.code === 'ENOENT') {
            console.log('✗ File not found - creating new contact list');
            return [];
        }
        // handle invalid JSON or corrupted file
        console.log('✗ Error: File is corrupted or unreadable. Starting fresh.');
        return [];
    }
}

// Saves the contacts array back to the JSON file
function saveContacts(contacts) {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(contacts, null, 2));
        console.log(`✓ Contacts saved to ${FILE_PATH}`);
    } catch (error) {
        console.log(`✗ Error: Failed to save contacts - ${error.message}`);
    }
}

module.exports = { loadContacts, saveContacts };