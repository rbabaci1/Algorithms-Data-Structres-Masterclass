function memoizedFib(num, memo=null) {
    if (num <= 2) return 1;
    if (!memo) memo = {};

    if (!memo[num]) {
        memo[num] = (memoizedFib(num - 1, memo) + memoizedFib(num - 2, memo));
    }
    return memo[num];
}


console.log(memoizedFib(40));