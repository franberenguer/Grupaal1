function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

//Chequea contenido
function vacios(datos){
    let i = 0;
    while((datos[i] != "") && (i<5)){
        i++;
    }

    if (i < 5){
        return false;
    } else {
        return true;
    }
}

//email
function emailCorrecto(correo){
    if (correo.includes("@")) {
        return true;
    } else {
        return false;
    }
}

//Contraseñas iguales
function iguales(c1, c2){
    if ((c1 === c2) && ((c1.length >= 6) && (c2.length >= 6))){
        return true;
    } else {
        return false;
    }
}
    function clean(array){
        array.forEach(Element => {
            Element.value=""
            Element.checked=false
            
        });
}
//Guardar inputs
document.getElementById("regBtn").addEventListener("click", (e) => {
    let datos = [];        
    datos[0] = document.getElementById("nombre").value;
    datos[1] = document.getElementById("apellido").value;
    datos[2] = document.getElementById("email").value;
    datos[3] = document.getElementById("password1").value;
    datos[4] = document.getElementById("password2").value;
    datos[5] = document.getElementById("terminos").checked;
    console.log(datos);

    if ((vacios(datos)) && (emailCorrecto(datos[2])) && (iguales(datos[3], datos[4]) && (datos[5]))){
        showAlertSuccess();
        setTimeout(function() {
            document.getElementById("alert-success").classList.remove("show");
        }, 3000);
        setTimeout(function() {
            window.location.reload();
        }, 3000);
       
    } else {
        showAlertError();
        setTimeout(function() {
            document.getElementById("alert-danger").classList.remove("show");
        }, 3000);
    }
})