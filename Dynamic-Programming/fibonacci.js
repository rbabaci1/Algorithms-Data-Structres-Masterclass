// Top - Down approach
function memoizedFib1(num, memo=null) {
    if (num <= 2) return 1;
    if (!memo) memo = {};

    if (!memo[num]) {
        memo[num] = (memoizedFib1(num - 1, memo) + memoizedFib1(num - 2, memo));
    }
    return memo[num];
}

// Bottom - Up approach
function memoizedFib2(num) {
    let fibs = [0, 1, 1];

    for (let i = 3; i <= num; i++) {
        let calc = fibs[i - 1] + fibs[i - 2];
        fibs.push(calc);
    }
    return fibs[num];
}


console.log(memoizedFib2(45));