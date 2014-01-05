#x-util
Utility package for node applications.

#Usage
npm install x-util --save

```javascript
var xutil = require('x-util');
var strings = xutil.strings;

var obj = xutil.extend({ name1: 'Hello' }, { name2: 'World!' });
console.log(strings.format("{{name1}} {{name2}}", obj));
```
#Modules

##x-util
Root module that exposes all the utility objects/methods.

###Properties

- common - Access to most commonly used functions like extend.
- strings - Access to common string functions like format.
- command - Access to common command line functions like parse.

###Functions
- extend - See common extend function.

##common
Contains most commonly used functions like extend.

###Properties
None

###Functions
- extend - Recursively extends an object.```javascript extend({{object}}, {{extended}}) ```

##command
Contains functions to support a command line interface.

###Properties
None

###Functions
- parse - Parse command line arguments.```javascript parse(process.args) ```

##strings
Contains helper string functions.

###Properties
None

###Functions
- format - Replace placeholders using object properties.```javascript format("Hello {{name}}!", { name: "World" }) ```




