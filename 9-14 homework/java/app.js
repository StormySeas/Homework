// // How do we assign a value to a variable?
// var = 40
// // How do we change the value of a variable?
// let (var) = 55
// // How do we assign an existing variable to a new variable?
//
// // Remind me, what are declare, assign, and define?
// declaring is giving the value of a variable
// assigning is  changing properties from a source object to a target object
// objects are defined by the functions attached to them
// // What is pseudocoding and why should you do it?
// psuedocoding is writing out your plan for the code in "plain english" to better understand your next steps
// // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 80% thinking, 20% coding
//

//
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// -1000
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// var firstVariable = 'Hello World'
// var firstVariable = "Goodbye World"
// var firstVariable = 1000
// var secondVariable = firstVariable
// console.log(secondVariable);
// var yourName = 'Julian'
// console.log('Hello, my name is ' + yourName);
//
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';
//
//
// console.log(a<b);
// console.log(c>d);
// console.log('Name'=='Name');
// console.log(true!=false);
// console.log(false + false + false + false + false + false != true);
// console.log(false == false)
// console.log(e == 'Kevin');
// console.log(a + b == c);
// console.log(a + a < d);
// console.log(48 == '48');

// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// Commit.
// var animal = 'cow';
// const moo =  function moo(animal) {
//   if (animal=='cow') {
//
//     console.log('moooo');
//   }else {
//       console.log('hey youre not a cow!');
//     }
// console.log(moo());
//   }


// Make a variable that will hold a person's age. Be semantic.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// If the age is younger than 16, a message should print "Sorry, you're too young."

const age = 16
if (age>=16) {
  console.log('Here are the keys');
}else {
    console.log('Sorry youre too young');
  }
