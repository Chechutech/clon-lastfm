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


const name = document.createElement("td");
    const enlace = document.createElement("a");
    name.classList.add("name");
    name.innerHTML = song[i].name;
    enlace.setAttribute("href", "https://www.exampleurl.com");
    name.appendChild(enlace);
