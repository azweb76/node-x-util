/* jshint node:true */

'use strict';

function extend(obj, extended, replace) {
  for (var p in extended) {
    if (obj[p] === undefined) {
      obj[p] = extended[p];
    } else if (typeof(obj[p]) === 'object') {
      obj[p] = extend(obj[p], extended[p]);
    } else if (extended[p] !== undefined && replace) {
      obj[p] = extended[p];
    }
  }

  return obj;
}

module.exports = {
  extend: extend
};
