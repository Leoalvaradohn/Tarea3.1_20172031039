const http = require('http');
const url = require('url');
const portFinder = require('./portFinder');
const getSystemInfo = require('./systemInfo');
const openFile = require('./fileOpener');

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;

    if (path === '/freePort') {
        portFinder().then(port => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ port }));
        }).catch(err => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Error al encontrar un puerto libre' }));
        });
    } else if (path === '/systemInfo') {
        const systemInfo = getSystemInfo();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(systemInfo));
    } else if (path === '/openFile') {
        openFile('archivo.txt').then(data => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ fileContent: data }));
        }).catch(err => {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Error al abrir el archivo' }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
