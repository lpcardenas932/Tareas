
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
//son condiciones fijas que se multiplicaran segun el numero ingresado en cada bucle.
var edad_18 = 0.1;// 10%
var edad_25 = 0.2;// 20%
var edad_50 = 0.3;// 30%

var casado_18 = 0.1;// 10%
var casado_25 = 0.2;// 20%
var casado_50 = 0.3;// 30%

var hijos_recargo = 0.2;// 20%
var recargo_propiedad = 0.35;//35% de la cotización
var recargo_propiedad_salario = 0.05;//5% sobre salario del asegurado




//Extras
var salir = ""

while (salir != "salir") { //Mientras no ponga salir al final de la ejecucción del bloque, este seguira corriendo el bloque de codigo
//Recargo.
//Precio final
//Se ingresan estas variables aqui, asi cada vez que se repite el bucle del codigo, se resetea a 0 su valor. 
  var recargo = 0
  var recargo_total = 0
  var precio_final = 0

  //Mensajes de alerta para ingresar datos 
  var nombre = prompt("Ingrese su nombre, por favor")
  var edad = prompt("¿Cuantos años tiene?", "Ingrese solamente números ") 
  
  //verificar primero si la persona a aseguar es mayor de edad, si no es mayor, no deja asegurarlo y finaliza

  //convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad)
  var edad_conyuge_numero = 0


  if (edad_numero >= 18) {
    var casado = prompt("¿Está casado actualmente?", "Si / No")
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "ingreso numero")
    }

    //convirtiendo la edad del cónyuge si se esta casado/a
    if ("SI" == casado.toUpperCase()) {
      edad_conyuge_numero = parseInt(edad_conyuge)
    }

    var hijos = prompt("¿Tiene hijos o hijas?", "Si / No")
    //Comprobamos la cantidad de hijos solamente si los tienen
    var cantidad_hijos_numero = 0

    /**
  * 1. convierta la cantidad de hijos a numero
  */
    if ("SI" == hijos.toUpperCase()) {
      cantidad_hijos = prompt("Cuantos hijos tiene?", "ingrese numero")

      cantidad_hijos_numero = parseInt(cantidad_hijos)
    }
    var cantidad_hijos = parseInt(hijos)

    if (edad_numero >= 18 && edad_numero < 25) {
      //Calculamos el recargo en base a la edad entre 18 a 24 años
      recargo = precio_base * edad_18
      //Sumamos todos los recargos que hemos obtenido
      recargo_total = recargo_total + recargo
    }
    else if (edad_numero >= 25 && edad_numero < 50) {
      //Calculamos el recargo en base a la edad de entre 25 a 49 años
      recargo = precio_base * edad_25
    }
    else if (edad_numero >= 50) {
      //Calculamos el recargo en base a la edad de 50 años o más
      recargo = precio_base * edad_50
    }
    /** 
     * 2. Recargo por la edad del conyuge
     */
    if ("SI" == casado.toUpperCase()) {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        //Calculamos el recargo en base a la edad entre 18 a 24 años
        recargo = precio_base * edad_18
        //Sumamos todos los recargos que hemos obtenido
        recargo_total = recargo_total + recargo
        //Multiplicamos recargo por valor fijo para obtener recargo total
      }
      else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        //Calculamos el recargo en base a la edad de entre 25 a 49 años
        recargo = precio_base * edad_25
        //Multiplicamos recargo por valor fijo para obtener recargo total

        recargo_total = recargo_total + recargo
      }
      else if (edad_conyuge_numero >= 50) {
        //Calculamos el recargo en base a la edad de 50 años o más
        recargo = precio_base * edad_50
        //Multiplicamos recargo por valor fijo para obtener recargo total

        recargo_total = recargo_total + recargo //Aquí debe calcular el recargo total basado en las respuestas ingresadas
      }
    }
    /**
     * 3. Recargo por la cantidad de hijos 
     */
    if ("SI" == hijos.toUpperCase()) {
      recargo = hijos_recargo * precio_base * cantidad_hijos_numero

      recargo_total = recargo_total + recargo //Aquí debe calcular el recargo total basado en las respuestas ingresadas
    }

    var cantidad_hijos = parseInt(hijos)

    var propiedad = prompt("¿Tiene propiedades?", "Si / No")

    if ("SI" == propiedad.toUpperCase()) {
      cantidad_propiedad = prompt("¿Cuantas propiedades tiene?", "Ingrese numero")

      cantidad_propiedad_numero = parseInt(cantidad_propiedad)

      if ("SI" == propiedad.toUpperCase()) {
        if (cantidad_propiedad == 1) {
          recargo = (hijos_recargo * precio_base * cantidad_hijos_numero) * recargo_propiedad + (hijos_recargo * precio_base * cantidad_hijos_numero)
          //Este recargo menciona que se debe multiplicar por 35% lo que saldria de la cotizacion de todo lo ingresado anteriormente y sumarlo al mismo.

          recargo_total = recargo_total + recargo
        }
        else if ("SI" == cantidad_propiedad == 2) {
          recargo = (hijos_recargo * precio_base * cantidad_hijos_numero) * recargo_propiedad + (hijos_recargo * precio_base * cantidad_hijos_numero) + (recargo_propiedad_salario * precio_base)
            //Este recargo menciona que se debe multiplicar por 35% lo que saldria de la cotizacion de todo lo ingresado anteriormente y sumarlo al mismo.

          recargo_total = recargo_total + recargo //Aquí debe calcular el recargo total basado en las respuestas ingresadas
        }
      }
    }
    precio_final = precio_base + recargo_total
    //Resultado
    alert("Para el asegurado " + nombre) //imprimir nombre ingresado
    alert("El recargo total sera de: " + recargo_total) //imprimir recargo acumulado

    alert("El precio sera de: " + precio_final) //imprimir total de asgurado
  } else {

    alert("No podemos asegurarlo, debe ser mayor de edad")
  }
  //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
  salir = prompt("Desea salir")
}
