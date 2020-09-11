function findLongestSubstring(s){
    let i = 0,  k = 0, maxCount = 0, set_ = new Set();

    while (i < s.length && k < s.length) {
        if (!set_.has(s[k])) {
            set_.add(s[k++]);
            maxCount = Math.max(maxCount, k - i)
        }
        else {
            let val = set_.values().next().value;
            set_.delete(val)
            i++;
        }
    }
    return maxCount;
}

// function findLongestSubstring(s){
//     let i = 0,  k = 0, maxCount = 0, set_ = new Set();

//     while (i < s.length) {
//         if (!set_.has(s[i])) {
//             set_.add(s[i++]);
//             maxCount = Math.max(maxCount, set_.size);    
//         }
//         else {
//             while (s[k++] != s[i]) {
//                let val = set_.values().next().value;
//                set_.delete(val);
//             }
//             set_.delete(set_.values().next().value);
//         }
//     }
//     return maxCount;
// }


console.log(findLongestSubstring("thisishowwedoit"))