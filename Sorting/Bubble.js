const array = [8, 1, 6, 2, 9, 3, 5, 4, 7];
let count = 0;

function bubbleSort(arr) {
    let arrLength = arr.length;
    let swapped = true;;

    while (swapped) {
        swapped = false;
        count += 1;

        for (let i = 0; i < arrLength - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            };
        };
    };
    return arr;
};

console.log(bubbleSort(array));
console.log(`Count: ${count}`);

// Time Complexity - O(n^2)

// The algorithm is only useful for small data sets