//Creating and Manipulating Arrays



// Implement a function createOddNumbersArray(n) that takes a positive integer n and returns an array containing the first n odd numbers.

//    Example: createOddNumbersArray(5) should return [1, 3, 5, 7, 9].

//    Hint: Start from 1 and keep adding 2 until you have n elements.


function createOddNumbersArray(n) {
    const oddNumbers = [];
    for(let i = 0; i<n; i++){
        oddNumbers.push(2 *i + 1)
    }
    return oddNumbers;

}

console.log(createOddNumbersArray(5)); // [1, 3, 5, 7, 9]