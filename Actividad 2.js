//Tarea 31 de enero 2022
var mes = 10
var nombre = "Luis Pedro Cardenas Ruiz"
var carne = 22000149
var input = prompt("actividad 2")

if (12 == mes || 1== mes || mes == 2){
	console.log ("es invierno")
}else if (mes>=3 && mes<= 5){
	console.log ("es primavera")
}else if (mes>=6 && mes<= 8){
	console.log ("es verano")
}else if (mes>=9 && mes<= 11){
	console.log ("es verano")
}
console.log(nombre)
console.log(carne)
console.log(input)

switch (mes) {
    case 1:
        prompt("opcion 1")
        break;

    default:
        console.log("ninguna opcion valida")
        break;
}