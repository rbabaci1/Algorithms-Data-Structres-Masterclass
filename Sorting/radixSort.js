function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(digits, maxDigits = 0) {
    digits.forEach(digit => {
        maxDigits = Math.max(maxDigits, digitCount(digit));
    });
    return maxDigits;
}

function radixSort(nums) {
    let maxDigits = mostDigits(nums);

    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({length: 10}, () => []);

        nums.forEach((num, j) => {
            let digit = getDigit(nums[j], i);
            buckets[digit].push(nums[j]);
        });
        nums = [].concat(...buckets);
    }

    return nums;
}

console.log(radixSort([12, 111, 4, 71]))