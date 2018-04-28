const fs = require('fs');

//===========================================================
// Esto lista los ficheros y directorios del directorio padre
// Lo hago por por curiosidad
fs.readdir("..", (err, dirs) => {
	console.log(dirs)
})
//===========================================================


let base = 8
let data = ''

for  (let i = 1; i <= 10; i++) {
	data += (`${ base } * ${ i } = ${ base * i}\n`)
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${base}.txt ha sido creado`);
});