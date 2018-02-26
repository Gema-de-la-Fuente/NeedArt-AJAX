/*--------- LISTA DE PAISES ------------*/
window.onload = function(){
    listaPaises();
}

function listaPaises(){

    var paisInput= document.getElementById("inputPais"),option;
    var urlPaises ="http://localhost:3000/paises";

    var getJSON = function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                var readyState = xhr.readyState;   
                if (status == 200 && readyState==4) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send();
        });
    };

    getJSON(urlPaises).then(function(paises) {
        paises.forEach(function(pais) {
            option= document.createElement("option");
            option.setAttribute("value", pais.pais);
            option.innerHTML= pais.pais;
            paisInput.appendChild(option);
        });    
//    }, function(status) {
//        alert('Se ha producido algún error en la carga de países');
    }); 

}
//    var paisInput= document.getElementById("inputPais"),option;
//            var urlPaises ="http://localhost:3000/paises";
//
//        var getJSON = function(url) {
//          return new Promise(function(resolve, reject) {
//            var xhr = new XMLHttpRequest();
//            xhr.open('get', url, true);
//            xhr.responseType = 'json';
//            xhr.onload = function() {
//              var status = xhr.status;
//              var readyState = xhr.readyState;   
//              if (status == 200 && readyState==4) {
//                resolve(xhr.response);
//              } else {
//                reject(status);
//              }
//            };
//            xhr.send();
//          });
//        };
//
//        getJSON(urlPaises).then(function(paises) {
//         paises.forEach(function(nombre) {
//            option= document.createElement("option");
//             option.setAttribute("value", i.nombre);
//             option.innerHTML= i.nombre;
//             paisInput.appendChild(option);
//});    
//          
//        }, function(status) {
//          alert('Se ha producido algún error en la carga de países');
//        }); 




/*--------- COMENTARIOS ------------*/
if(getCookie("login") == "true"){
    var form = document.getElementById("formComent");
    form.style.display = "block";
}

document.getElementById("comentar").addEventListener("click", function(e){
    muestraComentario();
    e.preventDefault();


});


function muestraComentario(){

    var comentarios = document.getElementById("comentarios");
    var nombre = getCookie("sesion");
    var texto = document.getElementById("caja").value;

    var parrafo = document.createElement("p");
    var comentario = document.createTextNode(nombre+": " + texto);
    parrafo.appendChild(comentario);
    comentarios.insertBefore(parrafo, comentarios.childNodes[1]);

};

/*--------- INPUT TARJETA ------------*/

function expandirFormulario(){
    var pais=document.getElementById("inputPais").value;
    var direccion=document.getElementById("inputDirec").value;
    var flag = document.getElementById('expandir').firstChild;
    var select = document.getElementById("expandir");

    if(pais!="" && direccion!="" && flag==null){
        var inputTar = document.createElement("input");
        inputTar.setAttribute("type", Number);
        select.appendChild(inputTar);

    }else if ((pais=='' || direccion=='') && flag!=null) {
        select.removeChild(select.childNodes[0]);
    }
}




