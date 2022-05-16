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
