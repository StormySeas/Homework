// 1. Data types
// Refresher
// So far we have seen:
//
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.
//
// Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:
//
// A light switch that can be either on or off.
// function
const foo = {
  on: 0,
  off: 1,

  getValue(){
    console.log(this);
    return this.value;
  }
}
foo.getValue()
// A user's email address.
// variable

  // A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// object
// A list of student names from our class.
// Arrays
// A list of student names from our class, each with a location.
// array
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// array.
//
