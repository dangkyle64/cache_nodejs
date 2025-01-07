const { cacheId, getCache } = require("./cache_in_memory_dictionary/cache_in_memory_dictionary");
const { cacheIdMultipleValue, getCacheMultipleValue } = require("./cache_in_memory_dictionary/cache_in_memory_dictionary_multiple_values");

const filePathOfJson1 = './12341204.json';
const filePathOfJson2 = './23451205.json';
function runCacheInMemory() {
    cacheId(filePathOfJson1);
    console.log(getCache());

    cacheId(filePathOfJson1);
    console.log(getCache());

    cacheId(filePathOfJson2);
    console.log(getCache());
}

function runCacheInMemoryMultipleValue() {
    cacheIdMultipleValue(filePathOfJson1);
    console.log(getCacheMultipleValue());

    cacheIdMultipleValue(filePathOfJson1);
    console.log(getCacheMultipleValue());

    cacheIdMultipleValue(filePathOfJson2);
    console.log(getCacheMultipleValue());
}

function main() {
    runCacheInMemory();
    runCacheInMemoryMultipleValue();
};

main();