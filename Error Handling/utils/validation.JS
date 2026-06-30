// Validates contact input and throws custom errors if invalid
function validateContact(name, email, phone) {
    if (!name || !email || !phone) {
        throw new Error("All fields (name, email, phone) are required");
    }
    
    if (!email.includes('@')) {
        throw new Error("Email must contain @ symbol");
    }
}

module.exports = { validateContact };