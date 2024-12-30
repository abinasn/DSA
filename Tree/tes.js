var calPoints = function(operations) {
    let stack = [],j=0
    for(let i=0;i<operations.length;i++){
        if(operations[i] === "C"){
            stack.pop();
            j--;
        }else if(operations[i] === "D"){
            stack.push(stack[j-1] * 2);
            j++;
        }else if(operations[i] === "+"){
            stack.push(stack[j-1] + stack[j-2]);
            j++
        }else{
            const val = parseInt(operations[i]);
            stack.push(val);
            j++;
        }
    }
    console.log(stack)
    return stack.reduce((acc,curr)=>acc+curr,0)
};


console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
// console.log(calPoints(["5","2","C","D","+"]));