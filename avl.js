// an avl in javascript, only on ints for now
// maybe later allow you to pass a function to 
// compare your objects

var avl = (function () {

    var root;
    
    (function() {
        //construct

    }());



    return {
        
        // adds an element to the tree
        add: function(node) {

                },

        // adds an array of elements to the tree
        addAll: function(nodes) {

                },
        
        // clears the tree
        clear: function() {
                   root = null;
               },

        // removes an element
        remove: function(element) {
                    
                },
    
        // removes all the elements in the list
        removeAll: function(elements) {

                   },
        
        // returns if the tree has an element
        contains: function(element) {

                  },
        
        // returns if the tree contains all these elements
        containsAll: function(elements) {

                     },

        // the tree has no elements
        isEmpty: function() {
                     return root === null;
                 },
    
        // the number of elements in the tree
        size: function() {

              },

        // the maximum hight of the tree
        height: function() {

                },
        
        // returns an array of every element
        all: function() {
                

             }
    };
}());
