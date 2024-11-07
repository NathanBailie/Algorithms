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
function countingSort(array) {
	const max = Math.max(...array);
	const count = new Array(max + 1).fill(0);

	for (let i = 0; i < array.length; i++) count[array[i]]++;

	let ind = 0;

	for (let i = 0; i < count.length; i++) {
		while (count[i] > 0) {
			array[ind++] = i;
			count[i]--;
		}
	}

	return array;
}
```
