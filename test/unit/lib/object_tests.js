var sinon = require('sinon');
var assert = require('chai').assert;
var expect = require('chai').expect;
var object = require('../../../lib/object');

describe("object", function() {
    it("is constructed", function(done) {
        assert.isObject(object);
        done();
    });
    
    it("should create provider", function(done) {
    	var obj = { a: 1 };
        var o = object.createProvider({ "module": "test" }, function(name){
        	assert.equal(name, "test", "should pass name");
        	return obj;
        });
        assert.deepEqual(o, obj, "should match args");
        done();
    });
    
    it("should create provider by function", function(done) {
    	var args = { a: 1 };
    	var fn = function(args){ return args; };
        var o = object.createProvider({ "module": "test", "args": args }, function(name){
        	assert.equal(name, "test", "should pass name");
        	return fn;
        });
        assert.deepEqual(o, args, "should match args");
        done();
    });
    
    it("should create provider by function type", function(done) {
    	var args = { a: 1 };
    	var fn = function(args){ return args; };
        var o = object.createProvider({ "module": fn, "args": args });
        assert.deepEqual(o, args, "should match args");
        done();
    });
    
    it("should create provider by ctor", function(done) {
    	var args = { a: 1 };
    	var fn = function(args){ this.args = args; };
        var o = object.createProvider({ "module": "test", "ctorArgs": args }, function(name){
        	assert.equal(name, "test", "should pass name");
        	return fn;
        });
        assert.isObject(o, "should be an object");
        assert.deepEqual(o.args, args, "should match args");
        done();
    });
});