let turno2 = "si"




function pedirTurnos() {
    for (let turno = 13; turno <= 20; turno++) {
        while (turno2 === "si") {
        edad = prompt("Ingrese su edad")
         {
            if (edad < 18) {
                let nombre = prompt("Ingrese su nombre para pedir un turno para pediatría");
                let mensaje = `Asiganado turno a las ${turno} horas, Nombre: ${nombre}`;
                alert(mensaje)
                break
            }
            if (edad >= 18) {
                let nombre = prompt("Ingrese su nombre para signar un turno");
                let mensaje = `Asiganado turno a las ${turno} horas Nombre: ${nombre}`;
                alert(mensaje)
                break
            }
            else {
                alert ("Usted no ingreso un número")
                }
            }
        }
        turno2 = prompt("Si quiere pedir otro turno, escribir si").toLowerCase()
    }
}
pedirTurnos()