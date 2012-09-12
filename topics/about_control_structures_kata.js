
module("About control structures kata (topics/about_control_structures_kata.js)");

test("if", function() {
    var convert = function(num) {
        var result;
        if (num === 1)
            result = 'red';
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), undefined);
    strictEqual(convert(3), undefined);
});

test("if ... else", function() {
    var convert = function(num) {
        var result;
        if (num === 1)
            result = 'red';
        else
            result = 'other';
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'other');
    strictEqual(convert(3), 'other');
});

test("if ... else if", function() {
    var convert = function(num) {
        var result;
        if (num === 1)
            result = 'red';
        else if (num === 2)
            result = 'green';
        else
            result = 'other';
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'green');
    strictEqual(convert(3), 'other');
});

test("switch", function() {
    var convert = function(num) {
        var result;
        switch (num) {
        case 1:
            result = 'red';
            break;
        case 2:
            result = 'green';
            break;
        case 3:
            result = 'blue';
            break;
        }
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'green');
    strictEqual(convert(3), 'blue');
});

test("switch: default case", function() {
    var convert = function(num) {
        var result;
        switch (num) {
        case 1:
            result = 'red';
            break;
        case 2:
            result = 'green';
            break;
        case 3:
            result = 'blue';
            break;
        default:
            result = 'other';
            break;
        }
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'green');
    strictEqual(convert(3), 'blue');
    strictEqual(convert(4), 'other');
});

test("switch: fall-through", function() {
    var convert = function(num) {
        var result;
        switch (num) {
        case 1:
            result = 'red';
            break;
        case 2:
        case 3:
            result = 'other';
            break;
        }
        return result;
    };
    strictEqual(convert(1), 'red');
    strictEqual(convert(2), 'other');
    strictEqual(convert(3), 'other');
    strictEqual(convert(4), undefined);
});

var red = {};
var green = {};
var blue = {};

test("switch: string expressions", function() {
    var convert = function(str) {
        var result;
        switch (str) {
        case 'red':
            result = red;
            break;
        case 'green':
            result = green;
            break;
        case 'blue':
            result = blue;
            break;
        }
        return result;
    };
    strictEqual(convert('red'), red);
    strictEqual(convert('green'), green);
    strictEqual(convert('blue'), blue);
});

test("switch: object expressions", function() {
    var convert = function(obj) {
        var result;
        switch (obj) {
        case red:
            result = 'red';
            break;
        case green:
            result = 'green';
            break;
        case blue:
            result = 'blue';
            break;
        }
        return result;
    };
    strictEqual(convert(red), 'red');
    strictEqual(convert(green), 'green');
    strictEqual(convert(blue), 'blue');
});


