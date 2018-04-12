'use strict';
/*
Write a function mSort that sorts the dataset above using the mergesort algorithm.

Add functionality to both the qSort and mSort programs so that the programs shows how many operations it took to sort the same dataset
*/

const numbers = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

// const numbers = [
//   89, 30, 25, 32, 72, 70];

let count = 0;

const merge = (left, right, array) => {
  // the array passed in is an empty one meant to hold the sorted items from the left and right arrays that were also passed in

  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) { // while the left && right arrays aren't empty
    count++; // measure the amount of comparisons
    if (left[leftIndex] < right[rightIndex]) { // if the first item in the left array is less than the first item in the right array 
      array[outputIndex++] = left[leftIndex++]; // push the item in the left array into the arg array, then increment both values
    }
    else { // if the first item in the right array is less than the first item in the left array 
      array[outputIndex++] = right[rightIndex++]; // push the item in the right array into the arg array, then increment both values
    }
    // this continues until either the left or right array is empty, each time comparing a different index in either the right or left array
  }

  for (let i = leftIndex; i < left.length; i++) { // if there are still items in the left array
    count++; // measure how many times it takes to empty the left array
    array[outputIndex++] = left[i]; // push the items from the left array into the arg array
  }

  for (let i = rightIndex; i < right.length; i++) { // if there are still items in the right array
    count++; // measure how many times it takes to empty the right array
    array[outputIndex++] = right[i]; // push the items from the right array into the arg array
  }

  return array; // return the sorted array
};


const mSort = array => {

  if (array.length < 2) { // if the array is empty or has 1 item
    return array;
  }

  const middle = Math.floor(array.length / 2); // middle = the middle index

  count++; // measure the times the array is split to a left half
  let left = array.slice(0, middle); // left half of the array

  count++; // measure the times the array is split to a right half
  let right = array.slice(middle, array.length); // right half of the array

  left = mSort(left); // recursively call the sort function on the left half of the array
  right = mSort(right); // recursively call the sort function on the right half of the array


  // once the array has been split enough times to reach a length of 1, it'll be returned due to the condition at the top of this function.
  return merge(left, right, array); // at that point, the recursive function begins its backwards phase
};

console.log(mSort(numbers), 'count:', count);