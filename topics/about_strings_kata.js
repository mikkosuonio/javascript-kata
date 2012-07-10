
module("About Strings Kata (topics/about_strings_kata.js)");

test("equality", function() {
    equals("apple" == "apple", __, 'are the strings equal?');
    equals("apple" == "pie", __, 'are the strings equal?');
    equals("apple" === "apple", __, 'are the strings equal?');
    equals("apple" === "pie", __, 'are the strings equal?');
    equals("apple" != "pie", __, 'are the strings not equal?');
    equals("apple" !== "pie", __, 'are the strings not equal?');
});

test("concatenate strings", function() {
    var fruit = "apple";
    var dish = "pie";
    equals(__, "apple pie", 'how to concatenate strings?');
});

test("get character at a position in a string", function() {
    var language = "Javascript";
    equals(__, 'J', 'how to get character at a position?');
});

test("string length", function() {
    var fruit = "apple";
    equals(__, 5, 'how to calculate the length of a string?');
});

test("first occurrence of a substring", function() {
    // How to search for occurrences of character 'b' below?
    var findOccurrence = function(str) {
        return __;
    };
    equals(findOccurrence("abc"), 1, 'One occurrence');
    equals(findOccurrence("bac"), 0, 'One occurrence at the beginning');
    equals(findOccurrence("aac"), -1, 'No occurrences');
    equals(findOccurrence("abcb"), 1, 'Multiple occurrences, index of the first one');
});

test("last occurrence of a substring", function() {
    // How to search for occurrences of character 'b' below?
    var findLastOccurrence = function(str) {
        return __;
    };
    equals(findLastOccurrence("abc"), 1, 'One occurrence');
    equals(findLastOccurrence("acb"), 2, 'One occurrence at the end');
    equals(findLastOccurrence("aac"), -1, 'No occurrences');
    equals(findLastOccurrence("abcb"), 3, 'Multiple occurrences, index of the last one');
});

test("search for an occurrence of a regular expression", function() {
    // How to search for different occurrences of the string 'bab', 'baab', 'baaab', ... below?
    var searchRegExp = function(str) {
        return __;
    };
    equals(searchRegExp("ababc"), 1, 'One occurrence');
    equals(searchRegExp("abbabc"), 2, 'One occurrence in different position');
    equals(searchRegExp("abaabc"), 1, 'One longer occurrence');
    equals(searchRegExp("abbaabc"), 2, 'One longer occurrence in different position');
    equals(searchRegExp("abbabbaab"), 2, 'Multiple occurrences, index of the first one');
    equals(searchRegExp("baaabc"), 0, 'One occurrence at the beginning');
    equals(searchRegExp("aab"), -1, 'No occurrences');
});

test("replace a substring", function() {
    var dessert = "apple pie";
    equals(__, "orange pie", 'how to replace a substring?');
    equals(dessert, "apple pie", 'the original string does not change');
});

test("replace a regular expression", function() {
    var dessert = " apple  pie";
    equals(__, "orange pie", 'how to replace a regular expression?');
});

test("replace all occurrences of a regular expression", function() {
    var dessert = "apple pie, pie apple";
    equals(__, "orange pie, pie orange", 'how to replace all occurrences?');
});

test("replace a regular expression by a string built from the match", function() {
    var dessert = "apple pie";
    equals(__, "pie apple", 'how to reorder substrings?');
});

test("match to find an occurrence and matching subexpressions of a regular expression", function() {
    var matchRegExp = function(str) {
        return __;
    };
    deepEqual(matchRegExp("ab"), ['ab', 'ab'], 'Occurrence with subexpression once');
    deepEqual(matchRegExp("abab"), ['abab', 'ab'], 'Occurrence with subexpression twice');
    deepEqual(matchRegExp("abaabab"), ['ab', 'ab'], 'Only the first occurrence matches, with subexpression once');
    deepEqual(matchRegExp("ba"), null, 'No occurrences');
    deepEqual(matchRegExp(""), null, 'No occurrences in an empty string');
});

test("match to find all occurrences of a regular expression", function() {
    var matchRegExp = function(str) {
        return __;
    };
    deepEqual(matchRegExp("ab"), ['ab'], 'One occurrence');
    deepEqual(matchRegExp("abab"), ['abab'], 'One longer occurrence');
    deepEqual(matchRegExp("abaabab"), ['ab', 'abab'], 'Two occurrences');
    deepEqual(matchRegExp("ba"), null, 'No occurrences');
    deepEqual(matchRegExp(""), null, 'No occurrences in an empty string');
});

test("split a string on a separator", function() {
    var fruits = "apple,orange,pear";
    deepEqual(__, ['apple','orange','pear'], 'how to split the string on separator?');
});

test("split a string on a separator expressed as a regular expression", function() {
    var fruits = "apple ,orange, pear";
    deepEqual(__, ['apple','orange','pear'], 'how to split the string on regular expression?');
});

test("slice a substring", function() {
    var dessert = "apple pie";
    equals(__, "pi", 'how to extract a substring?');
    equals(dessert, "apple pie", 'the original string does not change');
});

test("extract the end of a string", function() {
    var dessert = "apple pie";
    equals(__, "pie", 'how to extract the end of a string?');
});

test("convert a primitive type to string", function() {
    equals(__, "1.2", 'how to convert a number?');
    equals(__, "true", 'how to convert a boolean?');
    equals(__, "null", 'how to convert null?');
    equals(__, "undefined", 'how to convert undefined?');
});

test("convert a primitive type to string: more examples", function() {
    strictEqual(String(-0), __, 'what does the string look like?');
    strictEqual(String(NaN), __, 'what does the string look like?');
    strictEqual(String(Infinity), __, 'what does the string look like?');
    strictEqual(String(-Infinity), __, 'what does the string look like?');
});

test("convert a number to string", function() {
    strictEqual(Number(4), "100", 'how to convert to binary?');
    strictEqual(Number(64), "100", 'how to convert to octal?');
    strictEqual(Number(256), "100", 'how to convert to hexadecimal?');
    strictEqual(Number(17*17), "100", 'how to convert to base 17?');
});

// convert number to string
//   fixed, exponential, precision
// parsing numbers from strings
//   integers, floats, hexadecimals, other base
