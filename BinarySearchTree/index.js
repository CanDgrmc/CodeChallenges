const {BinarySearchTree} = require('./BinarySearchTree')

// create an object for the BinarySearchTree 
var BST = new BinarySearchTree(); 
  
// Inserting 
BST.insert(27);
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
 
const root = BST.getRootNode()
BST.inorder(root)
console.log(root)