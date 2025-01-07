const { getFileName } = require("../get_file_name")


var cache = {}

function cacheId(filePathOfJson) {
    const filename = getFileName(filePathOfJson);
    
    if (!cache[filename]) {
        cache[filename] = filename;
        console.log(`The filename ${filename} has been cached`);
        return filename;
    } else {
        console.log('Returning cached value');
        return cache[filename];
    }
};

function getCache() {
    return cache; 
}

module.exports = { cacheId, getCache };