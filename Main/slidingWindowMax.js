function slidingWindowMax(arr, k) {
    if (k > arr.length) {
        return;
    }
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    let tempMaxSum = maxSum;
    for (let j = k; j < arr.length; j++) {
        tempMaxSum = tempMaxSum - arr[j - k] + arr[j];
        maxSum = Math.max(tempMaxSum, maxSum);
    }
    return maxSum;
}

console.log(slidingWindowMax([2, 6 , 9, 2, 1, 8, 5, 6, 3], 3))