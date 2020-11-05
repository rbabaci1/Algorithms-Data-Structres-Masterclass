class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) return undefined;

        let prevTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = prevTail.prev;
            this.tail.next = null; 
            prevTail.prev = null;
        }

        this.length--;
        return prevTail;
    }

    shift() {
        if (this.length === 0) return undefined;

        let prevHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = prevHead.next;
            this.head.prev = null;
        }

        this.length--;
        return {...prevHead, next: null};
    }

    unshift(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    get(position) {
        if (position < 0 || position >= this.length) return undefined;

        let curr = this.tail;
        if (this.length - position <= position) {
            for (let i = this.length - position; i > 1; i--) {
                curr = curr.prev;
            }
        } else {
            curr = this.head;
            for (let i = 0; i < position; i++) {
                curr = curr.next;
            }
        }

        return curr;
    }

    set(position, newVal) {
        let foundNode = this.get(position);

        if (foundNode) {
            foundNode.val = newVal;
            return true;
        }
        return false;
    }

    insert(position, val) {
        if (position < 0 || position > this.length) return false;
        if (position === 0) return !this.unshift(val);
        if (position === this.length) return !this.push(val);

        let newNode = new Node(val);
        let nextNode = this.get(position);
        let prevNode = nextNode.prev;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        newNode.next = nextNode;
        this.length++;

        return true;
    }

    remove(position) {
        if (position < 0 || position >= this.length) return false;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop();

        let nodeToRemove = this.get(position);
        let beforeNode = nodeToRemove.prev;
        let afterNode = nodeToRemove.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        this.length--;

        return {...nodeToRemove, next: null, prev: null};
    }
}

let list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)

// console.log(list.unshift("Rabah"))



// console.log(list.set(6, "rabah"))
// console.log(list.insert(7, "rabah"))

console.log(list.remove(3))
console.log(list.get(3))