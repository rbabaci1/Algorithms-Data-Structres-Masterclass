function reverse(s) {
    let reversedString = ""

    if (s.length === 1) return s;     
    return reversedString.concat(reverse(s.slice(1))).concat(s[0])
}

console.log(reverse("awesome"));