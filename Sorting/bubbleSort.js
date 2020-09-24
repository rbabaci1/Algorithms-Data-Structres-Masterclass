function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapOccured = false;
        for (let k = 0; k < arr.length - 1 - i; k++) {
            if (arr[k] > arr[k + 1]) {
                swapOccured = true;
                [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]]
            }
        }
        if (!swapOccured) break;
    }
    return arr
}

let array = [7, 1, 2, 3, 10]

console.log(bubbleSort(array))