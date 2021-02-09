function drawPokemon(pokemon){

    let id = pokemon.id;
    let name = pokemon.name;
    let sprite = pokemon.sprites.front_default;

    let container = document.getElementById("pokemonContainer");

    let card = document.createElement('div');
    let title = document.createElement('h2');
    let img = document.createElement('img');

    card.classList.add('card');
    title.innerText = name + " #" + id;
    img.src = sprite;

    card.appendChild(title);
    card.appendChild(img);
    
    container.appendChild(card);    

}

let pokemon1 = fetch("https://pokeapi.co/api/v2/pokemon/66")
    .then(respuesta => respuesta.json());

let pokemon2 = fetch("https://pokeapi.co/api/v2/pokemon/46")
    .then(respuesta => respuesta.json());

let pokemon3 = fetch("https://pokeapi.co/api/v2/pokemon/72")
    .then(respuesta => respuesta.json());

let pokemon4 = fetch("https://pokeapi.co/api/v2/pokemon/12")
.then(respuesta => respuesta.json());


Promise.all([pokemon1, pokemon2, pokemon3, pokemon4]).then(
    pokemons => {
        //document.getElementById("pokemonContainer").innerHTML = '';
        for(let i = 0; i < pokemons.length; i++){
            drawPokemon(pokemons[i])
        }
    }
)