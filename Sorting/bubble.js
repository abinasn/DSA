function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr [j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([5,2,6,1,3,7]))