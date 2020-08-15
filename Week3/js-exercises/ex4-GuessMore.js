/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); //the result will be 9 because the we defined the x valeu with const so we cant change the value and it will keep the same.

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); //the result will be {x:10} and the function f2 worked because the const here assigned the object as value but we still can change the obj property value.
