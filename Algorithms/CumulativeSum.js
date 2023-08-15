// Given an array of integers, calculate the cumulative sum of the array

// const arr = [1,3,5,7]

// My solution:

function cumulativeSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}

console.log('sum: ', cumulativeSum([1,3,5,7]));


// Using JS Methods: 

const arr = [1,3,5,7].reduce((acc,cur) => acc+cur, 0)

console.log('Reduce sum: ', cumulativeSum([1,3,5,7]));