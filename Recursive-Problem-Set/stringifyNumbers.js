function stringifyNumbers(obj) {
    let res = Object.assign({}, obj);

    function r_helper(res, keys=null) {
        if (!keys) keys = Object.keys(res);
        if (keys.length === 0) return res;

        if (typeof res[keys[0]] === 'number') {
            res[keys[0]] = res[keys[0]].toString();
        }
        if (typeof res[keys[0]] === 'object' && res[keys[0]]  !== null && !Array.isArray(res[keys[0]])) {
            r_helper(res[keys[0]]);
        }
        
        return r_helper(res, keys.slice(1));
    }

    return r_helper(res);
}


let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));
