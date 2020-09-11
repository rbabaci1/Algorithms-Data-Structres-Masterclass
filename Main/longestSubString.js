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

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }