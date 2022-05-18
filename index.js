const array = [
    {name:"a",
    numeros:[1,2,3]},
    {name:"b",
    numeros:[4,5,6]}
]

function filtrarPorUno(elemento){

    if (elemento.numeros.includes(1))
    return elemento
}
const nuevoArray = array.filter(filtrarPorUno)
console.log(nuevoArray)

const createTD = document.createElement("td");
const createTDA = document.createElement("a");
createTD.innerHTML = "SURNAME Name";
createTDA.setAttribute("href", "https://www.exampleurl.com");
createTD.appendChild(createTDA);


<<<<<<< HEAD
// const name = document.createElement("td");
//     const enlace = document.createElement("a");
//     name.classList.add("name");
//     name.innerHTML = song[i].name;
//     enlace.setAttribute("href", "https://www.exampleurl.com");
//     name.appendChild(enlace);

=======
const name = document.createElement("td");
    const enlace = document.createElement("a");
    name.classList.add("name");
    name.innerHTML = song[i].name;
    enlace.setAttribute("href", "https://www.exampleurl.com");
    name.appendChild(enlace);

    /*
function filtrarPorRock(arraySongs){
    if (arraySongs.genres.includes('rock'))
    return arraySongs
}
const listaRock = arraySongs.filter(filtrarPorRock)
console.log({listaRock})
console.log('arraySongs', JSON.stringify (arraySongs)) 

function fetchRock 
*/
>>>>>>> d524facd73d6afdccaa70cba569ca3f16ed36464
