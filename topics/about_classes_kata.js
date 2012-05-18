
module("Classes kata (topics/about_classes_kata.js)");

test("create a class", function() {
    // __
    var me = __;
    var friend = __;
    equals(__, true, "am I a Person?");
    equals(me.introduce(), "My name is Mikko", "what is my name?");
    equals(friend.introduce(), "My name is Tommi", "what is my friend's name?");
});

test("add a method to all instances (even already instantiated) of a class", function() {
    // __
    var me = __;
    // __
    equals(me.introduce(), "My name is Mikko", "what is my name?");
});

test("augment a standard class with a new method", function() {
    var string = 'My  name  is   Mikko';
    // __
    equals(string.removeExtraWhiteSpace(), "My name is Mikko", "how to add a method to string class?");
});

test("convention for storing the prototype object of a class", function() {
    function Person() {};
    var me = new Person;
    equals(__, Person.prototype, "how to find the prototype of an object created using new with constructor function?");
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

// redefine a method in all objects of a class
// call an instance method in constructor
// create a static / class method
// add a method allowing comparison of objects of the class
// add a method enabling automatic conversion to a primitive value (other than string)


