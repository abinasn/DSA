function binarySearch(arr: number[], item: number): number{
    let low:number = 0;
    let high: number = arr.length - 1;

    while(low <= high){
        let mid = low + Math.floor(((high - low) / 2));
        if(arr[mid] == item){
            return mid;
        }

        if(arr[mid] > item){
            high = mid-1;
        }else{
            low = mid + 1;
        }
    }
    return -1;
}

function recursiveBinarySearch(arr:number[], low: number, high: number, item:number){
    if(low > high){
        return -1;
    }
    const mid = low + Math.floor(((high - low)/2));
    if(arr[mid] == item){
        return mid;
    }
    if(arr[mid] > item){
        return recursiveBinarySearch(arr, low, mid-1, item);
    }else{
        return recursiveBinarySearch(arr, mid+1, high, item);
    }
}
let arr = [1,2,3,4,5];
console.log(binarySearch(arr, 2));
console.log(recursiveBinarySearch(arr, 0, arr.length-1, 22));