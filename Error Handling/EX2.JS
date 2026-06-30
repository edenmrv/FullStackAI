const fs = require('fs');
function readFileWithErrorHandling(filePath, callback) {
    fs.readFile(filePath,(err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                callback('File not found: ${filePath}');
            } else if (err.code === 'EISDIR') {
                callback(`Error: The path '${filePath}' is a directory, not a file`);
            } else {
                callback(`An error occurred: ${err.message}`);
                }
                return;
            } 
            // On success, data is a Buffer. .length gives the size in bytes.
        const fileSize = data.length;
        callback(`File read successfully. Size: ${fileSize} bytes`);
    });
}