/* jshint node:true */

'use strict';

function createProvider(config, loader) {
    var mod = null;
    if (typeof config.module === 'function'){
        mod = config.module;
    }
    else {
        mod = loader(config.module);
    }
    if (config.args) {
        return mod(config.args);
    } else if (config.ctorArgs) {
        var Mod = mod;
        return new Mod(config.ctorArgs);
    }
    return mod;
}

module.exports = {
    createProvider : createProvider
};