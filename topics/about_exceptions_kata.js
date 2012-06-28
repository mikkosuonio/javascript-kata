
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
    exceptionWasCaught = true;
    equals(exceptionWasCaught, true, 'how to catch an exception');
});

test("throw a standard exception", function() {
    var exception;
    try {
        // __
    }
    catch (e) {
        exception = e;
    }
    equals(exception.name, 'Error', 'what is the name of the error?');
    equals(exception.message, 'message', 'what is the associated error messsage?');
});

test("throw a primitive type", function() {
    var exception;
    try {
        // __
    }
    catch (e) {
        exception = e;
    }
    equals(exception, 'it was my fault', 'how does the error look like?');        
});

test("rethrow a exception", function() {
    var exception;
    try {
        try {
            throw new Error('it was my fault');
        }
        catch (e) {
            // __
        }
    }
    catch (e) {
        exception = e;
    }
    equals(exception.message, 'it was my fault', 'how does the error look like?');        
});

test("perform an operation finally whatever happens", function() {
    var operationWasPerformed = false;
    try {
        try {
            throw 'exception';
        }
        finally {
            // __
        }
    }
    catch (e) {}
    equals(operationWasPerformed, true, 'how to perform an operation finally');
});

test("perform an operation finally whatever happens: catch present", function() {
    var operationWasPerformed = false;
    try {
        try {
            throw 'exception';
        }
        catch (e) {}
        finally {
            // __
        }
    }
    catch (e) {}
    equals(operationWasPerformed, true, 'how to perform an operation finally');
});

test("exception causes call stack to be unwound", function() {
    var exceptionWasCaught;
    function functionThrowingException() {
        throw {};
    }
    try {
        functionThrowingException();
        exceptionWasCaught = false;
    }
    catch (e) {
        exceptionWasCaught = true;
    }
    equals(exceptionWasCaught, __, 'how to perform an operation finally');
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
// a nested exception occurs when in catch or finally
// jump (return, break, continue) out of try block
