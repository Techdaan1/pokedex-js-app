let pokemonRepository = (function(){
let pokemonList = [
    {
    name: 'Balbasaur',
    height: 7,
    types: ['grass', 'poison'],
},
{
    name: 'Charmander',
    height: 0.6,
    types: 'fire',
},
{
    name: 'Squirtle',
    height: 0.5,
    types: 'water',
},
];

function getAll(){
    return pokemonList;
}

function add(pokemon){
    return pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add: add,
}

})();

function printArrayDetails(){
pokemonRepository.getAll().forEach(function(pokemon){
        if (pokemon.height < 6)
        {document.write(pokemon.name + ' height: ' + pokemon.height + " -That is small!</br>")}
        else
        {document.write(pokemon.name + ' height: ' + pokemon.height + " - That is big!</br>")};
})}

printArrayDetails();
