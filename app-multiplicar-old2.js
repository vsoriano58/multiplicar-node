/*

const multiplicar = require('./multiplicar/multiplicar')
console.log(multiplicar)

{ crearArchivo: [Function: crearArchivo],
  listarTabla: [Function: listarTabla] }

Nos obliga a utilizar multiplicar.crearArchivo

Para evitarlo utilizamos destructuración:

*/
const {crearArchivo} = require('./multiplicar/multiplicar')

// let base = 5

/*
Queremos hacer por ejemplo: 
node app --base=5
*/

let argv = process.argv
let parametro = argv[2]
let base = parametro.split("=")[1]

// Filtrar y validar todos los argumentos es un trabajo duro
// Utilizaremos yargs

crearArchivo(base)
		.then(archivo => console.log(`Archivo creado: ${ archivo }`))
		.catch(err => {console.log(err)})
