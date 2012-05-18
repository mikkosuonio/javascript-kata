
module("About dates kata (topics/about_dates_kata.js)");

test("current time", function() {
    console.log('Current date and time is ' + __);
});

test("create date using UTC", function() {
    var date = __;
    // year 2012, month 5, day 17, hours 8, minutes 54, seconds 40, milliseconds 123
    var sameDateInMseconds = 1339923280123;
    equals(date.valueOf(), sameDateInMseconds, '');
});

test("create date using local time", function() {
    var date = __;
    var sameDateUsingUTC = Date.UTC(2012, 5, 17, 8, 54, 40, 123);
    equals(date.valueOf(), sameDateUsingUTC, '');
});

test("create date using millisecond format", function() {
    var date = __;
    var sameDateInMseconds = 1339923280123;
    equals(date.valueOf(), sameDateInMseconds, '');
});

// create date from millisecond format
// parse a date time string: ISO format
// parse a date time string: javascript string format
// parse a date time string: javascript UTC string format
// create date from string
// convert to string using the local time zone
// convert to string using UTC
// convert to ISO standard format string
// convert to string using local time zone and local date formatting conventions
// serialize to JSON
// convert the date portion to string
// convert the time portion to string
// get date and time values in local time
// get date and time values in UTC
// get date and time in millisecond format
// set date and time values in local time
// set date and time values in UTC
// question: is it possible to change the time zone used locally?

