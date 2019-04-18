'use strict';
const path = require('path');

module.exports = input => path.resolve(input) === process.cwd();
