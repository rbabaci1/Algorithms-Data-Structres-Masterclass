class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enque(val) {
        let newNode = new Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }

        return ++this.size;
    }

    deque() {
        if (!this.first) return null;

        let removedNode = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = removedNode.next;

        this.size--;
        return removedNode.val;
    }
}

queue = new Queue();

queue.enque(1)
queue.enque(2)
queue.enque(3)

console.log(queue.deque())
console.log(queue.deque())
console.log(queue.deque())