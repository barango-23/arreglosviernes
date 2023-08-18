let numeros=[7,5,3,21,56]
let nombres=Array("Maluma","Austin","Djlujian","bryan myerts")

//Filtraccion de un arreglo
let filtro=numeros.filter(function(numero){
    return(numero<20) //en este solo poner el numero
})
console.log(filtro)

let filtrosDos=nombres.filter(function(nombre){
    return(nombre.length>4) //se usa el length para declarar que es para un nombre 
})
console.log(filtrosDos) //LO LLAMAMOS
