function bubbleSort(arr: number[]): void{
    for(let i=0;i<arr.length;i++){
        let swapped: boolean = false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    console.log(arr);
}

function bubbleSortWithRecursive(arr: number[], i:number=0, j:number=0): void{
    if(i >= arr.length-1){
        console.log(arr);
        return;
    }
    if(j < arr.length-1 && arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
    if(j<arr.length-1){
        return bubbleSortWithRecursive(arr, i, j+1);
    }
    return bubbleSortWithRecursive(arr, i+1, 0);
}

let bubbleArr: number[] = [5,2,7,34,6];
bubbleSortWithRecursive(bubbleArr)