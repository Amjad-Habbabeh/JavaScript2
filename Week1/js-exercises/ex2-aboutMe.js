/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
document.body.style.fontFamily = 'Arial, sans-serif';
document.getElementById('nickname').innerText = 'Hababios';
document.getElementById('fav-food').innerText = 'cheese';
document.getElementById('hometown').innerText = 'Masyaf';
let li = document.getElementsByTagName('li');
let liArray = Array.from(li);
liArray.forEach((element) => {
  element.className = 'list-item';
});
let img = document.createElement('img');
img.src = './img/0.jpg';
document.body.appendChild(img);
