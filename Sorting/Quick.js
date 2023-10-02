let array = [12, 8, 1, 14, 6, 2, 11, 9, 3, 15, 5, 12, 4, 7, 10];
let count = 0;

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    };

    // the middle element
    let pivot = arr[Math.floor(arr.length / 2)];

    // random element
    // let pivot = arr[Math.floor(Math.random() * arr.length)];

    let less = [];
    let equal = [];
    let greater = [];

    for (let element of arr) {
        count += 1;

        if (element < pivot) {
            less.push(element);
        } else if (element === pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        };
    };

    return [...quickSort(less), ...equal, ...quickSort(greater)];
};

console.log(quickSort(array))
console.log('count', count)

// Time Complexity - O(n log n)

// One of the fastest sorting algorithms and suitable for large data sets.