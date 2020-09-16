function someRecursive(arr, cb){
     let isTrue = false;
     
     function helper(arr, cb) {
        if (arr.length === 1) return cb(arr[0]);
     
        isTrue = someRecursive(arr.slice(1), cb);
        return cb(arr[0]) ? cb(arr[0]) : isTrue;
     }
     
     return helper(arr, cb);
}

console.log(someRecursive([4, 1, 10], v => v > 10))