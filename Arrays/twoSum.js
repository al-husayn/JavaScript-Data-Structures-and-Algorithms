// LeetCode 1 - Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Example 3:
// Input: nums = [3, 3], target = 6
// Output: [0, 1]

// this solution works but it is not efficient because it uses a nested loop, which means it checks every possible pair of numbers in the array. This can be slow for large arrays. this solution has a time complexity of O(n^2), which means it takes longer as the array gets bigger. 
// function twoSum(arr, target){
//     for (let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             if(arr[i] + arr[j] ===target ){
                
//              return [i, j]
//             }
//         }
//     }
//     return []
// }

function twoSum(nums, target) {
    const numMap = new Map(); // Create a map to remember numbers and where we saw them

    // Go through each number in the array
    for (let i = 0; i < nums.length; i++) {
        // Find the number we need to add to nums[i] to get the target
        const complement = target - nums[i];

        // Check if we've already seen the number we need
        if (numMap.has(complement)) {
            // If yes, return the index where we saw it and the current index
            return [numMap.get(complement), i];
        }

        // If not, remember this number and its index for later
        numMap.set(nums[i], i);
    }

    // If we don't find any pair, return an empty array
    return [];
}

// Example usage:
// This will print [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
