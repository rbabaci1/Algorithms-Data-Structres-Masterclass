function reverse(s) {
    let reversedString = "";

    if (s.length === 1) return s;  
    return reverse(s.slice(1)) + s[0];
}

console.log(reverse("awesome"));