class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }

    // push to the end of the list
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

    // remove from the end of the list
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

    // remove from the begining of the list
    shift() {
        if (!this.head) return undefined;
        if (this.length === 1) this.tail = null;

        let prevHead = this.head;
        this.head = prevHead.next;
        this.length--;

        return prevHead;
    }

    // add to the begining of the list
    unshift(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get the node at the given position
    get(position) {
        if (position < 0 || position >= this.length) return null;

        let counter = 0, curr = this.head;
        while (curr) {
            if (position === counter++) return curr;
            curr = curr.next;
        }
    }

    // set the node at the given position with the new val
    set(newVal, position) {
        if (position < 0 || position >= this.length) return null;

        let counter = 0, curr = this.head;
        while (position !== counter++) {
            curr = curr.next;
        }
        curr.val = newVal;
        return curr;
    }
}

list = new SinglyLinkedList();

list.push(10)
list.push(9)
list.push(8)
list.push(7)

// console.log(list.unshift(1))
console.log(list.set("rabah", 3))
// console.log(list.get(3))