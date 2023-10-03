// fetch es un funcion para obtener recursos 
// nos retorna una respuesta
// ten catch

console.log ('Inicia Peticion');
fetch ('http://127.0.0.1:5500/respuesta.txt')
    .then(result => result.text())
    .then(datos => console.log(datos));

    console.log ('Inicia Peticion 1');
fetch ('http://127.0.0.1:5500/respuesta.json')
    .then(result => result.text())
    .then(datos => console.log(datos));