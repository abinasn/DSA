function binarySearch(arr, item) {
    var low = 0;
    var high = arr.length - 1;
    while (low <= high) {
        var mid = low + Math.floor(((high - low) / 2));
        if (arr[mid] == item) {
            return mid;
        }
        if (arr[mid] > item) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}
function recursiveBinarySearch(arr, low, high, item) {
    if (low > high) {
        return -1;
    }
    var mid = low + Math.floor(((high - low) / 2));
    if (arr[mid] == item) {
        return mid;
    }
    if (arr[mid] > item) {
        return recursiveBinarySearch(arr, low, mid - 1, item);
    }
    else {
        return recursiveBinarySearch(arr, mid + 1, high, item);
    }
}
var arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 2));
console.log(recursiveBinarySearch(arr, 0, arr.length - 1, 22));
