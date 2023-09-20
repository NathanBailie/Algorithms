const array = [8, 1, 6, 2, 9, 3, 5, 4, 7];
let count = 0;

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === target) {
            return i;
        };
    };
    return null;
};

console.log(`Position: ${linearSearch(array, 4)}`);
console.log(`Count: ${count}`);

// Time Complexity - O(n)

// The algorithm is independent of the order of the elements, but is only efficient for small data sets.
