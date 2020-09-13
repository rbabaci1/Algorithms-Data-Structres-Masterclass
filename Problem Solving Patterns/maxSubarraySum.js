function maxSubarraySum(arr, k){
    if (k > arr.length) return null;
    
    let maxSum = 0;
    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    
    let temp = maxSum;
    for (let j = k; j < arr.length; j++) {
        temp = temp - arr[j - k] + arr[j];
        maxSum = Math.max(maxSum, temp);
    }
    
    return maxSum;
}