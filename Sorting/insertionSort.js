function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        for (var k = i - 1; k >= 0 && arr[k] > currentVal; k--) {
            arr[k + 1] = arr[k]
        }
        arr[k + 1] = currentVal
    }

    return arr;
}

console.log(insertionSort([2, 5, -1, 0, 3]))