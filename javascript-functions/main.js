function convertMinutesToSeconds(minutes) {
  var convertingMinutesToSeconds = minutes * 60;
  return convertingMinutesToSeconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);



function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetingResult = greet('Youssef Najjarine');
console.log('greetingResult: ',greetingResult);



function getArea(width, height) {
  var area = width * height;
  return area;
}
var getAreaResult = getArea(25, 35);
console.log('getAreaResult: ',getAreaResult);



function getFirstName(person) {
  var getTheFirstName = person.firstName;
  return getTheFirstName;
}
var getFirstNameResult = getFirstName({ firstName: 'Youssef', lastName: 'Najjarine'});
console.log('getFirstNameResult: ',getFirstNameResult);



function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult: ',getLastElementResult);
