function capitalizeFirst (arr) {
    let res = [];
    
    if (arr.length === 0) return res;
    
    res.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return [...res, ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(['car','taco','banana']))