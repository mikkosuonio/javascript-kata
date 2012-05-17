
module("Serialization kata (topics/about_serialization_kata.js)");

test("serialize an object", function() {
    var person = {name: "Mikko", age: 38};
    var serialized = __;
    equals(serialized, '{"name":"Mikko","age":38}', "how to serialize an object?");
});

test("deserialize an object", function() {
    var serialized = '{"name":"Mikko"}';
    var person = __;
    equals(person.name, "Mikko", "is the name restored?");
});

test("serialize primitive types", function() {
    equals(__, '"Mikko"', "how to serialize a string?");
    equals(__, '12.1', "how to serialize a number?");
    equals(__, 'true', "how to serialize a boolean?");
    equals(__, 'null', "how to serialize null?");
});

test("deserialize primitive types", function() {
    equals(__, "Mikko", "how to deserialize a string?");
    equals(__, 12.1, "how to deserialize a number?");
    equals(__, true, "how to deserialize a boolean?");
    equals(__, null, "how to deserialize null?");
});

test("serialize an array", function() {
    var array = [1, 2];
    var serialized = __;
    equals(serialized, '[1,2]', "how to serialize an array?");
});

test("deserialize an array", function() {
    var serialized = '[1,2]';
    var array = __;
    deepEqual(array, [1, 2], "is the array restored?");
});

test("serialize an object with whitespace for readability", function() {
    var person = {name: "Mikko", age: 38};
    var serialized = __;
    equals(serialized,
        '{\n' +
        '  "name": "Mikko",\n' +
        '  "age": 38\n' +
        '}', "how to serialize into a readable multi-line format with indendation?");
});

// serialize and deserialize your own class

