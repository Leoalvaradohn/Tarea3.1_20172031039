const fs = require('fs').promises;

function openFile(filename) {
    return fs.readFile(filename, 'utf8');
}

module.exports = openFile;

// Ejemplo de uso:
// const openFile = require('./fileOpener');
// openFile('archivo.txt').then(data => console.log(data)).catch(err => console.error(err));
