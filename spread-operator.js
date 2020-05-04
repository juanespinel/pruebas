/*
let peliculasAccion = ['Rambo', 'Avengers', 'Spiderman'];
let peliculasComedia = ['Mi pobre Angelito', 'The hangover'];

let todasLasPelis = [...peliculasAccion, ...peliculasComedia];

console.log(todasLasPelis);
*/


let generoComedia = {
    nombreGenero: 'Comedia',
    popularidad: 3,
    netflix: 'si'
};

let miPobreAngelito = {
    titulo: 'Mi pobre angelito',
    ranking: 1,
    duracion: 120,
    ...generoComedia
};

let theHangover = {
    titulo: 'The Hangover',
    ranking: 3,
    duracion: 135,
    ...generoComedia
};

console.log(miPobreAngelito);
console.log(theHangover);
