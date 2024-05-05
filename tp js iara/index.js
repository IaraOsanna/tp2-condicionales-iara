//1)
let Numero1 = Number(prompt)(("Escribe un numero"))
let Numero2 = Number(prompt)(("Escribe otro numero"))
if (Numero1 < Numero2) {
    alert(Numero1 + "Es mayor a" + Numero2)
} else {
    alert(Numero2 + "Es mayor a" + Numero1)
}

//2) 
let Numero = Number(prompt)(("Escribe un numero"))
if ((Numero>=1) || (Numero<=0)) {
    alert(Numero + "Tu numero es positivo") || alert("Tu numero es negativo")
} else {
    alert("Tu numero es cero")
}
//3)
let Numero3 = Number(prompt)(("Pon un numero cualquiera"))
let resultado = Numero3/2
if (resultado == 0) {
    alert("Tu numero es par")
} else {
    alert("Tu numero es impar")
}
//4)
let EdadUsuario = prompt("Ingrese su edad")
if (EdadUsuario >= 18) {
    alert("Eres mayor de edad")
} else {
    alert("Eres menor")
}
//5)
let Dia = Number(prompt)("Pon una fecha del 1 al 7")
if (Dia == 1) {
    alert("Es Lunes")
} else if (Dia == 2) {
    alert("Es Martes")
}
else if (Dia == 3) {
    alert("Es Miercoles")
} else if (Dia == 4) {
    alert("Es Jueves")
} else if (Dia == 5) {
    alert("Es Viernes")
} else if (Dia == 6) {
    alert("Es Sabado")
} else if (Dia == 7) {
    alert("Es Domingo")
}


//6)
let numero4 = prompt("Ingresa un numero")
let resultado1 = numero4/3
let resultado2 = numero4/5
if ((resultado1 == 0) && (resultado2 == 0)) {
    alert("Tu numero es divisible por 3 y por 5")
} else {
    alert("Tu numero no es divisible por 3 ni por 5")
} 
//7)
let Numero5 = promtp("Ingresa un numero cualquiera")
if ((Numero5>= 1) || (Numero5<=0) && (Numero5< 100)) {
    alert("Tu numero es par y menor a 100") 
} else {
    alert("Tu numero es impar y menor a 100")
}
//8)
let Edad = prompt("Ingresa tu edad")
let Genero = prompt("Ingresa tu genero")
if ((Edad == 65) && (Genero == "Hombre")) {
    alert("Ya podes jubilarte")
} else {
    alert("Aun no podes jubilarte")
} if ((Edad == 60) && (Genero == "Mujer")) {
    alert("Ya podes jubilarte")
} else {
    alert("Aun no podes jubilarte")
}
//8) 
let numero6 = Number(prompt)(("Escribe un numero"))
let numero7 = Number(prompt)(("Escribe un numero"))
let numero8 = Number(prompt)(("Escribe un numero"))
if (numero6 == numero7) {
    alert(numero6 + "y" + numero7 + "Son iguales" )
} else if (numero6 == numero8) {
    alert(numero6 + "y" + numero8 + "Son iguales")
} else if ( numero7 == numero8) {
    alert(numero7 + "y" + numero8 + "Son iguales")
}
//9)
let numero9 = Number(prompt)("Ingrese un numero")
let resultado3 = numero9/4
let resultado4 = numero9/6
let resultado5 = numero9/9
let resultado6 = numero9/12
if ((resultado3 == 0) && (resultado4 == 0) && (resultado5 == 0) && (resultado6 == 0)) {
    alert("Tu numero es divisible por 4, 6, 9 y 12")
} else {
    alert("Tu numero no es divisible por 4, 6, 9 y 12")
}
//10)
let edad1 = Number(prompt)(("Escribe una edad"))
let edad2 = Number(prompt)(("Escribe una edad"))
let edad3 = Number(prompt)(("Escribe una edad"))
if (edad1 >= 18) {
    alert(edad1 + "Es mayor de edad")
} else if (edad2 >= 18) {
alert(edad2 + "Es mayor de edad")
} else if (edad3 >= 18) {
    alert(edad3 + "Es mayor de edad")
}