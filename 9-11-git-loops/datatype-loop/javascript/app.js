console.log('JS is loaded');

//variables
//const vs let vs var

//var - is the old way of declaring a variables
//we will not use var

//all variables are camelCase
//defining a variable
const dharmaBums = 'Jack Kerouac';
// const variables cannot be redefined

//dharmaBums = 'Kerouac' //Cant do this
//defining the array
const someArray = [];

someArray.push('taco');

console.log(someArray, 'this is someArray');

//console.log(number, 'this is number');
    //concatentation and interpolation
    //concatentation
    //console.log('run ' + '  run ' + ' runnnnn');
//older way interpolation
const adjective = 'believe';

console.log('What a ' + adjective + ' day!')

//newer way similar to ruby
console.log(`What a ${adjective} day!`);

console.log('please ' + adjective  + ' the ' + 'cheese');


//numbers

//operations
9 + 9
 9 * 9
9 / 9
9 - 9
9 % 9//--> modulus gives the remainder, helpful for finding odd and even numbers
console.log(9 + 9);

//comparative operators
//>//Greater than
//<//less than
//==//equal to
//=== // strictly equal
//>=//greater than or equal
//<=//less than or equal
//!=//not equal

//Loops
//repeatedly performs an operation until a condition is met
console.log('The number is: ' + 1);
console.log('The number is: ' + 2);
console.log('The number is: ' + 3);
console.log('The number is: ' + 4);
//^dont do this.
//Keep code DRY - don't repeat yourself

//initial condition - some variables
//while (true) {
  //runs code in the block
//}
// initial condition
let num = 800;

// while (num <= 1000) {
//   console.log('The number is: ' + num);
//   // num = num + 1;
//   //^long way to write it
//   num++
//}

// while (num <=100) {
//   console.log('The number is: ' + num);
//   num++
// }

// while (num <=5000) {
//   console.log('The number is: ' + num * num);
//   num++
// }

// while (num >=1) {
//   console.log('The number is: ' + num);
//   num--
// }

//for Loops
//more concise type of Loops
// count from 1 to 1000

for (let i = 800; i <= 900; i++) {
  console.log(i);
}
