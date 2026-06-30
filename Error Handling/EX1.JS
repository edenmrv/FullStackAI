function safeJsonParse(jsonString) {
    try {
        // Attempt to parse the string into a JSON object
        return JSON.parse(jsonString);
    } catch (error) {
        // If  fails, return the error message
        return "Invalid JSON format";
    }
}

// Tests
console.log(safeJsonParse('{"name": "John"}')); 
// Output: { name: 'John' }

console.log(safeJsonParse('invalid json')); 
// Output: "Invalid JSON format"