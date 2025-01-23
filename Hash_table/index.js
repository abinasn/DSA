class HashTable {
    constructor(length) {
        this.table = new Array(length);
        this.size = 0;
        for (let i = 0; i < this.table.length; i++) {
            this.table[i] = [];
        }
    }

    hash(key) {
        let c = 0;
        for (let i = 0; i < key.length; i++) {
            c += key.charCodeAt(i)
        }
        return c % this.table.length;
    }

    set(key, value) {
        const hashKey = this.hash(key);
        for (let i = 0; i < this.table[hashKey].length; i++) {
            if (this.table[hashKey][i][0] === key) {
                this.table[hashKey][i][1] = value;
                return;
            }
        }
        this.table[hashKey].push([key, value]);
        this.size++;
    }

    get(key) {
        const hashKey = this.hash(key);
        for (let i = 0; i < this.table[hashKey].length; i++) {
            if (this.table[hashKey][i][0] === key) {
                return this.table[hashKey][i][1];
            }
        }
        return null;
    }

    remove(key) {
        const hashKey = this.hash(key);
        for (let i = 0; i < this.table[hashKey].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    display() {
        console.log(this.table);
    }
}


const ht = new HashTable(10);

ht.set("Name", "Abinas");
ht.set("Another Name", "Anil");
ht.set("Loc", "BBSR");


console.log(ht.get("Another Name"), ht.get("Loc"));
console.log(ht.display())