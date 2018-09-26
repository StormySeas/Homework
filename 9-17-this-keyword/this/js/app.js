// console.log('Grrr');
// const garcia = {
//     albums: ['shady grove', 'run for the roses', 'hooteroll', 'Garcia', 'Reflections'],
//     instruments: ['Vocals', 'pedal steel', 'electric guitar', 'acoustic guitar', 'banjo'],
//     alive: false,
//     quote: 'Im shopping around for something to do that no one will like',
//     friends: [{
//       name: 'Bobby weir',
//       hobby: 'guitar'
//     },
//     {
//       name: 'Bob Dylan',
//       hobby: 'writing songs'
//     },
//     {
//       name: 'Allen Ginsberg',
//       hobby: 'writing poems'
//     },
//     {
//       name: 'Phil Lesh',
//       hobby: 'Playing dope bass lines'
//     }]
// console.log(garcia.alive);
//
// }


// const foo = {
//   value: 12,
//   getValue(){
//     console.log(this);
//     return this.value;
//   }
// }
// //keyword this refers to the object that is invoking the method
// //
//
// console.log(foo.getValue());

// const  person= {
//   name: 'julian',
//   age: 26,
//   haircolor: 'black',
//
//   getname(){
//     return this.name
//   }
//
//
// }
  // console.log(person.getname());

//   function burrito(){
//     console.log(this, "inside burrito");
//
//   }
//   burrito();
// const taco = () => {
//   console.log(this, "inside taco");
// }
// taco();


//
//
// const game = {
//   timer: 10,
//   start(){
//     const gameTimer = setInterval( () => {
//       console.log('hi', this)
//       this.timer -=1;
//       if(this.timer=== 0) {
//         console.log('game over');
//         clearInterval(gameTimer)
//       }
//       console.log(this.timer);
//     }, 1000);
//   }
// }
// game.start();


// const game = {
// timer: 10,
// start() {
// const gameTimer = setInterval( () => {
//   console.log('this is crap',this);
//   this.timer-=1;
//   if (this.timer===0) {
//     console.log('game over');
//     clearInterval(gameTimer)
//     }
//     console.log(this.timer);
// },1000)
// }
// }
// game.start();

//
// const book = {
//   title: 'Lisbon poets',
//   author: 'Cacio',
//   year: 2000,
// }
// //in objects we use for... in
//
// for (let key in book) {
//   console.log(key);
// console.log(book[key]);
// }
//
// console.log(Object.keys(book))
//


// const movie = {
//   title: "Eraserhead", director: "David Lynch", year: 1978 }
// for (let key in movie) {
//   console.log(key);
//   console.log(movie[key]);
// }
const movies = [
               { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
               { title: "Eraserhead", director: "David Lynch", year: 1978 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 },
               { title: "Dayereh", director: "Jafar Panahi", year: 2000 }
             ]


const moviesObject = {};
for(let i = 0; i < movies.length; i++){
  console.log(movies[i].title=)
}



// const obj = {
// }
// for ( var i = 0; i < movies.length; i++ ) {
//   obj[movies[i].title] = '0';
// }
// console.log(obj)
