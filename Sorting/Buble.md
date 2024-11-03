# Bubble Sort

## Description

Bubble sort is a simple sorting algorithm that repeatedly steps through the array, comparing adjacent elements and swapping them if the previous element is greater than the next. In this way, the largest elements "bubble up" to the end of the array on each pass.

## Time Complexity

- Worst case: **O(n²)**, where **n** is the number of elements in the array. This occurs when the array is sorted in reverse order.

## Advantages

- Easy to implement.
- Suitable for small or nearly sorted arrays.
- Stable algorithm: identical elements retain their relative order.

## Disadvantages

- Very slow for large arrays.
- Inefficient for large data sets compared to more advanced algorithms like quicksort or mergesort.

## Use Cases

- Educational examples, as the algorithm is easy to understand and implement.
- Small arrays where performance is not critical.

## Code

```javascript
function bubbleSort(array) {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < array.length - 1; i++) {
			if (array[i] > array[i + 1]) {
				[array[i], array[i + 1]] = [array[i + 1], array[i]];
				swapped = true;
			}
		}
	} while (swapped);

	return array;
}
```
