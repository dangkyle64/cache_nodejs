const { getFileName } = require("../get_file_name")

var cache = {}

// function checks if filename is already cached
// if cached, return the cached filename; if not cached, cache the filename and return filename
function cacheId(filePathOfJson) {
    const filename = getFileName(filePathOfJson);
    
    // If the filename is not already in the cache, cache it
    if (!cache[filename]) {
        cache[filename] = filename;
        console.log(`The filename ${filename} has been cached`);
        return filename;
    } else {
        console.log('Returning cached value');
        return cache[filename];
    }
};

// Returns the current cache object, which contains all the cached filenames.
// returning the cache to allow other files to use the cached filenames
function getCache() {
    return cache; 
}

module.exports = { cacheId, getCache };