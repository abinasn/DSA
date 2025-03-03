/**
 * 
 * @param {number[]} arr 
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = num;
  }
  return arr;
}

console.log(insertionSort([5, 2, 6, 1, 3, 7]))