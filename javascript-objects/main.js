var student = {
  firstName:  'Youssef',
  lastName: 'Najjarine',
  age: 24
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('Value of fullName: ',fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Box office ticket seller';
console.log('Value of livesInIrvine: ',student.livesInIrvine);
console.log('Value of previousOccupation: ',student.previousOccupation);
console.log('Value of Student object: ',student);

var vehicle = {
  make: 'Hyundai',
  model: 'Elantra GT',
  year: 2016
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('Value of vehicle["color"]: ',vehicle['color']);
console.log('Value of vehicle["isConvertible"]: ',vehicle['isConvertible']);
console.log('Value of vehicle object: ',vehicle);


var pet = {
  name: 'Teddy',
  type: 'Munchkin'
};

delete pet.name;
delete pet.type;
console.log('Value of pet: ',pet);
