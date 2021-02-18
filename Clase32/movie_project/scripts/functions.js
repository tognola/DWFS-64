const api = "http://www.omdbapi.com/?&apikey=237f8774"
//const API_KEY = "237f8774";

function searchMovies(text){
    fetch(`${api}&s=${text}`)
    .then( res => res.json() )
    .then(data => {
        movies = data.Search;

        movies.forEach(
            (movie, index) => {
                drawMovie(index, movie);
                console.log(index)
            }
        )
    })
}

function drawMovie( index,  movie ){
    let container = document.getElementById("results");
    let card = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    //let description = document.createElement("p");

    card.classList.add("card");
    img.src = movie.Poster;
    title.textContent = (index+1) + ". " + movie.Title;
    //description.textContent = movie.Plot;


    card.appendChild(img)
    card.appendChild(title)
    //card.appendChild(description)

    container.appendChild(card)

}