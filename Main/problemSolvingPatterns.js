function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    return true;
}

console.log(validAnagram("anagram", "nagaram"))