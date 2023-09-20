const arr = [8, 1, 6, 2, 9, 3, 5, 4, 7];
let count = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        };
    };
    return null;
};

console.log(`Position: ${linearSearch(arr, 4)}`);
console.log(`Count: ${count}`);
