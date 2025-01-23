function sentinalLinearSearch(arr, key) {
    const n = arr.length;
    let last = arr[n-1];
    arr[n-1] = key;
    let i=0;
    while(arr[i] != key){
        i++;
    }
    arr[n-1] = last;
    if((i<n-1) || (arr[n-1] == key)) return i;
    else return -1;
}

console.log(sentinalLinearSearch([1,2,3,4,5], 4))
console.log(sentinalLinearSearch([1,2,3,4,5], 40))