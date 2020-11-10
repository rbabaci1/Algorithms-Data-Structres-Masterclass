class MaxBinaryHeap {
    constructor() {
        this.values = [99, 33, 31, 22, 17, 9, 7, 1];
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
        let current = this.values[0], length = this.values.length, currentIdx = 0;

        while (true) {
            let leftIdx = 2 * currentIdx + 1;
            let rightIdx = 2 * currentIdx + 2, swap = false;

            let leftChild = leftIdx < length ? this.values[leftIdx] : null;
            let rightChild = rightIdx < length ? this.values[rightIdx] : null;

            if (leftChild && leftChild > current) {
                swap = leftIdx;
            }
            if (rightChild) {
                if ((swap && rightChild > leftChild) || (!swap && rightChild > current)) {
                    swap = rightIdx;
                }
            }

            if (!swap) break;

            this.values[currentIdx] = this.values[swap];
            this.values[swap] = current;
            currentIdx = swap;
        }
    }

    extractMax() {
        if (!this.values.length) return undefined;

        let max = this.values[0];
        let end = this.values.pop();

        if (this.values.length) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
}

let maxHeap = new MaxBinaryHeap();

// maxHeap.insert(39);

console.log(maxHeap.extractMax())
maxHeap.print()