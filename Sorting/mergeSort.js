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

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    return mergeTwoArrays(mergeSort(left), mergeSort(right))
}

// Iterative merge sort
// function mergeSort(arr) {
//     let res = [], i = 0

//     arr.forEach(el => res.push([el]))

//     while (res.length > 1) {
//         let left = res[i]
//         let right = res[i + 1]
        
//         if (left && right) {
//             res[i] = mergeTwoArrays(left, right)
//             res.splice(i + 1, 1)
//         }
//         i++;
        
//         if (i >= res.length) i = 0;
//     }

//     return res.length ? res[0] : res
// }

console.log(mergeSort([2, 3, 7, 1, 0, 4, 10, -1]))
