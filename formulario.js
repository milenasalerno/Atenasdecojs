
    $("#bEnviar").click(function (e) {
        if ($('#itNombre').val() != "" &&
        $('#itEmail').val() != "" &&
        $('#itMensaje').val() != "") {
        e.preventDefault()
        $.get("formulario.json", function (dato) {
            $("#infoEnviada").html(`
                ${dato.alerta}
                `).css({"display":"inline-block"}).fadeOut(2000)
               
    })}
        
    })



//Expresión para validar un correo electrónico
var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var correo = $("#itEmail").val();
        var mensaje = $("#itMensaje").val();


        if(nombre == ""){
            $("#mensaje1").fadeIn();
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if(correo == "" || !expr.test(correo)){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if(mensaje == ""){
                    $("#mensaje3").fadeIn ();
                    return false;
                }else{
                    $("#mensaje3").fadeOut();
                }
            }
        }
    })
    });
    
