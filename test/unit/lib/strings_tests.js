var sinon = require('sinon');
var assert = require('chai').assert;
var expect = require('chai').expect;
var strings = require('../../../lib/strings');

describe("strings", function() {
    it("is constructed", function(done) {
        assert.isObject(strings);
        done();
    });
    
    it("should parse string", function(done) {
        var o = strings.format('Hello {{name}}{{not-found}}', { name: 'World' });
        assert.equal(o, 'Hello World', "should match parsed result");
        done();
    });
    
    it("should throw error on invalid placeholder", function(done) {
        try{
            var o = strings.format('Hello {{name', { name: 'World' });
            assert('should throw an error');
        }
        catch(err){
            assert.instanceOf(err, Error, 'should return an error');
            done();
        }
        
    });
});