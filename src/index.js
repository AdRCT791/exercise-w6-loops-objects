const pokemons = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Metapod',
  'Weedle',
  'Pikachu',
  'Pidgey',
];

// 1)
// create a loop that prints all
// the pokemons from the pokemons array
// invoke the function to see that it works

const printPokemonName = () => {
  pokemons.forEach((pokemon) => {
    console.log(pokemon);
  });
};

// printPokemonName();
// 2)
// Create an object for the pokemon Pikachu.
// it could have properties such as name, element,
// strength, color, amountOfLegs or something like that.

const pokemon = {
  name: 'Pikachu',
  element: 'electricity',
  color: 'yellow',
  strength: 25,
};

console.log(
  `${pokemon.name} is a ${pokemon.element} pokemon with a strength of ${pokemon.strength}`
);

// 3)
// console.log something like
// 'Pikachu is a electricity pokemon with the strength of 32'
// Selecting some of the information about your pikachu object.

// 4)
// Add the property stillToCatch: true to the Pikachu object.

pokemon.stillToCatch = true;
console.log(pokemon);
// 5)
// change the value of the key strength in the Pikachu object.

pokemon.strength = 30;
console.log(pokemon);

// 6)
// Delete a property from the Pikachu object.

delete pokemon.color;
console.log(pokemon);

// 7)
// Fill up this array with a few more pokemons.
// It is an array with objects!
// I made some suggestions
// but feel free to change as you want.
const moreAboutPokemons = [
  {
    name: 'Bulbasaur',
    element: 'water',
    strength: 13,
  },
  {
    name: 'Charmander',
    element: 'fire',
    strength: 32,
  },
];

// 8)
// Print out all the NAMES of the pokemons in this new array.

const pokemonNames = moreAboutPokemons.forEach((pokemon) => {
  console.log(pokemon.name.toUpperCase());
});

// 9)
// Print out something like
// 'Bulbasaur is a water pokemon with the strength of 32'
// Do this for all the pokemons.

const pokemonFact = moreAboutPokemons.forEach((pokemon) => {
  console.log(
    `${pokemon.name} is a ${pokemon.element} with the strength of ${pokemon.strength}`
  );
});
