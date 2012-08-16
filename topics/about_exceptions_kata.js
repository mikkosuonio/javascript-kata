
module("Exceptions kata (topics/about_exceptions_kata.js)");

test("throw an exception", function() {
    function functionThrowingException() {
        // __
    }
    raises(functionThrowingException, "how to throw an exception?");
});

test("catch an exception", function() {
    var exceptionWasCaught = false;
    // __
    throw {};
    // __
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
    equals(exception.message, 'it was my fault', 'is it the same exception?');
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

test("perform an operation finally whatever happens: exception when handling the finally block", function() {
    var exceptions = [];
    try {
        try {
            throw 'exception 1';
        }
        finally {
            throw 'exception 2';
        }
    }
    catch (e) {
        exceptions.push(e);
    }
    deepEqual(exceptions, __, 'which exceptions propagate out of the inner try-finally?');
});

test("perform an operation finally whatever happens: return when handling the finally block", function() {
    var exceptions = [];
    function functionThrowingException() {
        try {
            throw 'exception';
        }
        finally {
            return;
        }
    }
    try {
        functionThrowingException();
    }
    catch (e) {
        exceptions.push(e);
    }
    deepEqual(exceptions, __, 'which exceptions propagate out of the try-finally?');
});

test("exception causes call stack to be unwound", function() {
    var statements = [];
    function functionThrowingException() {
        throw {};
        statements.push('statement 1');
    }
    try {
        functionThrowingException();
    }
    catch (e) {
    }
    statements.push('statement 2');
    deepEqual(statements, [], 'where does the execution go');
});

test("catch multiple possible exceptions", function() {
    var exception;
    try {
        if (Math.random() > 0.5) {
            throw 'exception 1';
        }
        else {
            throw 'exception 2';
        }
    }
    catch (e) {
        equal(exception, 'exception 1', 'was this exception caught?');
        equal(exception, 'exception 2', 'was this exception caught?');
    }
});

// execution order when an exception is thrown
//   statement after throw is not executed
//   statement after try-finally is not executed if the exception is not caught
// perform an operation finally whatever happens
//   order of evaluation
//     no exception in try block
//     exception in try block
//     catch 
// a nested exception occurs when in catch
// jump (return, break, continue) out of try block
