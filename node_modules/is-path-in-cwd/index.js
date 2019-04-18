'use strict';
const isPathInside = require('is-path-inside');

module.exports = input => isPathInside(input, process.cwd());
