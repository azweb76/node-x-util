/* jshint node:true */

'use strict';

var common  = require('./common');

var xUtil = {
    command: require('./command'),
    strings: require('./strings'),
    json: require('./json'),
    path: require('./path'),
    common: common,
    object: require('./object'),
    extend: common.extend
};

module.exports = xUtil;
