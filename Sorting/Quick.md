# Quick Sort

## Description

Quick Sort is an efficient sorting algorithm that uses a "divide and conquer" approach. The algorithm selects a pivot element from the array and partitions the remaining elements into two subarrays: those less than the pivot and those greater. These subarrays are then sorted recursively.

## Time Complexity

- Worst case: **O(n²)**, which occurs when the array is already sorted in reverse or all elements are the same. However, this can be minimized by choosing the pivot element randomly.
- Average case: **O(n log n)**, making quick sort one of the fastest algorithms for most data.

## Advantages

- High performance on large arrays.
- Works "in place," meaning it requires minimal additional memory.
- Commonly used in practice due to its speed.

## Disadvantages

- Worst-case performance is **O(n²)** if the pivot selection is poor.
- It is an unstable sorting algorithm, meaning identical elements might change their relative order.

## Use Cases

- Sorting large datasets efficiently.
- Widely used in programming language libraries, such as JavaScript, Python, and C++.

## Code

```javascript
function quickSort(array) {
	if (array.length <= 1) return array;
	let less = [],
		equal = [],
		more = [],
		pivot = array[Math.floor(array.length / 2)];

	array.forEach(n =>
		n < pivot ? less.push(n) : n === pivot ? equal.push(n) : more.push(n)
	);

	return [...quickSort(less), ...equal, ...quickSort(more)];
}
```
