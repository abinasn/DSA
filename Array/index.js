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

let arr1 = [1, 2, 3, 4, 5, NaN, null, undefined];
let arr = [1, 2, 3, 4, 5, 6]
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
// console.log([1,2,[3,4,[5,6, [7,8, [9,10]]]]].flat(Infinity)); //complete 1d


// Array.prototype.flatMap() //flat the array by only one level after executing the callback
// console.log(arr.flatMap(num => num === 2 ? [2, 2] : num == 3 ? [3, 3] : num));
// console.log(arr.map(x=>[x*2]));
// console.log(arr.flatMap(x=>[x*2]));

// Array.prototype.forEach() iterate the array with a callback(element, index, array)
// arr.forEach(a=>a*2)
// console.log(arr);

// Array.prototype.includes() 
// console.log(arr1.includes(2), arr1.includes(23), arr1.includes(NaN), arr1.includes(null), arr1.includes(undefined))

// Array.prototype.indexOf() // search the element using linear search and returns the index of the element else undefind. IndexOf can't search NaN, undefined and null can be searched
// console.log(arr1.indexOf(2), arr1.indexOf(null), arr1.indexOf(NaN), arr1.indexOf(undefined));


// Array.prototype.join() // concatenate all elements with a separator
// console.log(arr.join("\\")) // default join is ","

// Array.prototype.keys() // returns an iterator object, each  key represent an index
// for (const key of arr.keys()) {
//     console.log(key);
// }

// Array.prototype.lastIndexOf() // returns the last occurance element index
// console.log(arr.lastIndexOf(4))
// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));
// console.log(animals.lastIndexOf('Tiger'));

// Array.prototype.map() return a new array
// console.log(arr.map(a=>a*2))

// Array.prototype.pop() // remove the last element and returns that element
// console.log(arr.pop())

// Array.prototype.push() // add a new element in last and return new lentgh of the array
// console.log(arr.push(2), arr)

// Array.prototype.reduce() //default accumulator is arr[0]. callback(accumulator, currentValue, index, array) ltr
// console.log(arr.reduce((a,c) => a+c , 100))
// console.log([1].reduce((a, b) => Math.max(a, b), 100))

// Array.prototype.reduceRight() //default accumulator is arr[arr.length-1]. callback(accumulator, currentValue, index, array) rtl
// console.log(arr.reduceRight((a,c) =>a+c))

// Array.prototype.customReverse = function(){
//     let start = 0, end = this.length - 1;
//     while(start < end){
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//     }
//     return this
// }

// console.log(arr.customReverse());

// Array.prototype.shift() //removes the first element
// console.log(arr.shift(), arr)

// Array.prototype.slice(start, end) //creates a new array with start and end index
// console.log(arr.slice(1, -2), arr)

// Array.prototype.some()
// const even = (element) => element % 2 === 0;
// console.log(arr.some(even));

// Array.prototype.sort(callback) //
// console.log(arr.sort((a,b)=>b-a))

// Array.prototype.splice(start, deleteCount, ...items);
// console.log(arr.splice(1, 2, 34, 45, 5, 55), arr)

// Array.prototype.toLocaleString()
// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
// console.log(localeString)

// Array.prototype.toReversed = function(){
//     console.log(this)
//     let rev = [], l = this.length;
//     for(let i=l-1; i>=0; i--){
//         rev[l-1-i] = this[i]
//     }
//     return rev;
// }

// console.log(arr.toReversed())