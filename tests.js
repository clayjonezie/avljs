// some tests using said framework go here
//
//

var AVL = require("./avl.js");
var avl = new AVL();

var t0 = function() {

    avl.add(3);
    return avl.height() === 0;
}

var t1 = function() {
    avl.add(4);
    return avl.height() === 1;
}

var t2 = function() {
    avl.remove(4);
    return avl.height === 0;
}

var t3 = function() {
    return avl.contains(3);
}

var t4 = function() {
    return !avl.contains(22);
}

var tests = [t0, t1, t2, t3, t4];

tests.forEach(function(test, index) {
    if (!test()) {
        console.log("⛔  failed " + index);
//        console.log(test.toString());
    } else
        console.log("   passed " + index);

});


