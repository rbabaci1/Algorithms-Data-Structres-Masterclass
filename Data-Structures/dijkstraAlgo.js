class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// A priority queue implemented with a min binaryHeap
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];

            if (element.priority >= parent.priority) break;

            this.values[index] = parent;
            this.values[parentIndex] = element;
            index = parentIndex;
        }
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);

        this.values.push(node);
        this.bubbleUp();
    }

    sinkIn() {
        let element = this.values[0], length = this.values.length, currIdx = 0;

        while (true) {
            let leftIdx = 2 * currIdx + 1;
            let rightIdx = 2 * currIdx + 2;
            let leftChild = leftIdx < length ? this.values[leftIdx] : null;
            let rightChild = rightIdx < length ? this.values[rightIdx] : null, swap = false;

            if (leftChild && element.priority > leftChild.priority) {
                swap = leftIdx;
            }            
            if (rightChild) {
                if ((swap && rightChild.priority < leftChild.priority) || (!swap && rightChild.priority < element.priority)) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;
            this.values[currIdx] = this.values[swap];
            this.values[swap] = element;
            currIdx = swap;
        }
    }

    dequeue() {
        if (!this.values.length) return null;
        let min = this.values[0];
        let end = this.values.pop();

        if (this.values.length) {
            this.values[0] = end;
            this.sinkIn();
        }
        return min;
    }
}

///////////////////////////////////////////////////////////////////////////

class WeightedGraph {
    constructor() {
        this.adjancyList = {};
    }

    addVertex(vertex) {
        if (vertex in this.adjancyList) {
            return "Specified Vertex already exists.";
        } this.adjancyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        if (this.adjancyList[vertex1] && this.adjancyList[vertex2]) {
            this.adjancyList[vertex1].push({node: vertex2, weight});
            this.adjancyList[vertex2].push({node: vertex1, weight});
        }
    }
    // It uses the Dijkstra's algorithm
    getShortestPath(start, target) {
        if (!this.adjancyList[start] || !this.adjancyList[target]) return null;

        let distances = {}, vertices = new PriorityQueue(), previous = {};

        for (let vertex in this.adjancyList) {
            (start === vertex) ? distances[vertex] = 0 : distances[vertex] = Infinity;
            vertices.enqueue(vertex, distances[vertex]);
            previous[vertex] = null;
        }

        while (vertices.values.length) {
            let smallest = vertices.dequeue().val;

            if (smallest === target) {
                let shortestPath = [];
                while (smallest) {
                    shortestPath.unshift(smallest);
                    smallest = previous[smallest];
                }
                return shortestPath;
            }

            this.adjancyList[smallest].forEach(neighbor => {
                let currDist = distances[smallest];
                let neighborName = neighbor.node;
                let distToNeighbor = currDist + neighbor.weight;

                if (distToNeighbor < distances[neighborName]) {
                    distances[neighborName] = distToNeighbor;
                    previous[neighborName] = smallest;
                    vertices.enqueue(neighborName, distToNeighbor);
                }
            });
        }
    }
}

let g = new WeightedGraph();
let q = new PriorityQueue();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.getShortestPath("A", "E"))