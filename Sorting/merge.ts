function merge(arr: number[], left:number, mid: number, right: number): void{
    console.log("Before",arr, left, mid, right);
    let merged: number[] = [];
    let idx1: number = left;
    let idx2: number = mid+1;

    while(idx1<=mid && idx2<=right){
        if(arr[idx1] < arr[idx2]){
            merged.push(arr[idx1++]);
        }else{
            merged.push(arr[idx2++]);
        }
    }
    while(idx1<=mid){
        merged.push(arr[idx1++]);
    }
    while(idx2<=right){
        merged.push(arr[idx2++]);
    }
    for(let i=0,j=left;i<merged.length;i++,j++){
        arr[j] = merged[i];
    }
    console.log("After",arr, left, mid, right, merged);
    console.log("---------------------")
}

function mergeSort(arr: number[], left:number, right: number): void{
    if(left >= right){
        return;
    }
    const mid: number = left + Math.floor(((right - left) / 2));
    mergeSort(arr, left, mid);
    mergeSort(arr,mid+1, right);
    merge(arr, left, mid, right);
}

let mergeArr: number[] = [2, 4, 1, 3, 5];

mergeSort(mergeArr,0,4);
console.log(mergeArr);