function collectStrings(obj, strings=null, keys=null) {
    if (!strings) strings = [];
    if (!keys) keys = Object.keys(obj);
    
    if (keys.length === 0) return strings;

    if (typeof obj[keys[0]] === 'string') {
            strings.push(obj[keys[0]]);
    }
    if (typeof obj[keys[0]] === 'object' && obj[keys[0]]  !== null && !Array.isArray(obj[keys[0]])) {
            collectStrings(obj[keys[0]], strings);
    }
        
    return collectStrings(obj, strings, keys.slice(1));
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
};

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])