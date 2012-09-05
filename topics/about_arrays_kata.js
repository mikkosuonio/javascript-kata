
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
});

test("slice a portion of an array", function() {
    var array = ['a', 'b', 'c', 'd'];
    var portion = __;
    deepEqual(portion, ['b', 'c'], 'how to slice a portion of an array?');
    deepEqual(array, ['a', 'b', 'c', 'd'], 'the original array does not change');
});

test("slice a portion of an array to the end", function() {
    var array = ['a', 'b', 'c', 'd'];
    var portion = __;
    deepEqual(portion, ['b', 'c', 'd'], 'how to slice a portion of an array?');
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

test("join array elements to form a string", function() {
    var array = ['a', 'b', 'c'];
    var result = __;
    equal(result, 'a,b,c', 'how to concatenate the elements?');
});

test("join array elements to form a string: a different separator", function() {
    var array = ['a', 'b', 'c'];
    var result = __;
    equal(result, 'a b c', 'how to concatenate the elements?');
});

test("join array elements to form a string: elements that are not strings", function() {
    var array = [1, 2, 3];
    var result = __;
    equal(result, '1,2,3', 'how to concatenate the elements?');
});

test("find an item from an array", function() {
    var array = ['a', 'b', 'c', 'a'];
    equals(__, 1, "find the index of letter 'b' in the array?");
    equals(__, -1, "how to verify that letter 'd' is not in the array?");
    equals(__, 0, "find the index of the first occurrence of letter 'a' in the array?");
});

test("check if an array contains an item satisfying a predicate", function() {
    var someItemsSatisfy = function(a) {
        return __;
    };
    equals(someItemsSatisfy([1, 2, 3]), true, 'contains number 2');
    equals(someItemsSatisfy([1, 3, 4]), false, 'does not contain number 2');
    equals(someItemsSatisfy([1, 2, 2]), true, 'contains multiple occurrences of number 2');
    equals(someItemsSatisfy([]), false, 'empty array');
});

test("check if an array contains an item satisfying a predicate: predicate parameters", function() {
    var sampleArray = [1, 2, 3];
    var someItemsSatisfy = function(a) {
        return a.some(function(element, index, array) {
            return __;
        });
    };
    equals(someItemsSatisfy([1, 3, 4]), true, 'one item in the same position');
    equals(someItemsSatisfy([2, 3, 4]), false, 'no items in the same position');
    equals(someItemsSatisfy([1, 2, 4]), true, 'two items in the same positions');
});

test("filter array items satisfying a predicate", function() {
    var filterItems = function(a) {
        return __;
    };
    deepEqual(filterItems([1, 2, 3]), [2], 'one even number');
    deepEqual(filterItems([1, 3, 5]), [], 'all numbers are odd');
    deepEqual(filterItems([1, 2, 4]), [2, 4], 'multiple even numbers');
    deepEqual(filterItems([1, 2, 2]), [2, 2], 'multiple, repeated even numbers');
    deepEqual(filterItems([]), [], 'empty array');
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

test("reduce/fold/inject/accumulate an array", function() {
    var array = [1, 2, 3];
    var product = __;
    equals(product, 6, 'how to compute the sum of the elements?');
});

test("reduce an array starting from an initial value for the result", function() {
    var array = [false, true, false];
    var numberOfTruths = __;
    equals(numberOfTruths, 1, 'how to compute the number of truths in the array?');
});

test("reduce an array to produce a result starting from right", function() {
    var array = [2, 3, 18];
    var result = __;
    equals(result, (18/3)/2, 'how to compute the result?');
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

test("array-like objects: most array methods are generic", function() {
    var array =  {0:'a', 1:'b', 2:'c', 3:'d', length:4};
    var portion = __;
    deepEqual(portion, ['b', 'c', 'd'], 'how to slice a portion of an array-like object?');
});

test("array-like objects: concat is an exception", function() {
    var array1 = ['a', 'b', 'c'];
    var array2 = {0:'d', 1:'e', 2:'f', length:3};
    var concatenated12 = array1.concat(array2);
    deepEqual(concatenated12, __, 'what happens when concatenating an array-like object?');
    var concatenated21 = Array.prototype.concat.call(array2, array1);
    deepEqual(concatenated21, __, 'what happens when concatenating to an array-like object?');
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

// parameters (array[i],i,array) of functions for: forEach, map
// push an item to the end of an array
// pop an item from the end of an array
// insert an item at the beginning of an array
// shift an item off the beginning of an array
// every item satisfies a predicate
// parameters (array[i],i,array) of predicates: every, filter

