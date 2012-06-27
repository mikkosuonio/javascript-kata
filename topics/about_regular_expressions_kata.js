
module("About Regular Expressions Kata (topics/about_regular_expressions_kata.js)");

test("literal characters", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("aa"), true, 'Multiple occurrences');
    equals(containsPattern("b"), false, 'No occurrences');
    equals(containsPattern("ba"), true, 'One occurrence in different position');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("literal characters: punctuation characters with special meaning", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("("), true, 'One occurrence');
    equals(containsPattern("(("), true, 'Multiple occurrences');
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("a("), true, 'One occurrence in different position');
    equals(containsPattern("\("), true, 'One occurrence, but not at the beginning!');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("literal characters: escape character", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("\\"), true, 'One occurrence only since the string contains only one backslash!');
    equals(containsPattern("\\\\"), true, 'Two occurrences!');
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("a\\"), true, 'One occurrence in different position');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any one character in a class", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("b"), true, 'One occurrence');
    equals(containsPattern("ab"), true, 'Multiple occurrences');
    equals(containsPattern("ba"), true, 'Multiple occurrences');
    equals(containsPattern("ac"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("c"), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any one character not in a class", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), false, 'No occurrence');
    equals(containsPattern("b"), false, 'No occurrence');
    equals(containsPattern("ab"), false, 'No occurrences');
    equals(containsPattern("ba"), false, 'No occurrences');
    equals(containsPattern("c"), true, 'One occurrence');
    equals(containsPattern("d"), true, 'One occurrence');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: punctuation character in a class", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("("), true, 'One occurrence');
    equals(containsPattern(")"), true, 'One occurrence');
    equals(containsPattern("()"), true, 'Multiple occurrences');
    equals(containsPattern("(("), true, 'Multiple occurrences');
    equals(containsPattern("["), false, 'No occurrences');
    equals(containsPattern("[("), true, 'One occurrence in different position');
    equals(containsPattern("\("), true, 'One occurrence, but not at the beginning!');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any character", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("b"), true, 'One occurrence');
    equals(containsPattern("ab"), true, 'Multiple occurrences');
    equals(containsPattern("1"), true, 'One occurrence');
    equals(containsPattern(" "), true, 'One occurrence');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any ASCII word character", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("b"), true, 'One occurrence');
    equals(containsPattern("ab"), true, 'Multiple occurrences');
    equals(containsPattern("1"), true, 'One occurrence');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any Unicode space character", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern(" "), true, 'One occurrence');
    equals(containsPattern("  "), true, 'Multiple occurrences');
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("1"), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any ASCII digit", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("1"), true, 'One occurrence');
    equals(containsPattern("2"), true, 'One occurrence');
    equals(containsPattern("12"), true, 'Multiple occurrences');
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("character classes: any character that is not an ASCII digit", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("1"), false, 'No occurrences');
    equals(containsPattern("2"), false, 'No occurrences');
    equals(containsPattern("12"), false, 'No occurrences');
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("1a"), true, 'One occurrence');
    equals(containsPattern(" "), true, 'One occurrence');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("repetition: match zero or one occurrence", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern(""), true, 'No occurrences in an empty string');
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("aa"), true, 'Two occurrences');
    equals(containsPattern("ab"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("b"), true, 'One occurrence!');
    equals(containsPattern(" "), true, 'One occurrence!');
});

test("repetition: match one or more occurrences", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern(""), false, 'No occurrences in an empty string');
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("aa"), true, 'One occurrence');
    equals(containsPattern("ab"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("b"), false, 'No occurrence');
    equals(containsPattern(" "), false, 'No occurrences');
});

test("repetition: match zero or more occurrences", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern(""), true, 'One occurrence');
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("aa"), true, 'One occurrence');
    equals(containsPattern("ab"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("b"), true, 'Does occur zero times!');
    equals(containsPattern(" "), true, 'Does occur zero times!');
});

test("repetition: match exactly n occurrences", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), false, 'One occurrence');
    equals(containsPattern("aa"), true, 'One occurrence');
    equals(containsPattern("aaa"), true, 'One occurrence');
    equals(containsPattern("aab"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("ab"), false, 'No occurrences');
    equals(containsPattern("b"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("repetition: match n or more occurrences", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("aa"), true, 'One occurrence');
    equals(containsPattern("aaa"), true, 'One occurrence');
    equals(containsPattern("aab"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("ab"), false, 'No occurrences');
    equals(containsPattern("b"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("repetition: match at least n but not more than m occurrences", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("aa"), true, 'One occurrence');
    equals(containsPattern("aaa"), true, 'One occurrence');
    equals(containsPattern("aaaa"), true, 'One occurrence!');
    equals(containsPattern("aab"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("ab"), false, 'No occurrences');
    equals(containsPattern("bb"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("concatenation", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("ab"), true, 'One occurrence');
    equals(containsPattern("aab"), true, 'One occurrence!');
    equals(containsPattern("ba"), false, 'No occurrences');
    equals(containsPattern("b"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("alternation", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("b"), true, 'One occurrence');
    equals(containsPattern("ab"), true, 'One occurrence!');
    equals(containsPattern("ba"), true, 'One occurrence!');
    equals(containsPattern("ac"), true, 'One occurrence surrounded by other characters');
    equals(containsPattern("c"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("grouping", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern(""), false, 'No occurrences');
    equals(containsPattern("ab"), true, 'One occurrence');
    equals(containsPattern("abab"), true, 'One (or two?) occurrence');
    equals(containsPattern("ababab"), true, 'One occurrence');
    equals(containsPattern("aba"), true, 'One occurrence!');
    equals(containsPattern("ba"), false, 'No occurrences');
    equals(containsPattern(" "), false, 'No occurrences');
});

test("match position: the beginning of the string", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("a"), true, 'One occurrence');
    equals(containsPattern("aa"), true, 'One occurrence');
    equals(containsPattern("b"), false, 'No occurrences');
    equals(containsPattern("ba"), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

test("match position: the end of the string", function() {
    var containsPattern = function(str) {
        return (str.search(__) != -1);
    };
    equals(containsPattern("b"), true, 'One occurrence');
    equals(containsPattern("bb"), true, 'One occurrence');
    equals(containsPattern("a"), false, 'No occurrences');
    equals(containsPattern("ba"), false, 'No occurrences');
    equals(containsPattern(""), false, 'No occurrences in an empty string');
});

// match function: show all matching substrings
// grouping: reusing the parenthesized expressions
// match position: beginning and end of word
// flags: case insensitive, global match, multiline mode
// nongreedy repetition
// lookahead assertion

