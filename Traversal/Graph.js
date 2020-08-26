class Graph {
  
    nodes = []
    graph = {}
    end
    start
    
    addNode(n){
        this.nodes.push(n)
        this.graph[n.value] = n
        return n
    }

    getNode(n){
        return this.graph[n]
    }

    setStart(n){
        this.start = this.graph[n]
        return this.start
    }

    setEnd(n){
        this.end = this.graph[n]
        return this.end
    }

    
}

module.exports = Graph
