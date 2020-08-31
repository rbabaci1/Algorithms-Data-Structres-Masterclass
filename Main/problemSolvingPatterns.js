function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let count1 = {};
    let count2 = {};

    for (let i = 0; i < str1.length; i++) {
        count1[str1[i]] = (count1[str1[i]] || 0) + 1
    }
    for (let i = 0; i < str2.length; i++) {
        count2[str2[i]] = (count2[str2[i]] || 0) + 1
    }

    for (let key in count1) {
        if (!(count1[key]) in count2 || count1[key] !== count2[key]) {
            return false
        }
    }

    return true;
}

console.log(validAnagram("anagram", "nagaram")) // true
console.log(validAnagram("rat", "car")) // false