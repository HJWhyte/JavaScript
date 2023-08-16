// Given an array of sorted elements and a target value, 
// Return the index of the target value in the array.
// If the target value is not in the array, return -1.

const arr = ['a','b','c','e','h','z'];

// Less efficient method - O(n)

function search (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
}

console.log("Target index value: ", search(arr, 'e'))

