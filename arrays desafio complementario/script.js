class Comidas{
    constructor(nombre,precio,cantidad){
        this.nombre=nombre
        this.precio=precio
        this.cantidad=cantidad

    }
}
const comida1 = new Comidas(prompt("ingresa el nombre de la comida"), parseInt(prompt("ingresa el precio")), parseInt(prompt ("ingresa la cantidad")))
const comida2 = new Comidas(prompt("ingresa el nombre de la comida"), parseInt(prompt("ingresa el precio")), parseInt(prompt ("ingresa la cantidad")))
const comida3 = new Comidas(prompt("ingresa el nombre de la comida"), parseInt(prompt("ingresa el precio")), parseInt(prompt ("ingresa la cantidad")))
const comida4 = new Comidas(prompt("ingresa el nombre de la comida"), parseInt(prompt("ingresa el precio")), parseInt(prompt ("ingresa la cantidad")))
const comida5 = new Comidas(prompt("ingresa el nombre de la comida"), parseInt(prompt("ingresa el precio")), parseInt(prompt ("ingresa la cantidad")))

let arrayComidas=[comida1,comida2,comida3,comida4,comida5]

for(let comidasEnarray of arrayComidas){
    console.log(comidasEnarray)
}
console.log(comidasEnarray.sort((comidaA, comidaB)=>comidaA.precio-comidaB.precio))
