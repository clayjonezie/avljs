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

    var newNode = function(elem) {
        return Object.create({
            elem: elem,
            left: null,
            right: null
        });
    };

    var height = function(node) {
        if (node === null)
            return -1;
        else 
            return Math.max(height(node.left), height(node.right)) + 1;
    }

    var balance = function(node) {
        if (height(node.left) - height(node.right) > 1)
            if (height(node.left.left) - height(node.left.right) > 1)
                rotateWithLeftChild(node);
            else
                doubleWithLeftChild(node);
        else if (height(node.right) - height(node.left) > 1)
            if (height(node.right.right) - height(node.right.left) > 1)
                rotateWithRightChild(node);
            else
                doubleWithRightChild(node);
    };


    var rotateWithLeftChild = function(node){};
    var doubleWithLeftChild = function(node){};
    var rotateWithRightChild = function(node){};
    var doubleWithRightChild = function(node){};

    var insert = function(node, elem) {
        if (node === null) {
            return node = newNode(elem);
        }

        if (elem > node.elem) {
            return insert(node.right, elem);
        }

        if (elem < node.elem) {
            return insert(node.left, elem);
        }

        else {}
    };

    avl.prototype.add = function(elem) {
        return root = insert(root, elem);
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
        return height(root);
    };


    // returns an array of every element
    avl.prototype.all = function() {

    };
    return avl;
}());

module.exports = avl;
