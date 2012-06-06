
module("Exceptions kata (topics/about_exceptions_kata.js)");

test("throw an exception", function() {
    function functionThrowingException() {
        // __
    };
    raises(functionThrowingException, "how to throw an exception?");
});

test("catch an exception", function() {
    var exceptionWasCaught = false;
    // __
    throw {};
    // __
    ok(exceptionWasCaught, 'how to catch an exception');
});

test("throw a standard exception", function() {
    try {
        // __
    }
    catch (e) {
        equals(e.name, 'Error', 'what is the name of the error?');
        equals(e.message, 'message', 'what is the associated error messsage?');
    }
});

test("throw a primitive type", function() {
    try {
        // __
        }
    catch (e) {
        equals(e, 'it was my fault', 'how does the error look like?');        
    }
});

test("perform an operation finally whatever happens: no exceptions", function() {
    var operationWasPerformed = false;
    try {
    }
    // __
    ok(operationWasPerformed, 'how to perform an operation finally');
});

test("perform an operation finally whatever happens: exception occurs", function() {
    var operationWasPerformed = false;
    try {
        try {
            throw 'exception';
        }
        // __
    }
    catch (e) {}
    ok(operationWasPerformed, 'how to perform an operation finally');
});

// catch multiple possible exceptions
// execution order when an exception is thrown
//   statement after throw is not executed
//   statement after try-finally is not executed if the exception is not caught
// perform an operation finally whatever happens
//   order of evaluation
//     no exception in try block
//     exception in try block
//     catch 
// rethrow an exception
// a nested exception occurs when in catch or finally
// jump (return, break, continue) out of try block
