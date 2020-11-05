class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    pop() {
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

stack = new Stack();

stack.push(1)
stack.push(2)
stack.push(13)

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())