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
        


        

        if(!correo || !texto) {
        
            if(!correo){
                alert("Inserte su correo!!!")    
            }else{
                alert("Inserte su comentario!!!")
            }
            
            
        }else{

            console.log(obj);
            alert("Su comentario ha sido enviado!!!")
            $("#email").val("");
            $("#texto").val("");

        }    
       

       
    })

   
    

});