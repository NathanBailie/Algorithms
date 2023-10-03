const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);

        if (arr[middle] === target) {
            found = true;
            return middle;
        };

        if (target < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        };
    };

    return position;
}

console.log(`Position: ${binarySearch(array, 10)}`);
console.log(`Count: ${count}`);

function recursiveBinarySearch(arr, target, start, end) {
    let middle = Math.floor((start + end) / 2);
    count += 1;

    if (target === arr[middle]) {
        return middle;
    };

    if (target < arr[middle]) {
        return recursiveBinarySearch(arr, target, start, middle - 1);
    } else {
        return recursiveBinarySearch(arr, target, middle + 1, end);
    };
};

console.log(`Position: ${recursiveBinarySearch(array, 6, 0, array.length)}`);
console.log(`Count: ${count}`);

// Time Complexity - O(log n)

// One of the most efficient search algorithms. However, it requires the data to be sorted.
