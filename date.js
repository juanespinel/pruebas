/*
let fechaActual = new Date(1980, 5, 28);

console.log(fechaActual.toUTCString());
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();
let dia = fechaActual.getDate();
let numerodia = fechaActual.getDay();

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'septiembre', 'noviembre', 'diciembre']

console.log('Es el '+ dia + ' de '+ meses[mes] + ' de ' + anio);
*/

let fecha = new Date ();

fecha.setDate(28);
fecha.setMonth(5);
fecha.setYear(1980);

console.log(fecha);
