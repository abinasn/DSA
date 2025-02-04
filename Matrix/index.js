class Matrix {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.array = Array.from({ length: row }, () => Array.from({ length: col }, () => Math.floor(Math.random() * 20) + 1));
    }


    showArr() {
        let str = "";
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                str += `${this.array[i][j]} `
            }
            str += "\n"
        }
        return str.trim();
        // return this.array.map(row => row.join(' ')).join('\n');

    }

    linearSearch(key) {
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.col; j++) {
                if (this.array[i][j] === key) {
                    return [i, j];
                }
            }
        }
        return [-1, -1]
    }

    maxRowSum() {
        let max = -Infinity;
        for (let i = 0; i < this.row; i++) {
            let sum = 0;
            for (let j = 0; j < this.col; j++) {
                sum += this.array[i][j];
            }
            max = Math.max(max, sum);
        }
        return max;
    }

    maxColumnSum() {
        let max = -Infinity;
        for (let i = 0; i < this.row; i++) {
            let sum = 0;
            for (let j = 0; j < this.col; j++) {
                sum += this.array[j][i]
            }
            max = Math.max(max, sum);
        }
        return max;
    }

    //For diagonal sum matrix should be square.
    diagonalSum() { // O(n^2)
        // let sum = 0;
        // for (let i = 0; i < this.row; i++) {
        //     for (let j = 0; j < this.col; j++) {
        //         if(i==j || j == this.row - i - 1) {
        //             sum+= this.array[i][j];
        //         }
        //     }
        // }
        // return sum;
        let sum = 0;
        for(let i=0;i<this.row;i++){
            sum+= this.array[i][i];
            if(i!=this.row - i - 1){
                sum+=this.array[i][this.row-i-1];
            }
        }


    }
}

const mat = new Matrix(3, 3);

console.log(mat.showArr());
console.log(mat.linearSearch(10), mat.linearSearch(100));
console.log(mat.maxRowSum())
console.log(mat.maxColumnSum())
console.log(mat.diagonalSum())
