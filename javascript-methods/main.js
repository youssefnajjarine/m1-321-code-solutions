var numbers = (1, 2, 3);
var maximumValue = Math.max(numbers);
console.log('Value of maximumValue: ', maximumValue);
var heroes = ['hulk', 'batman', 'superman', 'greenLantern'];
var randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex: ', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero: ', randomHero);



var library = [
  {
    title: 'Macbeth',
    author: 'William Shakespeare'
  },

  {
    title: 'Hamlet',
    author: 'William Shakespeare'
  },

  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare'
  }
];

var lastBook = library.pop();
console.log('Value of lastBook: ', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library: ', library);


var fullName = 'Youssef Najjarine';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName: ', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName: ', sayMyName);
