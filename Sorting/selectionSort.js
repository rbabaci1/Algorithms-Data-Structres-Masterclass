function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[lowest]) {
                lowest = k;
            }
        }
        if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
    return arr
}

console.log(selectionSort([9, 4, 2, 1, 3, 0]))