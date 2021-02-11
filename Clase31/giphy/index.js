let container = document.getElementById("container")

//fetch("http://api.giphy.com/v1/gifs/trending?api_key=dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG")
fetch("http://api.giphy.com/v1/gifs/search?api_key=dvMF6ZEGC3KYgwMSAhpCKNiFt8nyxwwG&q=batman&limit=5")
.then(resp => resp.json())
.then(gifs => {
    console.log(gifs)
    let array = gifs.data;
    for (let i = 0; i < array.length; i++){
        let img = document.createElement("img");
        img.src = array[i].images.original.url;
        container.appendChild(img)
    }
})