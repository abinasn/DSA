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

let str = "stringify";
const s = str.substr(2,6);
console.log(str, s)

