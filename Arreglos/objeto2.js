let producto={
    nombre: "Panzerotti",
    precio: 2000,
    promocion: true,
}
let producto2={
    nombre: "Sandwich cubano",
    precio: 50000,
    promocion: false,
}
let producto3={
    nombre: "butifarras",
    precio: 500,
    promocion: false,
}
let producto4={
    nombre: "Hamburguesa Especial",
    precio: 12000,
    promocion: false,
}
let producto5={
    nombre: "Pizza Tamaño familiar",
    precio: 34000,
    promocion: true,
}

let productos=[
    producto,
    producto2,
    producto3,
    producto4,
    producto5
]
let filtros=productos.filter(function(producto){
    return(producto.promocion==false && producto.nombre==="tamagochi"&& producto.promocion>=80000)
})
console.log("este es el resultado del filtro ; "+ filtros)