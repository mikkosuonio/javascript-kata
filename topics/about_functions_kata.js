
module("About Functions kata (topics/about_functions_kata.js)");

test("define a function", function() {
    var returnValue = 1;
    // __
    equals(definedFunction(), returnValue, 'how to define a function?');
});

test("define a function with parameters", function() {
    // __
    equals(functionWithParameter(1), 2*1, 'how to define a function with a parameter?');
    equals(functionWithParameter(2), 2*2, 'how to define a function with a parameter?');
});

test("define a function with an optional parameter", function() {
    var value = 1;
    var functionWithOptionalParameter = __;
    equals(functionWithOptionalParameter(value), 2*value, 'how to define a function with an optional parameter?');
    equals(functionWithOptionalParameter(value, 3), 3*value, 'how to define a function with an optional parameter?');
});

test("return a function", function() {
    var returnValue = 1;
    // __
    var returnedFunction = myFunction();
    equals(returnedFunction(), returnValue, 'how to define a function returning a function?');		
});

test("pass a function as an argument", function() {
    var value = 1;
    var argumentFunction = function (x) {
        return x*x;
    };
    var functionWithFunctionAsParameter = __;
    equals(functionWithFunctionAsParameter(argumentFunction, 2), 4, 'how to define a function with a function as an parameter?');		
});

test("function object parameters are passed by reference", function() {
    var object = {property: false};
    var functionWithParameter = function(x) {
        x.property = true;
    };
    functionWithParameter(object);
    equals(object.property, __, 'has the object been modified?');
});

test("function with variable number of arguments", function() {
    var product = function(/* ... */) {
        var result = 1;
        for (var i = 0; i < __; i++)
            result *= __;
        return result;
    };
    equals(product(1), 1, 'how to define a function with varying number of parameters?');
    equals(product(1, 2), 2, 'how to define a function with varying number of parameters?');
    equals(product(1, 2, 3), 6, 'how to define a function with varying number of parameters?');
});

test("arguments object: use as an array", function() {
    var joinTheParameters = function(/* ... */) {
        return __;
    };
    equals(joinTheParameters(1), "1", 'how to call an array method on arguments?');
    equals(joinTheParameters(1, 2), "1,2", 'how to call an array method on arguments?');
});

test("invocation: call a function as a method of an object", function() {
    var object = {property: false};
    var functionChangingTheProperty = function() {
        this.property = true;
    };
    // __
    equals(object.property, true, 'how to call the function as a method?');
});

test("invocation: apply a function with varying/unknown number of parameters", function() {
    var object = {result: 0};
    var function1 = function(x) {
        return x;
    };
    var function2 = function(x, y) {
        return x*y;
    };
    var changeTheObject = function(f /* ... */) {
        var argumentsForF = [].slice.call(arguments, 1);
        this.result = __;
    };
    changeTheObject.call(object, function1, 1);
    equals(object.result, 1, 'result for a function with one parameter');
    changeTheObject.call(object, function2, 2, 3);
    equals(object.result, 6, 'result for a function with two parameters');
});

test("functions are hoisted to the top of the enclosing function / script", function() {
    function callFunctionNotYetDeclared() {
        return callThis();
    };
    function callThis() {
        return "can call!";
    };
    var result = callFunctionNotYetDeclared();
    equals(result === "can call!", __, 'can it call the function?');
});

test("function expression stored in a variable can be used after initialization!", function () {
    var callFunctionAlreadyInitializedWhenThisIsCalled = function() {
        return callThis();
    };
    var callThis = function() {
        return "can call!";
    };
    var result = callFunctionAlreadyInitializedWhenThisIsCalled();
    equals(result === "can call!", __, 'can it call the function?');
});

test("function expression stored in a variable cannot be used before initialization!", function () {
    var callFunctionNotYetInitialized = function() {
        return callThis();
    };
    var result;
    try {
        result = callFunctionNotYetInitialized();
    }
    catch (exception) {
    }
    var callThis = function() {
        return "can call!";
    };
    equals(result === "can call!", __, 'can it call the function?');
});

test("function expression stored in a variable is not defined before initialization!", function () {
    var result;
    try {
        result = callThis();
    }
    catch (exception) {
    }
    equals(callThis, __, 'what is the value of callThis');
    var callThis = function() {
        return "can call!";
    };
});

test("closure: function evaluated in the same (lexical) scope as where it was defined", function() {
    var i = 1;
    function getValue() {
        var i = 2;
        function f() {return i;}
        return f();
    };
    equals(getValue(), __, 'what value does the function evaluate to?');
    equals(i, __, 'what is the value of the variable?');
});

test("closure: function evaluated in a different scope than where it was defined", function() {
    var i = 1;
    function getFunction() {
        var i = 2;
        function f() {return i;}
        return f;
    };
    var f = getFunction();
    var value = f();
    equals(value, __, 'what value does the function evaluate to?');
    equals(i, __, 'what is the value of the variable?');
});

test("closure: the scope chain associated with the closure is live", function() {
    var i = 1;
    function f1() {return i;}
    i = 2;
    function f2() {return i;}
    equals(f1(), __, 'what is the return value of the function?');
    equals(f2(), __, 'what is the return value of the function?');
});

test("closure: ... changing to the next level in the scope chain does not help", function() {
    var i = 1;
    function createFunction() {
        return function() {return i;}
    }
    var f1 = createFunction();
    i = 2;
    var f2 = createFunction();
    equals(f1(), __, 'what is the return value of the function?');
    equals(f2(), __, 'what is the return value of the function?');
});

test("closure: ... but we can make a static copy by passing it as an argument of a function", function() {
    var i = 1;
    function createFunctionWithStaticCopyOf(x) {
        return function() {return x;}
    }
    var f1 = createFunctionWithStaticCopyOf(i);
    i = 2;
    var f2 = createFunctionWithStaticCopyOf(i);
    equals(f1(), __, 'what is the return value of the function?');
    equals(f2(), __, 'what is the return value of the function?');
});

test("closure: ... or by storing it to a variable", function() {
    var i = 1;
    function createFunction() {
        var copy = i;
        return function() {return copy;}
    }
    var f1 = createFunction();
    i = 2;
    var f2 = createFunction();
    equals(f1(), __, 'what is the return value of the function?');
    equals(f2(), __, 'what is the return value of the function?');
});

var temporary = 1;
test("functions as a temporary namespace", function () {
    equals(typeof(temporary), "undefined", 'how to avoid temporary variables polluting the global namespace?');
});

// closures
// - accessing this or arguments of an outer function
// function parameters of basic types are essentially passed by value
// function parameters of basic types are converted to wrapper objects
// partial application / currying
// - see The bind() method in Functions: Function properties, ...
// - Alternative implementation: see http://javascriptweblog.wordpress.com/2010/04/05/curry-cooking-up-tastier-functions/

