// Sum of Array Elements
// Write a function sumArray that takes an array of numbers and returns the sum of all elements.

//     Example: sumArray([5, 10, 15]) should return 30.



// Hint: Use a loop to accumulate the sum or try JavaScript’s reduce method.

const array = [5, 10, 15]

// function sumArray(arr){
//     return arr.reduce((sum, num)=>sum + num, 0)

// }
const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0)
}

console.log(sumArray(array))// Output: 30