var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function addListItem(pokemon){
           var pokelist = document.querySelector('.pokemonlist');
           var listitem = document.createElement('li');
           var btn = document.createElement('button');

           btn.innerText = pokemon.name;
           btn.classList.add('pokebtn');
           btn.addEventListener('click', function(event) {
           showDetails(pokemon);

           listitem.appendChild(btn);
           listitem.add('pokeitem');
           pokelist.appendChild(listitem);
  });
}
  function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
});
  }
  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function loadList() {
   return fetch(apiUrl).then(function (response) {
     return response.json();
   }).then(function (json) {
     json.results.forEach(function (item) {
       var pokemon = {
         name: item.name,
         detailsUrl: item.url
       };
       add(pokemon);
     });
   }).catch(function (e) {
     console.error(e);
   });
}

 function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e);
    });

 }
  return {
    add: add,
    addListitem: addListitem,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails
};
})();
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
