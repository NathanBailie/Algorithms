# Counting Sort

## Description

Counting sort is an efficient sorting algorithm for integer data, especially when the range of values is known and limited. The algorithm works by counting occurrences of each element and then using this information to place elements in a sorted order. Unlike other comparison-based sorting algorithms, counting sort doesn’t compare elements directly but uses an auxiliary array to store the count of each unique value.

## Time Complexity

- Worst case: **O(n + k)**, where **n** is the number of elements and k is the range of values.
- Average case: **O(n + k)**.
- Best case: **O(n + k)**.

## Advantages

- Extremely fast for sorting integers within a known, limited range.
- Executes in linear time when the range of values is small relative to the input size.
- Stable: preserves the relative order of identical elements.

## Disadvantages

- Requires additional memory for the count array, which can be large if the range of values is significant.
- Only works with integers and is unsuitable for data with floating-point numbers or a large range of values.
- Not an "in-place" algorithm because it requires extra memory.

## Use Cases

- Useful for sorting integers when the range of values is limited.
- Often used in applications requiring quick sorting of small-range data, such as frequency counts or sorting exam scores.

## Code

```javascript
function countingSort(arr) {
	if (arr.length === 0) return null;

	let min = arr[0];
	let max = arr[0];

	// Find minimum and maximum
	arr.forEach((_, i) => {
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	});

	// Create a counting array with sizes from minimum to maximum value
	const counts = new Array(max - min + 1).fill(0);

	// Fill the counting array
	arr.forEach((_, i) => counts[arr[i] - min]++);

	// Clear the original array without creating a new one
	arr.length = 0;

	// Fill the array with sorted elements
	counts.forEach((_, i) => {
		for (let j = 0; j < counts[i]; j++) {
			arr.push(i + min);
		}
	});

	return arr;
}
```
