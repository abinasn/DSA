function getPivotIndexAtEnd(arr:number[], low: number, high: number): number{
    let pivot:number = arr[high];
    let i:number = low-1;

    for(let j=low;j<high;j++){
        if(arr[j] < pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    i++;
    [arr[i], arr[high]] = [arr[high], arr[i]];
    console.log(i);
    return i;
}

function getPivotIndexAtStart(arr: number[], low:number=0, high:number=arr.length-1): number{
    let pivot:number = arr[low];
    let i:number = low;
    
    for(let j=low+1;j<=high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i], arr[low]] = [arr[low], arr[i]];
    return i;
}

function getPivotIndexAtRandomPosition(arr:number[], low:number, high:number, position:number): number{
    let pivot:number = arr[position];
    if(!pivot){
        return -1;
    }
    let i:number = low - 1;
    return i;

}

function quickSort(arr: number[], low:number = 0, high:number=arr.length-1): void{
    if(low >= high){
        return;
    }
    const pIdx = getPivotIndexAtStart(arr, low, high);
    quickSort(arr, low, pIdx-1);
    quickSort(arr, pIdx+1, high);
}

// function quickSortAtPivotFirst

let quickSortArr:number[] = [4,3,1,2,5,9,7,10,6];
quickSort(quickSortArr, 0, quickSortArr.length-1);
console.log(quickSortArr);
