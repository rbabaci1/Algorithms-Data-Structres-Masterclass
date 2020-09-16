function flatten(arrays) {
    let res = []
    if (arrays.length === 0) return res;
    
    if (Array.isArray(arrays[0])) {
      res = res.concat(flatten(arrays[0]))
    } else {
      res.push(arrays[0]);
    }
    
    return res.concat(flatten(arrays.slice(1)))
}

console.log(flatten([1, 2, 3, [4, 5] ]))