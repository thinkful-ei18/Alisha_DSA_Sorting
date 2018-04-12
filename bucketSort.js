'use strict';
/*
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are.
*/

// determine length of an array
// make a new array that's that length
// compare values in the array

const numbers = [
  1, 7, 5, 9, 8
];

const bucketSort = (array, min, max) => {

  // buckets = (max value in array - min value in array) + 1
  let buckets = new Array((max-min) + 1);
  let result = new Array(array.length);

  // result[0] = min;
  // result[array.length - 1] = max;

  for (let i = 0; i < array.length; i++) {
    console.log('looped:', i);
  }

};

bucketSort(numbers);