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
          pokelist.appendChild(listitem);
          var btn = document.createElement('button');
          listitem.appendChild(btn);
          btn.innerText=pokemon.name;
          btn.classList.add('pokebtn');
          listitem.classList.add('pokeitem');
          btn.addEventListener('click', function(event) {
          showDetails(pokemon);

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function () {
        showModal(item);
        });
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

var allPokemon = pokemonRepository.getAll();

var $pokemonsListContainer = document.querySelector('.pokemon-list');
var $allPokemon = document.querySelector ('pokemon-list');
var listItem = document.createElement('li')
allPokemon.forEach(function(property) {
  //document.write(
    //"<p>" +
      //property.name +
      //"<img width='25px' src='https://image.flaticon.com/icons/png/128/188/188987.png'</p>"
  );
});
