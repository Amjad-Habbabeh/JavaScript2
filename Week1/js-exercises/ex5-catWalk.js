/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/
let img = document.getElementsByTagName('img');
let reference = img[0].src;

console.log(reference);
console.log(img);
let leftInc = 0;
img[0].style.left = `${leftInc}px`;
function catWalk() {
  if (leftInc < window.innerWidth / 2) {
    leftInc += 10;
    img[0].style.left = `${leftInc}px`;
  } else {
    const start = Date.now();
    img[0].src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';

    clearInterval(id);
    setTimeout(() => {
      const millis = Date.now() - start;
      img[0].src = reference;

      let id2 = setInterval(catWalk2, 50);
      function catWalk2() {
        if (leftInc < window.innerWidth) {
          leftInc += 10;
          img[0].style.left = `${leftInc}px`;
        } else {
          // let id = setInterval(catWalk, 50);
          console.log('hiiii');
          leftInc = 0;
          img[0].style.left = `${leftInc}px`;
          if (leftInc < window.innerWidth / 2) {
            // clearInterval(id2);
            // let id = setInterval(catWalk, 50);
          }
        }
      }
    }, 5000);
  }
}

let id = setInterval(catWalk, 50);
