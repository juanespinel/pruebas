//SE UTILIZA PARA CORRER SOBRE OBJETOS LITERALES

let simpsons = [
    {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
    },
    {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
    }
];

for (const atributo in simpsons){
    console.log(simpsons[atributo])
}