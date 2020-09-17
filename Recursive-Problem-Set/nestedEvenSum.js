function nestedEvenSum(obj) {
        let keys = Object.keys(obj);
        if (keys.length === 0) return 0;

        let current = obj[keys[0]];
        delete obj[keys[0]];

        if (typeof current === 'object' && current  !== null && !Array.isArray(current)) {
            return nestedEvenSum(Object.assign({}, current, obj));
        } else {
            if (typeof current !== 'number' || current % 2 !== 0) current = 0;
            return current + nestedEvenSum(obj);
        }
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  },
};

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10