let array = [12, 8, 1, 14, 6, 2, 11, 9, 3, 15, 5, 12, 4, 7, 10];
let count = 0;

function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
            count += 1;
        };

        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        };
    };

    return array;
};


console.log(selectionSort(array))
console.log('count', count)

// Time Complexity - O(n^2)

// Due to the quadratic time complexity, the algorithm is only applicable on small data sets