//SE UTILIZA PARA CORRER SOBRE OBJETOS LITERALES

let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}

for (const atributo in bart){
    console.log(bart[atributo])
}