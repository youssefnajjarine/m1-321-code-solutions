/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  var answer = null;
  if (number < 5) {
    answer = true;
    // answer = console.log(true);
  } else {
    answer = false;
    // answer = console.log(false);
  }
  return answer;
}
isUnderFive(4);
isUnderFive(10);
isUnderFive(5);


function isEven(number) {
  var answer = null;
  if (number % 2 === 0) {
    answer = true;
    // console.log(true);
  } else {
    answer = false;
    // console.log(false);
  }
  return answer;
}
isEven(4);
isEven(10);
isEven(5);

function startsWithJ(string) {
  var answer = null;
  if (string[0] === 'J') {
    answer = true;
    // console.log(true);
  } else {
    answer = false;
    // console.log(false);
  }
  return answer;
}
startsWithJ('JavaScript');
startsWithJ('PHP');
startsWithJ('HTML');
startsWithJ('Java');
startsWithJ('Kotlin');
startsWithJ('C#');

function isOldEnoughToDrink(person) {
  var answer = null;
  if (person.age === 21 || person.age > 21) {
    answer = true;
    // console.log(true);
  } else {
    answer = false;
    // console.log(false);
  }
  return answer;
}
var bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10
};
isOldEnoughToDrink(bart);

function isOldEnoughToDrive(person) {
  var answer = null;
  if (person.age === 16 || person.age > 16) {
    answer = true;
    // console.log(true);
  } else {
    answer = false;
    // console.log(false);
  }
  return answer;
}
var homer = {
  name: 'Homer Jay Simpson',
  age: 39
};
isOldEnoughToDrive(homer);

function isOldEnoughToDrinkAndDrive(person) {
  var answer = '';
  if (person) {
    answer = 'false-This is illegal';
    // console.log('false-This is illegal');
  }
  return answer;
}
isOldEnoughToDrinkAndDrive('Youssef Najjarine');

function categorizeAcidity(pH) {
  var answer = '';
  if (pH === 7) {
    answer = 'neutral';
    // console.log('neutral');
  } else if (pH >= 0 && pH <= 7) {
    answer = 'acid';
    // console.log('acid');
  } else if (pH > 7 && pH <= 14) {
    answer = 'base';
    // console.log('base');
  } else {
    answer = 'invalid pH level';
    // console.log('invalid pH level');
  }
  return answer;
}

categorizeAcidity(-1);
categorizeAcidity(14.0000001);
categorizeAcidity(7);
categorizeAcidity(2);
categorizeAcidity(9);

function introduceWarnerBro(name) {
  var answer = '';
  if (name === 'yakko' || name === 'wakko') {
    answer = "We're the warner brothers!";
    // console.log("We're the warner brothers!");
  } else if (name === 'dot') {
    answer = "I'm cute~";
    // console.log("I'm cute~");
  } else if (name !== 'yakko' && name !== 'wakko' && name !== 'dot') {
    answer = "Goodnight everybody!";
    // console.log("Goodnight everybody!");
  }
  return answer;
}
introduceWarnerBro('yakko')
introduceWarnerBro('wakko')
introduceWarnerBro('dot')
introduceWarnerBro('cody')
introduceWarnerBro('minerva')
