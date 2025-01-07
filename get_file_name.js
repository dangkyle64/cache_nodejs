const path = require('path');

// function takes filepath of the json 
// returns the filename for usage in the singleton cache 
function getFileName(filePathOfJson) {
    return path.basename(filePathOfJson, '.json');
};

module.exports = { getFileName };
