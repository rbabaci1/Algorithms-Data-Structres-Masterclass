function collectStrings(obj, strings=null) {
    if (!strings) strings = [];

    for (let key in obj) {
        if (typeof obj[key] === "string") {
            strings.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            return collectStrings(obj[key], strings);
        }
    }
    return strings;
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