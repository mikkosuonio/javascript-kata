
module("Arrays kata (topics/about_arrays_kata.js)");

test("equality", function() {
    equals([] == [], false, 'are the arrays equal?');
    equals([ 1 ] == [ 1 ], false, 'are the arrays equal?');
    equals([ 1 ] == [ 2 ], false, 'are the arrays equal?');

    var array1 = [ 1 ];
    var array2 = array1;
    equals(array1 == array2, true, 'are the arrays equal?');

    var object = {};
    equals([ object ] == [ object ], false, 'are the arrays equal?');
});

test("strict equality", function() {
    equals([] === [], false, 'are the arrays the same?');
    equals([ 1 ] === [ 1 ], false, 'are the arrays the same?');
    equals([ 1 ] === [ 2 ], false, 'are the arrays the same?');

    var array1 = [ 1 ];
    var array2 = array1;
    equals(array1 === array2, true, 'are the arrays the same?');

    var object = {};
    equals([ object ] === [ object ], false, 'are the arrays the same?');
});

test("length of an array", function() {
    var array = ['a','b','c'];
    equals(array.length, 3, 'how to compute the length of an array?');
});

test("concatenate arrays", function() {
    var array1 = [1, 2, 3];
    var array2 = [4, 5, 6];
    var concatenated = array1.concat(array2);
    deepEqual(concatenated, [1, 2, 3, 4, 5, 6], 'how to concatenate the arrays?');
});

test("slice a portion of an array", function() {
    var array = ['a', 'b', 'c'];
    var portion = array.slice(1,1+2);
    deepEqual(portion, ['b', 'c'], 'how to slice a portion of an array?');
    deepEqual(array, ['a', 'b', 'c'], 'the original array does not change');
});

test("slice a portion at the end of an array", function() {
    function sliceTwoItemsAtTheEndOf(array) {
        return array.slice(-2);
    }
    deepEqual(sliceTwoItemsAtTheEndOf(['a', 'b', 'c']), ['b', 'c'], 'how to slice a portion at the end?');
    deepEqual(sliceTwoItemsAtTheEndOf(['a', 'b', 'c', 'd']), ['c', 'd'], 'how to slice a portion at the end?');
});

test("reverse an array", function() {
    var array = [1, 2, 3];
    array.reverse();
    deepEqual(array, [3, 2, 1], 'how to reverse an array?');
});

test("splice: remove elements for an array", function() {
    var array = ['a', 'b', 'c'];
    array.splice(1,1);
    deepEqual(array, ['a', 'c'], 'how to remove elements?');
});

test("splice: insert elements to an array", function() {
    var array = ['a', 'c'];
    array.splice(1,0,'b');
    deepEqual(array, ['a', 'b', 'c'], 'how to remove elements?');
});

test("splice: replace elements in an array", function() {
    var array = ['a', 'd', 'c'];
    array.splice(1,1,'b');
    deepEqual(array, ['a', 'b', 'c'], 'how to remove elements?');
});

test("find an item from an array", function() {
    var array = ['a', 'b', 'c', 'a'];
    equals(array.indexOf('b'), 1, 'find the index of an item in the array?');
    equals(array.indexOf('d'), -1, 'how to find that an item is not in the array?');
    equals(array.indexOf('a'), 0, 'find the index of the first occurrence of an item in the array?');
});

test("check if an array contains an item satisfying a predicate", function() {
    var someItemsSatisfy = function(a) {
        return a.some(function(x) {return x === 2;});
    };
    equals(someItemsSatisfy([1, 2, 3]), true, 'an item satisfies');
    equals(someItemsSatisfy([1, 3, 4]), false, 'no items satisfy');
    equals(someItemsSatisfy([1, 2, 2]), true, 'multiple items satisfies');
    equals(someItemsSatisfy([]), false, 'empty array');
});

test("for each element of an array", function() {
    var array = [1, 2, 3];
    var sum = 0;
    array.forEach(function(x) {sum += x;});
    equals(sum, 6, 'how to calculate something for each element of the array?');
});

test("map an array to produce a result array", function() {
    var array = [1, 2, 3];
    var squares = array.map(function(e) {return e*e;});
    deepEqual(squares, [1, 4, 9], 'how to compute the result array?');
});

test("reduce/fold/inject/accumulate an array to produce a scalar result", function() {
    var array = [1, 2, 3];
    var product = array.reduce(function(r,e) {return r+e;});
    equals(product, 6, 'how to compute the result?');
});

test("reduce an array starting from an initial value for the result", function() {
    var array = [false, true, false];
    var numberOfTruths = array.reduce(function(r,e) {return e ? r+1 : r;});
    equals(numberOfTruths, 1, 'how to compute the result?');
});

test("sort an array of strings", function() {
    var array = ["c", "a", "b"];
    array.sort();
    deepEqual(array, ["a", "b", "c"], 'how to sort the array?');
});

test("sort an array of numbers", function() {
    var array = [10, 5, 1];
    array.sort(function(a, b) {return a-b;});
    deepEqual(array, [1, 5, 10], 'how to sort the array?');
});

// push an item to the end of an array
// pop an item from the end of an array
// insert an item at the beginning of an array
// shift an item off the beginning of an array
// join array elements to form a string
// - default separator
// - given separator

