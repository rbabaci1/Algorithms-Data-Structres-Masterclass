function partition(arr, start=0, end=arr.length-1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            if (i !== swapIndex) {
                [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
            }
        }
    }
    
    if (start !== swapIndex) {
        [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]
    }
    
    return swapIndex;
}

function quickSort(arr, start=0, end=arr.length) {
    if (start < end) {
        let sortedPivot = partition(arr, start, end);
        
        quickSort(arr, start, sortedPivot - 1)
        quickSort(arr, sortedPivot + 1, end)
    }
    
    return arr;
}

console.log(quickSort([4, 3, 7, 2, 5, -1]))
// console.log(quickSort([1, 2, 3, 4, 5, 7]))