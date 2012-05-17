module("Functional programming kata (topics/about_functional_programming_kata.js)");

// Structure and interpretation of computer programs

// 2.2 Hierarchical data and the closure property

// 2.2.1 Representing sequences

test("recursive algorithm: length of an array", function() {
    var array = ['a','b','c'];
    function lengthOf(array) {
        if (array.length == 0)
            return 0;
        else
            return 1 + lengthOf(array.slice(1));
    }
    var length = lengthOf(array);
    equals(length, 3, 'how to compute the length of an array?');
});

test("append arrays", function() {
    var array1 = ['a', 'b'];
    var array2 = ['c', 'd'];
    function append(a, b) {
        if (!a.length)
            return b;
        else
            return [a[0]].concat(append(a.slice(1), b));
    };
    var result = append(array1, array2);
    deepEqual(result, ['a', 'b', 'c', 'd'], 'how to combine the arrays?');
});

test("the last item of an array", function() {
    var array = ['a', 'b', 'c'];
    function last(a) {
        if (!a.length)
            return null;
        else if (a.length == 1)
            return a[0];
        else
            return last(a.slice(1));
    };
    var result = last(array);
    equals(result, 'c', 'how to find the last item?');
});

test("reverse an array", function() {
    var array = ['a', 'b', 'c'];
    function reverse(a) {
        if (a.length <= 1)
            return a;
        else
            return reverse(a.slice(1)).concat(a[0]);
    }
    var result = reverse(array);
    deepEqual(result, ['c', 'b', 'a'], 'how to reverse the array?');
});

test("scale a number array", function() {
    var array = [1, 2, 3];
    function scale(a, f) {
        if (a.length == 0)
            return a;
        else
            return [ a[0]*f ].concat(scale(a.slice(1), f)); 
    }
    var result = scale(array, 10);
    deepEqual(result, [10, 20, 30], 'how to scale the numbers in the array?');
});


// utilize: selecting the first element of an array
// utilize: selecting the rest of an array starting from the second item
// utilize: constructing an array from the first element and the rest
// iterative algorithm: length of an array

