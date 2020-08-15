/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

function removeDuplicates(arr) {
  arr = arr.sort();
  console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
    }
  }
  console.log(arr);
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
  //i don't know why it dosent log Horray!!
  console.log('Hooray!');
} else {
  console.log(letters);
}
