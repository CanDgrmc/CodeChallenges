class Node {
    value
    edges= []
    searched= false
    parent

    constructor(value) 
    { 
        this.value = value; 
    } 

    addEdge(neighbor){
        neighbor.edges.push(this)
        this.edges.push(neighbor)
    }
}

module.exports = Node