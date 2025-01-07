const path = require('path');

function getFileName(filePathOfJson) {
    return path.basename(filePathOfJson, '.json');
};

module.exports = { getFileName };
