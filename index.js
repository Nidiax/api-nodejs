
const { response, request } = require('express');
/*para cargar modulos
require = esta requiere el modulo
una constante es una variable que no puede cambiar
----------------------------------------------------*/
//la constante http, requiere un modulo de http de js
//const http = require('http');
const express = require('express');
const app = express();
const suma = require('./controllers/sumaControllers/post.js')

//soportar la request que se le esta indicando  cuando se le pasa
//a un objeto 
app.use(express.json())

const notes = [
    {
        "id": 1,
        "content": "This is the first note",
        "date": "2022-05-29 12:45 am",
        "important":true
    },
    {
        "id": 2,
         "content": "This is the second note",
         "date": "2022-05-29 12:45 am",
         "important":false
    },
    {
         "id": 3,
         "content":"This is the hird note",
         "date": "2022-05-29 12:45 am",
         "important":true
    }
]


/*----------------------------------------------------------------------//
al createServer le pasamos una funcion/parametro que se llama callback 
callback es una funcion que se ejecuta cuando se recibe una peticion/
------------------------------------------------------------------------*/

//cada vez que reciba la peticion(request)/response:para devolver la info que queramos
/*const app = http.createServer((request, response) => {

    
    //ejecutará la funcion
    //writeHead(codigo de respuesta, este caso es un ok - 200, objeto de cabecera)
    response.writeHead(200,{ 'Content-Type':'application/json'}); //texto json
    /*
    va recorrer todo el  array para devolver los datos en un string, para que asi se pueda devolver.
    
    response.end(JSON.stringify(notes)) //devuelve la respuesta
});
*\
/*
el servidor debe de escuchar en algún puerto
*/


app.get('/', (request,response) => {
    response.send('Hello World');
}) 

app.get('/api/notes', (request, response) => {
    //directamente me lo devolvera json
    response.json(notes);
})

app.get('/api/notes/:id', (request, response) => {
    //siempre traera por defecto un string, para que me traiga el id se pone el number
    const id = Number(request.params.id)
    console.log(id)
    const note = notes.find(note => note.id == id);
    console.log(note);

    if (note) {
        response.json(note)
    } else {
        response.status(404).end();
    }
});


app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    notes = notes.filter(notes => notes.id !== id)
    response.status(204).end()    
});

app.post('/api/notes', (request, response) => {
    //en la request como capturar la informacion
    const note = request.body
if(!note.content){
    return response.status(400).json({
        Error: 'note.content is missing :('
    })
}
    //de la nota vamos a recuperar la id de la nota
    const ids = notes.map(note => note.id)
    //recuperar la idea max
    const maxId = Math.max(...ids)
    const newNota = {
        id: maxId + 1,
        content: note.content,
        //si el typeof note.important es diferente a undefined entonces note.important sino sea falso
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }
    //anadir la nota en la lista de notas, cuando la pedidamos estara en la lista
    ///note = [...notes, newNota ]
    //otra forma de hacerlo
    notes = notes.concat(newNota)
    response.json(newNota)
})

app.post('/api/suma', (request, response) => {
    suma(request,response)
})

const port = 3001;
app.listen(port)
console.log(`Servidor corriendo en el puerto ${port}`);


exports.app = app;