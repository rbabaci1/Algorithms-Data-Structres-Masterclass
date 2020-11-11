class Graph {
    constructor() {
        this.adjancyList = {};
    }

    addVertex(vertex) {
        if (!this.adjancyList[vertex]) {
            this.adjancyList[vertex] = [];
        } else return "Vertext already exists!";
    }
}

const graph = new Graph();

graph.addVertex("rabah");

console.log(graph.adjancyList);