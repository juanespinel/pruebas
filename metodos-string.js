/*
function menciona (texto, palabra){
    return texto.indexOf(palabra) >= 0;
}

console.log(menciona('Hola soy Juan', 'jose'))

//console.log('hola soy juan'.indexOf("jose"))
*/

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  estudiantes.push({ nombre: 'juan', promedio: 5, curso: 'NodeJS' })
  

  console.log(estudiantes)

  /*
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      
    }
  }
  */