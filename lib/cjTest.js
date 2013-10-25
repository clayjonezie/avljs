// a testing framework goes here

var cjTest = (function() {

    cjTest = function(){}
    var tests = [];

    cjTest.prototype.test = function(expected, value) {
        var test = {
            expected: expected,
            value:    value,
            name:     arguments.callee.caller.name
        };
        tests.push(test);
    };

    cjTest.prototype.run = function() {
        var line = "\n" + Array(30).join("=") + " Tests " + Array(30).join("=");
        console.log(line);
        tests.forEach(function(test, index) {
            if (test.expexcted != test.value) {
                console.log("\u2717 failed " + test.name);
            } else {
                console.log("   passed " + test.name);
            }

        });
    };

    return new cjTest();

}());

module.exports = cjTest;
