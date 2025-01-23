function binarySearch(arr, key) {
    let low = 0, high = arr.length - 1;

    while (high >= low) {
        const mid = low + Math.floor((high - low) / 2);
        if (arr[mid] === key) return mid;
        if (arr[mid] > key) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}


function binarySearchWithRecursion(arr, low = 0, high = arr.length - 1, key) {
    if (high < low) {
        return -1;
    }
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == key) return mid;
    if (arr[mid] > key) {
        return binarySearchWithRecursion(arr, low, mid - 1, key);
    } else {
        return binarySearchWithRecursion(arr, mid + 1, high, key)
    }
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
console.log(binarySearch([1, 2, 3, 4, 5], 40));


console.log(binarySearchWithRecursion([1, 2, 3, 4, 5], 0, 4, 4));
console.log(binarySearchWithRecursion([1, 2, 3, 4, 5], 0, 4, 40));