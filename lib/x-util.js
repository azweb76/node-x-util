/* jshint node:true */

'use strict';

var util    = require('util');
var common  = require('./common');

var xUtil = {
    command: require('./command'),
    strings: require('./strings'),
    common: common,
    extend: common.extend
};

module.exports = xUtil;