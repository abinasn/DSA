// print numbers
function printNumbers(n){
    if(n==6){
        return;
    }
    console.log(n);
    printNumbers(n+1);
}

function getSumOfNumbers(n, sum){
    if(n == 5){
        console.log(sum+n);
        return;
    }
    sum += n;
    getSumOfNumbers(n+1, sum);
}

function getFactorial(n, fact){
    if(n==1 || n==0){
        console.log(fact);
        return;
    }
    fact *= n;
    getFactorial(n-1, fact);
}

function getFibonacci(a,b,n){
    if(n==10){
        return;
    }
    let c = a + b;
    console.log(c);
    getFibonacci(b,c,n+1);
}

function getXpowerN(x,n,val){
    if(n==0){
        console.log(val);
        return;
    }
    if(x==0){
        console.log(val);
        return;
    }
    val = val * x;
    getXpowerN(x,n-1,val);

}

function getXpowerNLogn(x,n){
    if(n==0){
        return 1;
    }
    if(x==0){
        return 0;
    }
    if(n%2 == 0){
        return getXpowerNLogn(x, parseInt(n/2)) * getXpowerNLogn(x, parseInt(n/2));
    }else{
        return x * getXpowerNLogn(x,parseInt(n/2)) * getXpowerNLogn(x, parseInt(n/2));
    }

}

function towerOfHanoi(n, source, helper, destination){
    if(n==1){
        console.log(`OKAY Transfered disk ${n} from ${source} to ${destination}`);
        return;
    }
    towerOfHanoi(n-1, source, destination, helper);
    console.log(`Transfered disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n-1, helper, source, destination);
}

function reverseString(index, str, reverse){
    if(index==-1){
        console.log(reverse);
        return;
    }
    reverse += str[index];
    reverseString(index-1, str,reverse);
}

function firstLastOccurance(str, index, char, first, last){
    if(index == str.length){
        console.log(`First ${first} & Last ${last}`);
        return;
    }
    const curr = str[index];
    if(curr == char){
        if(first == -1){
            first = index;
        }else {
            last = index;
        }
    }
    firstLastOccurance(str, index+1, char, first, last);
}

function checkIfArrSorted(arr, index){
    if(index == arr.length - 1){
        return true;
    }
    if(arr[index]<arr[index+1]){
        return false;
    }
    return checkIfArrSorted(arr, index+1);
}

function moveAllX(str, index, count, newStr){
    if(index == str.length){
        for(let i=0;i<count;i++){
            newStr+="x";
        }
        console.log(newStr);
        return;
    }
    const curr = str[index];
    if(curr == 'x'){
        count++;
    }else{
        newStr+=curr;
    }
    moveAllX(str, index+1, count, newStr);
}

function removeDuplicates(str, index, newStr){
    if(index === str.length){
        console.log(newStr);
        return;
    }
    const curr = str[index];
    if(!newStr.includes(curr)){
        newStr += curr;
    }

// console.log('z'.charCodeAt(0) - 'a'.charCodeAt(0)); create an array of size 26 with all value false
    removeDuplicates(str, index+1, newStr);
}

// printNumbers(1);
// getSumOfNumbers(1, 0);
// getFactorial(5,1)
// console.log(0);
// console.log(1);
// getFibonacci(0, 1, 2);

// console.log(getXpowerNLogn(2,5))
// towerOfHanoi(4, "S", "H", "D");
// reverseString(3, "abcd", "");
// firstLastOccurance("wasabdcdah", 0, 'a', -1, -1);
// console.log(checkIfArrSorted([1,2,3,4,5,5], 0))
// moveAllX("axbcxxd", 0, 0, "");
removeDuplicates("abbccda", 0, "");