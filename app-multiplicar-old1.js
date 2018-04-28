/*

const multiplicar = require('./multiplicar/multiplicar')
console.log(multiplicar)

{ crearArchivo: [Function: crearArchivo],
  listarTabla: [Function: listarTabla] }

Nos obliga a utilizar multiplicar.crearArchivo

Para evitarlo utilizamos destructuración:

*/
const {crearArchivo} = require('./multiplicar/multiplicar')

let base = 5 // Poner 'abc' para probar el error

/*
Queremos hacer por ejemplo: 
node app --base=5
*/

crearArchivo(base)
		.then(archivo => console.log(`Archivo creado: ${ archivo }`))
		.catch(err => {console.log(err)})

console.log(process.argv)