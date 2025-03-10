/**
 * @param {number[]} arr 
 */

function merge(arr, left, mid, right) {
  let merged = [], i = 0;
  let l = left, r = mid + 1;
  while (l <= mid && r <= right) {
    if (arr[l] < arr[r]) {
      merged[i++] = arr[l++];
    } else {
      merged[i++] = arr[r++];
    }
  }

  while (l <= mid) {
    merged[i++] = arr[l++];
  }

  while (r <= right) {
    merged[i++] = arr[r++];
  }
  for (let j = 0, k = left; j < i; j++, k++) {
    arr[k] = merged[j];
  }
  return arr;
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) {
    return;
  }
  let mid = left + Math.floor((right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  return merge(arr, left, mid, right);
}


console.log(mergeSort([5, 3, 1, 6, 10, 7]))
/**
 * 
 * 
 * // Initial state
STACK: []

// Main call
PUSH: mergeSort([5, 3, 1, 6, 3, 7], 0, 5)
STACK: [mergeSort(0,5)]

// Split left half
PUSH: mergeSort([5, 3, 1, 6, 3, 7], 0, 2)
STACK: [mergeSort(0,5), mergeSort(0,2)]

// Split left-left half
PUSH: mergeSort([5, 3, 1, 6, 3, 7], 0, 1)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(0,1)]

// Split left-left-left half
PUSH: mergeSort([5, 3, 1, 6, 3, 7], 0, 0)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(0,1), mergeSort(0,0)]

// Base case reached
POP: mergeSort([5, 3, 1, 6, 3, 7], 0, 0)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(0,1)]

// Split left-left-right half
PUSH: mergeSort([5, 3, 1, 6, 3, 7], 1, 1)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(0,1), mergeSort(1,1)]

// Base case reached
POP: mergeSort([5, 3, 1, 6, 3, 7], 1, 1)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(0,1)]

// Merge left-left half
PUSH: concat([5, 3, 1, 6, 3, 7], 0, 0, 1)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(0,1), concat(0,0,1)]

// Merge complete
POP: concat([5, 3, 1, 6, 3, 7], 0, 0, 1) -> [3, 5, 1, 6, 3, 7]
POP: mergeSort([5, 3, 1, 6, 3, 7], 0, 1) -> [3, 5, 1, 6, 3, 7]
STACK: [mergeSort(0,5), mergeSort(0,2)]

// Split left-right half
PUSH: mergeSort([3, 5, 1, 6, 3, 7], 2, 2)
STACK: [mergeSort(0,5), mergeSort(0,2), mergeSort(2,2)]

// Base case reached
POP: mergeSort([3, 5, 1, 6, 3, 7], 2, 2)
STACK: [mergeSort(0,5), mergeSort(0,2)]

// Merge left half
PUSH: concat([3, 5, 1, 6, 3, 7], 0, 1, 2)
STACK: [mergeSort(0,5), mergeSort(0,2), concat(0,1,2)]

// Merge complete
POP: concat([3, 5, 1, 6, 3, 7], 0, 1, 2) -> [1, 3, 5, 6, 3, 7]
POP: mergeSort([3, 5, 1, 6, 3, 7], 0, 2) -> [1, 3, 5, 6, 3, 7]
STACK: [mergeSort(0,5)]

// Split right half
PUSH: mergeSort([1, 3, 5, 6, 3, 7], 3, 5)
STACK: [mergeSort(0,5), mergeSort(3,5)]

// Split right-left half
PUSH: mergeSort([1, 3, 5, 6, 3, 7], 3, 4)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(3,4)]

// Split right-left-left half
PUSH: mergeSort([1, 3, 5, 6, 3, 7], 3, 3)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(3,4), mergeSort(3,3)]

// Base case reached
POP: mergeSort([1, 3, 5, 6, 3, 7], 3, 3)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(3,4)]

// Split right-left-right half
PUSH: mergeSort([1, 3, 5, 6, 3, 7], 4, 4)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(3,4), mergeSort(4,4)]

// Base case reached
POP: mergeSort([1, 3, 5, 6, 3, 7], 4, 4)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(3,4)]

// Merge right-left half
PUSH: concat([1, 3, 5, 6, 3, 7], 3, 3, 4)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(3,4), concat(3,3,4)]

// Merge complete
POP: concat([1, 3, 5, 6, 3, 7], 3, 3, 4) -> [1, 3, 5, 3, 6, 7]
POP: mergeSort([1, 3, 5, 6, 3, 7], 3, 4) -> [1, 3, 5, 3, 6, 7]
STACK: [mergeSort(0,5), mergeSort(3,5)]

// Split right-right half
PUSH: mergeSort([1, 3, 5, 3, 6, 7], 5, 5)
STACK: [mergeSort(0,5), mergeSort(3,5), mergeSort(5,5)]

// Base case reached
POP: mergeSort([1, 3, 5, 3, 6, 7], 5, 5)
STACK: [mergeSort(0,5), mergeSort(3,5)]

// Merge right half
PUSH: concat([1, 3, 5, 3, 6, 7], 3, 4, 5)
STACK: [mergeSort(0,5), mergeSort(3,5), concat(3,4,5)]

// Merge complete
POP: concat([1, 3, 5, 3, 6, 7], 3, 4, 5) -> [1, 3, 5, 3, 6, 7]
POP: mergeSort([1, 3, 5, 3, 6, 7], 3, 5) -> [1, 3, 5, 3, 6, 7]
STACK: [mergeSort(0,5)]

// Final merge
PUSH: concat([1, 3, 5, 3, 6, 7], 0, 2, 5)
STACK: [mergeSort(0,5), concat(0,2,5)]

// Final merge complete
POP: concat([1, 3, 5, 3, 6, 7], 0, 2, 5) -> [1, 3, 3, 5, 6, 7]
POP: mergeSort([1, 3, 5, 3, 6, 7], 0, 5) -> [1, 3, 3, 5, 6, 7]
STACK: []

// Final result: [1, 3, 3, 5, 6, 7]
 */