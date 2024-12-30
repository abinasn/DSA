const solution = (array) => {
    let count =0;
    for(let i=0;i<array.length-1;i++){
        for(let j=0;j<array[i].length-1;j++){
            if(array[i][j] != array[i+1][j]){
                count++;
            }
            if(array[i][j] ==  array[i][j+1]){
                count++;
            }
        }
    }
    console.log(count);
}
solution(
    [[1],[2],[3]]
)