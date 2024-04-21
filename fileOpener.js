const fs = require('fs').promises;

function openFile(filename) {
    return fs.readFile(filename, 'utf8');
}

module.exports = openFile;


