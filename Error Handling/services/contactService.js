const { loadContacts, saveContacts } = require('../utils/fileUtils');
const { validateContact } = require('../utils/validation');

function add(name, email, phone) {
    try {
        validateContact(name, email, phone);
        const contacts = loadContacts();
        
        // Prevent duplicate emails
        if (contacts.some(c => c.email === email)) {
            console.log('✗ Error: Contact with this email already exists');
            return;
        }

        contacts.push({ name, email, phone });
        console.log(`✓ Contact added: ${name}`);
        saveContacts(contacts);
    } catch (error) {
        // Catch validation errors
        console.log(`✗ Error: ${error.message}`);
    }
}

function list() {
    const contacts = loadContacts();
    console.log('\n=== All Contacts ===');
    if (contacts.length === 0) {
        console.log('No contacts found.');
        return;
    }
    
    contacts.forEach((c, index) => {
        console.log(`${index + 1}. ${c.name} - ${c.email} - ${c.phone}`);
    });
}

function search(query) {
    const contacts = loadContacts();
    console.log(`\n=== Search Results for "${query}" ===`);
    
    const lowerQuery = query.toLowerCase();
    const results = contacts.filter(c => 
        c.name.toLowerCase().includes(lowerQuery) || 
        c.email.toLowerCase().includes(lowerQuery)
    );

    if (results.length === 0) {
        console.log(`No contacts found matching "${query}"`);
    } else {
        results.forEach((c, index) => {
            console.log(`${index + 1}. ${c.name} - ${c.email} - ${c.phone}`);
        });
    }
}

function remove(email) {
    const contacts = loadContacts();
    const initialLength = contacts.length;
    
    const filteredContacts = contacts.filter(c => c.email !== email);

    if (filteredContacts.length === initialLength) {
        console.log(`✗ Error: No contact found with email: ${email}`);
        return;
    }

    const deletedContact = contacts.find(c => c.email === email);
    console.log(`✓ Contact deleted: ${deletedContact.name}`);
    saveContacts(filteredContacts);
}

module.exports = { add, list, search, remove };