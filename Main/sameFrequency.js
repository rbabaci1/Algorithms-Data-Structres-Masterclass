function sameFrequency(n1, n2){
    let s1 = n1.toString(), s2 = n2.toString()
    if (s1.length !== s2.length) return false;

    let temp1 = {}, temp2 = {}

    for (let i = 0; i < s1.length; i++) {
        temp1[s1[i]] = (temp1[s1[i]] || 0) + 1;
        temp2[s2[i]] = (temp2[s2[i]] || 0) + 1;
    }
    return JSON.stringify(temp1) === JSON.stringify(temp2)
}

console.log(sameFrequency(22, 222))