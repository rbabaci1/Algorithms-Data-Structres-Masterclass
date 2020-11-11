class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

// A priority queue implemented with a min binaryHeap
class PriorityQueue {
    constructor() {
        this.data = [];
    }

    bubbleUp() {
        let index = this.data.length - 1;
        let element = this.data[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.data[parentIndex];

            if (element.priority >= parent.priority) break;

            this.data[index] = parent;
            this.data[parentIndex] = element;
            index = parentIndex;
        }
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);

        this.data.push(node);
        this.bubbleUp();
    }

    sinkIn() {
        let element = this.data[0], length = this.data.length, currIdx = 0;

        while (true) {
            let leftIdx = 2 * currIdx + 1;
            let rightIdx = 2 * currIdx + 2;
            let leftChild = leftIdx < length ? this.data[leftIdx] : null;
            let rightChild = rightIdx < length ? this.data[rightIdx] : null, swap = false;

            if (leftChild && element.priority > leftChild.priority) {
                swap = leftIdx;
            }            
            if (rightChild) {
                if ((swap && rightChild.priority < leftChild.priority) || (!swap && rightChild.priority < element.priority)) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;
            this.data[currIdx] = this.data[swap];
            this.data[swap] = element;
            currIdx = swap;
        }
    }

    dequeue() {
        if (!this.data.length) return null;
        let min = this.data[0];
        let end = this.data.pop();

        if (this.data.length) {
            this.data[0] = end;
            this.sinkIn();
        }

        return min;
    }
}

const priorityQueue = new PriorityQueue();

priorityQueue.enqueue("common cold", 5);
priorityQueue.enqueue("gunshot", 1);
priorityQueue.enqueue("high fever", 4);
priorityQueue.enqueue("broken arm", 2);
priorityQueue.enqueue("glass in foot", 3);
priorityQueue.enqueue("same priority", 2);



console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())
console.log(priorityQueue.dequeue())

// console.log(priorityQueue.data)
