
module("About dates kata (topics/about_dates_kata.js)");

test("current time", function() {
    var date = __;
    equals(date instanceof Date, true, '');
    console.log('current time (using local time): ' + date.toString());
});

test("create date using UTC", function() {
    // year 2012, month May, day 17, hours 8, minutes 54, seconds 40, milliseconds 123
    var dateInMseconds = 1337244880123;
    var sameDateUsingUTC = __;
    equals(sameDateUsingUTC.valueOf(), dateInMseconds, '');
});

test("create date using local time", function() {
    var dateUsingUTC = Date.UTC(2012, 4, 17, 8, 54, 40, 123);
    var sameDateUsingLocalTime = __;
    equals(sameDateUsingLocalTime.valueOf(), dateUsingUTC, '');
});

test("create date using millisecond format", function() {
    var milliseconds = 1337244880123;
    var date = __;
    equals(date.valueOf(), milliseconds, '');
});

test("create date from string: ISO format", function() {
    var dateUsingUTC = Date.UTC(2012, 4, 17, 8, 54, 40, 123);
    var sameDateAsString = '2012-05-17T08:54:40.123Z';
    equals(__.valueOf(), dateUsingUTC.valueOf(), '');
});

test("convert date to millisecond format", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 123));
    equals(__, 1337244880123, '');
});

test("convert to string in ISO standard format", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 123));
    equals(__, '2012-05-17T08:54:40.123Z', '');
});

test("convert to human-readable string using UTC", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 0));
    var dateString = __;
    console.log('convert to human-readable string using UTC: ' + dateString);
    equals(Date.parse(dateString), date.valueOf(), '');
});

test("convert to human-readable string using local time", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 0));
    var dateString = __;
    console.log('convert to human-readable string using local time: ' + dateString);
    equals(Date.parse(dateString), date.valueOf(), '');
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

test("parse a date/time string: javascript UTC string format", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 0));
    var dateString = date.toUTCString();
    equals(__, date.valueOf(), '');
});

test("parse a date/time string: javascript string format", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 0));
    var dateString = date.toString();
    equals(__, date.valueOf(), '');
});

test("serialize a date to JSON", function() {
    var date = new Date(Date.UTC(2012, 4, 17, 8, 54, 40, 123));
    var serialized = __;
    equals(serialized, '"2012-05-17T08:54:40.123Z"', "how to serialize a date to JSON?");
});

test("get timezone offset", function() {
    var date = new Date(Date.UTC(2012, 0, 1, 9, 10, 11));
    var dateWithDaylightSavingTimeInEffect = new Date(Date.UTC(2012, 5, 25, 9, 52, 25));
    equals(date.getTimezoneOffset(), __, 'what is the difference between UTC time and your local time in minutes');
    equals(dateWithDaylightSavingTimeInEffect.getTimezoneOffset(), __, 'what is the difference between UTC time and your local time when daylight saving time is in effect');
});

// convert to string using local time zone and local date formatting conventions
// convert the date portion to string
// convert the time portion to string
// get date and time values in local time
// get date and time values in UTC
// get date and time in millisecond format
// set date and time values in local time
// set date and time values in UTC

