/*--------- VALIDACIONES ------------*/
var form = document.forms["formulario"];

form["nombre"].addEventListener("keyup", function(){
    var expReg = /[A-Za-z]{2,15}/g;
    if(!expReg.test(form["nombre"].value) || form["nombre"].value == ""){
        form["nombre"].setCustomValidity("Introduzca un nombre que contenga entre 2 y 15 caracteres");
    }
    else{
        form["nombre"].setCustomValidity("");
    }
});

form["apellidos"].addEventListener("keyup", function(){
    var expReg = /[A-Za-z]{2,15}/g;
    if(!expReg.test(form["apellidos"].value) || form["apellidos"].value == ""){
        form["apellidos"].setCustomValidity("Introduzca un apellido que contenga entre 2 y 15 caracteres");
    }
    else{
        form["apellidos"].setCustomValidity("");
    }
});

form["email"].addEventListener("keyup", function(){
    var expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:[a-zA-Z0-9-]+)*(\.{1})([a-z]){2,3}$/g;
    if(!expReg.test(form["email"].value) || form["email"].value == ""){
        form["email"].setCustomValidity("La dirección de email debe tener el patron example@ejemplo.com");
    }
    else{
        form["email"].setCustomValidity("");
    }
});

form["password"].addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,15}$/g;
    var bool = ((!expReg.test(form["password"].value) || form["password"].value == ""));
    console.log(bool)
    if(bool){
        form["password"].setCustomValidity("La contraseña debe incluir una minúscula, una mayúscula, un número, un carácter especial y no tener espacios en blanco");
    }
    else{
        form["password"].setCustomValidity("");
    }
});

form["passwordAgain"].addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,15}$/g;
    if(form["password"].value !== form["passwordAgain"].value){
        form["passwordAgain"].setCustomValidity("La contraseñas deben coincidir");
    }
    else{
        form["passwordAgain"].setCustomValidity("");
    }
});

/*--------- COOKIES ------------*/
function setCookie(cname,cvalue,exdays) {
   var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname, cvalue) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function envio(){
    var name = document.getElementById('nombre').value;
    var password = document.getElementById('password').value;
    setCookie(name,password,1);
}
