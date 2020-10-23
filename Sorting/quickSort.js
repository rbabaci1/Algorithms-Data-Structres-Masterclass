function partition(arr, start=0, end=arr.length) {
    let pivot = arr[start];
    let swapIndex = start

    for (let i = start + 1; i < end; i++) {
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
    
    return swapIndex
}

function quickSort(arr, start=0, end=arr.length) {
    if (start >= end) return;

    let sortedPivot = partition(arr, start, end)
    
    quickSort(arr, start, sortedPivot)
    quickSort(arr, sortedPivot + 1)

    return arr
}

console.log(quickSort([4, 8, 1, 3]))