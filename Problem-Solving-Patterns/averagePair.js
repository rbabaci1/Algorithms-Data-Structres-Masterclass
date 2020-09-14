function averagePair(arr, target){
let start = 0, end = arr.length - 1;

while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;

    if (avg === target) return true;
    else if (avg < target) {
        start++;
    } else {
        end--;
    }
}

return false;
}