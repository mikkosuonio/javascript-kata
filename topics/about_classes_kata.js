
module("Classes kata (topics/about_classes_kata.js)");

test("create a class", function() {
    // __
    var person = __;
    equals(person instanceof Person, true, "am I a Person?");
    equals(person.name, 'Mikko', "what is my name?");
});

test("create a class with a method", function() {
    // __
    var me = __;
    var friend = __;
    equals(me.introduce(), "My name is Mikko", "what is my name?");
    equals(friend.introduce(), "My name is Tommi", "what is my friend's name?");
});

test("call an instance method in constructor", function() {
    function Person(name) {
        // __
    };
    Person.prototype.setGreeting = function(name) {
        this.greeting = 'My name is ' + name;
    };
    var me = new Person('Mikko');
    equals(me.greeting, "My name is Mikko", "what is my name?");
});

test("create a class method: object construction using a factory method", function() {
    function Person(name) {
        this.greeting = 'My name is ' + name;
    };
    // __
    var me = Person.createFinn('Mikko');
    equals(me.greeting, "Minun nimeni on Mikko", "what is my name?");
});

test("add or override a method in all instances (even already instantiated) of a class", function() {
    function Person(name) {
        this.name = name;
    };
    var me = new Person('Mikko');
    // __
    equals(me.introduce(), "My name is Mikko", "what is my name?");
});

test("augment a standard class with a new method", function() {
    var string = 'My  name  is   Mikko';
    // __
    equals(string.removeExtraWhiteSpace(), "My name is Mikko", "how to add a method to string class?");
    equals(stringsDoNotHaveExtraEnumerableProperties(), true, "how to make the method nonenumerable?");
    function stringsDoNotHaveAdditionalEnumerableProperties() {
        var keys = [];
        for (var key in "")
            keys.push(key);
        return keys.indexOf('removeExtraWhiteSpace') === -1;
    }
});

test("define conversion to string for a class", function() {
    function Person(name) {
        this.name = name;
    };
    // __
    var me = new Person('Mikko');
    var myFriend = new Person('Tommi');
    equals(me.toString(), 'Person: Mikko', "how to implement a method to convert objects of a class to string?");
    equals(myFriend.toString(), 'Person: Tommi', "how to implement a method to convert objects of a class to string?");
});

test("convention for storing the constructor function", function() {
    function Person() {};
    var me = new Person;
    equals(__, Person, "how to find the constructor function of an object created using new?");
});

test("convention for storing the prototype object of a class", function() {
    function Person() {};
    var me = new Person;
    equals(__, Object.getPrototypeOf(me), "how to find the prototype of an object created using new with constructor function?");
});

test("subclasses", function() {
    function Base() {};
    function Derived() {};
    // __
    var d = new Derived();
    equals(d instanceof Base, true, "is it an instance of Base?");
    equals(d.constructor, Derived, "is the constructor still clear?");
});

test("subclasses: constructor chaining", function() {
    function Base() {
        this.property = true;
    };
    function Derived() {
        // __
    };
    Derived.prototype = Object.create(Base.prototype);
    Derived.prototype.constructor = Derived;
    var d = new Derived();
    equals(d.property, true, "is the property initialized?")
});

test("subclasses: use composition instead", function() {
    function Base() {
        this.property = false;
    };
    Base.prototype.method = function() {
        this.property = true;
    };
    function Derived(base) {
        this.base = base;
    };
    Derived.prototype.method = function() {
        // __
    }
    var b = new Base();
    var d = new Derived(b);
    d.method();
    equals(d.base.property, true, "is the property changed?")
});

test("add a method allowing comparison of objects of the class: equality", function() {
    function Person(name) {
        this.name = name;
    };
    // __
    var me = new Person('Mikko');
    var anotherMe = new Person('Mikko');
    var friend = new Person('Tommi');
    function Creature(name) {
        this.name = name;
    };
    var differentClass = new Creature('Mikko');
    var withoutName = new String('Mikko');
    equals(me.equals(me), true, "I am equal to myself");
    equals(me.equals(anotherMe), true, "I am equal to another me");
    equals(!me.equals(friend), true, "I am not equal to my friend");
    equals(!me.equals(differentClass), true, "I am not equal to an object of another class (although it has a name)");
    equals(!me.equals(withoutName), true, "I am not equal to an object of another class");
    equals(!me.equals({}), true, "I am not equal to an empty object");
});

test("add a method allowing comparison of objects of the class: compareTo", function() {
    function Person(name) {
        this.name = name;
    };
    // __
    var me = new Person('Mikko');
    var friend = new Person('Tommi');
    equals(me.compareTo(me) === 0, true, "am I equal to myself?");
    equals(me.compareTo(friend) < 0, true, "do I come before my friend in the alphabetic order?");
    equals(friend.compareTo(me) > 0, true, "does my friend come after me in the alphabetic order?");
    
    // __
    deepEqual([friend, me].sort(Person.byName), [me, friend], 'how to sort us alphabetically?');
});

// allow extending the work done at construction
// - call a hook method in constructor assuming someone has created that hook method to the prototype
// subclasses
// - abstract classes
// all instances of Function have a property 'prototype'
// is Function the prototype (attribute) of all functions?
// do all instances of Function have a different prototype (attribute) or a different value of the prototype property?
// add a method allowing comparison of objects of the class:
// - comparison of objects which have valueOf()
// - question: value types in javascript: is it possible to use them in === comparisons?
// add a method enabling automatic conversion to a primitive value (other than string)
// private state:
// - a private instance variable accessible from selected methods
// - a private instance variable initialized with a constructor parameter accessible from selected methods
// - a private class variable accessible from selected methods
// - a private instance variable accessible from selected methods and a public getter
// constructor overloading
// - overloaded constructor with argument type deduction
// - overloaded constructor for the same argument type list


