const { join } = require('path')
const {statSync} = require('fs')

const basePath = join(__dirname, '..')

const distPaths = {
    app: join(basePath, 'app', 'dist', 'bundle.js'),
    lib1: join(basePath, 'lib-1', 'dist', 'index.js'),
    lib2: join(basePath, 'lib-2', 'dist', 'index.js'),
}

function getFilesizeInBytes(filename) {
    const stats = statSync(filename);
    const fileSizeInBytes = stats.size;
    return fileSizeInBytes;
}


const sizes = {
    app: getFilesizeInBytes(distPaths.app),
    lib1: getFilesizeInBytes(distPaths.lib1),
    lib2: getFilesizeInBytes(distPaths.lib2)
}

console.table({"File Sizes (B)": sizes})
