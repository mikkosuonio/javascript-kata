
module("Objects kata (topics/about_objects_kata.js)");

test("create an object literal", function() {
    var person = __;
    equals(person.name, "Mikko", "what is the person's name?");
    equals(person.age, 38, "what is the person's age?");
});

test("add properties to an existing object", function() {
    var person = {};
    __;
    equals(person.name, "Mikko", "what is the person's name?");
});

test("define a method in object literal", function() {
    var person = {
        //__
    };
    equals(person.sayHi(), "Hi", 'what should the sayHi method be?');
});

test("add a method to an existing object", function() {
    var person = {};
    __;
    equals(person.sayHi(), "Hi", 'what should the sayHi method be?');
});

test("define a method referring to an object property", function() {
    var person = {
        name: "Mikko"
    };
    equals(person.introduce(), "My name is Mikko", 'what should the introduce method be?');
});

test("object as an associative array / map / hash", function() {
    var person = {};
    // __
    equals(person["Mikko's greeting"], "Hi", 'how to map key to value?');
});

test("equality", function() {
    equals({} == {}, __, 'are the objects equal?');
    equals({property: "value"} == {property: "value"}, __, 'are the objects equal?');
    equals({property: "value"} == {property: "another"}, __, 'are the objects equal?');
    equals({property1: "value"} == {property2: "value"}, __, 'are the objects equal?');

    var object1 = {property: "value"};
    var object2 = object1;
    equals(object1 == object2, __, 'are the objects equal?');
});

test("strict equality", function() {
    equals({} === {}, __, 'are the objects the same?');
    equals({property: "value"} === {property: "value"}, __, 'are the objects the same?');
    equals({property: "value"} === {property: "another"}, __, 'are the objects the same?');
    equals({property1: "value"} === {property2: "value"}, __, 'are the objects the same?');

    var object1 = {property: "value"};
    var object2 = object1;
    equals(object1 === object2, __, 'are the objects the same?');
});

test("object method calls another method", function() {
    var person = {
        greeting: function() {
            return "Hi";
        },
        greet: function() {
            return __;
        }
    };
    equals(person.greet(), "Hi", 'how to call another method?');
});

test("object method uses a nested helper function", function() {
    var person = {
        name: "Mikko",
        greet: function() {
            function greeting() {
                return __;
            };
            return greeting();
        }
    };
    equals(person.greet(), "Mikko's greeting", 'how to access invocation context ("this") of the outer function?');
});

test("redefine a method in an object", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    // __
    equals(person.greet(), "Moro", 'what should the new method be?');
});

test("object inherits a property from another object", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = __;
    equals(me.greet(), "Hi", "how do I greet?");
});

test("object overrides an inherited property", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = __;
    equals(person.greet(), "Hi", "how does a person greet?");
    equals(me.greet(), "Moro", "how do I greet now?");
});

test("change a property in all heirs which have inherited an object", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = __;
    var myFriend = __;
    equals(person.greet(), "Moro", "how does a person greet now?");
    equals(me.greet(), "Moro", "how do I greet now?");
    equals(myFriend.greet(), "Moro", "how does my friend greet now?");
});

test("object's prototype attribute", function() {
    var person = {};
    var me = Object.create(person);
    equals(__, person, "how to find out where does an object inherit from?");
});

test("default conversion to string", function() {
    var person = {name: 'Mikko'};
    equals(__, '[object Object]', "how to obtain the string presentation of an object?");
});

test("define conversion to string for an object", function() {
    var person = {name: 'Mikko'};
    // __
    equals(person.toString(), 'Person: Mikko', "how to implement a method to convert an object to string?");
});

// add a method enabling automatic conversion to a primitive value (other than string)
// enumerate through properties in an object
// add a method to an object and make it nonenumerable
// wrap a method in an object providing a new implementation which uses the old ()
// object has a private property

