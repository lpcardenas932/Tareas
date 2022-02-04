Actividad 3

//Tarea 31 de enero 2022
var mes = 10
//indicar variable mes por un valor de 10
var nombre = "Luis Pedro Cardenas Ruiz"
//indicar variable del nombre por medio de un string
var carne = 22000149
//indicar variable de carne con un numero int

if (12 == mes || 1== mes || mes == 2){
	console.log ("es invierno")
    #si mes es igual a 12 o 1 o 2 , entonces regresar mensaje "es invierno"
}else if (mes>=3 && mes<= 5){
	console.log ("es primavera")
    #si mes es igual o mayor a 3 y mes es igual o menor a 5, entonces regresar mensaje "Es primavera"
}else if (mes>=6 && mes<= 8){
	console.log ("es verano")
    #si mes es igual o mayor a 6 y mes es igual o menor a 8, entonces regresar mensaje "Es verano"
}else if (mes>=9 && mes<= 11){
	console.log ("es otoño")
    #si mes es igual o mayor a 9 y mes es igual o menor a 11, entonces regresar mensaje "Es otoño"
}
console.log(nombre)
//Imprimir nombre
console.log(carne)
//Imprimir  carne