/* jshint node:true */

'use strict';

function format(s, args){
    var START = '{{', END = '}}', key = null;
    var idx = 0, lastIdx = 0, endIdx = 0;
    var result = '';
    while(true){
        idx = s.indexOf(START, lastIdx);
        if (idx > -1){
            result += s.substr(lastIdx, idx-lastIdx);
            idx = idx+START.length;

            endIdx = s.indexOf(END, idx);
            if (endIdx === -1){
                throw new Error('Invalid arg format. Missing "' + END + '".');
            }

            key = s.substr(idx, endIdx - idx);
            result += args[key] ? args[key].toString() : '';
            lastIdx = endIdx + END.length;
        }
        else {
            break;
        }
    }
    result += s.substr(lastIdx);
    return result;
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
if (typeof String.prototype.endsWith !== 'function') {
  String.prototype.endsWith = function(searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' ||
      !isFinite(position) ||
      Math.floor(position) !== position ||
      position > subjectString.length) {
      position = subjectString.length;
    }
    position -= (searchString && searchString.length) || 0;
    var lastIndex = subjectString.lastIndexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if (typeof String.prototype.startsWith !== 'function') {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.substr(position, (searchString && searchString.length) || 0) === searchString;
  };
}

module.exports = {
    format: format
};