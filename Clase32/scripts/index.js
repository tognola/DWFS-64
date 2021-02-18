let btn = document.getElementById("btn");

saludar();
let nombre = "Gaston"
let array = [1, 2, 3]
let obj = {
    name: "Gaston",
    surname: "Tognola"
}

btn.addEventListener("click", () => {
        console.log(nombre)
        mostrarEnConsola("hola", nombre);
        console.log(nombre)

        console.log(array)
        incrementarArray( array );
        console.log(array);        

        console.log(obj)
        modificarObj(obj)
        console.log(obj)
    });



let fecha = moment();

let reloj = document.getElementById("reloj")

function actualizarHora() {
    let fecha = moment();
    reloj.innerText = fecha.format('DD/MM/YY, HH:mm:ss');
    
}

setInterval(actualizarHora, 1000);
