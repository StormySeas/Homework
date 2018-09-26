// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
// Instatiate your Tomagotchi
// Display a character of your choice on the screen to represent your pet
// Display the following metrics for your pet:
// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Add the ability to name your pet.
// Style the page.
// Increase your pet's age every x minutes
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

var Tamagotchi = {
  initial: function (name) {
    this.name = name
    this.age = 0
    this.hunger = 10
    this.sleepiness = 10
    this.boredom = 10
  },
  passage: function () {
    this.age = this.age + 1
    this.hunger = this.hunger - 1
    this.sleepiness = this.sleepiness - 1
    this.boredom = this.boredom - 1
  },
  alive: function () {
    if (this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0 || this.age === 100) {
      return false
    } else {
      return true
    }
  },
  feed: function () {
    this.hunger = this.hunger + 1
  },
  sleep: function () {
    this.sleepiness = this.sleepiness + 1
  },
  play: function () {
    this.boredom = this.boredom + 1
  }
}
$('#feed').click(function () {
  tamagotchi.feed()
}
// $('.feed').on('click', () => {
// let $ageVal = $('#hunger').val()
// $hungerVal-=2
// $('#hunger').val($ageVal)
// }
