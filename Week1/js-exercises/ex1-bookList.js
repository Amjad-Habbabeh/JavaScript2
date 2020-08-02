/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  let ul = document.createElement('ul');

  books.forEach((element) => {
    let li = document.createElement('li');
    let p = document.createElement('p');
    let title = element.title;
    let author = element.author;
    let img = document.createElement('img');
    if (title === 'The Design of Everyday Things') {
      img.src = './img/design.jpg';
    } else if (title === 'The Most Human Human') {
      img.src = './img/themosthuman.jpg';
    } else {
      img.src = './img/pragmatic.jpg';
    }
    if (element.alreadyRead) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
    li.style.listStyle = 'none';
    li.style.width = 'calc(25% - 51px)';
    li.style.minWidth = '350px';
    li.style.margin = '15px';
    li.style.padding = '10px';
    ul.style.display = 'flex';
    p.appendChild(document.createTextNode(`${title} - ${author}`));
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });

  return ul;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

// createBookList(books);

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
