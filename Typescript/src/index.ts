let number: Number = 12;
let course: String = "A";
let isPublished: Boolean = false;
const arr: Number[] = [1,2,3]; 
//Number value
for(let i=0;i<arr.length;i++){
    console.log("I",i);
}

function calculateTax(taxYear:number): boolean{
    return taxYear > 2022;
}

console.log(calculateTax(20245));

type User = {
    readonly id: number,
    name?: string,
    remote: (num: number) => Number
}

let user: User = {id:1, remote:(d)=> d};
user.name = "Abinas";
console.log(user.remote(123))