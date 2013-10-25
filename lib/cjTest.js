// a testing framework goes here

var cjTest = (function() {

    cjTest = function(){}
    var tests = [];

    cjTest.prototype.test = function(actual, expected) {
        var test = {
            expected: expected,
            actual:   actual,
            name:     arguments.callee.caller.name
        };
        tests.push(test);
    };

    cjTest.prototype.run = function() {
        var failures = [];
        var successes = [];
        var line = "\n" + Array(30).join("=") + " Tests " + Array(30).join("=");
        console.log(line);
        tests.forEach(function(test, index) {
            if (test.expected === test.actual) {
                successes.push(test);
            } else {
                failures.push(test);
            }

        });

        if (failures.length === 0) {
            console.log(" Passed all tests \u2B50 \u2B50 \u2B50 \u2B50 \u2B50 \u2B50 \u2B50 \u2B50 \u2B50 \u2B50 ");
        } else {

            successes.forEach(function(test) {
                console.log("  passed " + test.name);
            });

            failures.forEach(function(test) {
                console.log("\u2717 failed " + test.name);
                console.log("    expected: " + test.expected);
                console.log("       found: " + test.actual);
            });
        }
    };

    return new cjTest();

}());

module.exports = cjTest;
