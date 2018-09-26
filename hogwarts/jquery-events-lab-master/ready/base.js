
// Write a line of jQuery code here so that the page 
// says "Go!" instead of "Ready"




/// do not modify the code below

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 
    'Make it say "Go!" where it currently says "' 
    + $('h1').text() 
    + '" by editing base.js' 
  );
}
