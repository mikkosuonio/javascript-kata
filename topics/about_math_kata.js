
module("About Math Kata (topics/about_math_kata.js)");

test("random number", function() {
    var x = Math.random();
    ok(0 <= x && x < 1, 'a pseudorandom number between 0 and 1'); 
});


