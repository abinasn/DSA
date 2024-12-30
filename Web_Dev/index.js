// Chain Calulator
class Calulator{
    constructor(value){
        this.value = value
    }

    add(){
        this.value += 5;
        return this;
    }

    subtract(){
        this.value -= 5;
        return this;
    }

    multiply(){
        this.value *= 5;
        return this;
    }

    divide(){
        this.value /= 5;
        return this;
    }

    getValue(){
        return this.value;
    }
}

const newCalulator = new Calulator(100);

console.log(newCalulator.add().subtract().divide().multiply().getValue());

