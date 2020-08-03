// your code goes in here
const button = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('#author p');
const quotes = [
  {
    author: '-Rumi',
    quote: 'Do not feel lonely, the entire universe is inside you.',
  },
  {
    author: '-Kahlil Gibran',
    quote: 'Beauty is not in the face; beauty is a light in the heart.',
  },
  {
    author: '-Les Brown',
    quote: 'Honor your commitments with integrity.',
  },
  {
    author: '-Vince Lombardi',
    quote: 'Perfection is not attainable, but if we chase perfection we can catch excellence.',
  },
  {
    author: '-Eleanor Roosevelt',
    quote: 'You must do the things you think you cannot do.',
  },
  {
    author: '-Napoleon Hill',
    quote: 'Your big opportunity may be right where you are now.',
  },
];

button.addEventListener('click', function () {
  const random = Math.floor(Math.random() * 6);

  author.textContent = quotes[random].author;
  quote.textContent = quotes[random].quote;
  console.log(quote, author);
});
