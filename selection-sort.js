

function selectionSort(arr) {

  // Copy the original array
  arr = arr.slice();

  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty...
  while (arr.length) {

    // Do not move this console.log
    console.log(sorted.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = arr.indexOf(Math.min(...arr));

    // Save and remove the value at the min index
    let min = arr[minIndex]
    arr.splice(minIndex, 1);

    // Add the min value to the end of the sorted array
    sorted.push(min);
  }
  return sorted;
}

const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
// const arr = [2, 4, 1, 0];
// console.log(selectionSort(arr))

// function selectionSortInPlace(arr) {

//   // Set a pointer at zero diving the array into sorted and unsorted halves
//   let divider = 0;

//   // Repeat while the unsorted half is not empty:
//   while (divider < arr.length) {

//     // Do not move this console.log
//     console.log(arr.join(","));

//     // Find the index of the minimum value in the unsorted half
//     let subArray = arr.slice(divider);
//     let minIndex = arr.indexOf(Math.min(...subArray));
//     // Save the min value
//     let min = arr[minIndex]

//     // Shift every unsorted value to the left of the min value to the right by 1
//     arr.splice(minIndex, 1);

//     // Put the min value at the divider
//     arr.splice(divider, 0, min);

//     // Increment the divider and repeat
//     divider++;
//   }
//   return arr;

// }

// const arr = [3, 2, 0, 4, 1];
function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0 // the ```invariant```

  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {

    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divider;

    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // Save the min value
    let min = arr[minIndex];

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i >= divider; i--) {
      arr[i] = arr[i - 1];
    }

    // Put the min value at the divider
    arr[divider] = min;

    // Increment the divider and repeat
    divider++;
  }

  return arr;
}


module.exports = [selectionSort, selectionSortInPlace];
