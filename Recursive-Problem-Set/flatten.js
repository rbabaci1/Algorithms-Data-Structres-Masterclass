function flatten(arrays) {
    let res = []

    for (let i = 0; i < arrays.length; i++) {
        if (Array.isArray(arrays[i])) {
            res = res.concat(flatten(arrays[i]))
        } else {
            res.push(arrays[i])
        }
    }
    return res;
}

console.log(flatten([1, 2, 3, [4, 5] ]))