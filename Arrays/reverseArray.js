// Reverse an Array
// Write a function reverseArray that takes an array and returns a new array with the elements in reverse order.

// Example: reverseArray([1, 2, 3, 4]) should return [4, 3, 2, 1].

// Hint: You can either use a loop to reverse it manually or utilize JavaScript’s built -in array methods.

const  array  = [1, 2, 3, 4];

function reverseArray(arr){
    const reverseArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArray.push(arr[i]);
    }

    return reverseArray;

}
console.log(reverseArray(array)); // [4, 3, 2, 1]