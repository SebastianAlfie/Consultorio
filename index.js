let turno2 = "si"

function pedirTurnos() {
    for (let turno = 13; turno <= 20; turno++) {
        class Persona {
            constructor(nombre, edad, email) {
                this.nombre = nombre;
                this.edad = edad;
                this.email = email;
            }
        }

        const persona1 = new Persona(prompt("¿Cuál es su nombre"), parseInt(prompt("¿Qué edad tiene?")), prompt("¿Cuál es su email?"))

        while (turno2 === "si") {
            edad = persona1.edad
            {
                if (edad < 18) {
                    let nombre = persona1.nombre;
                    let mensaje = `Asiganado turno para pediatria a las ${turno} horas, Nombre: ${nombre}, le enviaremos un email al siguiente correo electronico ${persona1.email}`;
                    alert(mensaje)
                    break;
                }
                if (edad >= 18) {
                    let nombre = persona1.nombre;
                    let mensaje = `Asiganado turno a las ${turno} horas, Nombre: ${nombre}, le enviaremos un email al siguiente correo electronico ${persona1.email}`;
                    alert(mensaje)
                    break;
                }
                else {
                    alert("Usted no ingreso un número")
                    break;
                }
            }
        }
        turno2 = prompt("Si quiere pedir otro turno, escribir si para continuar o no para salir").toLowerCase()
        if (turno2 === "no") {
            break;
        }

    }
}
pedirTurnos()
