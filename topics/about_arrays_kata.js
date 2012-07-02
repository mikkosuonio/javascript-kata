
module("Arrays kata (topics/about_arrays_kata.js)");

test("length of an array", function() {
    var array = ['a','b','c'];
    equals(__, 3, 'how to compute the length of an array?');
});

test("concatenate arrays", function() {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    var concatenated = __;
    deepEqual(concatenated, [1, 2, 3, 4, 5, 6], 'how to concatenate the arrays?');
    deepEqual(array1, [1, 2, 3], 'the original array does not change');
    deepEqual(array2, [4, 5, 6], 'the original array does not change');
});

test("slice a portion of an array", function() {
    var array = ['a', 'b', 'c'];
    var portion = __;
    deepEqual(portion, ['b', 'c'], 'how to slice a portion of an array?');
    deepEqual(array, ['a', 'b', 'c'], 'the original array does not change');
});

test("slice a portion at the end of an array", function() {
    function sliceTwoItemsAtTheEndOf(array) {
        return __;
    }
    deepEqual(sliceTwoItemsAtTheEndOf(['a', 'b', 'c']), ['b', 'c'], 'how to slice a portion at the end?');
    deepEqual(sliceTwoItemsAtTheEndOf(['a', 'b', 'c', 'd']), ['c', 'd'], 'how to slice a portion at the end?');
});

test("reverse an array", function() {
    var array = [1, 2, 3];
    // __
    deepEqual(array, [3, 2, 1], 'how to reverse an array?');
});

test("splice: remove elements for an array", function() {
    var array = ['a', 'b', 'c'];
    // __
    deepEqual(array, ['a', 'c'], 'how to remove elements?');
});

test("splice: insert elements to an array", function() {
    var array = ['a', 'c'];
    // __
    deepEqual(array, ['a', 'b', 'c'], 'how to remove elements?');
});

test("splice: replace elements in an array", function() {
    var array = ['a', 'd', 'c'];
    // __
    deepEqual(array, ['a', 'b', 'c'], 'how to remove elements?');
});

test("find an item from an array", function() {
    var array = ['a', 'b', 'c', 'a'];
    equals(__, 1, 'find the index of an item in the array?');
    equals(__, -1, 'how to find that an item is not in the array?');
    equals(__, 0, 'find the index of the first occurrence of an item in the array?');
});

test("check if an array contains an item satisfying a predicate", function() {
    var someItemsSatisfy = function(a) {
        return __;
    };
    equals(someItemsSatisfy([1, 2, 3]), true, 'an item satisfies');
    equals(someItemsSatisfy([1, 3, 4]), false, 'no items satisfy');
    equals(someItemsSatisfy([1, 2, 2]), true, 'multiple items satisfies');
    equals(someItemsSatisfy([]), false, 'empty array');
});

test("for each element of an array", function() {
    var array = [1, 2, 3];
    var sum = 0;
    // __
    equals(sum, 6, 'how to calculate something for each element of the array?');
});

test("map an array to produce a result array", function() {
    var array = [1, 2, 3];
    var squares = __;
    deepEqual(squares, [1, 4, 9], 'how to compute the result array?');
});

test("reduce/fold/inject/accumulate an array to produce a scalar result", function() {
    var array = [1, 2, 3];
    var product = __;
    equals(product, 6, 'how to compute the result?');
});

test("reduce an array starting from an initial value for the result", function() {
    var array = [false, true, false];
    var numberOfTruths = __;
    equals(numberOfTruths, 1, 'how to compute the result?');
});

test("sort an array of strings", function() {
    var array = ["c", "a", "b"];
    // __
    deepEqual(array, ["a", "b", "c"], 'how to sort the array?');
});

test("sort an array of numbers", function() {
    var array = [10, 5, 1];
    // __
    deepEqual(array, [1, 5, 10], 'how to sort the array?');
});

test("equality", function() {
    equals([] == [], __, 'are the arrays equal?');
    equals([ 1 ] == [ 1 ], __, 'are the arrays equal?');
    equals([ 1 ] == [ 2 ], __, 'are the arrays equal?');

    var array1 = [ 1 ];
    var array2 = array1;
    equals(array1 == array2, __, 'are the arrays equal?');

    var object = {};
    equals([ object ] == [ object ], __, 'are the arrays equal?');
});

test("strict equality", function() {
    equals([] === [], __, 'are the arrays the same?');
    equals([ 1 ] === [ 1 ], __, 'are the arrays the same?');
    equals([ 1 ] === [ 2 ], __, 'are the arrays the same?');

    var array1 = [ 1 ];
    var array2 = array1;
    equals(array1 === array2, __, 'are the arrays the same?');

    var object = {};
    equals([ object ] === [ object ], __, 'are the arrays the same?');
});

// parameters (array[i],i,array) of predicates: every, filter, some
// parameters (array[i],i,array) of functions for: forEach, map
// array-like objects
// push an item to the end of an array
// pop an item from the end of an array
// insert an item at the beginning of an array
// shift an item off the beginning of an array
// join array elements to form a string
// - default separator
// - given separator

