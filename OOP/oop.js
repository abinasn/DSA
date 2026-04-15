// class BankAccount {
//     constructor() {
//         this.balance = 1000
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     getBalance() {
//         return this.balance;
//     }

// }

// class StudentAccount extends BankAccount {
//     constructor(bal) {
//         super();
//         this.studentBalance = bal;
//     }
//     getBalance() {
//         return this.balance + this.studentBalance;
//     }
// }


// const account = new BankAccount();
// account.deposit(5000);
// console.log(account.getBalance());

// const studentAccount = new StudentAccount(10000);
// console.log(studentAccount.getBalance());

// class Animal {
//     speak() {
//         console.log("I am an Animal")
//     }
// }

// class Dog extends Animal {
//     speak() {
//         super.speak();
//         console.log("I am a Dog")
//     }

//     add(a, b) {
//         return a + b;
//     }

//     add(a, b, c) {
//         return a + b + c;
//     }
// }
// const dog = new Dog();
// dog.speak();
// console.log(dog.add(34, 45)); // JS doesn't support method overloading. It will result NaN
// console.log(dog.add(2, 3, 4))


// Mixin 1 — just an object with methods
// const CanSwim = {
//     swim() {
//         console.log(`${this.name} is swimming 🏊`);
//     }
// };

// const CanFetch = {
//     fetch() {
//         console.log(`${this.name} is fetching 🎾`);
//     }
// };

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating 🍕`);
//     }
// }

// class Dog extends Animal { }

// Object.assign(Dog.prototype, CanSwim, CanFetch);

// const dog = new Dog("Tommy");
// dog.eat();   // ✅ Tommy is eating 🍕
// dog.swim();  // ✅ Tommy is swimming 🏊
// dog.fetch(); // ✅ Tommy is fetching 🎾



// Composition
const canEat = {
    eat() {
        console.log(`${this.name} is eating 🍕`);
    }
};

const canFly = {
    fly() {
        console.log(`${this.name} is flying 🦅`);
    }
};

const canSwim = {
    swim() {
        console.log(`${this.name} is swimming 🏊`);
    }
};

// Compose Duck from abilities!
class Duck {
    constructor(name) {
        this.name = name;
        Object.assign(this, canEat, canFly, canSwim);
    }
}

// Compose Fish from abilities!
class Fish {
    constructor(name) {
        this.name = name;
        Object.assign(this, canEat, canSwim); // no fly!
    }
}

const duck = new Duck("Donald");
duck.eat();  // ✅ Donald is eating 🍕
duck.fly();  // ✅ Donald is flying 🦅
duck.swim(); // ✅ Donald is swimming 🏊

const fish = new Fish("Nemo");
fish.eat();  // ✅ Nemo is eating 🍕
fish.swim(); // ✅ Nemo is swimming 🏊
fish.fly();  // ❌ fish.fly is not a function