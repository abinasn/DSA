function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }
    return arr;
}

console.log(bubbleSort([5,2,6,1,3,7]))