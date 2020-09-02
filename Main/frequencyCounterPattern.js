function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let store = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        store[letter] = (store[letter] || 0) + 1
    }
    for (let j = 0; j < str2.length; j++) {
        let letter = str2[j]
        if (!store[letter]) {
            return false;
        }
        store[letter] -= 1;
    }

    return true;
}

console.log(validAnagram("anagram", "nagaram")) // true
console.log(validAnagram("rat", "car")) // false