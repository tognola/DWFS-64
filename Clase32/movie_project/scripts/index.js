let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", (event) => {
    event.preventDefault(); // POR EL FORMULARIO, EVITA QUE SE RECARGUE LA PAGINA

    document.getElementById("results").innerHTML = ''; // VACIAMOS BUSQUEDA ANTERIOR
    
    searchMovies(searchInput.value)
    searchInput.value = '';
})

