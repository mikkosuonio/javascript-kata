
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

// objects of the derived class are instances of the base class
// redefine a method in all objects of a class
// call an instance method in constructor
// create a static / class method
// add a method allowing comparison of objects of the class:
// - equals
// - comparison of objects which have valueOf()
// - compareTo
// - helper for sort
// - question: value types in javascript: is it possible to use them in === comparisons?
// add a method enabling automatic conversion to a primitive value (other than string)
// all instances of Function have a property 'prototype'
// all instances of Function have a different prototype(?)
// private state:
// - a private instance variable accessible from selected methods
// - a private instance variable initialized with a constructor parameter accessible from selected methods
// - a private class variable accessible from selected methods
// - a private instance variable accessible from selected methods and a public getter
// constructor overloading
// - overloaded constructor with argument type deduction
// - overloaded constructor for the same argument type list
// - factory method


