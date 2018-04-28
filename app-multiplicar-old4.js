//Vamos a utilizar yargs
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
								.command('crear', 'Crea fichero con disco de la tabla de multiplicar', {
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

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')

// console.log(argv.base)
// console.log(argv.limite)

let comando = argv._[0]

console.log(argv.base)

switch(comando) {
	case 'listar':
		listarTabla( argv.base, argv.limite)
	break

	case 'crear':
		crearArchivo(argv.base)
				.then(archivo => console.log(`Archivo creado: ${ archivo }`))
				.catch(err => {console.log(err)})
	break

	default:
		console.log('Comando no reconocido')
}



