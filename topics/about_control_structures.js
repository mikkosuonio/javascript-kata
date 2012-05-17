
module("About Control Structures (topics/about_control_structures.js)");

test("if with the first branch", function() {
	var firstBranchSelected = false;
	if (true) {
		firstBranchSelected = true;
	}
	equals(firstBranchSelected, __, 'was the first branch selected?');
});

test("if with the second branch", function() {
	var secondBranchSelected = false;
	if (false) {
		secondBranchSelected = false;
	} else {
	    secondBranchSelected = true;
    }
	equals(secondBranchSelected, __, 'was the second branch selected?');
});

test("for", function() {
	var counter = 10;
	for (var i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equals(counter, __, 'what is the value of counter?');
});

test("for in", function() {
	// this syntax will be explained in about objects
	var person = {
		name: "Amory Blaine",
		age: 102
	};
	var result = "";
	// for in enumerates the property names of an object
	for (property_name in person) {
  result = result + property_name;
	};
	equals(result, __, 'what is the value of result?');
});

test("while", function() {
	var counter = 0;
	while (counter < 3) {
		counter++;
	}
	equals(counter, __, 'what is the value of counter?');
});

test("ternary operator", function() {
	var fruit = true ? "apple" : "orange";
	equals(fruit, __, 'what is the value of fruit?');

	fruit = false ? "apple" : "orange";
	equals(fruit, __, 'now what is the value of fruit?');
});

test("switch", function() {
	var result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equals(result, __, 'what is the value of result?');
});

test("switch default case", function() {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equals(result, __, 'what is the value of result?');
});

test("write a switch case statement which evaluates to the default", function() {
	var result = false;
	equals(result, true, 'was the default branch executed?');
});

test("write a switch case statement", function() {
	var result = false;
	equals(result, true, 'was the default branch executed?');
});

test("null coallescion", function() {
    var result = null || "a value";
    equals(result, __, 'what is the value of result?');
});

test("null coallescion for an undefined variable", function() {
    var uninitializedVariable;
    var result = uninitializedVariable || "a value";
    equals(result, __, 'what is the value of result?');
});

test("assign a default value using null coallescion operator", function() {
    var uninitializedVariable;
    var result = __;
    equals(result, __, 'what is the value of result?');
});

// kata

test("for loop", function() {
	var values = [1, 2, 3];
    var sum = 0;
	equals(sum, 6, 'how to calculate the sum of the values?');
});
