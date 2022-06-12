let notes = [
   {
       "id": "1",
       "content": "This is the first note",
       "date": "2022-05-29 12:45 am",
       "important":true
   },
   {
       "id": "2",
        "content": "This is the second note",
        "date": "2022-05-29 12:45 am",
        "important":false
   },
    {
        "id": "3",
        "content":"This is the hird note",
        "date": "2022-05-29 12:45 am",
        "important":true
    }
]


/*para cargar modulos
require = esta requiere el modulo
una constante es una variable que no puede cambiar
----------------------------------------------------*/
//la constante http, requiere un modulo de http de js
const http = require('http');

/*----------------------------------------------------------------------//
al createServer le pasamos una funcion/parametro que se llama callback 
callback es una funcion que se ejecuta cuando se recibe una peticion/
------------------------------------------------------------------------*/

//cada vez que reciba la peticion(request)/response:para devolver la info que queramos
const app = http.createServer((request, response) => {
    //ejecutará la funcion
    //writeHead(codigo de respuesta, este caso es un ok - 200, objeto de cabecera)
    response.writeHead(200,{ 'Content-Type':'application/json'}); //texto json
    /*
    va recorrer todo el  array para devolver los datos en un string, para que asi se pueda devolver.
    */
    response.end(JSON.stringify(notes)) //devuelve la respuesta
});

/*
el servidor debe de escuchar en algún puerto
*/
const port = 3001;
app.listen(port)
console.log(`Servidor corriendo en el puerto ${port}`);