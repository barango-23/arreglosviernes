let estudiante={ 
    nombre:"brayan",
    cedula:"1023934903",
    promedio:4.2,
    estado: true
}
let estudiante2={
    nombre:"felipe",
    cedula:"2039943904",
    promedio:3.5,
    estado: false
}
let estudiante3={
    nombre:"juan",
    cedula:"120403434",
    promedio:3.4,
    estado: false
}
let estudiante4={
    nombre:"jimena",
    cedula:"678686868",
    promedio:5.0,
    estado: true
}
let estudiante5={
    nombre:"mariana",
    cedula:"2323224564",
    promedio:3.3,
    estado: true
}

let estudiantes=[ // para hacerlo mas ahorrador se crea objeto de arreglos 
    estudiante,
    estudiante2,
    estudiante3,
    estudiante4,
    estudiante5

    
]
let filtro= estudiantes.filter(function(estudiante){
    return(estudiante.promedio<=4.0 && estudiante.estado==false) // se usa el && para traer otro mapeo por asi decirlo y que se utilice la condicion pedida en este caso el false
})
console.log(filtro)

//=== el triple igual se usa para identificar el valor del dato si se modifica y no se cumple que aparezca vacio 
//== si se usa este asi sea que el dato sea string o numerico lo va traer y no deberia


