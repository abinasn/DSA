//All array methods

//Array.from()-------------------------------
/**
 * Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
 */


// console.log(Array.from("foo"));
// console.log(Array.from([1,2,3], (x)=> x*2));
// console.log(Array.from(new Set([1,2,3,4,1])))

let arr = [1, 2, 3, 4, 5];
//Array.prototype.at(index) //takes an integer of positive and negative
// console.log(arr.at(1), arr.at(-1))

//Array.prototype.concat(...arguments) // merge 2 arrays return new array. Doesn't change the original array
// console.log(arr.concat([1,2,3]), arr)

// Array.prototype.copyWithin(target, strat, end) 
// console.log(arr.copyWithin(0, 3)) // Paste at index 0 from 3rd position to onwards. [4,5] will come to beginning
// console.log(arr.copyWithin(0,3,4)); //[4]
// console.log(arr.copyWithin(-2, 0)) 

// Array.prototype.entries() //returns an iterator with key/value pair
// let it = arr.entries();
// console.log(it.next().value);
// console.log(it.next().value);

// for(let [index, element] of arr.entries()){
//     console.log(index, element)
// }

// Array.prototype.every(element, index, array) //check if array passes the condition/test. returns boolean
// console.log(arr.every(a=>a < 10));
// console.log(arr.every(a=>a > 10))

// Array.prototype.fill(value, start, end) // fill value from start to end, default complete array, returns updated array and changes the original array
// console.log(arr.fill(1)); //fill all position with 1
// console.log(arr.fill(1,2)); //fill 1 from position 2 to end of the array
// console.log(arr.fill(1, 1, 3)); //fill 1 to 3(exclusive) 

// Array.prototype.filter(Element, index, array) //create a new array on basis of test/condion;
// console.log(arr.filter(a=>a%2 == 0));
// console.log(arr.filter(a=>a%2 != 0));

// Array.prototype.find() // provides the first found element else undefined
// console.log(arr.find(a=>a>26));

// Array.prototype.findIndex() //provides the first index on basis of condition/test else -1
// console.log(arr.findIndex(a=>a==3), arr.findIndex(a=>a==9))

// Array.prototype.findLast() //opposite of find, it iterates the array in reverse order to find the first element on basis of condition
// Array.prototype.findLastIndex()//opposite of findIndex


// // Array.prototype.flat() //flat the array in 1d on basis of argument
// console.log([1,2,[3,4,[5,6, [7,8, [9,10]]]]].flat());
// console.log([1,2,[3,4,[5,6, [7,8, [9,10]]]]].flat(2));
// console.log([1,2,[3,4,[5,6, [7,8, [9,10]]]]].flat(3));
// console.log([1,2,[3,4,[5,6, [7,8, [9,10]]]]].flat(Infinity)); //complete 1D

