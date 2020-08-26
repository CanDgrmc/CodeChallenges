const Graph = require('./Graph')
const Node = require('./Node')
const graph = new Graph()
const data = [{
        title: 'node-1',
        parts: [
            'node-part-1',
            'node-part-2',
            'node-part-3'
        ]
    },
    {
        title: 'node-2',
        parts: [
            'node-part-2'
        ]
    },
    {
        title: 'node-3',
        parts: [
            'node-part-3',
            'node-part-4'
        ]
    },
    {
        title: 'node-4',
        parts: [
            'node-part-4',
            'node-part-1'
        ]
    }

]

function setup() {


    for (let item of data) {
        const node = new Node(item.title)
        graph.addNode(node)

        for (let part of item.parts) {
            let partNode = graph.getNode(part) || new Node(part)
            graph.addNode(partNode)
            node.addEdge(partNode)
        }
    }

}

function bfs() {
    const queue = []
    const start = graph.setStart("node-part-1")

    start.searched = true
    queue.push(start)

    const end = graph.setEnd("node-part-4")

    while (queue.length > 0) {

        let current = queue.shift()
        if (current == end) {
            console.log(current.value)
            break
        }

        const edges = current.edges

        for (let edge of edges) {
            if (!edge.searched) {

                edge.searched = true
                edge.parent = current
                queue.push(edge)
            }
        }


    }

    const path = []
    path.push(end)
    let next = end.parent
    while (next != null) {
        path.push(next)
        next = next.parent
    }

    for (let i = path.length - 1; i >= 0; i--) {
        
        if (i > 0) {
            console.log(`${path[i].value} --->`)
        }else{
            console.log(path[i].value)
        }
    }

}

setup()
bfs()
