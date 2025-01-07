# Singleton Cache Example 

Singleton cache example to test for usage in electron application. 

Usage specifically inside of the Electron main process which allows the singleton example 
to potentially work as an option for caching.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation

Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-name.git
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