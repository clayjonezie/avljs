// an avl in javascript, only on ints for now // maybe later allow you to pass a function to 
// compare your objects
//
// based on Weiss data structures book


var avl = (function () {

    var root = null;

    var avl = function() {
        // constructor of sorts
    };
    
    // private methods
    var newNode = function(elem) {
        return Object.create({
            elem: elem,
            height: 0,
            left: null,
            right: null
        });
    };

    var height = function(node) {
        if (node === null)
            return -1;
        else
            return node.height;
    }

    var balance = function(node) {
        if (node === null) return;
        if (height(node.left) - height(node.right) > 1)
            if (height(node.left.left) - height(node.left.right) > 1)
                node = doubleWithLeftChild(node);
            else
                node = rotateWithLeftChild(node);
        else if (height(node.right) - height(node.left) > 1)
            if (height(node.right.right) - height(node.right.left) > 1)
                node = doubleWithRightChild(node);
            else
                node = rotateWithRightChild(node);
        node.height = Math.max(height(node.left), height(node.right)) + 1;
        return node;
    };


    var rotateWithLeftChild = function(node){
        var temp = node.left;
        node.left = temp.right;
        temp.right = node;
        node.height = Math.max(height(node.left), height(node.right)) + 1;
        temp.height = Math.max(height(temp.left), height(temp.right)) + 1;
        return temp;
    };

    var doubleWithLeftChild = function(node){
        node.left = rotateWithRightChild(node.left);
        return rotateWithLeftChild(node);
    };
    
    var rotateWithRightChild = function(node){
        var temp = node.right;
        node.right = temp.left;
        temp.left = node;
        node.height = Math.max(height(node.left), height(node.right)) + 1;
        temp.height = Math.max(height(temp.left), height(temp.right)) + 1;
        return temp;
    };
    
    var doubleWithRightChild = function(node){
        node.right = rotateWithLeftChild(node.right);
        return rotateWithRightChild(node);
    };

    var remove = function(node, elem) {
        if (node === null) {
            return false;
        }
        if (elem > node.elem) {
            if (node.right !== null && node.right.elem == elem)
                node.right = null;
            else
                node.right = balance(remove(node.right, elem));
        }
        else if (elem < node.elem) {
            if (node.left !== null && node.left.elem == elem)
                node.left = null;
            else
                node.left = balance(remove(node.left, elem));
        }

        return balance(node);
    }

    var insert = function(node, elem) {
        if (node === null) {
            return newNode(elem);
        }
        if (elem > node.elem) {
            node.right = insert(node.right, elem);
        }
        else if (elem < node.elem) {
            node.left = insert(node.left, elem);
        }
        else {
        }
        return balance(node);
    };

    var spaces = function(x) {
        return new Array(x+1).join("    ");
    };

    var print = function(node) {
        if (node === null) return;
        print(node.left);
        console.log(spaces(node.height) + node.elem);
        print(node.right);
        return node;
    };

    var find = function(node, elem) {
        var confirmed = false;
        var current = root;
        while (!confirmed) {
            if (current == null)
                return false;
            if (current.elem === elem)
                return true;
            if (elem > current.elem)
                current = current.right;
            else if (elem < current.elem)
                current = current.left;
        }
    };

    // public methods
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
        remove(root, element); 
    };

    // removes all the elements in the list
    avl.prototype.removeAll = function(elements) {

    };

    // returns if the tree has an element
    avl.prototype.contains = function(element) {
        return find(root,element);
    };

    // returns if the tree contains all these elements
    // this could be furhter optimized
    avl.prototype.containsAll = function(elements) {
    };

    // the tree has no elements
    avl.prototype.isEmpty = function() {
        return root === null;
    };

    // the number of elements in the tree
    avl.prototype.size = function() {
    };

    // the maximum hight of the tree
    avl.prototype.height = function() {
        return height(root);
    };

    avl.prototype.print = function() {
        return print(root);
    };

    // returns an array of every element
    avl.prototype.all = function() {

    };
    return avl;
}());

module.exports = avl;
