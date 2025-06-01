// Sum of Array Elements
// Write a function sumArray that takes an array of numbers and returns the sum of all elements.

//     Example: sumArray([5, 10, 15]) should return 30.



// Hint: Use a loop to accumulate the sum or try JavaScript’s reduce method.

const array = [5, 10, 15]

// This function adds up all the numbers in the array and gives us the total

// function sumArray(arr){
//     return arr.reduce((sum, num)=>sum + num, 0)

// }
const sumArray = (arr) => {
    // We use reduce to go through each number in the array
    // sum starts at 0, and for each number (num), we add it to sum
    // At the end, we get the total sum of all numbers
    return arr.reduce((sum, num) => sum + num, 0)
}

// Let's see what happens when we use our function!
// This will print 30 because 5 + 10 + 15 = 30
console.log(sumArray(array))// Output: 30