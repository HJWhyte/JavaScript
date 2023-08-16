// Given an array of sorted elements and a target value, 
// Return the index of the target value in the array.
// If the target value is not in the array, return -1.

const arr = ['a','b','c','e','h','z'];

// Less search efficient method - O(n)

function search (arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
}

// Test Case:
// console.log("Target index value: ", search(arr, 'e'))

// Binary Search - O(logn)

const arr2 = ['a','b','c','d','e','f','g']

function binarySearch(arr, target, start=0, end=arr.length-1){

    console.log('Start:', start, 'End: ', end)

    if (start > end) {
        console.log('Not found!');
        return -1;
    }

    const middle = Math.floor( start + end / 2);
    console.log('Middle: ', middle)

    if (arr[middle] === target) {
        console.log('Target Index: ', middle);         // This console log never fires when selecting the last position index in the array 
        return middle;
    }

    if (arr[middle] > target) {
        binarySearch(arr,target,start,middle-1);
    }

    if (arr[middle] < target) {
        binarySearch(arr,target,middle+1,end);
    }
}

binarySearch(arr2,'g')