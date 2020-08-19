/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

function removeDuplicates(arr) {
  arr = arr.sort();

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
    }
  }
  return arr;
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);
// if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
//   console.log('Hooray!'); // this is will not work !my way is:

function identical(arr1, arr2) {
  // returns true if both arrays are identical
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
let expectArry = ['a', 'b', 'c', 'd', 'e', 'f'];

if (identical(letters, expectArry)) {
  console.log('Hooray!');
}
