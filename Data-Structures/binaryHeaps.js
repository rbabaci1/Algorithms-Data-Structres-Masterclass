class MaxBinaryHeap {
    constructor() {
        this.values = [20, 18, 17, 15, 14, 16, 13, 10, 9, 12, 5];
    }

    print() {
        console.log(this.values);
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let parentIdx = Math.floor((idx - 1) / 2);
        let element = this.values[idx], parent = this.values[parentIdx];

        while (parent < element) {
            this.values[idx] = parent;
            this.values[parentIdx] = element;

            idx = parentIdx, parentIdx = Math.floor((idx - 1) / 2);
            element = this.values[idx], parent = this.values[parentIdx];
        }
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    sinkDown() {
        let element = this.values[0], length = this.values.length;
        let currIndex = 0;

        while (true) {
            let leftIdx = 2 * currIndex + 1;
            let rightIdx = 2 * currIndex + 2;
            let leftChild, rightChild, swap = false;

            if (leftIdx < length) {
                leftChild = this.values[leftIdx];
                if (leftChild > element) {
                    swap = leftIdx;
                }
            } if (rightIdx < length) {
                rightChild = this.values[rightIdx];
                if ((swap && rightChild > leftChild) || (!swap && rightChild > element)) {
                    swap = rightIdx;
                } 
            }

            if (!swap) break;

            this.values[currIndex] = this.values[swap];
            this.values[swap] = element;
            currIndex = swap;
        }
    }

    extractMax() {
        if (!this.values.length) return undefined;

        let max = this.values[0];
        this.values[0] = this.values.pop();

        this.sinkDown();
        return max;
    }
}

let maxHeap = new MaxBinaryHeap();

// maxHeap.insert(39);

console.log(maxHeap.extractMax())
maxHeap.print()