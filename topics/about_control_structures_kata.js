
module("About control structures kata (topics/about_control_structures_kata.js)");

test("if", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), undefined);
    strictEqual(convert(3), undefined);
});

test("if ... else", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'other');
    strictEqual(convert(3), 'other');
});

test("if ... else if", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'green');
    strictEqual(convert(3), 'other');
});

test("switch", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'green');
    strictEqual(convert(3), 'blue');
});

test("switch: default case", function() {
    var convert = function(num) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'green');
    strictEqual(convert(3), 'blue');
    strictEqual(convert(4), 'other');
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
    strictEqual(convert('red'), red);
    strictEqual(convert('green'), green);
    strictEqual(convert('blue'), blue);
});

test("switch: object expressions", function() {
    var convert = function(obj) {
        var result;
        // __
        return result;
    };
    strictEqual(convert(red), 'red');
    strictEqual(convert(green), 'green');
    strictEqual(convert(blue), 'blue');
});


