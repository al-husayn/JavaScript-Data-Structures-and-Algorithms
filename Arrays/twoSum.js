// LeetCode 1 - Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



//     Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]

function twoSum(nums, target) {
    const numMap = new Map(); // Create a map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the number needed to reach the target

        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // If found, return the indices
        }

        numMap.set(nums[i], i); // Store the current number and its index
    }

    return []; // Return an empty array if no solution is found
}
// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]