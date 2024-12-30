function bubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var swapped = false;
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped) {
            break;
        }
    }
    console.log(arr);
}
function bubbleSortWithRecursive(arr, i, j) {
    var _a;
    if (i === void 0) { i = 0; }
    if (j === void 0) { j = 0; }
    if (i >= arr.length - 1) {
        console.log(arr);
        return;
    }
    if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
        _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
    }
    if (j < arr.length - 1) {
        return bubbleSortWithRecursive(arr, i, j + 1);
    }
    return bubbleSortWithRecursive(arr, i + 1, 0);
}
var bubbleArr = [5, 2, 7, 34, 6];
bubbleSortWithRecursive(bubbleArr);
