// const user = {
//     name: "Abinas",
//     loc: "BBSR",
//     os: "Ubuntu",
//     address:{
//         flat: "101F",
//         street: "S.Mansion",
//         dist: "Khurda"
//     },
//     arr:[
//         {id: 0, count: 0},
//         {id:1, count:1}
//     ]
// }

// const clone = structuredClone(user);

// clone.address.flat = "102F";
// clone.arr.forEach(c=>c.count++);
// console.log(user, clone)

// for (let key in user) {
//     console.log(key);
// }

// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };

// for (let code in codes) {
//     console.log(+code); // 49, 41, 44, 1
// }

// let id = Symbol.for("id");
// let user = {
//   name: "John",
//   age: 30,
//   [id]: 123
// };
// console.log(user[Symbol.for("id")])
// for (let key in user) console.log(key); // name, age (no symbols)

// // the direct access by the symbol works
// console.log( "Direct: " + user[id] );

// let o1 = {
//     name: "John",
//     age: 30
// }

// let o2 = {
//     name: "jane",
//     age: 20
// }
// o2[o1] = 123
// o2[{name: "qsd"}] = 341
// console.log(Number(o1), "123")

// const zero = new Number(0);
// if(zero) console.log("if");
// else console.log("else");

// let str = 1e-2;

// console.log(str);

// let num = 255;

// console.log(num.toString(16));

// console.log(255..toString(16))
// console.log((255).toString(16))

// let num = 1.26456; //round the number to 2 decimal
// console.log(Math.round(num*100) / 100);
// console.log(+num.toFixed(2));
// console.log(isFinite(0.1 + 0.2 + "ASD"));

// console.log( Number.isNaN(NaN) ); // true
// console.log( Number.isNaN("str" / 2) ); // true

// // Note the difference:
// console.log( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
// console.log( isNaN("str") );

// console.log( Number.isFinite(123) ); // true
// console.log( Number.isFinite(Infinity) ); // false
// console.log( Number.isFinite(2 / 0) ); // false

// // Note the difference:
// console.log( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
// console.log( isFinite("123") ); // true, because isFinite converts string "123" into a number 123

// console.log( parseInt('100px') ); // 100
// console.log( parseFloat('12.5em') ); // 12.5

// console.log( parseInt('12.3') ); // 12, only the integer part is returned
// console.log( parseFloat('12.3.4') ); // 12.3, the second point stops the reading
// console.log(parseInt('a123')) // NaN

// parseInt(string, radix)
// console.log( parseInt('0xff', 16) ); // 255
// console.log( parseInt('abc', 16) ); // 255, without 0x also works

// console.log( parseInt('2n9c', 36) ); // 123456

// let str = "stringify";
// const s = str.substr(2,6);
// console.log(str, s)

// let arr = [1, 2];

// let arrayLike = {
//   0: "something",
//   1: 2,
//   length: 2,
//   [Symbol.isConcatSpreadable]: true
// };

// console.log( arr.concat(arrayLike) );

// let obj = {
//     first: 2,
//     last: 5
// }

// obj[Symbol.iterator] = function(){
//     return{
//         first: this.first,
//         last: this.last,
//         next: function(){
//             if(this.first <= this.last){
//                 return {done: false, value: this.first++}
//             }else{
//                 return {done: true}
//             }
//         }
//     }
// }

// let obj = {
//     first: 1,
//     last: 5,

//     [Symbol.iterator](){
//         return this
//     },
//     next: function(){
//         if(this.first <= this.last){
//             return {done: false, value: this.first++}
//         }else{
//             return {done: true}
//         }
//     }
// }

// for(let v of obj){
//     console.log(v)
// }

// let str = "Hello";

// const itr = str[Symbol.iterator]();

// while(true){
//     const result = itr.next();
//     if(result.done) break;
//     console.log(result.value);
// }

// let arr = {
//     0: "Hello",
//     1: "World",
//     length: 2
// }

// console.log(Array.from(arr))

//Map and Set
// const map = new Map([
//     [1, "num"],
//     ["1", "str"],
//     [true, "bool"]
// ]);

// for(let key of map.keys()){
//     console.log(key)
// }
// for(let value of map.values()){
//     console.log(value)
// }
// for(let entry of map){
//     console.log(entry)
// }

// let obj={
//     name: "john",
//     age: 30
// }

// console.log(Object.entries(obj))

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map); // make a plain object (*)
// console.log(obj.orange); // 2

// let set = new Set(["oranges", "apples", "bananas"]);

// // for (let value of set) console.log(value);

// // the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   console.log(value, valueAgain, set);
// });

// let john = { name: "John" };
// const map = new WeakMap([
//     [john, "TEST"]
// ]);
// // john = null;
// console.log(map.has(john), map)
// for(let item in map){
//     console.log(item)
// }

// let prices = {
//     banana: 20,
//     apple: 30,
//     orange: 40
// }

// const doublePrices = Object.fromEntries(Object.entries(prices).map(ent=>[ent[0], ent[1]*2]));
// console.log(doublePrices) //{ banana: 40, apple: 60, orange: 80 }

// const queryString = "?name=John&age=30&city=NewYork";
// const urlParams = new URLSearchParams(queryString);
// const paramsObject = Object.fromEntries(urlParams);

// console.log(paramsObject); // { name: 'John', age: '30', city: 'NewYork' }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function sumSalaries(s){
//     return Object.entries(s).reduce((sum,curr)=>sum + curr[1], 0)
// }
// console.log(sumSalaries(salaries));

// const time = new Date("2025-01-14").getDay()
// console.log(time, new Date(time))

// let company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 1600
//     }],

//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],

//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };

// const sumSalaries = (depts) =>{
//     let sum = 0;
//     if(Array.isArray(depts)){
//         return depts.reduce((s,d)=>s+d.salary , 0);
//     }else{
//         for(let value of Object.values(depts)){
//             sum+=sumSalaries(value);
//         }
//     }
//     return sum;
// }

// console.log(sumSalaries(company))

// console.log([1,2,[3,[4,5]]].flat(Infinity));

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1
// console.log(counter()); // 2

/**
 * 1. No block scope for var.
 * 
 *  
if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);
 * 2. If var in declared with in a function then that variable can be accessible within that function scope.
 *      
function test() {
    if (Math.random() > 0.5) {
        var value = true;
    } else {
        var value = false;
    }
    console.log(value); // Works
}

test();
console.log(value) // Reference error
 * 3. in loop var also worked as a global variable.
 * 4. 
 */

// Ways to create IIFE (Immediately Invoked Function Expression)

// (function () {
//     console.log("Parentheses around the function");
// })();

// (function () {
//     console.log("Parentheses around the whole thing");
// }());

// !function () {
//     console.log("Bitwise NOT operator starts the expression");
// }();

// +function () {
//     console.log("Unary plus starts the expression");
// }();

// function hello(){
//     console.log("Hello");
//     hello.counter++;
// }
// hello.counter = 0;
// hello();
// hello();
// console.log(hello.counter)

// const indigo = {
//     name: "Indigo",
//     code: "IN",
//     bookings: [],
//     book(pName){
//         console.log(`Book a flight in ${this.name} for ${pName} from BLR to BBI.`);
//         this.bookings.push({name: pName})
//     }
// }

// const book = indigo.book;
// book.call(indigo, "Abinas") // take this and argument list
// book.apply(indigo, ["asdsa"]) // take this and arguments in array
// const bookBind = book.bind(indigo, "ASKS");
// bookBind()
// console.log(indigo)

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//         this.students.forEach((student) =>{
//             // Error: Cannot read property 'title' of undefined
//             console.log(this.title + ': ' + student);
//         });
//     }
// };

// group.showList();
// "use strict"
// let user = {
//     name: "abinas"
// }

// let desc = Object.defineProperty(user, "name", {writable: false});
// user.name = "sda"
// console.log(desc, user)

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; // (*)

// // we can find both properties in rabbit now:
// console.log(rabbit.eats, rabbit); // true (**)
// console.log(rabbit.jumps);


// class Parent{
//     showMessage(){
//         return "Message from parent";
//     }
// }

// const c = new Parent();
// console.log(typeof Parent)
// console.log(Parent === Parent.prototype.constructor);
// console.log(Parent.prototype.showMessage());
// console.log(Object.getOwnPropertyNames(Parent.prototype))

// var x = 1;
// {
//     console.log(x); // ReferenceError
//     const x = 2;
// }


// function createCounter(){
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }

// const c = createCounter();
// console.log(c());
// console.log(c());


// function debounce(fun, delay){
//     let timeId = null
    
//     return function(...args){
//         clearInterval(timeId);

//         timeId = setTimeout(()=>{
//             fun.apply(this, args)
//         }, delay)
//     }
// }

// // Without debouncing
// searchInput.addEventListener('input', function(e) {
//     searchAPI(e.target.value);
// });

// // With debouncing
// searchInput.addEventListener('input', debounce(function(e) {
//     searchAPI(e.target.value);
// }, 500));


//currying
// function sum(a,b,c){
//     return a+b+c;
// }

// //with currying
// function curryingSum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(curryingSum(12)(2)(3))


// function execute(callback){
//     setTimeout(()=>{
//         callback("Callback execute")
//     }, 2000)
// }

// execute((data)=>{
//     console.log(data);
// });


// function executeUsingPromise(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Resolved");
//         }, 1000)
//     })
// }

// executeUsingPromise().then(res=> console.log(res));

// const person = {
//     name: "John",
//     sayHi: function() {
//         console.log(this)
//         console.log("Hello " + this.name);
//     }
// }
// person.sayHi();
// const greet = person.sayHi;
// greet(); // Output: "Hi, undefined" because this is window object without strict mode. Because sayHi function is called without any context.


var maximumProduct = function(nums) {
    if(nums.length === 3){
        return nums[0] * nums[1] * nums[2];
    }
    let f = -Infinity, s= -Infinity, t = -Infinity, sm=Infinity, ssm=Infinity;
    for(let num of nums){
        if(f < num){
            t = s;
            s = f;
            f = num
        }else if (s < num){
            t = s;
            s = num
        }else if(t < num){
            t = num;
        }

        if(num < sm){
            ssm = sm;
            sm = num;
        }else if(num < ssm){
            ssm = num;
        }
    }
    return Math.max(f*s*t , f*sm*ssm);
};