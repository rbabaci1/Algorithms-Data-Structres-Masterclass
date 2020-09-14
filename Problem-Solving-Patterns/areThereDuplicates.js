function areThereDuplicates(...args) {
  args.sort()
  
  for (let i = 0; i < args.length - 1; i++) {
      if (args[i] === args[i + 1]) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 3, 4, 5, 4))