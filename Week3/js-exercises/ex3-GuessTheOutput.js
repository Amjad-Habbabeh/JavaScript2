/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();

// the result will be an alert 12, because inside the scope of the invoked function x the value of a changed from 10 to 12 and since the inner function has access to the parient scope even after the invking (closure) in this case (a) variable then the alert function happened when we call x;
