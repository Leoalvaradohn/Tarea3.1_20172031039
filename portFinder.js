const http = require('http');

function findFreePort() {
    return new Promise((resolve, reject) => {
        const server = http.createServer();
        server.on('listening', () => {
            const port = server.address().port;
            server.close(() => {
                resolve(port);
            });
        });
        server.on('error', (err) => {
            reject(err);
        });
        server.listen(0);
    });
}

module.exports = findFreePort;

// Ejemplo de uso:
// const findFreePort = require('./portFinder');
// findFreePort().then(port => console.log('Puerto libre encontrado:', port));
