
module("About control structures kata (topics/about_control_structures_kata.js)");

test("if", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red', 'can it convert the number?');
    strictEqual(convert(2), undefined, 'can it convert the number?');
    strictEqual(convert(3), undefined, 'can it convert the number?');
});

test("if ... else", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red', 'can it convert the number?');
    strictEqual(convert(2), 'other', 'can it convert the number?');
    strictEqual(convert(3), 'other', 'can it convert the number?');
});

test("if ... else if", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red', 'can it convert the number?');
    strictEqual(convert(2), 'green', 'can it convert the number?');
    strictEqual(convert(3), 'other', 'can it convert the number?');
});

test("switch", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red', 'can it convert the number?');
    strictEqual(convert(2), 'green', 'can it convert the number?');
    strictEqual(convert(3), 'blue', 'can it convert the number?');
});

var red = {};
var green = {};
var blue = {};

test("switch: string expressions", function() {
    var convert = function(str) {
        var result;
        // __
        return result;
    };
    strictEqual(convert('red'), red, 'can it convert the number?');
    strictEqual(convert('green'), green, 'can it convert the number?');
    strictEqual(convert('blue'), blue, 'can it convert the number?');
});

test("switch: object expressions", function() {
    var convert = function(obj) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(red), 'red', 'can it convert the number?');
    strictEqual(convert(green), 'green', 'can it convert the number?');
    strictEqual(convert(blue), 'blue', 'can it convert the number?');
});


