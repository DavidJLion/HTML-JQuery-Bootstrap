$(document).ready(function() {

    console.log("Loading Jquery");
    
    $("#enviar").click(function() {
        //alert("Funciona");
         //.trim --> SE BORRAN LOS ESPACIOS EN BLANCO
        let correo = $("#email").val().trim();
        let texto = $("#texto").val().trim();

        let obj={
            email: correo,
            mensaje: texto,
        }

        console.log(obj);
        alert("Su sugerencia ha sido enviada!!!")

        $("#email").val("");
        $("#texto").val("");
    })

   
    

});