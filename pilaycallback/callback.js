//ejercicio , un cliente que nos envie su usuario y contraseña y validar que ese usuario y contraseña existe que genere un mensaje que diga "Bienvenido" 

function funcionPrincipal(usuario, contrasena, funcionSecundaria){ //definir funcion con nombre y las varibles que se usaran//
    setTimeout(function(){
        //Validacion de usuario y contraseña BD//
        let validacionCorrecta
        if(usuario=="brayan"&& contrasena=="2345"){
            validacionCorrecta=true
            funcionSecundaria(validacionCorrecta) // se llama la funcionSecundaria a la principal pero no se ha declarado
        }else{
            validacionCorrecta=false
            funcionSecundaria(validacionCorrecta)
        }
    },2000)
}
funcionPrincipal("brayan", "1234", function(validacion) { // Se declara la funcion secundaria
    if(validacion==true){
        console.log("Bienvenido...")
    }else{
        console.log("contraseña incorrecta")
    }
})