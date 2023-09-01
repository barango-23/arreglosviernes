function objetos_comida(num_comid,bandeja_paisa,salchipapas,gratinada,frijoles,empanadas,rapida,filtrar_comida){
setTimeout(function(){
    let comidas={
        id_1:num_comid,
        nombreComida:bandeja_paisa,
        tipo_c:rapida,
        precio:70000,
        id_2:num_comid,
nombreComida:salchipapas,
tipo_c:rapida,
precio:56000,
id_3:num_comid,
nombreComida:gratinada,
tipo_c:rapida,
precio:55000,
id_4:num_comid,
nombreComida:frijoles,
tipo_c:rapida,
precio:60000,
id_5:num_comid,
nombreComida:empanadas,
tipo_c:rapida,
precio: 57000
}
filtrar_comida(comidas)

},5500)
}
objetos_comida(function(comidas){
if(comidas.bandeja_paisa.precio>50000 && comidas.salchipapas.precio>50000 && comidas.gratinada.precio>50000 && comidas.frijoles.precio>50000 && comidas.empanadas.precio){
    console.log(`${comidas.bandeja_paisa.precio+comidas.salchipapas.precio+comidas.gratinada.precio+comidas.frijoles.precio+comidas.empanadas.precio} el total de las comidas es`)
}




}


)