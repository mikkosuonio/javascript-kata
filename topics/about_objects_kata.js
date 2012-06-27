
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

test("object inherits a method from another object", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = __;
    equals(me.greet(), "Hi", "how do I greet?");
    ok(me !== person, "we are not the same");
});

test("object overrides an inherited method", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = Object.create(person);
    // __
    equals(person.greet(), "Hi", "how does a person greet?");
    equals(me.greet(), "Moro", "how do I greet now?");
});

test("change a method in all heirs which have inherited an object", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = Object.create(person);
    var myFriend = Object.create(person);
    // __
    equals(person.greet(), "Moro", "how does a person greet now?");
    equals(me.greet(), "Moro", "how do I greet now?");
    equals(myFriend.greet(), "Moro", "how does my friend greet now?");
});

test("object's prototype attribute", function() {
    var person = {};
    var me = Object.create(person);
    equals(__, person, "how to find out where does an object inherit from?");
});

test("composition instead of inheritance", function() {
    var a = {
        property: false,
        method: function() {
            this.property = true;
        }
    };
    var b = {
        base: a,
        method: function() {
            // __
        }
    };
    b.method();
    equals(b.base.property, true, "has the property changed?")
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

test("enumerate properties of an object", function() {
    var person = {
        name: 'Mikko',
        age: 38
    };
    var keys = [];
    // __
    keys.sort();
    deepEqual(keys, ['age', 'name'], "how to obtain the property names?");
});

test("enumerate properties of an object: functions as properties", function() {
    var person = {
        sayHi: function() {
            return "Hi";
        }
    };
    var keys = [];
    // __
    keys.sort();
    deepEqual(keys, ['sayHi'], "how to obtain the property names?");
});

test("enumerate properties of an object: inherited properties", function() {
    var person = {
        age: 38
    };
    var me = Object.create(person);
    me.name = 'Mikko';
    var keys = [];
    // __
    keys.sort();
    deepEqual(keys, ['age', 'name'], "how to obtain the property names?");
});

test("enumerate properties of an object: detect inherited properties", function() {
    var person = {
        age: 38
    };
    var me = Object.create(person);
    me.name = 'Mikko';
    var keys = [];
    // __
    keys.sort();
    deepEqual(keys, ['inherited:age', 'name'], "how to separate own and inherited properties?");
});

test("enumerate properties of an object: making a property nonenumerable", function() {
    var person = {
        sayHi: function() {
            return "Hi";
        }
    };
    // __
    var keys = [];
    for (var key in person)
        keys.push(key);
    deepEqual(keys, [], "how to make a property nonenumerable?");
});

test("get own properties (even nonenumerable) of an object", function() {
    var parent = {
        inherited: true
    };
    var object = Object.create(parent, {
        ownProperty: {value: true},
        nonEnumerableProperty: {value: true, enumerable: false}
    });
    var keys = __;
    keys.sort();
    deepEqual(keys, ['nonEnumerableProperty', 'ownProperty'], "how to get a list of own property names?");
});

// add a method enabling automatic conversion to a primitive value (other than string)
// wrap a method in an object providing a new implementation which uses the old ()
// object has private data which can be used by dedicated methods only
// share a method between two objects / classes
// inherit (statically) all properties from two objects (the prototype object and another object)
// inherit (dynamically) all properties from two objects (the prototype object and another object)

