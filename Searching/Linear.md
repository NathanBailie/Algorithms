# Linear Search

## Description

Linear search is a simple algorithm for finding a target element in an array. The algorithm sequentially checks each element in the array until it finds the target element or completes the array traversal.

## Time Complexity

Worst case: **O(n)**, where **n** is the number of elements in the array.

## Advantages

- Easy to implement.
- Suitable for small arrays or arrays where elements are unsorted.

## Disadvantages

- Slow on large arrays compared to other methods, such as binary search (if the array is sorted).
- Requires traversing all elements in the worst case.

## Use Cases

- Searching in small or unsorted data structures.
- Applicable when complex algorithms are unnecessary, or no sorting requirements are in place.

## Code

```javascript
function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) {
			return i;
		}
	}
	return null;
}
```
