
module("About Array Equality (topics/about_array_equality_kata.js)");

function arraysAreEqual(array1, array2) {
}

test("equality comparison of arrays: different length", function() {
    var array1 = ['a','b'];
    var array2 = ['a'];
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to compare arrays element by element?');
});

test("equality comparison of arrays: different elements at the beginning", function() {
    var array1 = ['a'];
    var array2 = ['b'];
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to compare arrays element by element?');
});

test("equality comparison of arrays: different elements", function() {
    var array1 = ['a', 'b'];
    var array2 = ['a', 'c'];
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to compare arrays element by element?');
});

test("equality comparison of arrays: one is an empty array", function() {
    var array1 = [];
    var array2 = ['a'];
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to compare arrays element by element?');
});

test("equality comparison of arrays: equal arrays", function() {
    var array1 = ['a','b','c'];
    var array2 = ['a','b','c'];
    var result = arraysAreEqual(array1, array2);
    equals(result, true, 'How to compare arrays element by element?');
});

