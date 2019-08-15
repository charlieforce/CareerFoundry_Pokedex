Var pokemonRepository = (function () {
var repository =[
  {
    name: 'Bulbasaur',
    height: 0.7,
    types: ['grass', 'poison']
  },
  {
    name: 'Charizard',
    height: 1.7,
    types: ['fire', 'flying']
  },
  {
    name: 'Squirtle',
    height: 0.5,
    types: ['water']
  }];

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

  repository.forEach(function(property){
  document.write("<p>" + property.name + "</p>");
});


// printArrayDetails function declaration
//function printArrayDetails(){
  for (var i = 0; i < repository.length; i++){
    // document.write("<p>" + repository[i].name + "</p>");
    // printing repository[i]’s other details
    // ...
  }
}

// Calling printArrayDetails function twice
printArrayDetails();
printArrayDetails();
console.log(pokemonRepository.getAll()); // []
