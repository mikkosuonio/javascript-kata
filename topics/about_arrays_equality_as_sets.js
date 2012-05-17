
module("About Array Equality As Sets (topics/about_arrays_equality_as_sets.js)");

function arraysAreEqualAsSets(array1, array2) {
}

test("comparison of arrays as sets: empty and non-empty", function() {
    var array1 = [];
    var array2 = ['a'];
    var result = arraysAreEqualAsSets(array1, array2);
    equals(result, false, 'How to compare arrays as sets?');
});

test("comparison of arrays as sets: the same element", function() {
    var array1 = ['a'];
    var array2 = ['a'];
    var result = arraysAreEqualAsSets(array1, array2);
    equals(result, true, 'How to compare arrays as sets?');
});

test("comparison of arrays as sets: non-empty and empty", function() {
    var array1 = ['a'];
    var array2 = [];
    var result = arraysAreEqualAsSets(array1, array2);
    equals(result, false, 'How to compare arrays as sets?');
});

test("comparison of arrays as sets: different element", function() {
    var array1 = ['a'];
    var array2 = ['b'];
    var result = arraysAreEqualAsSets(array1, array2);
    equals(result, false, 'How to compare arrays as sets?');
});

test("comparison of arrays as sets: multiple elements, some differ", function() {
    var array1 = ['a', 'b'];
    var array2 = ['a', 'c'];
    var result = arraysAreEqualAsSets(array1, array2);
    equals(result, false, 'How to compare arrays as sets?');
});

non_test("comparison of arrays as sets: multiple elements, equal as sets", function() {
    var array1 = ['a', 'b'];
    var array2 = ['a', 'c'];
    var result = arraysAreEqualAsSets(array1, array2);
    equals(result, false, 'How to compare arrays as sets?');
});

