// some tests using said framework go here
//
//

var AVL = require("./avl.js");
var avl = new AVL();

var t1 = function() {

    avl.add(3);
    return avl.height() === 0;
}

var t2 = function() {
    avl.add(4);
    return avl.height() === 1;
}

var t3 = function() {
    avl.remove(4);
    return avl.height === 0;
}

var t4 = function() {
    return avl.contains(3);
}

var t5 = function() {
    return !avl.contains(22);
}

var tests = [t1, t2, t3, t4, t5];

tests.forEach(function(test, index) {
    if (!test()) {
        console.log("Falure at test : " + index + "\n");
        console.log(test.toString());
    }
});


