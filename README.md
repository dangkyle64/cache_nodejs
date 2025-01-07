# Singleton Cache Example 

Singleton cache example to test for usage in electron application. 

Usage specifically inside of the Electron main process which allows the singleton example 
to potentially work as an option for caching.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/dangkyle64/cache_nodejs
   ```
## Usage

Single Value Key Pairs {'ID': 'ID'}
   ```javascript
    const { cacheId, getCache } = require('path-to-your-module');

    cacheId('./path/to/file.json');
    console.log(getCache());
   ```
Multiple Value Key Pairs {'ID': filename: 'ID', filepath: './path/to/file'}
   ```javascript
   const { cacheIdMultipleValue, getCacheMultipleValue } = require('path-to-your-module');

   cacheIdMultipleValue('./path/to/file.json');
   console.log(getCacheMultipleValue());
   ```

## Api Documentation

cacheId(filePathOfJson)

    Parameters: filePathOfJson (String) — Path to the .json file.
    Returns: String — The cached filename if already cached, or the newly cached filename.
    Description: Caches the file name if it hasn't been cached yet and returns the cached value when called again.

getCache()

    Returns: Object — The current cache object, containing all cached filenames.
    Description: Returns the current state of the cache.

cacheIdMultipleValue(filePathOfJson)

    Parameters: filePathOfJson (String) — Path to the .json file.
    Returns: String — The cached filename if already cached, or the newly cached filename.
    Description: Caches the file name if it hasn't been cached yet and returns the cached value when called again.

getCacheMultipleValue()

    Returns: Object — The current cache object, containing all cached filenames and filepaths.
    Description: Returns the current state of the cache.

getFileName(filePathOfJson)

    Parameters: filePathOfJson (String) — Path to the .json file.
    Returns: String — The filename of the json
    Description: Trims the file path of the json to get the filename then returns filename