let notas=[1.0,2.6,3.9,4.5,4.7,5.0] //Arreglos
//Buscando 1 Elemento particular

let resultadoN=notas.some(function(nota){
    return(nota==2.0) //el some se usa para si se cumple el arreglo aparezca true y si no false
})
console.log(resultadoN)

let resultadoN2=notas.find(function(nota){
    return(nota==5.0)//Se usa el find para entregarme el numero o el nombre en cualquier caso, solo trae 1
})
console.log(resultadoN2)