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

  function addListItem(pokemon){
           var pokelist = document.querySelector('.pokemonlist');
           var listitem = document.createElement('li');
           var btn = document.createElement('button');

           btn.innerText = pokemon.name;
           btn.classList.add('pokebtn');
           btn.addEventListener('click', function(event) {
           showDetails(pokemon);
         })

           listitem.appendChild(btn);
           listitem.add('pokeitem');
           pokelist.appendChild(listitem);
           function showDetails(item) {
      console.log (pokemon);
    }
  }


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

//var allPokemon = pokemonRepository.getAll();

//var $pokemonsListContainer = document.querySelector('.pokemon-list');
//var $allPokemon = document.querySelector ('pokemon-list');
//var listItem = document.createElement('li')
//allPokemon.forEach(function(property) {
  //document.write(
    //"<p>" +
      //property.name +
      //"<img width='25px' src='https://image.flaticon.com/icons/png/128/188/188987.png'</p>"
  //);

pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
  return pokemonRepository;

  });
