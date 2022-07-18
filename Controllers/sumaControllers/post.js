//.. -> nivel de carpetas
const suma = (request,response) => {
    /*console.log(request.body)
    const numeros = request.body
    console.log(numeros.num1)
    response.send('esto es una suma')
    */
    let numero = request.body 
    numero = numero.num1 + numero.num2
    console.log(numero)
    response.send(`La suma es igual ${numero}`)
    //response.send('te estoy mostrado en resultado')
}

//me exporta la funcion que esta en el post
module.exports = 
    suma

    
