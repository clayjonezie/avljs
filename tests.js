// some tests using said framework go here

var AVL = require("./avl.js"),          // the module we are testng
    cj  = require("./lib/cjTest.js");   // modestly named testing module

var avl = new AVL();

(function emptyHeightTest() {
    cj.test(-1, avl.height());
})();

(function emptyHeightTest2() {
    avl.add(3)
    cj.test(avl.height(), 0);
})();

(function duplicateTest() {
    avl.add(3);
    cj.test(avl.height(), 0);
})();

(function alphaAddTest() {
    avl.add(5);
    cj.test(avl.height(), 1);
}());

(function addTest() {
    avl.add(-7);
    avl.add(20);
    avl.add(25);
    avl.add(1);
    avl.add(0);
    cj.test(avl.height(), 3);
})();

(function addTest2() {
})();

(function addTest3() {
    
})();

(function removeTest() {
    avl.remove(4);
    cj.test(avl.height(), 0);
}());

(function containsTest() {
    cj.test(avl.contains(3), true);
})();

(function containsTest2() {
    cj.test(avl.contains(22), false);
})();

cj.run();
