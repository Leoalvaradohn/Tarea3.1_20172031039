const os = require('os');

function getSystemInfo() {
    return {
        cpuCount: os.cpus().length,
        osInfo: {
            platform: os.platform(),
            release: os.release(),
            arch: os.arch()
        },
        totalMemory: os.totalmem(),
        freeMemory: os.freemem()
    };
}

module.exports = getSystemInfo;

// Ejemplo de uso:
// const getSystemInfo = require('./systemInfo');
// console.log(getSystemInfo());
