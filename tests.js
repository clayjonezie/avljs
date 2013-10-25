// some tests using said framework go here

var AVL = require("./avl.js"),          // the module we are testng
    cj  = require("./lib/cjTest.js");   // modestly named testing module

var avl = new AVL();

var testf = function test1() {
    avl.add(3);
    avl.add(-7);
    avl.add(20);
    avl.add(25);
    avl.add(1);
    avl.add(0);
    cj.test(avl.height(), 3);
}();

var t1 = function() {
    avl.add(4);
    cj.test(avl.height, 3);
}

var t2 = function() {
    avl.remove(4);
    cj.test(avl.height, 0);
}

var t3 = function() {
    cj.test(avl.contains(3), true);
}

var t4 = function() {
    cj.test(avl.contains(22), false);
}

cj.run();
