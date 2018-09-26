// Create a class for a person
// Create a class for a pet
// Create a class for a boat
// Create a class for an artist
// Create a class for a computer
// Create a class for a robot
// Create a class for a dog
// Create a class for a painter
// Create a class for a car
// Create a class for a laptop
// Create a class for a humvee
// Create a class for a smart phone
// Create a class for a baby
// Create a class for a fire truck
// Create a class for a bird
//
// class Person {
//   constructor (name, weight) {
//     this.name = name
//     this.weight = weight
//   }
// }
// class Pet {
//   constructor (age, color) {
//     this.age = age
//     this.color = color
//   }
// }
// class Boat {
//   constructor (length, width) {
//     this.length = length
//     this.width = width
//   }
// }
// class Artist extends Person {
//   constructor (name, weight, artStyle) {
//     super(name, weight)
//     this.artStyle = artStyle
//   }
// }
// class Computer {
//   constructor (screenSize, year) {
//     this.screenSize = screenSize
//     this.year = year
//   }
// }
// class Robot extends Computer {
//   constructor (screenSize, year, purpose) {
//     super(screenSize, year)
//     this.purpose = purpose
//   }
// }
// class Dog extends Pet {
//   constructor (age, color, petSound) {
//     super(age, color)
//     this.petSound = petSound
//   }
// }
// class Painter extends Person {
//   constructor (name, weight, medium) {
//     super(name, weight)
//     this.medium = medium
//   }
// }
// class Car extends Boat {
//   constructor (length, width, topSpeed) {
//     super(length, width)
//     this.topSpeed = topSpeed
//   }
// }
// class Laptop extends Computer {
//   constructor (screenSize, year, speed) {
//     super(screenSize, year)
//     this.speed = speed
//   }
// }
// class Humvee extends Boat {
//   constructor (length, width, horsepower) {
//     super(length, width)
//     this.horsepower = horsepower
//   }
// }
// class SmartPhone extends Computer {
//   constructor () {
//
//   }
// }
// class Baby extends Person {
//   constructor() {
//
//   }
// }
// class FireTruck extends Boat {
//   constructor() {
//
//   }
// }
// class Bird extends Pet {
//   constructor() {
//
//   }
// }
function pokemonGame() {
  const arrayOfPokemon = [{
    name: "Bulbasaur",
    damage: 60
  }, {
    name: "Caterpie",
    damage: 40
  }, {
    name: "Charmander",
    damage: 60
  }, {
    name: "Clefairy",
    damage: 50
  }, {
    name: "Jigglypuff",
    damage: 60
  }, {
    name: "Mankey",
    damage: 30
  }, {
    name: "Meowth",
    damage: 60
  }, {
    name: "Nidoran - female",
    damage: 60
  }, {
    name: "Nidoran - male",
    damage: 50
  }, {
    name: "Oddish",
    damage: 40
  }, {
    name: "Pidgey",
    damage: 50
  }, {
    name: "Pikachu",
    damage: 50
  }, {
    name: "Poliwag",
    damage: 50
  }, {
    name: "Psyduck",
    damage: 60
  }, {
    name: "Rattata",
    damage: 30
  }, {
    name: "Squirtle",
    damage: 60
  }, {
    name: "Vulpix",
    damage: 50
  }, {
    name: "Weedle",
    damage: 40
  }];
  const dealCards = (array) => {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }


    let randomC = getRandomInt(0, array.length);
    let cardsArray = [];

    for (let i = 0; i < 3; i++) {
      let card = 0;
      card = array.splice(randomC, 1);
      cardsArray = cardsArray.concat(card);
    }
    return cardsArray;
  }


  const computerDeals = (array) => {

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    return array.splice(getRandomInt(0, array.length), 1);
  }
  // const battle = (player, pc) => {
  //
  // }

}
pokemonGame();
// pass in two arrays. 1 for players , other for pc
// for ( let i = 0; i < 3; i++ ) {
//    if (playerCardDamage > pcCardDamage) {
//    playerScore += 1;
//}  else if(playersCardDamage < pcCardDamage) {pcScore += 1; }
//  } else {
//  playerScore =+1;
// pcScore += 1;
//}
//}
