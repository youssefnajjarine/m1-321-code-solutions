var library = [
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare',
    isbn: ' 9780743477123'
  },
  {
    title: 'Macbeth',
    author: 'William Shakespeare',
    isbn: ' 0743477103'
  },
  {
    title: 'Hamlet',
    author: 'William Shakespeare',
    isbn: ' 9780743477123'
  }
]

console.log('Value of library: ', library);
console.log('typeof library: ', typeof library);
JSON.stringify(library);
console.log('JSON.stringify(library): ', JSON.stringify(library));
console.log('typeof JSON.stringify(library): ', typeof JSON.stringify(library));

var student = [
  {
    ID: 123456,
    Name: 'Youssef Najjarine'
  }
];

console.log(student);
console.log('typeof = ', typeof student);

var student2 = `[
  {
    "ID": 123456,
    "Name" : "Youssef Najjarine"
  }
]`;
student2 = JSON.parse(student2);
console.log('JSON.parse: ', student2);
console.log('typeof student2: ', typeof student2);
