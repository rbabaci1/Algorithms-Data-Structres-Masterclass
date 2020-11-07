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
        return found ? curr : false;
    }

    BFT() {
        if (!this.root) return undefined;

        let queue = [this.root], data = [];
        while (queue.length) {
            let currNode = queue.shift();
            data.push(currNode.val);

            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        
        return data;
    }

    DFT(root=this.root, data=null) {
        if (!this.root) return undefined;
        if (!data) data = [];

        data.push(root.val);
        
        if (root.left) this.DFT(root.left, data);
        if (root.right) this.DFT(root.right, data);

        return data;
    }
}

const tree = new BST();

tree.insert(10);
tree.insert(7);
tree.insert(13);
tree.insert(8);
tree.insert(5);
tree.insert(15);

// console.log(tree.contains(7))

/* BFT     
        10
       /  \
      7    13       
     / \     \
    5   8     15
*/

// console.log(tree.BFT())
console.log(tree.DFT())