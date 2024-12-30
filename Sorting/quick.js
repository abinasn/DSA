function getPivotIndexAtEnd(arr, low, high) {
    var _a, _b;
    var pivot = arr[high];
    var i = low - 1;
    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
    }
    i++;
    _b = [arr[high], arr[i]], arr[i] = _b[0], arr[high] = _b[1];
    console.log(i);
    return i;
}
function getPivotIndexAtStart(arr, low, high) {
    var _a, _b;
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    var pivot = arr[low];
    var i = low;
    for (var j = low + 1; j <= high; j++) {
        if (arr[j] < pivot) {
            i++;
            _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
        }
    }
    _b = [arr[low], arr[i]], arr[i] = _b[0], arr[low] = _b[1];
    return i;
}
function quickSort(arr, low, high) {
    if (low === void 0) { low = 0; }
    if (high === void 0) { high = arr.length - 1; }
    if (low >= high) {
        return;
    }
    var pIdx = getPivotIndexAtStart(arr, low, high);
    quickSort(arr, low, pIdx - 1);
    quickSort(arr, pIdx + 1, high);
}
// function quickSortAtPivotFirst
var quickSortArr = [4, 3, 1, 2, 5, 9, 7, 10, 6];
quickSort(quickSortArr, 0, quickSortArr.length - 1);
console.log(quickSortArr);
