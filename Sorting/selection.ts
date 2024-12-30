function selectionSort(arr: number[]): void{
    for(let i=0;i<arr.length;i++){
        let index = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[index] > arr[j]){
                index = j; 
            }
        }
        if(index !== i){
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    }
    console.log(arr);
}

function selectionSortWithBothLoopRecursion(arr: number[],i: number=0,j:number=i+1, minIndex:number=i){
    if(i>=arr.length-1){
        console.log(arr);
        return arr;
    }
    if(j<arr.length){
        if(arr[minIndex] > arr[j]){
            minIndex = j;
        }
        return selectionSortWithBothLoopRecursion(arr, i, j+1, minIndex);
    }
    if(minIndex !== i){
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
    let it = i+1;
    return selectionSortWithBothLoopRecursion(arr,it,it+1,it);
}
let selectionArr: number[] = [4,1,5,6,2,0];
// selectionSort(a);
selectionSortWithBothLoopRecursion(selectionArr);