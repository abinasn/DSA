function insertionSort(arr: number[]): void{
    for(let i=1;i<arr.length;i++){
        let curr = arr[i];
        let j=i-1;
        while(j>=0 && curr < arr[j]){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;    
    }
    console.log(arr);
}

insertionSort([7,8,3,1,2])