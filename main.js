const { cacheId, getCache } = require("./cache_in_memory_dictionary/cache_in_memory_dictionary");
const { cacheIdMultipleValue, getCacheMultipleValue } = require("./cache_in_memory_dictionary/cache_in_memory_dictionary_multiple_values");

const filePathOfJson1 = './12341204.json';
const filePathOfJson2 = './23451205.json';


 //Runs a series of tests on the caching mechanism to verify that:
 // 1. The cache correctly stores a new filename when it's first added.
 // 2. The cache returns the correct filename when the same filename is cached again.
 // 3. The cache updates correctly when a new, different filename is added.
 
 // It logs the state of the cache after each operation to demonstrate how the cache evolves.
 
function runCacheInMemory() {
    cacheId(filePathOfJson1);
    console.log(getCache());

    cacheId(filePathOfJson1);
    console.log(getCache());

    cacheId(filePathOfJson2);
    console.log(getCache());
}

 //Runs a series of tests on the caching mechanism to verify that:
 // 1. The cache correctly stores a new filename along with filepath when it's first added.
 // 2. The cache returns the correct filename when the same filename is cached again.
 // 3. The cache updates correctly when a new, different filename is added.
 
 // It logs the state of the cache after each operation to demonstrate how the cache evolves.
function runCacheInMemoryMultipleValue() {
    cacheIdMultipleValue(filePathOfJson1);
    console.log(getCacheMultipleValue());

    cacheIdMultipleValue(filePathOfJson1);
    console.log(getCacheMultipleValue());

    cacheIdMultipleValue(filePathOfJson2);
    console.log(getCacheMultipleValue());

    let currentCacheMultipleValues  = getCacheMultipleValue();
    console.log(currentCacheMultipleValues['12341204'].filename);
    console.log(currentCacheMultipleValues['12341204'].filepath);

    console.log(currentCacheMultipleValues['23451205'].filename);
    console.log(currentCacheMultipleValues['23451205'].filepath);
}

function main() {
    runCacheInMemory();
    runCacheInMemoryMultipleValue();
};

main();