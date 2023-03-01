
alert("Bienvenidos a la calculadora, si eres mayor de 18 años podras utilizarla. ")

let datosUsuario = [prompt("ingresa tu nombre."), prompt("ingresa tu apellido."), parseFloat(prompt("el año que naciste."))]
let anioUsuario = 2023 - datosUsuario[2]

if (anioUsuario >= 18) {

    alert("Bienvenido " + datosUsuario[0]+ " " + datosUsuario[1] + " tu edad es : " + anioUsuario + " puedes continuar ")

    while (anioUsuario >= 18) {



        let operacion = prompt("Que deseas hacer: \n 1.+ \n 2.- \n 3.* \n 4. / ")
        let primerNumero = parseInt(prompt("Ingrese el primer numero."))
        let segundoNumero = parseInt(prompt("Ingrese el segundo numero."))



        const calculadoraSimple = function (primerNumero, segundoNumero, operacion) {
            switch (operacion) {
                case "1":
                    return primerNumero + segundoNumero;
                    break;
                case "2":
                    return primerNumero - segundoNumero;
                    break;
                case "3":
                    return primerNumero * segundoNumero;
                    break;
                case "4":
                    return primerNumero / segundoNumero;
                    break;

                default:
                    return 0;
                    break
            }
        }


        alert("el resultado es " + calculadoraSimple(primerNumero, segundoNumero, operacion))





        let Fin = prompt("escribe: 'FIN' para terminar, De lo contrario apreta aceptar")

        if (Fin == "FIN") {
            break

        } else {
            alert("Bienvenidos a la calculadora")
        }

    }



} else { document.write("No puedes continuar Preciona F5 para volver a intentarlo.") }

document.write("Hasta luego gracias.")



