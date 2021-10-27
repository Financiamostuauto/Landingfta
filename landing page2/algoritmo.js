// Asignar benificios
// Variables: Sueldo, Edad
// Condiciones:
// Si el sueldo es menor a 500000 entonces alerta mensaje "Ud. es elegible para el beneficio"
// Si el sueldo es mayor a 500000 y la edad es mayor a 50 entonces alerta mensaje "Ud. es elegible para el beneficio"
// Si eld sueldo es mayor a 500000 y la edad es menor a 50 entonces alerta mensaje "Ud. NO es elegible para el beneficio"


function mostrar_mensaje(mensaje) {
    alert(mensaje)
}
function calcular_beneficio(sueldo, edad) {


    if (sueldo < 500000) {
        mostrar_mensaje("Ud.es elegido para el beneficio")
    }
    else {

        if (edad > 50) {
            mostrar_mensaje("Ud. es elegido para el beneficio")
        }
        else {
            mostrar_mensaje("Ud. no es el beneficiario")
        }
    }

}
$('form').submit((e) => {

    e.preventDefault()

    const sueldo = $("#sueldo").val()
    const edad = $("#edad").val()

    //console.log(sueldo, edad)
    calcular_beneficio(sueldo,edad)


})