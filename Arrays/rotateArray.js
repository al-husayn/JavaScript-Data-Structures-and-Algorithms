// LeetCode 189 - Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non - negative.



//     Example 1:

// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3

// Output: [5, 6, 7, 1, 2, 3, 4]

// Explanation:

// rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
// rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
// rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
// Example 2:

// Input: nums = [-1, -100, 3, 99], k = 2

// Output: [3, 99, -1, -100]

// Explanation:

// rotate 1 steps to the right: [99, -1, -100, 3]
// rotate 2 steps to the right: [3, 99, -1, -100]

function rightRotateArray(nums, k) {
    const n = nums.length;
    // Normalize k to avoid unnecessary full rotations
    k = k % n;

    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining n-k elements
    reverse(nums, k, n - 1);
}
function reverse(arr, start, end) {
    while (start < end) {
        // Swap elements at start and end
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
// Example usage:
const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
rightRotateArray(nums1, k1);
console.log(nums1); // Output: [5, 6, 7, 1, 2, 3, 4]
const nums2 = [-1, -100, 3, 99];
const k2 = 2;
rightRotateArray(nums2, k2);
console.log(nums2); // Output: [3, 99, -1, -100]
// This function rotates the array to the right by k steps using a three-step reversal method.
// It first reverses the entire array, then reverses the first k elements, and finally reverses the remaining n-k elements. 
// This approach is efficient with a time complexity of O(n) and a space complexity of O(1).
// This method avoids the need for extra space and handles cases where k is larger than the array length by normalizing k.
// The function `reverse` is a helper function that reverses a portion of the array in place.
// This solution is efficient and works well for large arrays, with a time complexity of O(n) and a space complexity of O(1).
// The `rightRotateArray` function modifies the input array in place, so no new array is created.
// This is a common technique used in problems involving array rotations and is efficient for large datasets.
// The function `rightRotateArray` takes an array `nums` and an integer `k`, and rotates the array to the right by `k` steps.
// It uses a three-step reversal method to achieve the rotation efficiently.
// The `reverse` function is a helper function that reverses a portion of the array in place.
// This approach is efficient with a time complexity of O(n) and a space complexity of O(1).
// The function modifies the input array in place, so no new array is created.
// This is a common technique used in problems involving array rotations and is efficient for large datasets.
// The function handles cases where k is larger than the array length by normalizing k.
// The `reverse` function is a helper function that reverses a portion of the array in place.
// This approach avoids the need for extra space and is efficient for large arrays.
// The function modifies the input array in place, so no new array is created.
// This is a common technique used in problems involving array rotations and is efficient for large datasets.
// The function handles cases where k is larger than the array length by normalizing k.
// The `reverse` function is a helper function that reverses a portion of the array in place.
// This approach avoids the need for extra space and is efficient for large arrays.