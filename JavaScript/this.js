// const person = {
//     name: "Abinas",
//     greet: function () {
//         console.log(this.name);
//     },
//     arrowGreet: () => {
//         console.log(this.name);
//     }
// };

// person.greet(); // "Abinas"
// person.arrowGreet(); // undefined



// const person = {
//     name: "Abinas",
//     greet: function () {
//         setTimeout(function () {        // regular function inside
//             console.log(this.name);      // undefined
//         }, 1000);
//     }
// };

// person.greet();

// Because setTimeout is called by the browser — not by person
// So this inside setTimeout = browser (window), not person so this.name = undefined, as there is nothing called name in window object

// const person = {
//     name: "Abinas",
//     greet: function () {
//         setTimeout(() => {             // arrow function inside
//             console.log(this.name);      // ✅ "Abinas"
//         }, 1000);
//     }
// };

// person.greet();