function capitalizeWords(words) {
    let res = [];
    if (words.length === 0) return [];
    
    res.push(words[0].toUpperCase())

    return [...res, ...capitalizeWords(words.slice(1))]
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']