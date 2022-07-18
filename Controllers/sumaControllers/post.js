//.. -> nivel de carpetas
const suma = (request,response) => {
    console.log(request.body)
    const numeros = request.body
    console.log(numeros.num1)
    response.send('esto es una suma')
}
module.exports = 
    suma

    
