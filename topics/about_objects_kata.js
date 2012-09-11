
module("Objects kata (topics/about_objects_kata.js)");

test("create an object literal", function() {
    var person = {
        name: "Mikko",
        age: 38
    };
    equals(person.name, "Mikko", "what is the person's name?");
    equals(person.age, 38, "what is the person's age?");
});

test("add properties to an existing object", function() {
    var person = {};
    person.name = "Mikko";
    equals(person.name, "Mikko", "what is the person's name?");
});

test("define a method in object literal", function() {
    var person = {
        sayHi: function() {
            return 'Hi';
        }
    };
    equals(person.sayHi(), "Hi", 'what should the sayHi method be?');
});

test("add a method to an existing object", function() {
    var person = {};
    person.sayHi = function() {
        return 'Hi';
    };
    equals(person.sayHi(), "Hi", 'what should the sayHi method be?');
});

test("define a method referring to an object property", function() {
    var person = {
        name: "Mikko"
    };
    person.introduce = function() {
        return 'My name is ' + this.name;
    };
    equals(person.introduce(), "My name is Mikko", 'what should the introduce method be?');
});

test("object as an associative array / map / hash", function() {
    var person = {};
    person["Mikko's greeting"] = 'Hi';
    equals(person["Mikko's greeting"], "Hi", 'how to map key to value?');
});

test("equality", function() {
    equals({} == {}, false, 'are the objects equal?');
    equals({property: "value"} == {property: "value"}, false, 'are the objects equal?');
    equals({property: "value"} == {property: "another"}, false, 'are the objects equal?');
    equals({property1: "value"} == {property2: "value"}, false, 'are the objects equal?');

    var object1 = {property: "value"};
    var object2 = object1;
    equals(object1 == object2, true, 'are the objects equal?');
});

test("strict equality", function() {
    equals({} === {}, false, 'are the objects the same?');
    equals({property: "value"} === {property: "value"}, false, 'are the objects the same?');
    equals({property: "value"} === {property: "another"}, false, 'are the objects the same?');
    equals({property1: "value"} === {property2: "value"}, false, 'are the objects the same?');

    var object1 = {property: "value"};
    var object2 = object1;
    equals(object1 === object2, true, 'are the objects the same?');
});

test("object method calls another method", function() {
    var person = {
        greeting: function() {
            return "Hi";
        },
        greet: function() {
            return this.greeting();
        }
    };
    equals(person.greet(), "Hi", 'how to call another method?');
});

test("object method uses a nested helper function", function() {
    var person = {
        name: "Mikko",
        greet: function() {
            function greeting() {
                return person.name + "'s greeting";
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
    person.greet = function() {
        return 'Moro';
    };
    equals(person.greet(), "Moro", 'what should the new method be?');
});

test("wrap an existing method with a new method which calls the old", function() {
    var person = {
        sayHi: function() {
            return 'Hi';
        }
    };
    var old = person.sayHi;
    person.sayHi = function() {
        return old.call(this) + ", and hi again";
    };
    equals(person.sayHi(), "Hi, and hi again", 'what should the sayHi method be?');
});

test("object inherits a method from another object", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = Object.create(person);
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
    me.greet = function() {
        return 'Moro';
    };
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
    person.greet = function() {
        return 'Moro';
    };
    equals(person.greet(), "Moro", "how does a person greet now?");
    equals(me.greet(), "Moro", "how do I greet now?");
    equals(myFriend.greet(), "Moro", "how does my friend greet now?");
});

test("object overrides an inherited method and calls the overridden method", function() {
    var person = {
        greet: function() {
            return "Hi";
        }
    };
    var me = Object.create(person);
    me.greet = function() {
        return 'Moro, in other words, ' + person.greet();
    };
    equals(person.greet(), "Hi", "how does a person greet?");
    equals(me.greet(), "Moro, in other words, Hi", "how do I greet now?");
});

test("object's prototype attribute", function() {
    var person = {};
    var me = Object.create(person);
    equals(Object.getPrototypeOf(me), person, "how to find out where does an object inherit from?");
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
            this.base.method.call(this.base);
        }
    };
    b.method();
    equals(b.base.property, true, "has the property changed?")
});

test("default conversion to string", function() {
    var person = {name: 'Mikko'};
    equals(person.toString(), '[object Object]', "how to obtain the string presentation of an object?");
});

test("define conversion to string for an object", function() {
    var person = {name: 'Mikko'};
    person.toString = function() {
        return 'Person: ' + this.name;
    };
    equals(person.toString(), 'Person: Mikko', "how to implement a method to convert an object to string?");
});

test("enumerate properties of an object", function() {
    var me = {
        name: 'Mikko',
        age: 38
    };
    var keys = Object.keys(me);
    keys.sort();
    deepEqual(keys, ['age', 'name'], "how to obtain the property names?");
});

test("enumerate properties of an object: functions as properties", function() {
    var me = {
        sayHi: function() {
            return "Hi";
        }
    };
    var keys = Object.keys(me);
    deepEqual(keys, ['sayHi'], "how to obtain the property names?");
});

test("enumerate properties of an object: inherited properties", function() {
    var person = {
        age: 38
    };
    var me = Object.create(person);
    me.name = 'Mikko';
    var keys = [];
    for (var key in me)
        keys.push(key);
    keys.sort();
    deepEqual(keys, ['age', 'name'], "how to obtain the names of both own and inherited properties?");
});

test("enumerate properties of an object: detect inherited properties", function() {
    var person = {
        age: 38
    };
    var me = Object.create(person);
    me.name = 'Mikko';
    var keys = [];
    for (var key in me)
        if (me.hasOwnProperty(key))
            keys.push(key);
        else
            keys.push('inherited:' + key);
    keys.sort();
    deepEqual(keys, ['inherited:age', 'name'], "how to separate own and inherited properties?");
});

test("enumerate properties of an object: making a property nonenumerable", function() {
    var person = {
        sayHi: function() {
            return "Hi";
        }
    };
    Object.defineProperty(person, 'sayHi', {enumerable: false});
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
        enumerableOwnProperty: {value: true},
        nonEnumerableOwnProperty: {value: true, enumerable: false}
    });
    var keys = Object.getOwnPropertyNames(object);
    keys.sort();
    deepEqual(keys, ['enumerableOwnProperty', 'nonEnumerableOwnProperty'], "how to get a list of own property names?");
});

// add a method enabling automatic conversion to a primitive value (other than string)
// object has private data which can be used by dedicated methods only
// share a method between two objects / classes
// inherit (statically) all properties from two objects (the prototype object and another object)
// inherit (dynamically) all properties from two objects (the prototype object and another object)

