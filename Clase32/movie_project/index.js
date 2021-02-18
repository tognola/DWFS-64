
async function getMovie(title){
    let response = await fetch("http://www.omdbapi.com/?t="+title+"&apikey=237f8774");
    let movie = await response.json();
    
    return movie;
}

function drawMovie( movie ){
    let container = document.getElementById("results");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let description = document.createElement("p");

    card.classList.add("card");
    img.src = movie.Poster;
    title.textContent = movie.Title;
    description.textContent = movie.Plot;

    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(description)

    container.appendChild(card)

}

/*getMovie("batman").then( respuesta => {
    console.log(respuesta)
    drawMovie(respuesta)

    return getMovie("harry-potter")
}).then(
    pelicula2 => drawMovie(pelicula2)
)*/

async function getMovies(){
    
    let pelicula1 = await getMovie("batman");
    let pelicula2 = await getMovie("harry-potter")
    let pelicula3 = await getMovie("narnia")

    drawMovie(pelicula1);
    drawMovie(pelicula2);
    drawMovie(pelicula3);

    return "Listo"
}

getMovies().then( respuesta => console.log(respuesta));