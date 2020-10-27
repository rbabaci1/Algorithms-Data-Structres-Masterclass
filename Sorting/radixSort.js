function getDigit(num, index) {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

function digitCount(num) {
    return num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(digits, maxDigits = 0) {
    digits.forEach(digit => {
        maxDigits = Math.max(maxDigits, digitCount(digit))
    });
    return maxDigits;
}

function radixSort(nums) {
    let numIterations = mostDigits(nums);

    for (let i = 0; i < numIterations; i++) {
        let buckets = new Array(10);

        nums.forEach((num, j) => {
            let index = getDigit(nums[j], i);

            if (!buckets[index]) buckets[index] = [];
            buckets[index].push(nums[j]);
        })

        for (let j = 0, k = 0; j < buckets.length; j++) {
            if (buckets[j]) {
                buckets[j].forEach(el => nums[k++] = el)
            }
        }
    }

    return nums;
}

console.log(radixSort([12, 111, 4, 71]))