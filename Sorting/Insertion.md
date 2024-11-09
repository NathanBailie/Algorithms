# Insertion Sort

## Description

Insertion sort is a simple sorting algorithm that builds a sorted array one element at a time. The algorithm sequentially takes elements from the unsorted portion of the array and inserts them into their correct position in the sorted portion. This approach is similar to how people sort playing cards in their hands, placing each card in the correct position relative to the others.

## Time Complexity

- Worst case: **O(n²)**, where **n** is the number of elements in the array. This occurs when the array is sorted in reverse order.
- Average case: **O(n²)**.
- Best case: **O(n)** if the array is already sorted.

## Advantages

- Simple to implement.
- Suitable for small arrays.
- Efficient for nearly sorted arrays.
- Stable algorithm: identical elements retain their relative order.

## Disadvantages

- Slow for large arrays compared to more advanced algorithms like quick sort.
- Quadratic complexity in both average and worst cases.

## Use Cases

- Sorting small arrays.
- Situations where data arrives in real-time, and the array must be kept sorted, as each new element can be inserted directly into the sorted section.

## Code

```javascript
function insertionSort(array) {
	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j = i - 1;

		while (j >= 0 && array[j] > current) {
			array[j + 1] = array[j];
			j--;
		}
		array[j + 1] = current;
	}
	return array;
}
```
