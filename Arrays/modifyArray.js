// Insert and Remove Elements
// Implement a function modifyArray that takes an array and two additional arguments:
 
//  => index – the position where a new element should be added.
 //  =>value – the value to insert at the given index.


//  This function should add the element at the specified index and return the modified array.If index is out of range, add value at the end.

// Example: modifyArray([10, 20, 30], 1, 15) should return [10, 15, 20, 30].

const array = [10, 20, 30]

function modifyArray(array, index, value) {
    if (index >= 0 && index <= array.length) {
        array.splice(index, 0, value)
    } else {
        array.push(value)
    }
    return array
}

console.log(modifyArray(array, 1, 15))