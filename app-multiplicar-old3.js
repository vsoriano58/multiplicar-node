// Vamos a utilizar yargs
const argv = require('yargs')
								.command('listar', 'Imprime la tabla de multiplicar', {
										base: {
											demand: true,
											alias: 'b'
										},
										limite: {
											alias: 'l',
											default: 10
										}
								})
								.help()
								.argv


const {crearArchivo} = require('./multiplicar/multiplicar')

console.log(argv.base)	// 5
console.log(argv.limite)


// crearArchivo(base)
// 		.then(archivo => console.log(`Archivo creado: ${ archivo }`))
// 		.catch(err => {console.log(err)})
