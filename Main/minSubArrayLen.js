var minSubArrayLen = function(nums, s) {
    let left = 0, sum = 0, res = Number.MAX_VALUE;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        while (sum >= s) {
            res = Math.min(res, i+1 - left);
            sum -= nums[left];
            left++;
        }
    }
    return res === Number.MAX_VALUE ? 0 : res;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))