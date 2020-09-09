function isSubsequence(str1, str2) {
    let k = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1[k] === str2[i]) {
            k++;
        }
    }
    
    if (k === str1.length) return true;
    return false;
}