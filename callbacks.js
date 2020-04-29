/*
let doble = numero => numero * 2;
let triple = numero => numero * 3;

let apply = (numero, operacion) => operacion(numero);

console.log(apply(2,doble))
*/


function agregarHttp(url) {
    return 'http://'+url;
}

function procesar(arraySites, funcion) {
    let array = [];
    for(let i = 0; i < arraySites.length; i++) {
        array.push(funcion(arraySites[i]))
     }
     return array
}

console.log( procesar (['google.com.ar', 'yahoo.com.ar'], agregarHttp))
