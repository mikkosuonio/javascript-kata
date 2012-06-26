
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

test("equality comparison of arrays: null arrays", function() {
    var array1 = null;
    var array2 = ['b'];
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to cope with null as the first array?');

    array1 = ['a'];
    array2 = null;
    result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to cope with null as the second array?');
});

test("equality comparison of arrays: wrong type", function() {
    var array1 = 'a';
    var array2 = ['a'];
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'First array of wrong type');

    array1 = ['a'];
    array2 = 'a';
    var result = arraysAreEqual(array1, array2);
    equals(result, false, 'Second array of wrong type');
});

test("equality comparison of arrays: array-like objects", function() {
    var array1 = {0: 'a', 1: 'b', length: 2};
    var array2 = {0: 'a', 1: 'b', length: 2};
    var result = arraysAreEqual(array1, array2);
    equals(result, true, 'How to compare arrays element by element?');

    array1 = {0: 'a', 1: 'b', length: 2};
    array2 = {0: 'a', 1: 'c', length: 2};
    result = arraysAreEqual(array1, array2);
    equals(result, false, 'How to compare arrays element by element?');
});

