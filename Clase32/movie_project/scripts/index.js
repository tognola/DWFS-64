let searchInput = document.getElementById("search-input");
let searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", (event) => {
    event.preventDefault(); // POR EL FORMULARIO, EVITA QUE SE RECARGUE LA PAGINA

    document.getElementById("results").innerHTML = ''; // VACIAMOS BUSQUEDA ANTERIOR

    searchMovies(searchInput.value)
    searchInput.value = '';
})

let isSearching = false;

searchInput.addEventListener('keyup', () => {

    let text = searchInput.value;
    if(text.length >= 2 && !isSearching){
        
        document.getElementById("results").innerHTML = ''; // VACIAMOS BUSQUEDA ANTERIOR    
        searchMovies(searchInput.value)
        isSearching = true;

        //debouncing básico
        setTimeout(() => {
            isSearching = false;
        }, 1000)
    }
    
})

