// Minimum and Maximum
// Implement a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.

//     Example: findMinMax([3, 5, 7, 2, 8]) should return { min: 2, max: 8 }.


//         Hint: Use a loop to keep track of the smallest and largest numbers or apply Math.min and Math.max.

const arr = [3, 5, 7, 2, 8]

function findMinMax(arr) {
    // If there are no numbers, say "I don't know!"
    if (arr.length === 0) {
        return { min: null, max: null };
    }

    // Pretend the first number is the smallest and biggest for now
    let min = arr[0];
    let max = arr[0];

    // Let's look at each number, one by one
    for (let i = 1; i < arr.length; i++) {
        // If we find a smaller number, remember it!
        if (arr[i] < min) {
            min = arr[i];
        }
        // If we find a bigger number, remember it!
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Tell us the smallest and biggest numbers we found
    return { min: min, max: max };
}

// Let's see what happens when we use our function!
console.log(findMinMax(arr)); // { min: 2, max: 8 }