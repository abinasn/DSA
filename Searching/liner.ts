function linerSearch(arr: number[], item:number): number{
    for(let i=0;i<arr.length;i++){
        if(arr[i] == item){
            return i;
        }
    }
    return -1;
}

console.log(linerSearch([1,2,3,4,5],44));