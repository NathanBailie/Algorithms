# Binary Search

## Description

Binary search is an efficient algorithm used to find a target element in a sorted array. The algorithm works by dividing the array in half on each step and checking whether the target element is in the left or right half. This process repeats until the target element is found or no elements are left to check.

## Time Complexity

- Worst case: **O(log n)**, where n\*\* is the number of elements in the array.

## Advantages

- Highly efficient for large sorted arrays.
- Significantly reduces the number of checks by dividing the array in half at each step.

## Disadvantages

- Requires the array to be sorted.
- Not ideal for small arrays, where linear search may be more efficient due to its simplicity.

## Use Cases

- Fast search in large, sorted arrays or data structures.
- Useful in systems where search optimization is crucial, such as databases or search engines.

## Code

```javascript
function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (array[mid] === target) {
			return mid;
		} else if (array[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return null;
}
```
