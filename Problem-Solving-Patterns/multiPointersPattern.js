function countUniqueValues(arr) {
    let count = 0, i = 0, j = 1;

    while (j < arr.length) {
        if (arr[j] !== arr[i]) {
            count++;
            i = j;
        }
        j++;
    }
    return i > 0 ? count + 1 : count;
}

console.log(countUniqueValues([1, 1, 3, 3, 4, 4]))