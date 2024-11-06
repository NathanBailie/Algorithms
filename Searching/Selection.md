# Selection Sort

## Description

Selection sort is a simple sorting algorithm that divides the array into two parts: the sorted portion and the unsorted portion. On each iteration, the algorithm finds the minimum element from the unsorted part of the array and moves it to the end of the sorted portion. This process repeats until the entire array is sorted.

## Time Complexity

- Worst case: **O(n²)**, where n is the number of elements in the array.
- Average case: **O(n²)**.
- Best case: **O(n²)**, because the algorithm always goes through the entire array, even if it is already sorted.

## Advantages

- Simple to understand and implement.
- Does not require additional memory as sorting is performed in-place.
- Suitable for small arrays.

## Disadvantages

- Inefficient for large arrays due to quadratic time complexity.
- Not a stable algorithm: identical elements may change their relative order after sorting.
- Performs the same number of operations even on nearly sorted arrays.

## Use Cases

- Sorting small arrays where simplicity is more important than performance.
- Situations where minimal memory usage is required and stability is not important.

## Code

```javascript
function selectionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
		}

		if (minIndex !== i) {
			[array[i], array[minIndex]] = [array[minIndex], array[i]];
		}
	}

	return array;
}
```
