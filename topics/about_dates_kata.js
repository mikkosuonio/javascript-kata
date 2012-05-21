
module("About dates kata (topics/about_dates_kata.js)");

test("current time", function() {
    var date = __;
    equals(date instanceof __, true, '');
});

test("create date using UTC", function() {
    var date = __;
    // year 2012, month May, day 17, hours 8, minutes 54, seconds 40, milliseconds 123
    var sameDateInMseconds = 1337244880123;
    equals(date.valueOf(), sameDateInMseconds, '');
});

test("create date using local time", function() {
    var date = __;
    var sameDateUsingUTC = Date.UTC(2012, 4, 17, 8, 54, 40, 123);
    equals(date.valueOf(), sameDateUsingUTC, '');
});

test("create date using millisecond format", function() {
    var date = __;
    var sameDateInMseconds = 1337244880123;
    equals(date.valueOf(), sameDateInMseconds, '');
});

test("convert date to millisecond format", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 123));
    equals(__, 1337244880123, '');
});

test("convert to string in ISO standard format", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 123));
    equals(__, '2012-05-17T08:54:40.123Z', '');
});

test("parse a date/time string: ISO format", function() {
    function parseDate(dateString) {
        // parse date and return it in millisecond format
        return __;
    };
    equals(parseDate('2012-05-17T08:54:40.123Z'), Date.UTC(2012, 4, 17, 8, 54, 40, 123), '');
    equals(parseDate('2012-05-17T08:54:40Z'), Date.UTC(2012, 4, 17, 8, 54, 40), '');
    equals(parseDate('2012-05-17T11:54:40+03:00'), Date.UTC(2012, 4, 17, 8, 54, 40), '');

    dateString = '2012-05-17T11:54:40';
    var expectedDate;
    if (Date.parse(dateString).valueOf() === 1337255680000)
        // interpreted using UTC (Firefox, latest Ecmascript)
        expectedDate = new Date(Date.UTC(2012, 4, 17, 11, 54, 40));
    else
        // interpreted using local time (Chrome, Ecmascript 5)
        expectedDate = new Date(2012, 4, 17, 11, 54, 40);
    equals(parseDate(dateString), expectedDate.valueOf(), '');
});

test("convert to human-readable string using UTC", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 0));
    var dateString = __;
    console.log('About dates kata: convert to string in UTC: ' + dateString);
    equals(Date.parse(dateString), date.valueOf(), '');
});

test("serialize a date to JSON", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 123));
    var serialized = __;
    equals(serialized, '2012-05-17T08:54:40.123Z', "how to serialize a date to JSON?");
});

// convert to string using UTC
// convert to string using the local time zone
// convert to string using local time zone and local date formatting conventions
// parse a date/time string: javascript UTC string format
// parse a date/time string: javascript string format
// create date from string
// convert the date portion to string
// convert the time portion to string
// get date and time values in local time
// get date and time values in UTC
// get date and time in millisecond format
// set date and time values in local time
// set date and time values in UTC
// get the offset of the current timezone
// question: is it possible to change the time zone used locally?

