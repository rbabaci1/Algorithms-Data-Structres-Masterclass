function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let end = i; end > 0 && arr[end] < arr[end- 1]; end-- ) {
            if (arr[end] < arr[end - 1]) {
                [arr[end - 1], arr[end]] = [arr[end], arr[end - 1]]
            }
        }
    }

    return arr;
}

console.log(insertionSort([2, 5, -1, 0, 3]))