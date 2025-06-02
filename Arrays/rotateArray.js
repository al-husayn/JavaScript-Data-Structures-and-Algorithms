// LeetCode 189 - Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Solution 1: Brute Force (Worst Case: O(n*k) time, O(1) space)
// This method rotates the array one step at a time, k times.
// For each rotation, we move the last element to the front.
function rotateBruteForce(nums, k) {
    const n = nums.length;
    k = k % n; // Normalize k
    for (let i = 0; i < k; i++) {
        // Remove the last element and insert it at the front
        nums.unshift(nums.pop());
    }
}
// Example usage:
const arr1 = [1, 2, 3, 4, 5, 6, 7];
rotateBruteForce(arr1, 3);
console.log('Brute Force:', arr1); // [5, 6, 7, 1, 2, 3, 4]

// Solution 2: Extra Array (Better: O(n) time, O(n) space)
// We create a new array and put each element in its rotated position.
// Then we copy the new array back to the original array.
function rotateExtraArray(nums, k) {
    const n = nums.length;
    k = k % n; // Normalize k
    const rotated = new Array(n);
    for (let i = 0; i < n; i++) {
        // Place each element at its new position
        rotated[(i + k) % n] = nums[i];
    }
    // Copy rotated array back to nums
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}
// Example usage:
const arr2 = [1, 2, 3, 4, 5, 6, 7];
rotateExtraArray(arr2, 3);
console.log('Extra Array:', arr2); // [5, 6, 7, 1, 2, 3, 4]

// Solution 3: Reversal Algorithm (Best: O(n) time, O(1) space)
// This method reverses the whole array, then reverses the first k elements, then the rest.
// It's efficient and doesn't use extra space.
function rotateReversal(nums, k) {
    const n = nums.length;
    k = k % n; // Normalize k

    // Helper function to reverse part of the array in place
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse the whole array
    reverse(nums, 0, n - 1);
    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Step 3: Reverse the rest
    reverse(nums, k, n - 1);
}
// Example usage:
const arr3 = [1, 2, 3, 4, 5, 6, 7];
rotateReversal(arr3, 3);
console.log('Reversal Algorithm:', arr3); // [5, 6, 7, 1, 2, 3, 4]

/*
Summary:
- Brute Force: Simple but slow for large k (O(n*k) time).
- Extra Array: Fast but uses extra memory (O(n) time, O(n) space).
- Reversal Algorithm: Fastest and uses no extra space (O(n) time, O(1) space).
*/