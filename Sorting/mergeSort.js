function mergeTwoArrays(arr1, arr2) {
    if (arr2[0] > arr1[arr1.length - 1]) return [...arr1, ...arr2]

    let i = 0,  k = 0, mergedArray = []
    while (i < arr1.length && k < arr2.length) {
        if (arr1[i] < arr2[k]) {
            mergedArray.push(arr1[i++])
        } else {
            mergedArray.push(arr2[k++])
        }

        if (i >= arr1.length) return [...mergedArray, ...arr2.slice(k)]
        if (k >= arr2.length) return [...mergedArray, ...arr1.slice(i)]
    }
}

console.log(mergeTwoArrays([2, 5, 6, 7], [1, 3, 9, 11]))