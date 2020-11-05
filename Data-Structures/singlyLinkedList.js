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

    // print the linked list
    print() {
        let res = "", curr = this.head;

        while (curr) {
            res  += (`${curr.val} -> `);
            curr = curr.next;
        }
        console.log(res + "N");
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
        let foundNode = this.get(position);

        if (foundNode) {
            foundNode.val = newVal;
            return true;
        }
        return false;
    }

    // insert the given node at the given position
    insert(newVal, position) {
        if (position < 0 || position > this.length) return false;
        if (position === 0) return !!this.unshift(newVal);
        if (position === this.length) return !!this.push(newVal);
            
        let newNode = new Node(newVal)
        let prevNode = this.get(position - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    // remove the node at the given index
    remove(position) {
        if (position < 0 || position >= this.length) return undefinedZAz;
        if (position === 0) return this.shift();
        if (position === this.length - 1) return this.pop()

        let prevNode = this.get(position - 1);
        let removed = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return removed;
    }

    // reverse the linked list
    reverse() {
        let curr = this.head, prev = null;
        this.head = this.tail
        this.tail = curr;

        for (let i = 0; i < this.length; i++) {
            let nextNode = curr.next;
            curr.next = prev;

            prev = curr;
            curr = nextNode;
        }
        return this;
    }
}

let list = new SinglyLinkedList();

list.push(100)
list.push(200)
list.push(300)
list.push(400)

// console.log(list.unshift(1))
// console.log(list.set("rabah", 3))
// console.log(list.insert("last", 4))
// console.log(list.remove(1))

console.log('before')
list.print()

list.reverse()

console.log('after')
list.print()