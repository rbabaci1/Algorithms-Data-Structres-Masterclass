class MaxBinaryHeap {
    constructor() {
        this.values = [99, 40, 55, 33, 27, 19, 15];
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
}

let maxHeap = new MaxBinaryHeap();

maxHeap.insert(39);

maxHeap.print()