const Node = require('./Node')
class BinarySearchTree {
    
    constructor() 
    { 
        this.root = null; 
    } 

    insert(data){
        const newNode = new Node(data)
        
        if(this.root === null){
            this.root = newNode;
        } 
        else{
            this.insertNode(this.root, newNode); 
        }
    }

    insertNode(node, newNode) 
    { 
        if(newNode.data < node.data) 
        { 
            // if left is null insert node here 
            if(node.left === null) 
                node.left = newNode; 
            else
    
                // if left is not null recur until  
                // null is found 
                this.insertNode(node.left, newNode);  
        } 
    
        // if the data is more than the node 
        // data move right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
    
                // if right is not null recur until  
                // null is found 
                this.insertNode(node.right,newNode); 
        } 
    }
    
    remove(data) 
    { 
        // root is re-initialized with 
        // root of a modified tree. 
        this.root = this.removeNode(this.root, data); 
    } 
    
    removeNode(node, key) 
    { 
            
        if(node === null) 
            return null; 
    
        // if data to be delete is less than  
        // roots data then move to left subtree 
        else if(key < node.data) 
        { 
            node.left = this.removeNode(node.left, key); 
            return node; 
        } 
    
        // if data to be delete is greater than  
        // roots data then move to right subtree 
        else if(key > node.data) 
        { 
            node.right = this.removeNode(node.right, key); 
            return node; 
        } 
    
        // if data is similar to the root's data  
        // then delete this node 
        else
        { 
            // deleting node with no children 
            if(node.left === null && node.right === null) 
            { 
                node = null; 
                return node; 
            } 
    
            // deleting node with one children 
            if(node.left === null) 
            { 
                node = node.right; 
                return node; 
            } 
            
            else if(node.right === null) 
            { 
                node = node.left; 
                return node; 
            } 
    
            var aux = this.findMinNode(node.right); 
            node.data = aux.data; 
    
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        } 
    
    }
    
    search(node, data) 
    { 
        if(node === null) 
            return null; 
    
        // if data is less than node's data 
        // move left 
        else if(data < node.data) 
            return this.search(node.left, data); 
    
        // if data is less than node's data 
        // move left 
        else if(data > node.data) 
            return this.search(node.right, data); 
    
        // if data is equal to the node data  
        // return node 
        else
            return node; 
    }
    
    getRootNode(){
        return this.root
    }
    inorder(node) 
    { 
        if(node !== null) 
        { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    }
}

module.exports= {
    BinarySearchTree
}