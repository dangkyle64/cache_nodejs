const { getFileName } = require("../get_file_name")


var cache = {}

function cacheIdMultipleValue(filePathOfJson) {
    const filename = getFileName(filePathOfJson);
    
    if (!cache[filename]) {
        cache[filename] = {
            filename: filename,
            filepath: filePathOfJson
        }

        console.log(`The filename ${filename} has been cached`);
        return filename;
    } else {
        console.log('Returning cached value');
        return cache[filename];
    }
};

function getCacheMultipleValue() {
    return cache; 
}

module.exports = { cacheIdMultipleValue, getCacheMultipleValue };