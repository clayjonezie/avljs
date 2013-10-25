// an avl in javascript, only on ints for now
// maybe later allow you to pass a function to 
// compare your objects
//
// based on Weiss data structures book


var avl = (function () {
    var root = null;

    var avl = function() {
        //constructin

    };

    avl.prototype.add = function(node) {

    };

    // adds an array of elements to the tree
    avl.prototype.addAll = function(nodes) {

    };

    // clears the tree
    avl.prototype.clear = function() {
               root = null;
    };

    // removes an element
    avl.prototype.remove = function(element) {
                
    };

    // removes all the elements in the list
    avl.prototype.removeAll = function(elements) {

    };

    // returns if the tree has an element
    avl.prototype.contains = function(element) {
    };

    // returns if the tree contains all these elements
    avl.prototype.containsAll = function(elements) {
    };

    // the tree has no elements
    avl.prototype.isEmpty = function() {
                 return root === null;
             },

    // the number of elements in the tree
    avl.prototype.size = function() {
    };

    // the maximum hight of the tree
    avl.prototype.height = function() {
    };


    // returns an array of every element
    avl.prototype.all = function() {

    };
    return avl;
}());

module.exports = avl;
