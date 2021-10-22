$("#form_registro").validate({
    rules:{
        nombre:{
            required:true,
            minlength:3,
            maxlength:30,
        },
        apellidos:{
            required:true,
            minlength:3,
            maxlength:40,
        
        },
        email1:{
            required:true,
            
        },
        password:{
            required:true,
            minlength:6
        },
        password2:{
            required:true,
            equalTo:"#password"
        },
        terminos:{
            required:true
        }
    },
    messages:{
        nombre:{
            minlength:"Ingrese un nombre valido ",
            required:"ingrese un nombre"
        },
        apellidos:{
            required:"ingrese sus apellidos",
            minlength:"ingrese apellidos correctos"
        },
        email1:{
            required:"ingrese su email",
            email:"formato de email incorrecto"
        },
        password:{
            required:"ingrese una contraseña",
            minlength:"su contraseña es muy corta"

        },
        password2:{
            required:"ingrese de nuevo su contraseña",
            equalTo:"contraseña incorrecta"
        },
        terminos:{
            required:"acepte los terminos y condiciones",
        }
    }

})

$("#registrar").click(function(){
    if($("#form_registro").valid()==false){
        alert("porfavor Completar formulario")
        return;
    }
    if($("#form_registro").valid()==true){
        alert('bienvenido al team ValhallaGeek Disfruta de tu estancia  ');
        return;
        
    }
    
    let nombre = $("#nombre").val()
    let apellidos = $("#apellidos").val()
    let email1 = $("#email1").val()
    let password = $("#password").val()
    let password2 = $("#password2").val()
    let terminos = $("#terminos").is(":checked")
    
})