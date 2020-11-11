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

    removeVertex() {
        
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjancyList[vertex1] && this.adjancyList[vertex2]) {
            this.adjancyList[vertex1] = this.adjancyList[vertex1].filter(v => v !== vertex2);
            this.adjancyList[vertex2] = this.adjancyList[vertex2].filter(v => v !== vertex1);
        }
    }
}

const graph = new Graph();

graph.addVertex("oakland");
graph.addVertex("berkeley");
graph.addVertex("san_francisco");

graph.addEdge("oakland", "berkeley")
graph.addEdge("oakland", "san_francisco")
graph.addEdge("oakland", "alice")

graph.removeEdge("oakland", "berkeley")

console.log(graph.adjancyList);