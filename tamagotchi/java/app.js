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
class Tamagotchi {
  initial (name) {
    this.name = name
    this.age = 0
    this.hunger = 10
    this.sleepiness = 10
    this.boredom = 10
  }
  passage () {
    this.age = this.age + 1
    this.hunger = this.hunger - 1
    this.sleepiness = this.sleepiness - 1
    this.boredom = this.boredom - 1
  }
  alive () {
    if (this.hunger <= 0 || this.sleepiness <= 0 || this.boredom <= 0 || this.age === 100) {
      return false
    } else {
      return true
    }
  }
}

let tamagotchi
$(document).ready(function () {
  $('#start').click(function () {
    $('#start').hide()
    tamagotchi = new Tamagotchi('')
    tamagotchi.initial(prompt('Give it a name!'))
    $('#name').text(tamagotchi.name)
  })
  let countdown = setInterval(function () {
    console.log(tamagotchi)
    tamagotchi.passage()
    $('#hunger').val(tamagotchi.hunger)
    $('#sleepiness').val(tamagotchi.sleepiness)
    $('#boredom').val(tamagotchi.boredom)
    if (!tamagotchi.alive()) {
      alert(tamagotchi.name + ' is dead!')
      clearInterval(countdown)
      $('#start').show()
      console.log(tamagotchi)
    }
  }, 1300)
  $('#feed').click(function () {
    $('#hunger').val(tamagotchi.hunger += 1)
  })
  $('#sleep').click(function () {
    $('#sleepiness').val(tamagotchi.sleepiness += 1)
  })
  $('#play').click(function () {
    $('#boredom').val(tamagotchi.boredom += 1)
  })
})
