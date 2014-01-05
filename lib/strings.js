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

module.exports = {
    format: format
};