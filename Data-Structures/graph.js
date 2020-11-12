class Graph {
    constructor() {
        this.adjancyList = {};
    }

    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = [];
        } else return "Specified Vertex already exists.";
    }

    addEdge(vertex1, vertex2) {
        if (this.adjancyList[vertex1] && this.adjancyList[vertex2]) {
            this.adjancyList[vertex1].push(vertex2);
            this.adjancyList[vertex2].push(vertex1);
        }
    }

    removeVertex(vertex) {
        if (this.adjancyList[vertex]) {
            this.adjancyList[vertex].forEach(v => this.removeEdge(vertex, v));
            delete this.adjancyList[vertex];
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjancyList[vertex1] && this.adjancyList[vertex2]) {
            this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(v => v !== vertex2);
            this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(v => v !== vertex1);
        }
    }

    getNeighors(vertex) {
        return this.adjancyList[vertex];
    }

    DFTRecursive(startingVertex, visited=null) {
        if (!visited) visited = new Set();
        visited.add(startingVertex);

        this.adjancyList[startingVertex].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                this.DFTRecursive(neighbor, visited);
            }
        })
        return visited;
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
graph.addEdge("E", "F")
graph.addEdge("F", "A")
graph.addEdge("F", "B")

// graph.removeEdge("oakland", "berkeley")

// console.log(graph.adjancyList);
// graph.removeVertex("san_jose");
console.log(graph.adjancyList);

console.log(graph.DFTRecursive("A"))