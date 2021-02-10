/*let promiseAlbums = fetch("https://jsonplaceholder.typicode.com/albums")

let promisePosts = fetch("https://jsonplaceholder.typicode.com/posts")

Promise.race([promiseAlbums, promisePosts]).then(
    (respuestas) => {
        console.log(respuestas)
    }
).catch(
    error => console.log("error: " + error)
)*/

/*promiseAlbums.then((respuesta) => {
    return respuesta.json() //json() retorna un promesa
})
    .then(dato => {
        album = dato;
        return fetch("https://jsonplaceholder.typicode.com/users/" + dato.userId)
    })
    .then(respuesta => respuesta.json())
    .then(dato => {
        usuario = dato;
        dibujar(album, usuario);
        console.log(album, usuario)

    })*/

let promiseAlbums = fetch("https://jsonplaceholder.typicode.com/albums/1")
let album, usuario;

function dibujar(album, usuario) {
    let container = document.getElementById("container");
    container.innerHTML = album.title + " - " + usuario.name
}

//promiseAlbums.then( resp => resp.json() ).then( dato => {album = dato})

async function getAlbum(){
    try{
        let respuesta = await fetch("https://jsonplaceholder.typicodecom/albums/1");
        let album = await respuesta.json();
        return album;
    }catch (error){
        throw(error)
    }
}

getAlbum()
    .then( resultado => console.log(resultado) )
    .catch(error => console.log("error", error))
