const Person = require('./person');
const Database = require('./database');
const red= require('ansi-red');
console.log(red('tchadoturc'));

//const add = (num1 , num2) => num1 + num2;

//const output = add(8 , 30);

//console.log(output);

//console.log(red('the end'));



const kabirou = new Person('saleh', 23);
const prenom = new Person('papa', 53);
const instructor = [kabirou,prenom];
Database.save(instructor);

const loadFile = Database.load();
console.log(loadFile);
