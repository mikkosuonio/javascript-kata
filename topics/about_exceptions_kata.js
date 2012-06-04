
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

// catch an exception
// catch multiple possible exceptions
// perform an operation finally whatever happens
//   order of evaluation
//     no exception in try block
//     exception in try block
//     catch 
// rethrow an exception
// a nested exception occurs when in catch or finally
// jump (return, break, continue) out of try block
