$('form').submit((e) => {

    e.preventDefault()

    console.log('Hola!');




    const nombre = $('#nombre').val()
    const apellido = $('#apellido').val()
    const rut = $('#rut').val()
    const fono = $('#fono').val()
    const email = $('#email').val()
    const auto = $('input[name="auto"]').val()
    const precio = $('#precio').val()
    const pie = $('#pie').val()
    const financiamiento = $('#financiamiento').val()
    const renta = $('#renta').val()
    const antiguedad = $('#antiguedad').val()
    const actividad = $('#actividad').val()
    const comentarios = $('#comentarios').val()


    if(nombre ==""){
        alert("El nombre no puede estar vacío")
    }

    if(apellido ==""){
        alert("El apellido no puede estar vacío")
    }

    if(email ==""){
        alert("El email no puede estar vacío")
    }

    
    if(comentarios ==""){
        alert("Los comentarios no puede estar vacío")
    }

    if(nombre !="" && apellido !="" && email !="" && comentarios !=""){
        alert("Tu formulario está correcto")

    }


    const formValue = {
        "nombre": nombre,
        "apellido": apellido,
        "rut": rut,
        "fono": fono,
        "email": email,
        "auto": auto,
        "precio": precio,
        "pie": pie,
        "financiamiento": financiamiento,
        "renta": renta,
        "antiguedad": antiguedad,
        "actividad": actividad,
        "comentarios": comentarios
    }
    console.log(formValue)

})

