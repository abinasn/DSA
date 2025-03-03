// function binarySearch(arr, key) {
//     let low = 0, high = arr.length - 1;

//     while (high >= low) {
//         const mid = low + Math.floor((high - low) / 2);
//         if (arr[mid] === key) return mid;
//         if (arr[mid] > key) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return -1;
// }


// function binarySearchWithRecursion(arr, low = 0, high = arr.length - 1, key) {
//     if (high < low) {
//         return -1;
//     }
//     let mid = low + Math.floor((high - low) / 2);
//     if (arr[mid] == key) return mid;
//     if (arr[mid] > key) {
//         return binarySearchWithRecursion(arr, low, mid - 1, key);
//     } else {
//         return binarySearchWithRecursion(arr, mid + 1, high, key)
//     }
// }

// // console.log(binarySearch([1, 2, 3, 4, 5], 4));
// // console.log(binarySearch([1, 2, 3, 4, 5], 40));


// // console.log(binarySearchWithRecursion([1, 2, 3, 4, 5], 0, 4, 4));
// // console.log(binarySearchWithRecursion([1, 2, 3, 4, 5], 0, 4, 40));

// console.log(binarySearch([1], 1))


// var hasSpecialSubstring = function(s, k) {
//     let i=0, j=0;
//     let set = new Set();
//     while(j<s.length){
//         if(s[i]!=s[j]){
//             i=j;
//             set.clear();
//         }
//         j++;
//         set.add(s[i]);
//         console.log(i, j)
//         if(j-i == k && set.size == 1 && s[j-1] !== s[j] && s[i-1] !== s[i]){
//             return true;
//         }
//     }
//     return false;
// };

// // console.log(hasSpecialSubstring("abc", 2));
// // console.log(hasSpecialSubstring("ccc", 2));
// // console.log(hasSpecialSubstring("a", 1));
// // console.log(hasSpecialSubstring("h", 1));
// // console.log(hasSpecialSubstring("aaabaaa", 3));
// console.log(hasSpecialSubstring("hfkh", 2))


var maxWeight = function (pizzas) {
    let map = new Map();
    for(let p of pizzas){
        map.set(p, (map.get(p) || 0) + 1);
    } 
    let sorted = [...map.entries()].sort((a, b) => b[0] - a[0]);
    let sum = 0, count = pizzas.length / 4, i=0;
    while(count > 0){
        if(sorted[i][1] <= 0){
            i++;
        }
        sum+=sorted[i][0];
        sorted[i][1]--;
        count--;
    }
    return sum;
};


console.log(maxWeight([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(maxWeight([2,1,1,1,1,1,1,1]));
console.log(maxWeight([1,2,3,4,5,6,7,8,9,10,11,12]));
console.log(maxWeight([5,2,2,4,3,3,1,3,2,5,4,2]))

