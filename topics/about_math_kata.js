
module("About Math Kata (topics/about_math_kata.js)");

test("random number", function() {
    var x = __;
    ok(0 <= x && x < 1, 'a pseudorandom number between 0 and 1'); 
});

test("round to the nearest integer", function() {
    function round(x) {
        return __;
    };
    equals(round(1.0), 1, 'no need to round');
    equals(round(1.1), 1, 'round down');
    equals(round(1.8), 2, 'round up');
    equals(round(1.5), 2, 'also round up');
    equals(round(-1.5), -1, 'also round up');
});

