class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.head) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let prev = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return prev;
        }

        let curr = prev.next;
        while (curr.next) {
            curr = curr.next;
            prev = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return curr;
    }
}

list = new SinglyLinkedList();

list.push(10)
list.push(9)
// list.push(8)
// list.push(7)

console.log(list.pop())
console.log(list.length)