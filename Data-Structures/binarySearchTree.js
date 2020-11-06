class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root=this.root) {
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let curr = this.root;
        while (true) {
            if (val < curr.val) {
                if (!curr.left) {
                    curr.left = newNode;
                    break;
                }
                curr = curr.left;
            } else if (val > curr.val) {
                if (!curr.right) {
                    curr.right = newNode;
                    break;
                } 
                curr = curr.right;
            } else {
                return undefined;
            }
        }
    }

    contains(val) {
        if (!this.root) return false;

        let curr = this.root, found = false;
        while (curr && !found) {
            if (val < curr.val) {
                curr = curr.left;
            } else if (val > curr.val) {
                curr = curr.right;
            } else found = true;
        }

        return found;
    }
}

const tree = new BST();

tree.insert(10);
tree.insert(7);
tree.insert(13);
console.log(tree.insert(13))

console.log(tree.contains(71))