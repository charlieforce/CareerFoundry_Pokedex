var pokemonRepository = (function() {
  var repository = [
    {
      name: "Bulbasaur",
      height: 0.7,
      types: ["grass", "poison"]
    },
    {
      name: "Charizard",
      height: 1.7,
      types: ["fire", "flying"]
    },
    {
      name: "Squirtle",
      height: 0.5,
      types: ["water"]
    }
  ];

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

var allPokemon = pokemonRepository.getAll();

allPokemon.forEach(function(property) {
  document.write(
    "<p>" +
      property.name +
      "<img width='25px' src='https://image.flaticon.com/icons/png/128/188/188987.png'</p>"
  );
});
