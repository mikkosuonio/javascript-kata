
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(__, 'what will satisfy the ok assertion?');
});

test("not", function() {
    not(__, 'what is a false value?');
});

test("equals", function() {
    equals(1+1, __, 'what will satisfy the equals assertion?');
});

test("deepEqual", function() {
    var array1 = ['a','b','c'];
    var array2 = ['a','b','c'];
    deepEqual(array1, __, 'deep equal can be used to compare arrays');
});
