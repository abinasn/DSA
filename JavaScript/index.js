/**
 * Chain calculator 
 * How would you implement a calculator class with methods for addition,
subtraction, and multiplication, supporting method chaining?
 */
class Calulator {
    constructor(value) {
        this.value = value
    }

    add() {
        this.value += 5;
        return this;
    }

    subtract() {
        this.value -= 5;
        return this;
    }

    multiply() {
        this.value *= 5;
        return this;
    }

    divide() {
        this.value /= 5;
        return this;
    }

    getValue() {
        return this.value;
    }
}
const newCalulator = new Calulator(100);
console.log(newCalulator.add().subtract().divide().multiply().getValue());

/**
 * Promises in sequence
 * How would you implement a function to execute an array of asynchronous tasks sequentially, collecting both resolved values and errors?
 *  
 */
function asyncTask() {
    const random = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => setTimeout(random > 5 ? resolve("Success!!") : reject("Value can't be less than 5"), 1000));
}

const taskList = [asyncTask, asyncTask, asyncTask, asyncTask, asyncTask];

async function executeTaskList() {
    const errors = [], results = [];
    for (let i = 0; i < taskList.length; i++) {
        try {
            const value = await taskList[i]();
            results.push(value);
        } catch (err) {
            errors.push(err);
        }
    }
    console.log(errors, results);
}

executeTaskList();

/**
 * Pipe and compose
 * 
 * Pipe
Create a pipe function that takes a series of functions and executes them
from left to right on an input value.
Compose
Create a compose function that takes a series of functions and executes them
from right to left on an input value
 *  
*/ 

const add = x => x+5;
const subtract = x => x - 2;
const multiply = x => x * 5;

function pipe(...fns){
    return function(x){
        return fns.reduce((result, fn)=>fn(result), x)
    }
}

function compose(...fns){
    return function(x){
        return fns.reduceRight((result, fn)=>fn(result), x);
    }
}

console.log(pipe(add, subtract, multiply)(5));
console.log(compose(add, subtract, multiply)(5));